import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Heart, Target, Eye, Award, Users, Shield, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tentang Siaprawat',
  description: 'Kenali lebih dalam tentang Siaprawat, misi kami, dan tim di balik layanan perawatan terbaik.',
}

const team = [
  { name: 'Achmad Malik Fajar, S.Kep', role: 'Founder & CEO', initials: 'AF', desc: 'Dokter dengan visi menghadirkan perawatan berkualitas di setiap rumah.' },
  { name: 'Siti Rahayu, S.Kep', role: 'Head of Care Operations', initials: 'SR', desc: 'Perawat senior dengan 10+ tahun pengalaman di bidang geriatri.' },
  { name: 'Fahreza Rizky Pradana', role: 'CTO', initials: 'BS', desc: 'Engineer yang passionate membangun teknologi untuk kesehatan.' },
  { name: 'Dewi Kusuma', role: 'Quality Assurance', initials: 'DK', desc: 'Memastikan standar pelayanan tertinggi di setiap sesi perawatan.' },
]

const milestones = [
  { year: '2022', title: 'Berdiri', desc: 'Siaprawat didirikan di Jember dengan 5 perawat pertama' },
  { year: '2023', title: 'Ekspansi', desc: 'Layanan diperluas ke seluruh Kabupaten Jember & sekitarnya' },
  { year: '2024', title: 'Digitalisasi', desc: 'Platform web diluncurkan untuk memudahkan pemesanan' },
  { year: '2025', title: 'Sertifikasi', desc: 'Seluruh perawat telah bersertifikat dan terverifikasi nasional' },
]

