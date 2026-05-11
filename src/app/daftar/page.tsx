'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Heart, ArrowLeft, User, Stethoscope } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export default function DaftarPage() {
  const [step, setStep] = useState(1)
  const [role, setRole] = useState<'client' | 'caregiver'>('client')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName, role, phone }
      }
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/dashboard')
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FCFF 50%, #fff 100%)' }}>
      <div className="w-full max-w-lg">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-8 transition-colors">
          <ArrowLeft size={16} /> Kembali ke Beranda
        </Link>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="800.000000pt" height="800.000000pt" viewBox="150 150 500 500" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,800.000000) scale(0.100000,-0.100000)" fill="#00BFFF" stroke="none"> <path d="M4890 5379 c-19 -6 -66 -17 -104 -25 -39 -8 -77 -21 -86 -29 -9 -8 -21 -15 -27 -15 -17 0 -116 -53 -143 -77 -14 -12 -44 -37 -67 -56 -95 -79 -243 -282 -243 -334 0 -10 -8 -30 -17 -43 -10 -14 -21 -54 -24 -90 -4 -36 -11 -93 -15 -128 -9 -84 12 -251 42 -324 13 -32 24 -66 24 -76 0 -11 7 -25 15 -32 8 -7 15 -18 15 -25 0 -6 9 -20 20 -30 11 -10 20 -23 20 -30 0 -7 10 -23 23 -37 12 -14 43 -50 70 -81 68 -80 255 -197 315 -197 38 0 65 -21 56 -43 -8 -21 -54 -47 -83 -47 -11 0 -22 -4 -26 -10 -3 -5 -36 -24 -73 -42 -37 -18 -85 -47 -108 -65 -23 -18 -44 -33 -48 -33 -8 0 -34 -20 -263 -200 -84 -66 -154 -120 -157 -120 -3 0 -49 -29 -102 -65 -54 -36 -101 -65 -106 -65 -5 0 -22 -10 -38 -21 -35 -27 -193 -24 -245 5 -16 8 -57 27 -90 42 -116 50 -267 132 -285 155 -3 3 -16 12 -29 19 -27 14 -214 152 -246 181 -53 49 -79 69 -87 69 -6 0 -21 9 -35 20 -51 40 -124 28 -183 -28 -58 -56 -104 -136 -96 -167 11 -42 273 -290 452 -429 60 -47 121 -94 136 -105 14 -12 30 -21 35 -21 5 0 32 -16 62 -35 29 -19 57 -35 62 -35 6 0 31 -11 57 -25 26 -14 56 -25 67 -25 11 0 30 -7 41 -15 12 -8 54 -18 95 -24 41 -5 106 -15 146 -22 76 -14 247 14 283 46 8 7 29 16 47 20 17 3 37 12 43 20 6 7 22 16 35 19 26 7 211 129 294 195 29 22 56 41 60 41 3 0 27 20 53 45 26 25 65 57 86 72 21 16 65 48 98 73 99 75 206 150 279 195 55 34 159 32 274 -4 56 -18 103 -36 106 -42 4 -5 14 -9 23 -9 10 0 33 -8 52 -19 19 -10 46 -22 58 -26 13 -4 44 -21 69 -38 25 -18 69 -48 98 -67 30 -19 78 -53 107 -76 29 -22 89 -67 133 -100 44 -32 82 -61 85 -64 52 -52 138 -74 171 -44 56 53 69 69 94 120 41 84 33 134 -31 190 -27 24 -57 50 -66 58 -10 9 -68 54 -130 100 -62 47 -145 110 -184 140 -39 30 -82 60 -97 67 -15 7 -27 15 -27 18 0 7 -126 72 -211 109 -25 11 -67 23 -93 27 -76 12 -74 85 2 85 118 0 407 258 465 415 8 22 21 56 27 75 7 19 21 56 32 82 27 70 26 314 -3 418 -44 160 -102 260 -225 385 -121 125 -283 225 -363 225 -18 0 -46 7 -64 17 -38 20 -252 28 -307 12z m340 -351 c127 -67 251 -188 275 -269 4 -13 14 -35 24 -49 13 -20 16 -53 16 -175 0 -168 4 -155 -91 -315 -50 -86 -157 -165 -276 -205 -98 -33 -258 -36 -315 -5 -21 11 -43 20 -49 20 -19 0 -97 47 -138 84 -21 20 -42 37 -45 38 -3 2 -20 21 -37 43 -140 184 -154 435 -34 617 68 103 176 191 280 228 107 39 306 32 390 -12z"/> <path d="M2265 5375 c-5 -1 -44 -8 -85 -15 -79 -14 -133 -40 -227 -112 -29 -22 -53 -46 -53 -53 0 -6 -9 -20 -20 -30 -11 -10 -20 -23 -20 -30 0 -7 -9 -20 -20 -30 -11 -10 -20 -24 -20 -31 0 -7 -10 -32 -21 -54 -32 -62 -32 -341 0 -393 11 -19 21 -43 22 -53 0 -21 34 -82 93 -169 22 -32 115 -135 206 -229 92 -94 189 -196 216 -227 27 -30 66 -74 86 -97 20 -23 52 -68 72 -100 85 -139 165 -165 244 -76 23 27 58 72 77 100 32 47 55 75 229 264 82 89 140 146 153 151 35 14 219 252 259 336 102 213 93 448 -25 618 -39 57 -136 151 -166 161 -11 4 -31 15 -44 25 -13 11 -33 19 -45 19 -11 0 -52 7 -89 16 -63 16 -72 16 -127 0 -33 -9 -70 -16 -84 -16 -13 0 -34 -8 -47 -18 -13 -10 -35 -23 -49 -29 -14 -6 -46 -29 -72 -52 -58 -52 -78 -51 -129 1 -43 45 -138 98 -174 98 -12 0 -42 7 -65 15 -42 15 -55 17 -75 10z m121 -343 c38 -31 50 -48 94 -144 86 -188 242 -190 330 -4 72 150 124 192 230 184 74 -5 117 -41 162 -136 32 -67 33 -168 3 -217 -7 -11 -16 -31 -20 -44 -15 -51 -96 -151 -245 -300 -141 -142 -187 -192 -260 -281 -32 -40 -41 -38 -81 18 -18 26 -109 124 -201 217 -163 166 -248 263 -248 283 0 5 -9 20 -19 34 -11 13 -23 36 -26 51 -4 14 -13 31 -21 38 -22 19 -19 141 6 186 11 21 20 44 20 51 0 7 7 15 15 18 8 3 17 14 20 24 21 67 168 80 241 22z"/> </g> </svg>
            </div>
            <div>
              <span className="text-xl font-extrabold" style={{ fontFamily: 'Nunito, sans-serif' }}>siaprawat</span>
              <div className="text-xs text-sky-500 -mt-0.5 font-semibold">Ready to Take Care.</div>
            </div>
          </div>

          <h1 className="text-2xl font-black text-gray-900 mb-1" style={{ fontFamily: 'Nunito, sans-serif' }}>Buat Akun Baru</h1>
          <p className="text-gray-500 text-sm mb-6">Bergabunglah dengan ribuan keluarga yang mempercayai Siaprawat</p>

          {/* Role selector */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              onClick={() => setRole('client')}
              className={`p-4 rounded-2xl border-2 text-left transition-all ${role === 'client' ? 'border-sky-400 bg-sky-50' : 'border-gray-200 hover:border-gray-300'}`}
            >
              <User size={20} className={role === 'client' ? 'text-sky-500' : 'text-gray-400'} />
              <div className={`text-sm font-bold mt-2 ${role === 'client' ? 'text-sky-700' : 'text-gray-700'}`}>Klien / Keluarga</div>
              <div className="text-xs text-gray-500 mt-0.5">Butuh perawat untuk keluarga</div>
            </button>
            <button
              type="button"
              onClick={() => setRole('caregiver')}
              className={`p-4 rounded-2xl border-2 text-left transition-all ${role === 'caregiver' ? 'border-sky-400 bg-sky-50' : 'border-gray-200 hover:border-gray-300'}`}
            >
              <Stethoscope size={20} className={role === 'caregiver' ? 'text-sky-500' : 'text-gray-400'} />
              <div className={`text-sm font-bold mt-2 ${role === 'caregiver' ? 'text-sky-700' : 'text-gray-700'}`}>Perawat / Nakes</div>
              <div className="text-xs text-gray-500 mt-0.5">Ingin bergabung sebagai perawat</div>
            </button>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap</label>
              <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} className="input-field" placeholder="Nama lengkap sesuai KTP" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Nomor WhatsApp</label>
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} className="input-field" placeholder="08xx-xxxx-xxxx" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="input-field" placeholder="nama@email.com" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="input-field pr-12"
                  placeholder="Min. 8 karakter"
                  minLength={8}
                  required
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <p className="text-xs text-gray-400">
              Dengan mendaftar, Anda menyetujui <Link href="/syarat" className="text-sky-500">Syarat & Ketentuan</Link> dan <Link href="/privasi" className="text-sky-500">Kebijakan Privasi</Link> kami.
            </p>
            <button type="submit" disabled={loading} className="btn-primary w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? 'Mendaftar...' : 'Daftar Sekarang'}
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm">
              Sudah punya akun?{' '}
              <Link href="/masuk" className="text-sky-500 font-semibold hover:text-sky-600">Masuk</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
