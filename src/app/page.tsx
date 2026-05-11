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
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center">
                      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="80t" height="80" viewBox="150 150 500 500" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,800.000000) scale(0.100000,-0.100000)" fill="#FFFFFF" stroke="none"> <path d="M4890 5379 c-19 -6 -66 -17 -104 -25 -39 -8 -77 -21 -86 -29 -9 -8 -21 -15 -27 -15 -17 0 -116 -53 -143 -77 -14 -12 -44 -37 -67 -56 -95 -79 -243 -282 -243 -334 0 -10 -8 -30 -17 -43 -10 -14 -21 -54 -24 -90 -4 -36 -11 -93 -15 -128 -9 -84 12 -251 42 -324 13 -32 24 -66 24 -76 0 -11 7 -25 15 -32 8 -7 15 -18 15 -25 0 -6 9 -20 20 -30 11 -10 20 -23 20 -30 0 -7 10 -23 23 -37 12 -14 43 -50 70 -81 68 -80 255 -197 315 -197 38 0 65 -21 56 -43 -8 -21 -54 -47 -83 -47 -11 0 -22 -4 -26 -10 -3 -5 -36 -24 -73 -42 -37 -18 -85 -47 -108 -65 -23 -18 -44 -33 -48 -33 -8 0 -34 -20 -263 -200 -84 -66 -154 -120 -157 -120 -3 0 -49 -29 -102 -65 -54 -36 -101 -65 -106 -65 -5 0 -22 -10 -38 -21 -35 -27 -193 -24 -245 5 -16 8 -57 27 -90 42 -116 50 -267 132 -285 155 -3 3 -16 12 -29 19 -27 14 -214 152 -246 181 -53 49 -79 69 -87 69 -6 0 -21 9 -35 20 -51 40 -124 28 -183 -28 -58 -56 -104 -136 -96 -167 11 -42 273 -290 452 -429 60 -47 121 -94 136 -105 14 -12 30 -21 35 -21 5 0 32 -16 62 -35 29 -19 57 -35 62 -35 6 0 31 -11 57 -25 26 -14 56 -25 67 -25 11 0 30 -7 41 -15 12 -8 54 -18 95 -24 41 -5 106 -15 146 -22 76 -14 247 14 283 46 8 7 29 16 47 20 17 3 37 12 43 20 6 7 22 16 35 19 26 7 211 129 294 195 29 22 56 41 60 41 3 0 27 20 53 45 26 25 65 57 86 72 21 16 65 48 98 73 99 75 206 150 279 195 55 34 159 32 274 -4 56 -18 103 -36 106 -42 4 -5 14 -9 23 -9 10 0 33 -8 52 -19 19 -10 46 -22 58 -26 13 -4 44 -21 69 -38 25 -18 69 -48 98 -67 30 -19 78 -53 107 -76 29 -22 89 -67 133 -100 44 -32 82 -61 85 -64 52 -52 138 -74 171 -44 56 53 69 69 94 120 41 84 33 134 -31 190 -27 24 -57 50 -66 58 -10 9 -68 54 -130 100 -62 47 -145 110 -184 140 -39 30 -82 60 -97 67 -15 7 -27 15 -27 18 0 7 -126 72 -211 109 -25 11 -67 23 -93 27 -76 12 -74 85 2 85 118 0 407 258 465 415 8 22 21 56 27 75 7 19 21 56 32 82 27 70 26 314 -3 418 -44 160 -102 260 -225 385 -121 125 -283 225 -363 225 -18 0 -46 7 -64 17 -38 20 -252 28 -307 12z m340 -351 c127 -67 251 -188 275 -269 4 -13 14 -35 24 -49 13 -20 16 -53 16 -175 0 -168 4 -155 -91 -315 -50 -86 -157 -165 -276 -205 -98 -33 -258 -36 -315 -5 -21 11 -43 20 -49 20 -19 0 -97 47 -138 84 -21 20 -42 37 -45 38 -3 2 -20 21 -37 43 -140 184 -154 435 -34 617 68 103 176 191 280 228 107 39 306 32 390 -12z"/> <path d="M2265 5375 c-5 -1 -44 -8 -85 -15 -79 -14 -133 -40 -227 -112 -29 -22 -53 -46 -53 -53 0 -6 -9 -20 -20 -30 -11 -10 -20 -23 -20 -30 0 -7 -9 -20 -20 -30 -11 -10 -20 -24 -20 -31 0 -7 -10 -32 -21 -54 -32 -62 -32 -341 0 -393 11 -19 21 -43 22 -53 0 -21 34 -82 93 -169 22 -32 115 -135 206 -229 92 -94 189 -196 216 -227 27 -30 66 -74 86 -97 20 -23 52 -68 72 -100 85 -139 165 -165 244 -76 23 27 58 72 77 100 32 47 55 75 229 264 82 89 140 146 153 151 35 14 219 252 259 336 102 213 93 448 -25 618 -39 57 -136 151 -166 161 -11 4 -31 15 -44 25 -13 11 -33 19 -45 19 -11 0 -52 7 -89 16 -63 16 -72 16 -127 0 -33 -9 -70 -16 -84 -16 -13 0 -34 -8 -47 -18 -13 -10 -35 -23 -49 -29 -14 -6 -46 -29 -72 -52 -58 -52 -78 -51 -129 1 -43 45 -138 98 -174 98 -12 0 -42 7 -65 15 -42 15 -55 17 -75 10z m121 -343 c38 -31 50 -48 94 -144 86 -188 242 -190 330 -4 72 150 124 192 230 184 74 -5 117 -41 162 -136 32 -67 33 -168 3 -217 -7 -11 -16 -31 -20 -44 -15 -51 -96 -151 -245 -300 -141 -142 -187 -192 -260 -281 -32 -40 -41 -38 -81 18 -18 26 -109 124 -201 217 -163 166 -248 263 -248 283 0 5 -9 20 -19 34 -11 13 -23 36 -26 51 -4 14 -13 31 -21 38 -22 19 -19 141 6 186 11 21 20 44 20 51 0 7 7 15 15 18 8 3 17 14 20 24 21 67 168 80 241 22z"/> </g> </svg>
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
