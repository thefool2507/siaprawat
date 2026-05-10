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
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 sky-gradient rounded-xl flex items-center justify-center">
              <Heart size={20} className="text-white fill-white" />
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
