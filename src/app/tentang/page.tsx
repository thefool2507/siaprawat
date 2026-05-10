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
  { name: 'dr. Ahmad Fauzi', role: 'Founder & CEO', initials: 'AF', desc: 'Dokter dengan visi menghadirkan perawatan berkualitas di setiap rumah.' },
  { name: 'Siti Rahayu, S.Kep', role: 'Head of Care Operations', initials: 'SR', desc: 'Perawat senior dengan 10+ tahun pengalaman di bidang geriatri.' },
  { name: 'Budi Santoso', role: 'CTO', initials: 'BS', desc: 'Engineer yang passionate membangun teknologi untuk kesehatan.' },
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
            <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Heart size={36} className="fill-white text-white" />
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
