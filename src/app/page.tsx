import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Heart, Users, Shield, Clock, Star, ArrowRight, Phone, CheckCircle, Award, Stethoscope, Activity, Brain } from 'lucide-react'

const services = [
  { icon: Heart, name: 'Perawatan Lansia Harian', desc: 'Pendampingan menyeluruh untuk orang tua tercinta setiap hari', color: 'bg-red-50 text-red-500', slug: 'perawatan-lansia-harian' },
  { icon: Users, name: 'Perawatan Difabel', desc: 'Dukungan khusus bagi penyandang difabel fisik & mental', color: 'bg-purple-50 text-purple-500', slug: 'perawatan-difabel' },
  { icon: Activity, name: 'Fisioterapi Rumahan', desc: 'Terapi gerak di rumah oleh tenaga terlatih bersertifikat', color: 'bg-green-50 text-green-500', slug: 'fisioterapi-rumahan' },
  { icon: Stethoscope, name: 'Pendampingan Medis', desc: 'Menemani ke dokter, kontrol rutin, dan rawat jalan', color: 'bg-blue-50 text-blue-500', slug: 'pendampingan-medis' },
  { icon: Shield, name: 'Perawatan Pasca Operasi', desc: 'Monitoring dan perawatan luka pasca tindakan medis', color: 'bg-orange-50 text-orange-500', slug: 'perawatan-pasca-operasi' },
  { icon: Brain, name: 'Terapi Okupasi', desc: 'Meningkatkan kemandirian dalam aktivitas sehari-hari', color: 'bg-teal-50 text-teal-500', slug: 'terapi-okupasi' },
]

const stats = [
  { value: '500+', label: 'Pasien Dilayani' },
  { value: '50+', label: 'Perawat Terlatih' },
  { value: '4.9', label: 'Rating Rata-rata' },
  { value: '24/7', label: 'Siap Membantu' },
]

const whyUs = [
  { icon: Award, title: 'Perawat Bersertifikat', desc: 'Semua perawat kami telah terverifikasi, bersertifikat, dan melalui pelatihan intensif' },
  { icon: Shield, title: 'Terpercaya & Aman', desc: 'Proses seleksi ketat dengan pemeriksaan latar belakang yang menyeluruh' },
  { icon: Clock, title: 'Fleksibel & Responsif', desc: 'Layanan per jam, harian, mingguan hingga bulanan sesuai kebutuhan' },
  { icon: Star, title: 'Kepuasan Terjamin', desc: 'Sistem monitoring berkala dan jaminan kepuasan pelayanan' },
]

const testimonials = [
  { name: 'Ibu Sari W.', city: 'Jember', text: 'Perawat dari Siaprawat sangat sabar dan profesional merawat ayah saya. Sangat rekomendasikan!', rating: 5, service: 'Perawatan Lansia' },
  { name: 'Bpk. Ahmad R.', city: 'Surabaya', text: 'Proses pemesanannya mudah dan perawat yang datang ramah serta berpengalaman. Terima kasih Siaprawat!', rating: 5, service: 'Fisioterapi Rumahan' },
  { name: 'Keluarga Budiman', city: 'Malang', text: 'Sangat membantu untuk ibu kami yang difabel. Perawatnya penuh kasih dan profesional.', rating: 5, service: 'Perawatan Difabel' },
]

