import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OUR Blooming Academy - Interview Perawat Lansia',
  description: 'Pendaftaran Perawat Lansia diperpanjang. Pesan interview mulai 18 November di OUR Blooming Academy.',
  keywords: 'interview, jadwal, OUR, Blooming Academy, Kaigo',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="flex flex-col min-h-screen bg-gray-50">
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}
