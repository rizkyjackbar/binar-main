README untuk Challenge4 (Kak haris maaf, readme nya pake bahasa indo, aku kurang bisa bahasa inggris)

## Instalasi

1. Clone repositori. ('git clone https://github.com/rizkyjackbar/binar-main.git')
2. Jalankan `npm install` untuk menginstal dependensi.

## Penggunaan

1. Jalankan aplikasi dengan perintah `npx nodemon app.js`.
2. Buka browser dan akses `http://localhost:4000` untuk melihat halaman utama.

## Endpoint
# REST API untuk Manajemen Data Mobil

Berikut adalah daftar REST API yang dapat digunakan untuk melakukan manajemen data mobil.

## Ping

- **URL**: `/`
- **Method**: `GET`
- **Deskripsi**: Mengirim permintaan GET ke URL ini akan memberikan respons JSON yang menunjukkan bahwa server berjalan dengan sukses.
- **Contoh Respons Sukses**:
  ```json
  { "message": "Ping Successfully" }

1. Menambahkan Data Mobil ("/api/cars")
2. Memodifikasi Data Mobil ("/api/cars/:id")
3. Menghapus Data Mobil ("/api/cars/:id")
4. Mendapatkan Data Mobil Berdasarkan ID ("/api/cars/:id")
5. Melihat Daftar Mobil ("/api/cars")


link ERD : https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1LrHQQaQyCFhwVWXjtc-Wl4p0UjW4o-yN