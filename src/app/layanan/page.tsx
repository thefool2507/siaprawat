import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Heart, Users, Activity, Stethoscope, Shield, Brain, ArrowRight, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Layanan Perawatan',
  description: 'Temukan berbagai layanan perawatan profesional Siaprawat untuk lansia dan difabel.',
}

const services = [
  {
    icon: Heart,
    name: 'Perawatan Lansia Harian',
    slug: 'perawatan-lansia-harian',
    category: 'Lansia',
    price: 250000,
    color: 'bg-red-50 text-red-500',
    gradientFrom: 'from-red-500',
    description: 'Layanan pendampingan dan perawatan menyeluruh untuk orang tua tercinta setiap harinya.',
    longDesc: 'Perawatan harian kami mencakup semua aspek kebutuhan lansia — mulai dari kebersihan diri, pemberian makan, pengawasan minum obat, aktivitas ringan, hingga menemani waktu santai.',
    includes: [
      'Membantu mandi, berpakaian, dan kebersihan pribadi',
      'Penyiapan dan pemberian makanan bergizi',
      'Pengawasan jadwal minum obat',
      'Aktivitas ringan dan senam lansia',
      'Pemantauan kondisi kesehatan harian',
      'Laporan harian kepada keluarga',
    ],
  },
  {
    icon: Users,
    name: 'Perawatan Difabel',
    slug: 'perawatan-difabel',
    category: 'Difabel',
    price: 300000,
    color: 'bg-purple-50 text-purple-500',
    gradientFrom: 'from-purple-500',
    description: 'Pendampingan khusus dan profesional untuk penyandang difabel fisik maupun mental.',
    longDesc: 'Kami menyediakan perawat terlatih khusus yang memahami kebutuhan unik setiap penyandang difabel, dengan pendekatan penuh empati dan teknik perawatan yang tepat.',
    includes: [
      'Pendampingan aktivitas sehari-hari',
      'Terapi komunikasi dasar',
      'Mobilisasi dan transfer kursi roda',
      'Stimulasi kognitif dan sensorik',
      'Koordinasi dengan tenaga medis',
      'Dukungan psikososial',
    ],
  },
  {
    icon: Activity,
    name: 'Fisioterapi Rumahan',
    slug: 'fisioterapi-rumahan',
    category: 'Terapi',
    price: 350000,
    color: 'bg-green-50 text-green-500',
    gradientFrom: 'from-green-500',
    description: 'Sesi fisioterapi profesional langsung di rumah pasien oleh tenaga terlatih bersertifikat.',
    longDesc: 'Fisioterapis kami datang langsung ke rumah Anda, mengeliminasi kerepotkan transportasi sekaligus memberikan terapi optimal di lingkungan yang familiar dan nyaman.',
    includes: [
      'Asesmen kondisi awal pasien',
      'Latihan peregangan dan penguatan otot',
      'Terapi manual dan mobilisasi sendi',
      'Latihan keseimbangan dan koordinasi',
      'Edukasi keluarga tentang latihan mandiri',
      'Evaluasi perkembangan berkala',
    ],
  },
  {
    icon: Stethoscope,
    name: 'Pendampingan Medis',
    slug: 'pendampingan-medis',
    category: 'Medis',
    price: 200000,
    color: 'bg-blue-50 text-blue-500',
    gradientFrom: 'from-blue-500',
    description: 'Layanan pendampingan ke fasilitas kesehatan, kontrol rutin, dan rawat jalan.',
    longDesc: 'Perawat kami siap menemani pasien ke dokter, klinik, atau rumah sakit — memastikan proses berjalan lancar, komunikasi dengan dokter efektif, dan pasien nyaman sepanjang perjalanan.',
    includes: [
      'Penjemputan dan pengantaran ke faskes',
      'Pendampingan selama konsultasi dokter',
      'Pencatatan rekomendasi medis',
      'Pengambilan dan pengelolaan obat',
      'Laporan kondisi pasien pasca kunjungan',
      'Follow-up jadwal kontrol berikutnya',
    ],
  },
  {
    icon: Shield,
    name: 'Perawatan Pasca Operasi',
    slug: 'perawatan-pasca-operasi',
    category: 'Pasca Operasi',
    price: 400000,
    color: 'bg-orange-50 text-orange-500',
    gradientFrom: 'from-orange-500',
    description: 'Perawatan luka, monitoring kondisi, dan pendampingan pemulihan pasca tindakan medis.',
    longDesc: 'Masa pemulihan pasca operasi sangat kritis. Perawat kami yang terlatih memastikan luka tertangani dengan benar, obat diberikan tepat waktu, dan gejala komplikasi terdeteksi lebih awal.',
    includes: [
      'Perawatan dan ganti perban luka operasi',
      'Monitoring vital sign harian',
      'Pemberian obat sesuai resep dokter',
      'Mobilisasi bertahap sesuai instruksi',
      'Deteksi dini tanda infeksi atau komplikasi',
      'Koordinasi langsung dengan dokter penanggun',
    ],
  },
  {
    icon: Brain,
    name: 'Terapi Okupasi',
    slug: 'terapi-okupasi',
    category: 'Terapi',
    price: 300000,
    color: 'bg-teal-50 text-teal-500',
    gradientFrom: 'from-teal-500',
    description: 'Meningkatkan kemandirian dan kualitas hidup melalui terapi aktivitas bermakna.',
    longDesc: 'Terapis okupasi kami membantu pasien mengembangkan, memulihkan, atau mempertahankan kemampuan melakukan aktivitas sehari-hari yang penting bagi kualitas hidup mereka.',
    includes: [
      'Asesmen fungsional komprehensif',
      'Program terapi aktivitas kehidupan sehari-hari',
      'Adaptasi lingkungan rumah',
      'Latihan kognitif dan memori',
      'Penggunaan alat bantu adaptif',
      'Program rumahan untuk kemandirian',
    ],
  },
]

