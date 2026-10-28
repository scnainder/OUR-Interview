export default function Home() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-12 md:py-28">
        <div className="mx-auto px-5 sm:px-6 max-w-5xl">
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              OUR Blooming Academy
            </h1>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-blue-100 leading-snug">
              Pesan Jadwal Interview · Perawat Lansia
            </h2>
          </div>
        </div>
      </section>

      {/* Main Content Wrapper */}
      <section className="py-10 md:py-24 bg-white">
        <div className="mx-auto px-5 sm:px-6 max-w-4xl">
          {/* Extension notice */}
          <div className="mb-8 md:mb-12 bg-amber-50 border-2 border-amber-300 rounded-xl p-5 md:p-8">
            <p className="font-bold text-amber-900 text-lg md:text-xl leading-snug mb-2">
              📢 Pendaftaran Diperpanjang
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-800">
              Untuk bidang <span className="font-bold">Perawat Lansia</span>, pendaftaran kami perpanjang. Anda bisa memesan interview mulai dari <span className="font-bold">18 November</span>.
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-10 md:mb-20">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-8 leading-snug">
              Silahkan pilih tanggal dari kalender di bawah ini
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-gray-600 leading-relaxed mb-6 md:mb-8">
              Anda dapat memilih waktu interview yang sesuai dengan jadwal Anda. Pastikan memilih dengan hati-hati karena perubahan jadwal terbatas.
            </p>

            {/* Instructions Box */}
            <div className="bg-blue-50 border-l-4 border-blue-700 p-5 md:p-8 rounded-lg space-y-4">
              <p className="font-bold text-gray-900 text-base md:text-lg leading-relaxed">Instruksi Penting:</p>
              <ul className="space-y-5 text-gray-800">
                <li className="flex items-start gap-3 md:gap-4">
                  <span className="text-blue-700 font-bold text-xl md:text-2xl leading-snug flex-shrink-0 w-6 text-center">1</span>
                  <span className="text-base md:text-lg leading-relaxed">Buka kalender Katrine khusus Perawat Lansia dan pilih tanggal mulai 18 November.</span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <span className="text-blue-700 font-bold text-xl md:text-2xl leading-snug flex-shrink-0 w-6 text-center">2</span>
                  <span className="text-base md:text-lg leading-relaxed">Jika jadwal penuh, silahkan hubungi kami lewat WhatsApp.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-red-600 font-bold text-xl md:text-2xl leading-snug flex-shrink-0 w-6 text-center">⚠️</span>
                  <span className="text-base md:text-lg leading-relaxed font-semibold text-red-600">Pesan hanya 1 jadwal saja. DILARANG pesan jadwal beberapa kali.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* How to book (animated) */}
          <div className="mb-10 md:mb-20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900 leading-snug">
              Cara Memesan Interview
            </h3>
            <p className="text-center text-gray-600 text-base mb-6 md:mb-10">4 langkah mudah, hanya 1 menit.</p>

            <ol className="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
              {[
                { icon: '👆', title: 'Buka kalender', text: 'Tekan tombol "Buka Kalender Perawat Lansia" di bawah.' },
                { icon: '📅', title: 'Pilih tanggal', text: 'Pilih tanggal mulai 18 November yang tersedia.' },
                { icon: '🕐', title: 'Pilih jam', text: 'Pilih jam interview yang cocok dengan jadwal Anda.' },
                { icon: '✅', title: 'Isi data & pesan', text: 'Isi nama, email, dan nomor WhatsApp, lalu tekan Pesan.' },
              ].map((step, i) => (
                <li
                  key={step.title}
                  className="howto-step flex items-start gap-4 bg-white border-2 border-blue-200 rounded-xl p-4 md:p-5"
                  style={{ animationDelay: `${i * 2}s` }}
                >
                  <div className="howto-icon flex-shrink-0 w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center text-2xl relative" style={{ animationDelay: `${i * 2}s` }}>
                    {step.icon}
                    <span className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-yellow-300 text-blue-900 text-sm font-bold flex items-center justify-center">{i + 1}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-base md:text-lg leading-snug">{step.title}</p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-1">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Calendar Selection */}
          <div className="mb-10 md:mb-24">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 md:mb-16 text-gray-900 leading-snug">
              Pilih Waktu Interview Anda
            </h3>

            <div className="max-w-xl mx-auto">
              {/* Calendar 1 - Katrine */}
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1PZPh6eBuiuzBC3GNBMp0hEv7JVHe1fkVibhzkICw-lODxOgWzEsDkaxbHdTF2XyxYWPM2em3C"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border-2 border-blue-200 p-6 md:p-10 rounded-xl hover:border-blue-700 hover:shadow-xl transition duration-300"
              >
                <div className="flex items-start justify-between mb-4 md:mb-6">
                  <div className="text-4xl md:text-5xl">📅</div>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm">
                    Jadwal Interview
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-gray-900 mb-2">Katrine</h4>
                <p className="text-gray-600 text-sm font-medium mb-4 md:mb-6">Interview Coordinator · Perawat Lansia</p>

                <p className="text-gray-700 text-base leading-relaxed mb-6 md:mb-8">
                  Klik tombol di bawah untuk melihat jadwal ketersediaan Katrine untuk Perawat Lansia dan pesan interview Anda sekarang.
                </p>

                <div className="block w-full text-center px-6 py-4 min-h-[48px] bg-blue-700 text-white font-bold rounded-lg group-hover:bg-blue-800 transition">
                  Buka Kalender Perawat Lansia →
                </div>
              </a>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300 p-5 md:p-10 rounded-xl">
            <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
              <span className="text-3xl md:text-4xl flex-shrink-0">⚠️</span>
              <h3 className="text-xl md:text-2xl font-bold text-red-700 leading-snug">Perhatian Penting</h3>
            </div>

            <div className="space-y-4 text-gray-800">
              <p className="text-base md:text-lg font-semibold text-red-700 leading-relaxed">
                HARUS hadir interview sesuai dengan jadwal yang Anda pilih.
              </p>

              <p className="text-base leading-relaxed">
                Jika Anda tidak hadir tanpa memberikan pemberitahuan sebelumnya, Anda akan kami <span className="font-bold text-red-700">BLACKLIST</span> dan tidak dapat mengikuti program OUR Blooming Academy lagi.
              </p>

              <p className="text-base leading-relaxed pt-4 border-t border-red-300">
                <span className="font-semibold">Hubungi kami sebelumnya</span> jika ada keperluan atau tidak bisa hadir di jadwal yang sudah dipesan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 md:py-16 bg-blue-900 text-white">
        <div className="mx-auto px-5 sm:px-6 max-w-4xl text-center">
          <p className="text-base md:text-lg leading-relaxed mb-4 text-blue-100">Pertanyaan atau butuh bantuan?</p>
          <a
            href="https://wa.me/628116888844"
            className="inline-block py-3 text-xl sm:text-2xl md:text-3xl font-bold text-yellow-300 hover:text-yellow-200 transition"
          >
            0811 6888 8844 (WhatsApp)
          </a>
          <p className="text-sm text-blue-200 mt-6 md:mt-8 leading-relaxed">OUR Blooming Academy | Onodera User Run Co., Ltd</p>
        </div>
      </section>
    </>
  )
}
