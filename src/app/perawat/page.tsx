'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { createClient } from '@/lib/supabase/client'
import { Star, MapPin, Award, Search, Filter, CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface CaregiverFull {
  id: string
  specializations: string[]
  experience_years: number
  bio: string | null
  daily_rate: number | null
  rating: number
  total_reviews: number
  is_available: boolean
  verified: boolean
  profiles: {
    full_name: string
    avatar_url: string | null
    city: string | null
  }
}

export default function PerawatPage() {
  const [caregivers, setCaregivers] = useState<CaregiverFull[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterSpec, setFilterSpec] = useState('')
  const supabase = createClient()

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from('caregivers')
        .select('*, profiles(full_name, avatar_url, city)')
        .eq('is_available', true)
        .order('rating', { ascending: false })
      setCaregivers((data as CaregiverFull[]) || [])
      setLoading(false)
    }
    load()
  }, [])

  const allSpecs = [...new Set(caregivers.flatMap(c => c.specializations))]

  const filtered = caregivers.filter(c => {
    const matchName = c.profiles?.full_name?.toLowerCase().includes(search.toLowerCase())
    const matchSpec = !filterSpec || c.specializations.includes(filterSpec)
    return matchName && matchSpec
  })

  // Demo caregivers if DB is empty
  const demoCaregivers = [
    { id: '1', name: 'Siti Rahayu, A.Md.Kep', city: 'Jember', exp: 5, rating: 4.9, reviews: 124, specs: ['Lansia', 'Pasca Operasi'], rate: 300000, verified: true, initials: 'SR' },
    { id: '2', name: 'Ahmad Fauzi, S.Kep', city: 'Jember', exp: 7, rating: 4.8, reviews: 98, specs: ['Difabel', 'Terapi Okupasi'], rate: 350000, verified: true, initials: 'AF' },
    { id: '3', name: 'Dewi Kusuma, A.Md.Ft', city: 'Bondowoso', exp: 4, rating: 4.9, reviews: 76, specs: ['Fisioterapi', 'Lansia'], rate: 400000, verified: true, initials: 'DK' },
    { id: '4', name: 'Budi Santoso, S.Kep', city: 'Lumajang', exp: 6, rating: 4.7, reviews: 89, specs: ['Lansia', 'Medis'], rate: 320000, verified: true, initials: 'BS' },
    { id: '5', name: 'Nurul Hidayah, A.Md.Kep', city: 'Jember', exp: 3, rating: 4.8, reviews: 55, specs: ['Difabel', 'Lansia'], rate: 280000, verified: true, initials: 'NH' },
    { id: '6', name: 'Rudi Hartono, S.Ft', city: 'Situbondo', exp: 8, rating: 5.0, reviews: 145, specs: ['Fisioterapi', 'Pasca Operasi'], rate: 450000, verified: true, initials: 'RH' },
  ]

  const showDemo = caregivers.length === 0 && !loading

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="sky-gradient py-16 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Tim Profesional
            </div>
            <h1 className="text-5xl font-black mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Perawat Kami
            </h1>
            <p className="text-sky-100 text-xl max-w-2xl mx-auto">
              Kenali tim perawat profesional kami — terlatih, bersertifikat, dan berdedikasi penuh
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="bg-white border-b border-gray-100 py-4 sticky top-20 z-30 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari nama perawat..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-sky-400 focus:outline-none text-sm"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Filter size={16} className="text-gray-400" />
              {['', 'Lansia', 'Difabel', 'Fisioterapi', 'Pasca Operasi', 'Medis'].map(spec => (
                <button
                  key={spec}
                  onClick={() => setFilterSpec(spec)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${filterSpec === spec ? 'bg-sky-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {spec || 'Semua'}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-12 sky-mesh">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="text-center py-20">
                <div className="animate-spin w-10 h-10 border-2 border-sky-400 border-t-transparent rounded-full mx-auto mb-4" />
                <p className="text-gray-400">Memuat data perawat...</p>
              </div>
            ) : (
              <>
                <p className="text-sm text-gray-500 mb-6">
                  Menampilkan <span className="font-bold text-gray-700">{showDemo ? demoCaregivers.length : filtered.length}</span> perawat tersedia
                  {showDemo && <span className="text-sky-500 ml-2">(Data demo — hubungkan ke Supabase)</span>}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-stagger">
                  {showDemo
                    ? demoCaregivers.map(cg => (
                        <div key={cg.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all group">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-14 h-14 sky-gradient rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-md">
                                {cg.initials}
                              </div>
                              <div>
                                <div className="font-bold text-gray-900 text-sm">{cg.name}</div>
                                <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                                  <MapPin size={10} /> {cg.city}
                                </div>
                              </div>
                            </div>
                            {cg.verified && (
                              <div className="flex items-center gap-1 bg-sky-50 text-sky-600 px-2 py-1 rounded-lg text-xs font-semibold">
                                <CheckCircle size={11} /> Verified
                              </div>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {cg.specs.map(s => (
                              <span key={s} className="badge bg-sky-50 text-sky-600">{s}</span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between mb-5 py-3 border-y border-gray-100">
                            <div className="text-center">
                              <div className="flex items-center gap-1 justify-center">
                                <Star size={13} className="fill-yellow-400 text-yellow-400" />
                                <span className="font-black text-sm text-gray-900">{cg.rating}</span>
                              </div>
                              <div className="text-xs text-gray-400">{cg.reviews} ulasan</div>
                            </div>
                            <div className="text-center">
                              <div className="font-black text-sm text-gray-900 flex items-center gap-1">
                                <Award size={13} className="text-sky-400" /> {cg.exp} thn
                              </div>
                              <div className="text-xs text-gray-400">pengalaman</div>
                            </div>
                            <div className="text-center">
                              <div className="font-black text-sm text-sky-600">Rp {(cg.rate/1000).toFixed(0)}rb</div>
                              <div className="text-xs text-gray-400">per hari</div>
                            </div>
                          </div>
                          <Link href={`/booking`} className="btn-primary w-full text-center text-sm py-2.5 block">
                            Pesan Sekarang
                          </Link>
                        </div>
                      ))
                    : filtered.map(cg => (
                        <div key={cg.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-14 h-14 sky-gradient rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-md">
                                {cg.profiles?.full_name?.charAt(0)}
                              </div>
                              <div>
                                <div className="font-bold text-gray-900 text-sm">{cg.profiles?.full_name}</div>
                                <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                                  <MapPin size={10} /> {cg.profiles?.city}
                                </div>
                              </div>
                            </div>
                            {cg.verified && (
                              <div className="flex items-center gap-1 bg-sky-50 text-sky-600 px-2 py-1 rounded-lg text-xs font-semibold">
                                <CheckCircle size={11} /> Verified
                              </div>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {cg.specializations.map(s => (
                              <span key={s} className="badge bg-sky-50 text-sky-600">{s}</span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between mb-5 py-3 border-y border-gray-100">
                            <div className="text-center">
                              <div className="flex items-center gap-1 justify-center">
                                <Star size={13} className="fill-yellow-400 text-yellow-400" />
                                <span className="font-black text-sm">{cg.rating?.toFixed(1)}</span>
                              </div>
                              <div className="text-xs text-gray-400">{cg.total_reviews} ulasan</div>
                            </div>
                            <div className="text-center">
                              <div className="font-black text-sm flex items-center gap-1">
                                <Award size={13} className="text-sky-400" /> {cg.experience_years} thn
                              </div>
                              <div className="text-xs text-gray-400">pengalaman</div>
                            </div>
                            <div className="text-center">
                              <div className="font-black text-sm text-sky-600">Rp {((cg.daily_rate || 0)/1000).toFixed(0)}rb</div>
                              <div className="text-xs text-gray-400">per hari</div>
                            </div>
                          </div>
                          <Link href={`/booking`} className="btn-primary w-full text-center text-sm py-2.5 block">
                            Pesan Sekarang
                          </Link>
                        </div>
                      ))
                  }
                </div>
              </>
            )}
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-black text-gray-900 mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Anda seorang Tenaga Kesehatan?
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
              Bergabunglah bersama tim Siaprawat dan mulai melayani lebih banyak pasien dengan fleksibilitas waktu kerja
            </p>
            <Link href="/daftar?role=caregiver" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base">
              Daftar sebagai Perawat
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
