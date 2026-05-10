'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { createClient } from '@/lib/supabase/client'
import { formatCurrency, formatDateShort, BOOKING_STATUS_MAP } from '@/lib/utils'
import type { Profile, BookingWithDetails } from '@/lib/supabase/types'
import { PlusCircle, Calendar, Clock, FileText, User, Bell, Star, ArrowRight, Package } from 'lucide-react'

export default function DashboardPage() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [bookings, setBookings] = useState<BookingWithDetails[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'semua' | 'aktif' | 'selesai'>('semua')
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/masuk'); return }

      const { data: prof } = await supabase.from('profiles').select('*').eq('id', user.id).single()
      setProfile(prof)

      const { data: bks } = await supabase
        .from('bookings')
        .select('*, services(*), profiles(*)')
        .eq('client_id', user.id)
        .order('created_at', { ascending: false })

      setBookings((bks as BookingWithDetails[]) || [])
      setLoading(false)
    }
    load()
  }, [])

  const filteredBookings = bookings.filter(b => {
    if (activeTab === 'aktif') return ['pending', 'confirmed', 'assigned', 'in_progress'].includes(b.status)
    if (activeTab === 'selesai') return ['completed', 'cancelled'].includes(b.status)
    return true
  })

  const stats = [
    { label: 'Total Pesanan', value: bookings.length, icon: Package, color: 'bg-sky-100 text-sky-600' },
    { label: 'Pesanan Aktif', value: bookings.filter(b => ['pending', 'confirmed', 'in_progress'].includes(b.status)).length, icon: Clock, color: 'bg-green-100 text-green-600' },
    { label: 'Selesai', value: bookings.filter(b => b.status === 'completed').length, icon: Star, color: 'bg-yellow-100 text-yellow-600' },
  ]

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center sky-mesh pt-20">
          <div className="text-center">
            <div className="animate-spin w-10 h-10 border-2 border-sky-400 border-t-transparent rounded-full mx-auto mb-4" />
            <p className="text-gray-500">Memuat dashboard...</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen sky-mesh pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="pt-8 pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-gray-900" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Halo, {profile?.full_name?.split(' ')[0]}! 👋
              </h1>
              <p className="text-gray-500 mt-1">Selamat datang di dashboard Siaprawat Anda</p>
            </div>
            <Link href="/booking" className="btn-primary flex items-center gap-2 self-start sm:self-auto">
              <PlusCircle size={18} /> Pesan Sekarang
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map(stat => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="card">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${stat.color}`}>
                    <Icon size={20} />
                  </div>
                  <div className="text-2xl font-black text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              )
            })}
          </div>

          {/* Bookings */}
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 className="text-xl font-bold text-gray-900">Riwayat Pesanan</h2>
                <div className="flex bg-gray-100 rounded-xl p-1">
                  {(['semua', 'aktif', 'selesai'] as const).map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize transition-all ${activeTab === tab ? 'bg-white text-sky-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {filteredBookings.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar size={28} className="text-gray-400" />
                </div>
                <h3 className="font-bold text-gray-700 mb-2">Belum Ada Pesanan</h3>
                <p className="text-gray-400 text-sm mb-6">Anda belum memiliki pesanan. Yuk, mulai pesan perawat sekarang!</p>
                <Link href="/booking" className="btn-primary inline-flex items-center gap-2">
                  <PlusCircle size={16} /> Pesan Sekarang
                </Link>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {filteredBookings.map(booking => {
                  const statusInfo = BOOKING_STATUS_MAP[booking.status]
                  return (
                    <div key={booking.id} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 sky-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                            <FileText size={20} className="text-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-bold text-gray-900">{(booking as any).services?.name}</span>
                              <span className={`badge ${statusInfo.color}`}>{statusInfo.label}</span>
                            </div>
                            <div className="text-sm text-gray-500 mb-1">
                              Kode: <span className="font-mono font-semibold text-gray-700">{booking.booking_code}</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-gray-400">
                              <span className="flex items-center gap-1"><Calendar size={11} /> {formatDateShort(booking.start_date)}</span>
                              <span className="flex items-center gap-1"><User size={11} /> {booking.patient_name}</span>
                              <span>{booking.patient_city}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-black text-sky-600">{formatCurrency(booking.total_price!)}</div>
                          <div className="text-xs text-gray-400 mt-0.5">{formatDateShort(booking.created_at)}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Quick actions */}
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <Link href="/profil" className="card hover:shadow-md transition-all flex items-center gap-4">
              <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                <User size={18} className="text-sky-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Profil Saya</div>
                <div className="text-xs text-gray-500">Edit informasi akun</div>
              </div>
              <ArrowRight size={14} className="ml-auto text-gray-400" />
            </Link>
            <Link href="/layanan" className="card hover:shadow-md transition-all flex items-center gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Bell size={18} className="text-purple-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Layanan Kami</div>
                <div className="text-xs text-gray-500">Lihat semua layanan</div>
              </div>
              <ArrowRight size={14} className="ml-auto text-gray-400" />
            </Link>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="card hover:shadow-md transition-all flex items-center gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Star size={18} className="text-green-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Bantuan</div>
                <div className="text-xs text-gray-500">Hubungi tim support</div>
              </div>
              <ArrowRight size={14} className="ml-auto text-gray-400" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
