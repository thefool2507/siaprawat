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
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sky-gradient rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
              <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
                <path d="M12 22 Q20 28 28 22" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
                <circle cx="27" cy="14" r="5" stroke="white" strokeWidth="3" fill="none"/>
                <path d="M9 16 Q9 10 14 10 Q16 10 17 12 Q18 10 20 10 Q25 10 25 16 Q25 20 17 24 Q9 20 9 16Z" fill="white"/>
              </svg>
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
