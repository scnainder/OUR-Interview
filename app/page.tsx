export default function Home() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            OUR Blooming Academy
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-100">
            Pesan Jadwal Interview
          </h2>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Silahkan pilih tanggal dari kalender di bawah ini
            </h3>

            <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded mb-8">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-700 font-bold mt-1">•</span>
                  <span>Pilih salah satu kalender yang sesuai dengan jadwal Anda.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-700 font-bold mt-1">•</span>
                  <span>Jika kalender penuh, silahkan cari di kalender lain.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-700 font-bold mt-1">•</span>
                  <span className="font-bold">Pesan hanya 1 jadwal saja. DILARANG pesan jadwal beberapa kali.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Selection Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">
            Pilih Salah Satu Kalender
          </h3>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Calendar 1 - Katrine */}
            <a
              href="https://calendar.app.google/RDULsyXvqm6GjT2Z7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-700 hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">📅</div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Kalender 1</h4>
              <p className="text-lg font-semibold text-blue-700 mb-4">Katrine</p>
              <p className="text-gray-600 mb-6">
                Klik link di bawah untuk melihat jadwal ketersediaan dan pesan interview
              </p>
              <div className="inline-block px-6 py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition">
                Buka Kalender Katrine →
              </div>
            </a>

            {/* Calendar 2 - Jana */}
            <a
              href="https://calendar.app.google/iw5yzZoaqKQz5WDB8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-700 hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">📅</div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Kalender 2</h4>
              <p className="text-lg font-semibold text-blue-700 mb-4">Jana</p>
              <p className="text-gray-600 mb-6">
                Klik link di bawah untuk melihat jadwal ketersediaan dan pesan interview
              </p>
              <div className="inline-block px-6 py-3 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition">
                Buka Kalender Jana →
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white border-l-4 border-red-600 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
              <span className="text-3xl">⚠️</span> Perhatian Penting
            </h3>
            <div className="space-y-4 text-gray-800">
              <p className="text-lg font-semibold">
                HARUS hadir interview sesuai dengan jadwal yang Anda pilih.
              </p>
              <p className="text-base leading-relaxed">
                Jika tidak hadir tanpa pemberitahuan sebelumnya, Anda akan kami <span className="font-bold text-red-600">BLACKLIST</span> dan tidak dapat mengikuti program OUR Blooming Academy lagi.
              </p>
              <p className="text-base text-gray-600 mt-6 pt-6 border-t border-gray-200">
                Hubungi kami sebelumnya jika ada keperluan atau tidak bisa hadir di jadwal yang sudah dipesan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-4">Pertanyaan? Hubungi kami:</p>
          <p className="text-blue-300 font-semibold text-xl">0811 6888 8844 (WhatsApp)</p>
          <p className="text-gray-400 text-sm mt-6">OUR Blooming Academy | Onodera User Run Co., Ltd</p>
        </div>
      </section>
    </>
  )
}
