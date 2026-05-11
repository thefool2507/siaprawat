import Link from 'next/link'
import { Mail, Phone, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="80t" height="80" viewBox="150 150 500 500" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,800.000000) scale(0.100000,-0.100000)" fill="#FFFFFF" stroke="none"> <path d="M4890 5379 c-19 -6 -66 -17 -104 -25 -39 -8 -77 -21 -86 -29 -9 -8 -21 -15 -27 -15 -17 0 -116 -53 -143 -77 -14 -12 -44 -37 -67 -56 -95 -79 -243 -282 -243 -334 0 -10 -8 -30 -17 -43 -10 -14 -21 -54 -24 -90 -4 -36 -11 -93 -15 -128 -9 -84 12 -251 42 -324 13 -32 24 -66 24 -76 0 -11 7 -25 15 -32 8 -7 15 -18 15 -25 0 -6 9 -20 20 -30 11 -10 20 -23 20 -30 0 -7 10 -23 23 -37 12 -14 43 -50 70 -81 68 -80 255 -197 315 -197 38 0 65 -21 56 -43 -8 -21 -54 -47 -83 -47 -11 0 -22 -4 -26 -10 -3 -5 -36 -24 -73 -42 -37 -18 -85 -47 -108 -65 -23 -18 -44 -33 -48 -33 -8 0 -34 -20 -263 -200 -84 -66 -154 -120 -157 -120 -3 0 -49 -29 -102 -65 -54 -36 -101 -65 -106 -65 -5 0 -22 -10 -38 -21 -35 -27 -193 -24 -245 5 -16 8 -57 27 -90 42 -116 50 -267 132 -285 155 -3 3 -16 12 -29 19 -27 14 -214 152 -246 181 -53 49 -79 69 -87 69 -6 0 -21 9 -35 20 -51 40 -124 28 -183 -28 -58 -56 -104 -136 -96 -167 11 -42 273 -290 452 -429 60 -47 121 -94 136 -105 14 -12 30 -21 35 -21 5 0 32 -16 62 -35 29 -19 57 -35 62 -35 6 0 31 -11 57 -25 26 -14 56 -25 67 -25 11 0 30 -7 41 -15 12 -8 54 -18 95 -24 41 -5 106 -15 146 -22 76 -14 247 14 283 46 8 7 29 16 47 20 17 3 37 12 43 20 6 7 22 16 35 19 26 7 211 129 294 195 29 22 56 41 60 41 3 0 27 20 53 45 26 25 65 57 86 72 21 16 65 48 98 73 99 75 206 150 279 195 55 34 159 32 274 -4 56 -18 103 -36 106 -42 4 -5 14 -9 23 -9 10 0 33 -8 52 -19 19 -10 46 -22 58 -26 13 -4 44 -21 69 -38 25 -18 69 -48 98 -67 30 -19 78 -53 107 -76 29 -22 89 -67 133 -100 44 -32 82 -61 85 -64 52 -52 138 -74 171 -44 56 53 69 69 94 120 41 84 33 134 -31 190 -27 24 -57 50 -66 58 -10 9 -68 54 -130 100 -62 47 -145 110 -184 140 -39 30 -82 60 -97 67 -15 7 -27 15 -27 18 0 7 -126 72 -211 109 -25 11 -67 23 -93 27 -76 12 -74 85 2 85 118 0 407 258 465 415 8 22 21 56 27 75 7 19 21 56 32 82 27 70 26 314 -3 418 -44 160 -102 260 -225 385 -121 125 -283 225 -363 225 -18 0 -46 7 -64 17 -38 20 -252 28 -307 12z m340 -351 c127 -67 251 -188 275 -269 4 -13 14 -35 24 -49 13 -20 16 -53 16 -175 0 -168 4 -155 -91 -315 -50 -86 -157 -165 -276 -205 -98 -33 -258 -36 -315 -5 -21 11 -43 20 -49 20 -19 0 -97 47 -138 84 -21 20 -42 37 -45 38 -3 2 -20 21 -37 43 -140 184 -154 435 -34 617 68 103 176 191 280 228 107 39 306 32 390 -12z"/> <path d="M2265 5375 c-5 -1 -44 -8 -85 -15 -79 -14 -133 -40 -227 -112 -29 -22 -53 -46 -53 -53 0 -6 -9 -20 -20 -30 -11 -10 -20 -23 -20 -30 0 -7 -9 -20 -20 -30 -11 -10 -20 -24 -20 -31 0 -7 -10 -32 -21 -54 -32 -62 -32 -341 0 -393 11 -19 21 -43 22 -53 0 -21 34 -82 93 -169 22 -32 115 -135 206 -229 92 -94 189 -196 216 -227 27 -30 66 -74 86 -97 20 -23 52 -68 72 -100 85 -139 165 -165 244 -76 23 27 58 72 77 100 32 47 55 75 229 264 82 89 140 146 153 151 35 14 219 252 259 336 102 213 93 448 -25 618 -39 57 -136 151 -166 161 -11 4 -31 15 -44 25 -13 11 -33 19 -45 19 -11 0 -52 7 -89 16 -63 16 -72 16 -127 0 -33 -9 -70 -16 -84 -16 -13 0 -34 -8 -47 -18 -13 -10 -35 -23 -49 -29 -14 -6 -46 -29 -72 -52 -58 -52 -78 -51 -129 1 -43 45 -138 98 -174 98 -12 0 -42 7 -65 15 -42 15 -55 17 -75 10z m121 -343 c38 -31 50 -48 94 -144 86 -188 242 -190 330 -4 72 150 124 192 230 184 74 -5 117 -41 162 -136 32 -67 33 -168 3 -217 -7 -11 -16 -31 -20 -44 -15 -51 -96 -151 -245 -300 -141 -142 -187 -192 -260 -281 -32 -40 -41 -38 -81 18 -18 26 -109 124 -201 217 -163 166 -248 263 -248 283 0 5 -9 20 -19 34 -11 13 -23 36 -26 51 -4 14 -13 31 -21 38 -22 19 -19 141 6 186 11 21 20 44 20 51 0 7 7 15 15 18 8 3 17 14 20 24 21 67 168 80 241 22z"/> </g> </svg>
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
              <a href="https://instagram.com/siaprawatcenter" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors duration-200">
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
                <span>+62 895-2012-4809</span>
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
                <span>@siaprawatcenter</span>
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
