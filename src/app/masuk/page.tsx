'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Heart, ArrowLeft } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export default function MasukPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError('Email atau password salah. Silakan coba lagi.')
      setLoading(false)
    } else {
      router.push('/dashboard')
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen flex" style={{ background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FCFF 50%, #fff 100%)' }}>
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 sky-gradient items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white" />
          <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-white" />
          <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white" />
        </div>
        <div className="relative z-10 text-white text-center">
          <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Heart size={36} className="fill-white text-white" />
          </div>
          <h2 className="text-4xl font-black mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>siaprawat</h2>
          <p className="text-sky-100 text-lg mb-8">Ready to Take Care.</p>
          <div className="space-y-4 text-left max-w-sm mx-auto">
            {['Perawat terlatih & bersertifikat', 'Pemesanan mudah dan cepat', 'Layanan 24 jam sehari', 'Harga transparan & terjangkau'].map(item => (
              <div key={item} className="flex items-center gap-3 bg-white/15 rounded-xl px-4 py-3">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-8 transition-colors">
            <ArrowLeft size={16} /> Kembali ke Beranda
          </Link>

          <div className="flex items-center gap-3 mb-8 lg:hidden">
            <div className="w-10 h-10 sky-gradient rounded-xl flex items-center justify-center">
              <Heart size={20} className="text-white fill-white" />
            </div>
            <span className="text-xl font-extrabold" style={{ fontFamily: 'Nunito, sans-serif' }}>siaprawat</span>
          </div>

          <h1 className="text-3xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>Selamat Datang</h1>
          <p className="text-gray-500 mb-8">Masuk ke akun Siaprawat Anda</p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="input-field"
                placeholder="nama@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="input-field pr-12"
                  placeholder="••••••••"
                  required
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <Link href="/lupa-password" className="text-sm text-sky-500 hover:text-sky-600 font-medium">
                Lupa password?
              </Link>
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full py-4 text-base mt-2 disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? 'Memproses...' : 'Masuk'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Belum punya akun?{' '}
              <Link href="/daftar" className="text-sky-500 font-semibold hover:text-sky-600">
                Daftar gratis
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
