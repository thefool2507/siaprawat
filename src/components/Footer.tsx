import Link from 'next/link'
import { Mail, Phone, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 sky-gradient rounded-xl flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
                  <path d="M12 22 Q20 28 28 22" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
                  <circle cx="27" cy="14" r="5" stroke="white" strokeWidth="3" fill="none"/>
                  <path d="M9 16 Q9 10 14 10 Q16 10 17 12 Q18 10 20 10 Q25 10 25 16 Q25 20 17 24 Q9 20 9 16Z" fill="white"/>
                </svg>
              </div>
              <div>
                <div className="text-xl font-extrabold" style={{fontFamily:'Nunito,sans-serif'}}>siaprawat</div>
                <div className="text-xs text-sky-400 font-semibold -mt-0.5">Ready to Take Care.</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Layanan perawatan profesional terpadu untuk lansia dan penyandang difabel. Perawat terlatih, bersertifikat, dan penuh dedikasi.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/siaprawat" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors duration-200">
                <span className="text-xs font-bold">IG</span>
              </a>
              <a href="mailto:siaprawatindonesia@gmail.com" className="w-9 h-9 bg-white/10 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wide uppercase">Layanan</h4>
            <ul className="space-y-2.5">
              {['Perawatan Lansia Harian', 'Perawatan Difabel', 'Fisioterapi Rumahan', 'Pendampingan Medis', 'Perawatan Pasca Operasi'].map(item => (
                <li key={item}>
                  <Link href="/layanan" className="text-gray-400 hover:text-sky-400 text-sm transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wide uppercase">Perusahaan</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Tentang Kami', href: '/tentang' },
                { label: 'Tim Perawat', href: '/perawat' },
                { label: 'Blog & Tips', href: '/blog' },
                { label: 'Karir', href: '/karir' },
                { label: 'Kebijakan Privasi', href: '/privasi' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-sky-400 text-sm transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm tracking-wide uppercase">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Phone size={15} className="text-sky-400 mt-0.5 shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Mail size={15} className="text-sky-400 mt-0.5 shrink-0" />
                <span>siaprawatindonesia@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={15} className="text-sky-400 mt-0.5 shrink-0" />
                <span>Jember, Jawa Timur, Indonesia</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                📷
                <span>@siaprawat</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Siaprawat. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1.5">
            Dibuat dengan untuk keluarga Indonesia
          </p>
        </div>
      </div>
    </footer>
  )
}
