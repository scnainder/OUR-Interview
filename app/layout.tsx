import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OUR Blooming Academy - Pesan Jadwal Interview',
  description: 'Pesan jadwal interview dengan Katrine atau Jana di OUR Blooming Academy. Pilih tanggal yang sesuai dengan jadwal Anda.',
  keywords: 'interview, jadwal, OUR, Blooming Academy, Kaigo',
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
