'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { createClient } from '@/lib/supabase/client'
import type { Profile } from '@/lib/supabase/types'
import { User, Phone, MapPin, Mail, Save, CheckCircle, Lock } from 'lucide-react'

export default function ProfilPage() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [tab, setTab] = useState<'profil' | 'keamanan'>('profil')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [pwError, setPwError] = useState('')
  const [pwSuccess, setPwSuccess] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/masuk'); return }
      setEmail(user.email || '')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data } = await (supabase.from('profiles') as any).select('*').eq('id', user.id).single()
      if (data) {
        setProfile(data)
        setFullName(data.full_name)
        setPhone(data.phone || '')
        setAddress(data.address || '')
        setCity(data.city || '')
        setProvince(data.province || '')
      }
      setLoading(false)
    }
    load()
  }, [])

  const handleSave = async () => {
    setSaving(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (supabase.from('profiles') as any).update({ full_name: fullName, phone, address, city, province, updated_at: new Date().toISOString() }).eq('id', user.id)
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const handleChangePassword = async () => {
    setPwError('')
    if (newPassword !== confirmPassword) { setPwError('Password tidak cocok'); return }
    if (newPassword.length < 8) { setPwError('Password minimal 8 karakter'); return }
    const { error } = await supabase.auth.updateUser({ password: newPassword })
    if (error) { setPwError(error.message) } else { setPwSuccess(true); setNewPassword(''); setConfirmPassword('') }
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="animate-spin w-10 h-10 border-2 border-sky-400 border-t-transparent rounded-full" />
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen sky-mesh pt-20 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-8 pb-6">
            <h1 className="text-3xl font-black text-gray-900" style={{ fontFamily: 'Nunito, sans-serif' }}>Profil Saya</h1>
            <p className="text-gray-500 mt-1">Kelola informasi akun dan keamanan Anda</p>
          </div>

          {/* Avatar */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 mb-6 flex items-center gap-5">
            <div className="w-20 h-20 sky-gradient rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-lg">
              {fullName?.charAt(0)}
            </div>
            <div>
              <div className="text-xl font-black text-gray-900">{fullName}</div>
              <div className="text-sm text-gray-500 mt-0.5 flex items-center gap-1.5"><Mail size={13} /> {email}</div>
              <div className="mt-2">
                <span className="badge bg-sky-100 text-sky-700 capitalize">{profile?.role === 'client' ? 'Klien' : profile?.role === 'caregiver' ? 'Perawat' : 'Admin'}</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-6">
            {(['profil', 'keamanan'] as const).map(t => (
              <button key={t} onClick={() => setTab(t)} className={`flex-1 py-2.5 rounded-lg text-sm font-semibold capitalize transition-all ${tab === t ? 'bg-white text-sky-600 shadow-sm' : 'text-gray-500'}`}>
                {t === 'profil' ? 'Informasi Profil' : 'Keamanan'}
              </button>
            ))}
          </div>

          {tab === 'profil' && (
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Informasi Pribadi</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1.5">
                    <User size={13} /> Nama Lengkap
                  </label>
                  <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1.5">
                    <Mail size={13} /> Email
                  </label>
                  <input type="email" value={email} disabled className="input-field bg-gray-50 text-gray-400 cursor-not-allowed" />
                  <p className="text-xs text-gray-400 mt-1">Email tidak dapat diubah</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1.5">
                    <Phone size={13} /> Nomor WhatsApp
                  </label>
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} className="input-field" placeholder="08xx-xxxx-xxxx" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1.5">
                    <MapPin size={13} /> Alamat
                  </label>
                  <textarea value={address} onChange={e => setAddress(e.target.value)} className="input-field min-h-[80px] resize-none" placeholder="Alamat lengkap Anda" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Kota / Kabupaten</label>
                    <input type="text" value={city} onChange={e => setCity(e.target.value)} className="input-field" placeholder="Jember" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Provinsi</label>
                    <input type="text" value={province} onChange={e => setProvince(e.target.value)} className="input-field" placeholder="Jawa Timur" />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <button onClick={handleSave} disabled={saving} className="btn-primary flex items-center gap-2 disabled:opacity-60">
                  {saving ? 'Menyimpan...' : <><Save size={16} /> Simpan Perubahan</>}
                </button>
                {saved && (
                  <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                    <CheckCircle size={16} /> Tersimpan!
                  </div>
                )}
              </div>
            </div>
          )}

          {tab === 'keamanan' && (
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Lock size={18} /> Ubah Password
              </h2>
              {pwSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 text-sm mb-4 flex items-center gap-2">
                  <CheckCircle size={16} /> Password berhasil diubah!
                </div>
              )}
              {pwError && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm mb-4">{pwError}</div>
              )}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Password Baru</label>
                  <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="input-field" placeholder="Min. 8 karakter" minLength={8} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Konfirmasi Password</label>
                  <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="input-field" placeholder="Ulangi password baru" />
                </div>
                <button onClick={handleChangePassword} disabled={!newPassword || !confirmPassword} className="btn-primary flex items-center gap-2 disabled:opacity-50">
                  <Lock size={16} /> Ubah Password
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