export default function TentangPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="sky-gradient py-20 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-3">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="80t" height="80" viewBox="150 150 500 500" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,800.000000) scale(0.100000,-0.100000)" fill="#FFFFFF" stroke="none"> <path d="M4890 5379 c-19 -6 -66 -17 -104 -25 -39 -8 -77 -21 -86 -29 -9 -8 -21 -15 -27 -15 -17 0 -116 -53 -143 -77 -14 -12 -44 -37 -67 -56 -95 -79 -243 -282 -243 -334 0 -10 -8 -30 -17 -43 -10 -14 -21 -54 -24 -90 -4 -36 -11 -93 -15 -128 -9 -84 12 -251 42 -324 13 -32 24 -66 24 -76 0 -11 7 -25 15 -32 8 -7 15 -18 15 -25 0 -6 9 -20 20 -30 11 -10 20 -23 20 -30 0 -7 10 -23 23 -37 12 -14 43 -50 70 -81 68 -80 255 -197 315 -197 38 0 65 -21 56 -43 -8 -21 -54 -47 -83 -47 -11 0 -22 -4 -26 -10 -3 -5 -36 -24 -73 -42 -37 -18 -85 -47 -108 -65 -23 -18 -44 -33 -48 -33 -8 0 -34 -20 -263 -200 -84 -66 -154 -120 -157 -120 -3 0 -49 -29 -102 -65 -54 -36 -101 -65 -106 -65 -5 0 -22 -10 -38 -21 -35 -27 -193 -24 -245 5 -16 8 -57 27 -90 42 -116 50 -267 132 -285 155 -3 3 -16 12 -29 19 -27 14 -214 152 -246 181 -53 49 -79 69 -87 69 -6 0 -21 9 -35 20 -51 40 -124 28 -183 -28 -58 -56 -104 -136 -96 -167 11 -42 273 -290 452 -429 60 -47 121 -94 136 -105 14 -12 30 -21 35 -21 5 0 32 -16 62 -35 29 -19 57 -35 62 -35 6 0 31 -11 57 -25 26 -14 56 -25 67 -25 11 0 30 -7 41 -15 12 -8 54 -18 95 -24 41 -5 106 -15 146 -22 76 -14 247 14 283 46 8 7 29 16 47 20 17 3 37 12 43 20 6 7 22 16 35 19 26 7 211 129 294 195 29 22 56 41 60 41 3 0 27 20 53 45 26 25 65 57 86 72 21 16 65 48 98 73 99 75 206 150 279 195 55 34 159 32 274 -4 56 -18 103 -36 106 -42 4 -5 14 -9 23 -9 10 0 33 -8 52 -19 19 -10 46 -22 58 -26 13 -4 44 -21 69 -38 25 -18 69 -48 98 -67 30 -19 78 -53 107 -76 29 -22 89 -67 133 -100 44 -32 82 -61 85 -64 52 -52 138 -74 171 -44 56 53 69 69 94 120 41 84 33 134 -31 190 -27 24 -57 50 -66 58 -10 9 -68 54 -130 100 -62 47 -145 110 -184 140 -39 30 -82 60 -97 67 -15 7 -27 15 -27 18 0 7 -126 72 -211 109 -25 11 -67 23 -93 27 -76 12 -74 85 2 85 118 0 407 258 465 415 8 22 21 56 27 75 7 19 21 56 32 82 27 70 26 314 -3 418 -44 160 -102 260 -225 385 -121 125 -283 225 -363 225 -18 0 -46 7 -64 17 -38 20 -252 28 -307 12z m340 -351 c127 -67 251 -188 275 -269 4 -13 14 -35 24 -49 13 -20 16 -53 16 -175 0 -168 4 -155 -91 -315 -50 -86 -157 -165 -276 -205 -98 -33 -258 -36 -315 -5 -21 11 -43 20 -49 20 -19 0 -97 47 -138 84 -21 20 -42 37 -45 38 -3 2 -20 21 -37 43 -140 184 -154 435 -34 617 68 103 176 191 280 228 107 39 306 32 390 -12z"/> <path d="M2265 5375 c-5 -1 -44 -8 -85 -15 -79 -14 -133 -40 -227 -112 -29 -22 -53 -46 -53 -53 0 -6 -9 -20 -20 -30 -11 -10 -20 -23 -20 -30 0 -7 -9 -20 -20 -30 -11 -10 -20 -24 -20 -31 0 -7 -10 -32 -21 -54 -32 -62 -32 -341 0 -393 11 -19 21 -43 22 -53 0 -21 34 -82 93 -169 22 -32 115 -135 206 -229 92 -94 189 -196 216 -227 27 -30 66 -74 86 -97 20 -23 52 -68 72 -100 85 -139 165 -165 244 -76 23 27 58 72 77 100 32 47 55 75 229 264 82 89 140 146 153 151 35 14 219 252 259 336 102 213 93 448 -25 618 -39 57 -136 151 -166 161 -11 4 -31 15 -44 25 -13 11 -33 19 -45 19 -11 0 -52 7 -89 16 -63 16 -72 16 -127 0 -33 -9 -70 -16 -84 -16 -13 0 -34 -8 -47 -18 -13 -10 -35 -23 -49 -29 -14 -6 -46 -29 -72 -52 -58 -52 -78 -51 -129 1 -43 45 -138 98 -174 98 -12 0 -42 7 -65 15 -42 15 -55 17 -75 10z m121 -343 c38 -31 50 -48 94 -144 86 -188 242 -190 330 -4 72 150 124 192 230 184 74 -5 117 -41 162 -136 32 -67 33 -168 3 -217 -7 -11 -16 -31 -20 -44 -15 -51 -96 -151 -245 -300 -141 -142 -187 -192 -260 -281 -32 -40 -41 -38 -81 18 -18 26 -109 124 -201 217 -163 166 -248 263 -248 283 0 5 -9 20 -19 34 -11 13 -23 36 -26 51 -4 14 -13 31 -21 38 -22 19 -19 141 6 186 11 21 20 44 20 51 0 7 7 15 15 18 8 3 17 14 20 24 21 67 168 80 241 22z"/> </g> </svg>
            </div>
            <h1 className="text-5xl font-black mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>Tentang Siaprawat</h1>
            <p className="text-sky-100 text-xl max-w-2xl mx-auto leading-relaxed">
              Lahir dari kepedulian mendalam terhadap kualitas perawatan lansia dan difabel di Indonesia
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Cerita Kami</div>
                <h2 className="text-3xl font-black text-gray-900 mb-5" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Berawal dari Kepedulian, Tumbuh Bersama Kepercayaan
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Siaprawat lahir dari keprihatinan nyata: sulitnya keluarga menemukan perawat yang terpercaya, terlatih, dan terjangkau untuk orang tersayang mereka.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kami percaya bahwa setiap lansia dan penyandang difabel berhak mendapatkan perawatan yang bermartabat dan penuh kasih — tidak peduli latar belakang atau lokasi tempat tinggal.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dengan menggabungkan teknologi dan sentuhan manusia, Siaprawat hadir sebagai jembatan antara kebutuhan keluarga dan profesionalitas para perawat kami.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Target, title: 'Misi Kami', desc: 'Menyediakan layanan perawatan profesional yang mudah diakses, terjangkau, dan bermartabat bagi setiap keluarga Indonesia.', color: 'bg-red-50 text-red-500' },
                  { icon: Eye, title: 'Visi Kami', desc: 'Menjadi platform perawatan terpercaya nomor satu di Indonesia yang menghadirkan senyum di setiap rumah.', color: 'bg-sky-50 text-sky-500' },
                ].map(item => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex gap-4 p-5 bg-gray-50 rounded-2xl">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-10" style={{ fontFamily: 'Nunito, sans-serif' }}>Nilai-Nilai Kami</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Heart, title: 'Empati', desc: 'Kami memahami bahwa merawat orang tersayang adalah kepercayaan tertinggi', color: 'sky-gradient text-white' },
                { icon: Award, title: 'Profesional', desc: 'Standar pelatihan ketat dan sertifikasi wajib untuk semua perawat kami', color: 'bg-amber-400 text-white' },
                { icon: Shield, title: 'Integritas', desc: 'Transparansi harga, kejujuran layanan, dan tanggung jawab penuh', color: 'bg-green-500 text-white' },
              ].map(v => {
                const Icon = v.icon
                return (
                  <div key={v.title} className="text-center p-6 bg-white rounded-2xl shadow-sm">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${v.color}`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="text-lg font-black text-gray-900 mb-2">{v.title}</h3>
                    <p className="text-gray-500 text-sm">{v.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-10" style={{ fontFamily: 'Nunito, sans-serif' }}>Perjalanan Kami</h2>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sky-100" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div key={i} className="flex gap-6 relative">
                    <div className="w-16 h-16 sky-gradient rounded-2xl flex items-center justify-center text-white font-black text-sm flex-shrink-0 shadow-md shadow-sky-200 relative z-10">
                      {m.year}
                    </div>
                    <div className="pt-3">
                      <h3 className="font-black text-gray-900 text-lg">{m.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-10" style={{ fontFamily: 'Nunito, sans-serif' }}>Tim Kami</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map(member => (
                <div key={member.name} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all">
                  <div className="w-16 h-16 sky-gradient rounded-2xl flex items-center justify-center text-white font-black text-lg mx-auto mb-3 shadow-md">
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm">{member.name}</h3>
                  <p className="text-sky-500 text-xs font-semibold mt-0.5 mb-2">{member.role}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="sky-gradient py-16 text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-black mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>Bergabung Bersama Kami</h2>
            <p className="text-sky-100 text-lg mb-8">Jadilah bagian dari keluarga besar Siaprawat — baik sebagai klien maupun perawat</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/booking" className="bg-white text-sky-600 font-bold px-8 py-3.5 rounded-xl hover:bg-sky-50 transition-colors">
                Pesan Perawat
              </Link>
              <Link href="/daftar" className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
                Daftar Sebagai Perawat
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
