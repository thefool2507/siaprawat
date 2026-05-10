'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { createClient } from '@/lib/supabase/client'
import { formatCurrency } from '@/lib/utils'
import type { Service } from '@/lib/supabase/types'
import { CheckCircle, ArrowRight, ArrowLeft, Heart, Users, Activity, Stethoscope, Shield, Brain, Calendar, MapPin, User, FileText, Clock } from 'lucide-react'

const serviceIcons: Record<string, React.ElementType> = {
  heart: Heart, users: Users, activity: Activity,
  stethoscope: Stethoscope, bandage: Shield, brain: Brain
}

const DURATION_OPTIONS = [
  { type: 'daily', label: 'Per Hari', multiplier: 1 },
  { type: 'weekly', label: 'Per Minggu', multiplier: 7 },
  { type: 'monthly', label: 'Per Bulan', multiplier: 30 },
]

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [services, setServices] = useState<Service[]>([])
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [durationType, setDurationType] = useState('daily')
  const [durationValue, setDurationValue] = useState(1)
  const [startDate, setStartDate] = useState('')
  const [startTime, setStartTime] = useState('08:00')
  const [patientName, setPatientName] = useState('')
  const [patientAge, setPatientAge] = useState('')
  const [patientCondition, setPatientCondition] = useState('')
  const [patientAddress, setPatientAddress] = useState('')
  const [patientCity, setPatientCity] = useState('')
  const [emergencyContact, setEmergencyContact] = useState('')
  const [emergencyPhone, setEmergencyPhone] = useState('')
  const [specialNotes, setSpecialNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const [bookingCode, setBookingCode] = useState('')
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    supabase.from('services').select('*').eq('is_active', true).then(({ data }) => {
      if (data) setServices(data)
    })
  }, [])

  const totalDays = DURATION_OPTIONS.find(d => d.type === durationType)?.multiplier ?? 1
  const totalPrice = selectedService ? selectedService.base_price! * totalDays * durationValue : 0

  const handleSubmit = async () => {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { router.push('/masuk?redirect=/booking'); return }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data, error } = await (supabase.from('bookings') as any).insert({
      client_id: user.id,
      service_id: selectedService!.id,
      patient_name: patientName,
      patient_age: parseInt(patientAge) || null,
      patient_condition: patientCondition,
      patient_address: patientAddress,
      patient_city: patientCity,
      start_date: startDate,
      start_time: startTime,
      duration_type: durationType as 'daily' | 'weekly' | 'monthly',
      duration_value: durationValue,
      price_per_unit: selectedService!.base_price!,
      total_price: totalPrice,
      special_notes: specialNotes,
      emergency_contact: emergencyContact,
      emergency_phone: emergencyPhone,
      status: 'pending'
    }).select().single()

    if (data) {
      setBookingCode(data.booking_code)
      setStep(5)
    }
    setLoading(false)
  }

  const steps = [
    { num: 1, label: 'Pilih Layanan' },
    { num: 2, label: 'Jadwal' },
    { num: 3, label: 'Data Pasien' },
    { num: 4, label: 'Konfirmasi' },
  ]

  if (step === 5) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center sky-mesh pt-20 pb-16">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={48} className="text-green-500" />
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-3" style={{ fontFamily: 'Nunito, sans-serif' }}>Pesanan Diterima!</h1>
            <p className="text-gray-500 mb-6">Tim Siaprawat akan segera menghubungi Anda untuk konfirmasi lebih lanjut.</p>
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 mb-8">
              <div className="text-sm text-sky-600 font-medium mb-1">Kode Booking Anda</div>
              <div className="text-2xl font-black text-sky-700 tracking-wider">{bookingCode}</div>
              <div className="text-xs text-sky-500 mt-2">Simpan kode ini untuk memantau status pesanan</div>
            </div>
            <div className="flex flex-col gap-3">
              <button onClick={() => router.push('/dashboard')} className="btn-primary w-full py-3">
                Lihat Dashboard
              </button>
              <button onClick={() => { setStep(1); setSelectedService(null) }} className="btn-secondary w-full py-3">
                Buat Pesanan Baru
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen sky-mesh pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="pt-8 pb-10 text-center">
            <h1 className="text-4xl font-black text-gray-900 mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Pesan Perawat
            </h1>
            <p className="text-gray-500">Lengkapi formulir berikut untuk memesan layanan perawatan</p>
          </div>

          {/* Progress */}
          <div className="flex items-center justify-center mb-10">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div className={`flex items-center gap-2 ${step >= s.num ? 'text-sky-600' : 'text-gray-400'}`}>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    step > s.num ? 'bg-sky-500 text-white' : step === s.num ? 'sky-gradient text-white shadow-md shadow-sky-200' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {step > s.num ? <CheckCircle size={16} /> : s.num}
                  </div>
                  <span className="hidden sm:block text-xs font-semibold">{s.label}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-8 sm:w-16 h-0.5 mx-2 transition-all ${step > s.num ? 'bg-sky-400' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8">
            {/* STEP 1: Service Selection */}
            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Pilih Jenis Layanan</h2>
                {services.length === 0 ? (
                  <div className="text-center py-10 text-gray-400">
                    <div className="animate-spin w-8 h-8 border-2 border-sky-400 border-t-transparent rounded-full mx-auto mb-3" />
                    Memuat layanan...
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {services.map(service => {
                      const Icon = serviceIcons[service.icon || 'heart'] || Heart
                      const isSelected = selectedService?.id === service.id
                      return (
                        <button
                          key={service.id}
                          onClick={() => setSelectedService(service)}
                          className={`p-5 rounded-2xl border-2 text-left transition-all ${isSelected ? 'border-sky-400 bg-sky-50' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`}
                        >
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${isSelected ? 'sky-gradient' : 'bg-gray-100'}`}>
                            <Icon size={22} className={isSelected ? 'text-white' : 'text-gray-500'} />
                          </div>
                          <div className="font-bold text-gray-900 mb-1">{service.name}</div>
                          <div className="text-xs text-gray-500 mb-3">{service.description}</div>
                          <div className="text-sky-600 font-bold text-sm">{formatCurrency(service.base_price!)} / hari</div>
                        </button>
                      )
                    })}
                  </div>
                )}
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    disabled={!selectedService}
                    className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Lanjutkan <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Schedule */}
            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Pilih Jadwal & Durasi</h2>
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <Calendar size={14} /> Tanggal Mulai
                      </label>
                      <input
                        type="date"
                        value={startDate}
                        onChange={e => setStartDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="input-field"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        <Clock size={14} /> Jam Mulai
                      </label>
                      <input type="time" value={startTime} onChange={e => setStartTime(e.target.value)} className="input-field" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Durasi Layanan</label>
                    <div className="grid grid-cols-3 gap-3">
                      {DURATION_OPTIONS.map(opt => (
                        <button
                          key={opt.type}
                          type="button"
                          onClick={() => setDurationType(opt.type)}
                          className={`py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all ${durationType === opt.type ? 'border-sky-400 bg-sky-50 text-sky-700' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Jumlah {DURATION_OPTIONS.find(d => d.type === durationType)?.label}
                    </label>
                    <div className="flex items-center gap-3">
                      <button type="button" onClick={() => setDurationValue(Math.max(1, durationValue - 1))} className="w-10 h-10 rounded-xl border-2 border-gray-200 font-bold text-gray-600 hover:border-sky-300 transition-colors">-</button>
                      <span className="text-2xl font-black text-gray-900 w-10 text-center">{durationValue}</span>
                      <button type="button" onClick={() => setDurationValue(durationValue + 1)} className="w-10 h-10 rounded-xl border-2 border-gray-200 font-bold text-gray-600 hover:border-sky-300 transition-colors">+</button>
                    </div>
                  </div>

                  {/* Price summary */}
                  <div className="bg-sky-50 border border-sky-100 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">{selectedService?.name}</span>
                      <span className="text-sm font-semibold">{formatCurrency(selectedService?.base_price!)}/hari</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Durasi</span>
                      <span className="text-sm font-semibold">{totalDays * durationValue} hari</span>
                    </div>
                    <div className="border-t border-sky-200 pt-2 flex items-center justify-between">
                      <span className="font-bold text-gray-900">Total Estimasi</span>
                      <span className="text-xl font-black text-sky-600">{formatCurrency(totalPrice)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-between">
                  <button onClick={() => setStep(1)} className="btn-ghost flex items-center gap-2">
                    <ArrowLeft size={16} /> Kembali
                  </button>
                  <button onClick={() => setStep(3)} disabled={!startDate} className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                    Lanjutkan <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Patient Data */}
            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Data Pasien</h2>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1.5">
                        <User size={13} /> Nama Pasien
                      </label>
                      <input type="text" value={patientName} onChange={e => setPatientName(e.target.value)} className="input-field" placeholder="Nama lengkap pasien" required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Usia Pasien</label>
                      <input type="number" value={patientAge} onChange={e => setPatientAge(e.target.value)} className="input-field" placeholder="65" min="0" max="120" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1.5">
                      <FileText size={13} /> Kondisi/Diagnosa
                    </label>
                    <textarea value={patientCondition} onChange={e => setPatientCondition(e.target.value)} className="input-field min-h-[80px] resize-none" placeholder="Jelaskan kondisi kesehatan, riwayat penyakit, atau diagnosa yang relevan" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1.5">
                      <MapPin size={13} /> Alamat Lengkap
                    </label>
                    <textarea value={patientAddress} onChange={e => setPatientAddress(e.target.value)} className="input-field min-h-[80px] resize-none" placeholder="Alamat lengkap termasuk RT/RW, kelurahan, kecamatan" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Kota / Kabupaten</label>
                    <input type="text" value={patientCity} onChange={e => setPatientCity(e.target.value)} className="input-field" placeholder="Jember" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Kontak Darurat</label>
                      <input type="text" value={emergencyContact} onChange={e => setEmergencyContact(e.target.value)} className="input-field" placeholder="Nama kontak darurat" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">No. HP Darurat</label>
                      <input type="tel" value={emergencyPhone} onChange={e => setEmergencyPhone(e.target.value)} className="input-field" placeholder="08xx-xxxx-xxxx" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Catatan Khusus</label>
                    <textarea value={specialNotes} onChange={e => setSpecialNotes(e.target.value)} className="input-field min-h-[80px] resize-none" placeholder="Informasi tambahan yang perlu diketahui perawat (alergi obat, kebiasaan, dll.)" />
                  </div>
                </div>

                <div className="mt-6 flex justify-between">
                  <button onClick={() => setStep(2)} className="btn-ghost flex items-center gap-2">
                    <ArrowLeft size={16} /> Kembali
                  </button>
                  <button onClick={() => setStep(4)} disabled={!patientName || !patientAddress || !patientCity} className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                    Lanjutkan <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Confirm */}
            {step === 4 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Konfirmasi Pesanan</h2>
                <div className="space-y-4">
                  {[
                    { label: 'Layanan', value: selectedService?.name },
                    { label: 'Tanggal Mulai', value: startDate },
                    { label: 'Durasi', value: `${durationValue} ${DURATION_OPTIONS.find(d => d.type === durationType)?.label}` },
                    { label: 'Nama Pasien', value: patientName },
                    { label: 'Usia', value: patientAge ? `${patientAge} tahun` : '-' },
                    { label: 'Kota', value: patientCity },
                    { label: 'Kontak Darurat', value: emergencyContact || '-' },
                  ].map(item => (
                    <div key={item.label} className="flex items-start justify-between py-3 border-b border-gray-100">
                      <span className="text-sm text-gray-500 font-medium">{item.label}</span>
                      <span className="text-sm font-bold text-gray-900 text-right max-w-xs">{item.value}</span>
                    </div>
                  ))}

                  <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5 mt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-semibold">Total Estimasi Biaya</span>
                      <span className="text-2xl font-black text-sky-600">{formatCurrency(totalPrice)}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">*Harga dapat berubah sesuai kondisi aktual di lapangan</p>
                  </div>
                </div>

                <div className="mt-6 flex justify-between">
                  <button onClick={() => setStep(3)} className="btn-ghost flex items-center gap-2">
                    <ArrowLeft size={16} /> Kembali
                  </button>
                  <button onClick={handleSubmit} disabled={loading} className="btn-primary flex items-center gap-2 px-8 disabled:opacity-50">
                    {loading ? 'Memproses...' : 'Konfirmasi Pesanan'} {!loading && <CheckCircle size={16} />}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
