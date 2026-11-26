// Daftar kalender interview.
// Card di halaman utama hanya menampilkan yang `aktif: true`, sesuai urutan di bawah.
// Untuk menyembunyikan sebuah kalender: ubah `aktif` menjadi false (link tetap tersimpan
// di sini untuk dipakai lagi nanti). Untuk menampilkannya lagi: ubah kembali menjadi true.
export type Kalender = {
  nama: string
  link: string
  aktif: boolean
}

export const kalenderList: Kalender[] = [
  { nama: 'Anya', link: 'https://calendar.app.google/dmFvj3qem7CsibJD7', aktif: true },
  { nama: 'Katrine', link: 'https://calendar.app.google/RDULsyXvqm6GjT2Z7', aktif: true },
  { nama: 'Sekar', link: 'https://calendar.app.google/rkZN4dFC7BzpR3Bn7', aktif: true },
  { nama: 'Jana', link: 'https://calendar.app.google/PVK4VaqK5yXTZXoQA', aktif: true },
  // Disimpan untuk dipakai lagi nanti (tidak ditampilkan saat ini).
  { nama: 'Reyza', link: 'https://calendar.app.google/78QPFfsfuTnWbFkX9', aktif: false },
]
