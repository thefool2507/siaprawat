'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, Bell, User, LogOut, ChevronDown } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'
import type { Profile } from '@/lib/supabase/types'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [user, setUser] = useState<Profile | null>(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    async function getUser() {
      const { data: { user: authUser } } = await supabase.auth.getUser()
      if (authUser) {
        const { data } = await supabase.from('profiles').select('*').eq('id', authUser.id).single()
        setUser(data)
      }
    }
    getUser()
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setUser(null)
    router.push('/')
    router.refresh()
  }

  const navLinks = [
    { href: '/layanan', label: 'Layanan' },
    { href: '/perawat', label: 'Perawat Kami' },
    { href: '/tentang', label: 'Tentang' },
    { href: '/kontak', label: 'Kontak' },
  ]

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 color-sky-50 rounded-xl flex items-center justify-center transition-all">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="150 150 500 500" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,800.000000) scale(0.100000,-0.100000)" fill="#00BFFF" stroke="none"> <path d="M4890 5379 c-19 -6 -66 -17 -104 -25 -39 -8 -77 -21 -86 -29 -9 -8 -21 -15 -27 -15 -17 0 -116 -53 -143 -77 -14 -12 -44 -37 -67 -56 -95 -79 -243 -282 -243 -334 0 -10 -8 -30 -17 -43 -10 -14 -21 -54 -24 -90 -4 -36 -11 -93 -15 -128 -9 -84 12 -251 42 -324 13 -32 24 -66 24 -76 0 -11 7 -25 15 -32 8 -7 15 -18 15 -25 0 -6 9 -20 20 -30 11 -10 20 -23 20 -30 0 -7 10 -23 23 -37 12 -14 43 -50 70 -81 68 -80 255 -197 315 -197 38 0 65 -21 56 -43 -8 -21 -54 -47 -83 -47 -11 0 -22 -4 -26 -10 -3 -5 -36 -24 -73 -42 -37 -18 -85 -47 -108 -65 -23 -18 -44 -33 -48 -33 -8 0 -34 -20 -263 -200 -84 -66 -154 -120 -157 -120 -3 0 -49 -29 -102 -65 -54 -36 -101 -65 -106 -65 -5 0 -22 -10 -38 -21 -35 -27 -193 -24 -245 5 -16 8 -57 27 -90 42 -116 50 -267 132 -285 155 -3 3 -16 12 -29 19 -27 14 -214 152 -246 181 -53 49 -79 69 -87 69 -6 0 -21 9 -35 20 -51 40 -124 28 -183 -28 -58 -56 -104 -136 -96 -167 11 -42 273 -290 452 -429 60 -47 121 -94 136 -105 14 -12 30 -21 35 -21 5 0 32 -16 62 -35 29 -19 57 -35 62 -35 6 0 31 -11 57 -25 26 -14 56 -25 67 -25 11 0 30 -7 41 -15 12 -8 54 -18 95 -24 41 -5 106 -15 146 -22 76 -14 247 14 283 46 8 7 29 16 47 20 17 3 37 12 43 20 6 7 22 16 35 19 26 7 211 129 294 195 29 22 56 41 60 41 3 0 27 20 53 45 26 25 65 57 86 72 21 16 65 48 98 73 99 75 206 150 279 195 55 34 159 32 274 -4 56 -18 103 -36 106 -42 4 -5 14 -9 23 -9 10 0 33 -8 52 -19 19 -10 46 -22 58 -26 13 -4 44 -21 69 -38 25 -18 69 -48 98 -67 30 -19 78 -53 107 -76 29 -22 89 -67 133 -100 44 -32 82 -61 85 -64 52 -52 138 -74 171 -44 56 53 69 69 94 120 41 84 33 134 -31 190 -27 24 -57 50 -66 58 -10 9 -68 54 -130 100 -62 47 -145 110 -184 140 -39 30 -82 60 -97 67 -15 7 -27 15 -27 18 0 7 -126 72 -211 109 -25 11 -67 23 -93 27 -76 12 -74 85 2 85 118 0 407 258 465 415 8 22 21 56 27 75 7 19 21 56 32 82 27 70 26 314 -3 418 -44 160 -102 260 -225 385 -121 125 -283 225 -363 225 -18 0 -46 7 -64 17 -38 20 -252 28 -307 12z m340 -351 c127 -67 251 -188 275 -269 4 -13 14 -35 24 -49 13 -20 16 -53 16 -175 0 -168 4 -155 -91 -315 -50 -86 -157 -165 -276 -205 -98 -33 -258 -36 -315 -5 -21 11 -43 20 -49 20 -19 0 -97 47 -138 84 -21 20 -42 37 -45 38 -3 2 -20 21 -37 43 -140 184 -154 435 -34 617 68 103 176 191 280 228 107 39 306 32 390 -12z"/> <path d="M2265 5375 c-5 -1 -44 -8 -85 -15 -79 -14 -133 -40 -227 -112 -29 -22 -53 -46 -53 -53 0 -6 -9 -20 -20 -30 -11 -10 -20 -23 -20 -30 0 -7 -9 -20 -20 -30 -11 -10 -20 -24 -20 -31 0 -7 -10 -32 -21 -54 -32 -62 -32 -341 0 -393 11 -19 21 -43 22 -53 0 -21 34 -82 93 -169 22 -32 115 -135 206 -229 92 -94 189 -196 216 -227 27 -30 66 -74 86 -97 20 -23 52 -68 72 -100 85 -139 165 -165 244 -76 23 27 58 72 77 100 32 47 55 75 229 264 82 89 140 146 153 151 35 14 219 252 259 336 102 213 93 448 -25 618 -39 57 -136 151 -166 161 -11 4 -31 15 -44 25 -13 11 -33 19 -45 19 -11 0 -52 7 -89 16 -63 16 -72 16 -127 0 -33 -9 -70 -16 -84 -16 -13 0 -34 -8 -47 -18 -13 -10 -35 -23 -49 -29 -14 -6 -46 -29 -72 -52 -58 -52 -78 -51 -129 1 -43 45 -138 98 -174 98 -12 0 -42 7 -65 15 -42 15 -55 17 -75 10z m121 -343 c38 -31 50 -48 94 -144 86 -188 242 -190 330 -4 72 150 124 192 230 184 74 -5 117 -41 162 -136 32 -67 33 -168 3 -217 -7 -11 -16 -31 -20 -44 -15 -51 -96 -151 -245 -300 -141 -142 -187 -192 -260 -281 -32 -40 -41 -38 -81 18 -18 26 -109 124 -201 217 -163 166 -248 263 -248 283 0 5 -9 20 -19 34 -11 13 -23 36 -26 51 -4 14 -13 31 -21 38 -22 19 -19 141 6 186 11 21 20 44 20 51 0 7 7 15 15 18 8 3 17 14 20 24 21 67 168 80 241 22z"/> </g> </svg>
            </div>
            <div>
              <span className="text-xl font-extrabold text-gray-900" style={{fontFamily: 'Nunito, sans-serif'}}>
                siaprawat
              </span>
              <div className="text-[10px] text-sky-500 font-semibold -mt-1 tracking-wide">
                Ready to Take Care.
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200',
                  pathname === link.href
                    ? 'bg-sky-50 text-sky-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 transition-all"
                >
                  <div className="w-8 h-8 sky-gradient rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    {user.full_name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{user.full_name.split(' ')[0]}</span>
                  <ChevronDown size={14} className="text-gray-400" />
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                    <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors" onClick={() => setShowDropdown(false)}>
                      <User size={15} /> Dashboard
                    </Link>
                    <Link href="/profil" className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors" onClick={() => setShowDropdown(false)}>
                      <Bell size={15} /> Profil Saya
                    </Link>
                    <div className="border-t border-gray-100 my-1" />
                    <button onClick={handleSignOut} className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors">
                      <LogOut size={15} /> Keluar
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/masuk" className="btn-ghost text-sm">Masuk</Link>
                <Link href="/daftar" className="btn-primary text-sm py-2.5">Daftar Gratis</Link>
              </>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-sky-50 hover:text-sky-600"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            {user ? (
              <>
                <Link href="/dashboard" className="btn-secondary text-center text-sm" onClick={() => setIsOpen(false)}>Dashboard</Link>
                <button onClick={handleSignOut} className="text-red-500 text-sm font-semibold py-2">Keluar</button>
              </>
            ) : (
              <>
                <Link href="/masuk" className="btn-secondary text-center text-sm" onClick={() => setIsOpen(false)}>Masuk</Link>
                <Link href="/daftar" className="btn-primary text-center text-sm" onClick={() => setIsOpen(false)}>Daftar Gratis</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
