// MODE SEMENTARA: "Slot Interview Terakhir".
// Ubah AKTIF ke false untuk mengembalikan halaman ke tampilan semula (kalender koordinator).
export const slotTerakhir = {
  AKTIF: true,
  program: 'Program Layanan Makanan OUR BLOOMING ACADEMY',
  tanggal: 'RABU, 2 Desember 2026',
  jam: '11:00 WIB',
  meet: 'meet.google.com/fiw-wzqv-mbo',
  instagram: 'https://www.instagram.com/',
}

const FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSeybsTGAtH7uaEjDUR22NsxWbcau7TYRv3GcG2fRjPq_yzGgA/viewform'

// Kolom form Tanggal, Jam, dan Tautan Meet terisi otomatis dari data di atas.
export const absenUrl =
  FORM +
  '?usp=pp_url' +
  `&entry.1812624385=${encodeURIComponent(slotTerakhir.tanggal)}` +
  `&entry.169046559=${encodeURIComponent(slotTerakhir.jam)}` +
  `&entry.553226484=${encodeURIComponent('https://' + slotTerakhir.meet)}`