const steps = [
  { step: '01', title: 'Pilih Layanan', desc: 'Pilih jenis perawatan yang sesuai dengan kebutuhan pasien' },
  { step: '02', title: 'Isi Data Pasien', desc: 'Lengkapi informasi kondisi dan jadwal yang diinginkan' },
  { step: '03', title: 'Konfirmasi & Bayar', desc: 'Verifikasi booking dan lakukan pembayaran dengan mudah' },
  { step: '04', title: 'Perawat Datang', desc: 'Perawat profesional kami siap hadir tepat waktu' },
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #E0F7FF 0%, #F0FCFF 40%, #ffffff 100%)' }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #00BFFF, transparent)' }} />
            <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #0099CC, transparent)' }} />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
                  Layanan Tersedia 24/7
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Butuh<br />
                  <span className="text-sky-500">perawat?</span><br />
                  <span className="text-4xl md:text-5xl lg:text-6xl">Kami siaprawat!</span>
                </h1>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                  Layanan perawatan profesional terpadu untuk lansia dan penyandang difabel. Perawat terlatih, bersertifikat, dan penuh kasih.
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  <Link href="/booking" className="btn-primary text-base px-8 py-4 flex items-center gap-2">
                    Pesan Perawat Sekarang <ArrowRight size={18} />
                  </Link>
                  <Link href="/layanan" className="btn-secondary text-base px-8 py-4">
                    Lihat Layanan
                  </Link>
                </div>
                <div className="flex flex-wrap gap-6">
                  {['✓ Perawat Bersertifikat', '✓ Proses Mudah & Cepat', '✓ Harga Transparan'].map(item => (
                    <span key={item} className="text-sm text-gray-600 font-medium">{item}</span>
                  ))}
                </div>
              </div>

              <div className="relative" style={{ animation: 'fadeInUp 0.5s ease-out 0.2s forwards', opacity: 0 }}>
                <div className="relative z-10 sky-gradient rounded-3xl p-8 text-white shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                      <Heart size={24} className="fill-white text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">Siaprawat</div>
                      <div className="text-sky-200 text-sm">Ready to Take Care</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {stats.map(stat => (
                      <div key={stat.label} className="bg-white/15 rounded-2xl p-4">
                        <div className="text-3xl font-black">{stat.value}</div>
                        <div className="text-sky-200 text-xs font-medium mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white/15 rounded-2xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {['S', 'A', 'B', 'R'].map((l, i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-white/30 border-2 border-white/50 flex items-center justify-center text-xs font-bold">{l}</div>
                        ))}
                      </div>
                      <div>
                        <div className="text-sm font-bold">50+ Perawat Aktif</div>
                        <div className="flex items-center gap-1 mt-0.5">
                          {[1, 2, 3, 4, 5].map(i => <Star key={i} size={11} className="fill-yellow-300 text-yellow-300" />)}
                          <span className="text-xs text-sky-200 ml-1">4.9/5.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <CheckCircle size={20} className="text-green-500" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Booking terkonfirmasi</div>
                      <div className="text-sm font-bold text-gray-900">Perawat en route!</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                      <Clock size={20} className="text-sky-500" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Tersedia</div>
                      <div className="text-sm font-bold text-gray-900">24 Jam / 7 Hari</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <div className="sky-gradient py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center md:justify-around gap-8 text-white">
              {stats.map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-black" style={{ fontFamily: 'Nunito, sans-serif' }}>{stat.value}</div>
                  <div className="text-sky-100 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <section className="py-20 sky-mesh">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-block bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Layanan Kami</div>
              <h2 className="section-title">Semua Kebutuhan Perawatan<br />dalam Satu Platform</h2>
              <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">Dari perawatan harian hingga terapi khusus, kami siap hadir dengan tenaga profesional</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-stagger">
              {services.map(service => {
                const Icon = service.icon
                return (
                  <Link key={service.slug} href={`/layanan/${service.slug}`} className="card-hover group">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${service.color} group-hover:scale-110 transition-transform`}>
                      <Icon size={26} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-sky-500 text-sm font-semibold">
                      Selengkapnya <ArrowRight size={14} />
                    </div>
                  </Link>
                )
              })}
            </div>
            <div className="text-center mt-10">
              <Link href="/booking" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base">
                Pesan Layanan Sekarang <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-block bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Cara Kerja</div>
              <h2 className="section-title">Mudah, Cepat, Terpercaya</h2>
              <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">Pesan perawat profesional hanya dalam 4 langkah sederhana</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="relative text-center">
                  <div className="w-20 h-20 sky-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-sky-200">
                    <span className="text-2xl font-black text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Mengapa Siaprawat?</div>
                <h2 className="section-title mb-6">Kami Hadir dengan<br />Sepenuh Hati</h2>
                <p className="text-gray-500 text-lg mb-10">Kepercayaan keluarga Anda adalah prioritas utama kami. Setiap perawat dipilih dengan seleksi ketat untuk memastikan pelayanan terbaik.</p>
                <div className="space-y-5">
                  {whyUs.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-sky-200 hover:shadow-sm transition-all">
                        <div className="w-12 h-12 sky-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon size={20} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="sky-gradient rounded-3xl p-10 text-white shadow-2xl shadow-sky-200">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Phone size={28} />
                </div>
                <h3 className="text-3xl font-black mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>Butuh Konsultasi?</h3>
                <p className="text-sky-100 text-lg mb-8">Tim kami siap membantu Anda menemukan layanan perawatan yang paling tepat untuk orang tersayang.</p>
                <div className="space-y-3">
                  <a href="tel:+6281234567890" className="flex items-center gap-3 bg-white/15 hover:bg-white/25 rounded-xl p-4 transition-colors">
                    <Phone size={20} />
                    <div>
                      <div className="text-sm text-sky-200">Telepon kami</div>
                      <div className="font-bold">+62 812-3456-7890</div>
                    </div>
                  </a>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white text-sky-600 font-bold py-4 rounded-xl hover:bg-sky-50 transition-colors">
                    WhatsApp Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-block bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Testimoni</div>
              <h2 className="section-title">Kata Mereka tentang<br />Siaprawat</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 animate-stagger">
              {testimonials.map((t, i) => (
                <div key={i} className="card border-gray-100">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sky-gradient rounded-xl flex items-center justify-center text-white font-bold text-sm">{t.name.charAt(0)}</div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.city} · {t.service}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="sky-gradient py-20">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Siap Memberikan<br />Perawatan Terbaik?
            </h2>
            <p className="text-sky-100 text-xl mb-10 max-w-2xl mx-auto">
              Daftarkan kebutuhan perawatan Anda sekarang dan kami akan mencarikan perawat terbaik untuk orang tersayang
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/booking" className="bg-white text-sky-600 font-bold px-10 py-4 rounded-xl hover:bg-sky-50 transition-colors shadow-lg text-lg">
                Pesan Perawat Sekarang
              </Link>
              <Link href="/daftar" className="bg-sky-600/50 hover:bg-sky-600/70 text-white font-bold px-10 py-4 rounded-xl transition-colors text-lg border border-white/30">
                Daftar sebagai Perawat
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
