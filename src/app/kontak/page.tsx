'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, Clock } from 'lucide-react'

export default function KontakPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    // Simulate sending
    await new Promise(r => setTimeout(r, 1500))
    setSent(true)
    setSending(false)
  }

  const contacts = [
    { icon: Phone, label: 'Telepon', value: '+62 812-3456-7890', href: 'tel:+6281234567890', desc: 'Senin–Minggu, 07.00–21.00 WIB' },
    { icon: MessageCircle, label: 'WhatsApp', value: '+62 812-3456-7890', href: 'https://wa.me/6281234567890', desc: 'Respon cepat via chat' },
    { icon: Mail, label: 'Email', value: 'siaprawatindonesia@gmail.com', href: 'mailto:siaprawatindonesia@gmail.com', desc: 'Balas dalam 1×24 jam' },
    { icon: MapPin, label: 'Kantor', value: 'Jember, Jawa Timur', href: '#', desc: 'Kunjungan dengan perjanjian' },
  ]

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="sky-gradient py-16 text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-black mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>Hubungi Kami</h1>
            <p className="text-sky-100 text-xl">Kami siap membantu Anda. Jangan ragu untuk menghubungi tim Siaprawat.</p>
          </div>
        </section>

        <section className="py-20 sky-mesh">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact info */}
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-3" style={{ fontFamily: 'Nunito, sans-serif' }}>Ada yang bisa kami bantu?</h2>
                <p className="text-gray-500 mb-8">Tim kami siap menjawab pertanyaan Anda tentang layanan, harga, perawat, maupun kebutuhan khusus lainnya.</p>

                <div className="space-y-4 mb-8">
                  {contacts.map(c => {
                    const Icon = c.icon
                    return (
                      <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-sky-200 hover:shadow-sm transition-all group">
                        <div className="w-12 h-12 sky-gradient rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                          <Icon size={20} className="text-white" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-400 font-medium">{c.label}</div>
                          <div className="font-bold text-gray-900 text-sm">{c.value}</div>
                          <div className="text-xs text-gray-400 mt-0.5 flex items-center gap-1"><Clock size={10} /> {c.desc}</div>
                        </div>
                      </a>
                    )
                  })}
                </div>

                <div className="bg-sky-50 border border-sky-100 rounded-2xl p-5">
                  <h3 className="font-bold text-sky-800 mb-2">💡 Tips Konsultasi</h3>
                  <p className="text-sky-700 text-sm leading-relaxed">
                    Untuk konsultasi lebih cepat, siapkan informasi kondisi pasien (usia, diagnosa, lokasi) sebelum menghubungi kami. Ini membantu kami merekomendasikan perawat yang paling sesuai.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                {sent ? (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-2">Pesan Terkirim!</h3>
                    <p className="text-gray-500">Tim kami akan menghubungi Anda dalam 1×24 jam.</p>
                    <button onClick={() => { setSent(false); setName(''); setEmail(''); setSubject(''); setMessage('') }} className="btn-primary mt-6">
                      Kirim Pesan Lain
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-black text-gray-900 mb-6">Kirim Pesan</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap</label>
                          <input type="text" value={name} onChange={e => setName(e.target.value)} className="input-field" placeholder="Nama Anda" required />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                          <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="input-field" placeholder="email@contoh.com" required />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Subjek</label>
                        <select value={subject} onChange={e => setSubject(e.target.value)} className="input-field" required>
                          <option value="">Pilih subjek...</option>
                          <option>Konsultasi Layanan</option>
                          <option>Informasi Harga</option>
                          <option>Keluhan / Masukan</option>
                          <option>Daftar sebagai Perawat</option>
                          <option>Lainnya</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Pesan</label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} className="input-field min-h-[140px] resize-none" placeholder="Tuliskan pertanyaan atau pesan Anda di sini..." required />
                      </div>
                      <button type="submit" disabled={sending} className="btn-primary w-full py-4 flex items-center justify-center gap-2 disabled:opacity-60">
                        {sending ? 'Mengirim...' : <><Send size={16} /> Kirim Pesan</>}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