export default function LayananPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="sky-gradient py-20 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Layanan Profesional
            </div>
            <h1 className="text-5xl font-black mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Semua Layanan Kami
            </h1>
            <p className="text-sky-100 text-xl max-w-2xl mx-auto">
              Dari perawatan harian hingga terapi spesialis, kami hadir dengan tenaga profesional bersertifikat untuk orang tersayang Anda
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 sky-mesh">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div key={service.slug} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    <div className="p-8">
                      <div className="flex items-start gap-5 mb-5">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${service.color} group-hover:scale-110 transition-transform`}>
                          <Icon size={28} />
                        </div>
                        <div>
                          <span className="badge bg-gray-100 text-gray-600 mb-2">{service.category}</span>
                          <h3 className="text-xl font-black text-gray-900">{service.name}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.longDesc}</p>
                      <ul className="space-y-2 mb-6">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                            <CheckCircle size={15} className="text-sky-400 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                          <div className="text-xs text-gray-400 mb-0.5">Mulai dari</div>
                          <div className="text-xl font-black text-sky-600">
                            Rp {service.price.toLocaleString('id-ID')} <span className="text-sm font-medium text-gray-400">/ hari</span>
                          </div>
                        </div>
                        <Link href={`/booking?service=${service.slug}`} className="btn-primary flex items-center gap-2 text-sm py-2.5">
                          Pesan <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <div className="mt-16 bg-sky-600 rounded-3xl p-10 text-white text-center">
              <h2 className="text-3xl font-black mb-3" style={{ fontFamily: 'Nunito, sans-serif' }}>Tidak Yakin Layanan yang Tepat?</h2>
              <p className="text-sky-100 text-lg mb-6 max-w-xl mx-auto">
                Konsultasikan kebutuhan Anda dengan tim kami. Gratis, tanpa komitmen.
              </p>
              <a href="https://wa.me/6281234567890?text=Halo%20Siaprawat%2C%20saya%20ingin%20konsultasi%20layanan" target="_blank" rel="noopener noreferrer" className="bg-white text-sky-600 font-bold px-8 py-3.5 rounded-xl hover:bg-sky-50 transition-colors inline-block">
                Konsultasi via WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
