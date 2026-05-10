import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Siaprawat – Layanan Perawatan Profesional Terpadu',
    template: '%s | Siaprawat',
  },
  description: 'Siaprawat menyediakan layanan perawatan profesional untuk lansia dan penyandang difabel. Perawat terlatih, terpercaya, dan siap melayani.',
  keywords: ['perawat lansia', 'perawat difabel', 'jasa perawatan', 'home care', 'siaprawat'],
  openGraph: {
    title: 'Siaprawat – Ready to Take Care.',
    description: 'Layanan perawatan profesional terpadu untuk lansia dan difabel.',
    locale: 'id_ID',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  )
}
