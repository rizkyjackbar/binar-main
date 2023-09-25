Repositori Untuk Tantangan 3

Langkah membuat Tantangan 3

Buat Rest API dengan Express

1. Buat folder baru
2. Init proyek node, dengan menjalankan perintah:
    `npm init -y` atau `yarn init`
3. Buat server http menggunakan express
    - Instal express, dengan menjalankan perintah:
        `npm instal express`
    - Buat file utama js baru (index.js)
        - Jangan lupa untuk mengimpor express
        - Buat aplikasi express
        - Mulailah mendengarkan
4. Jalankan server http, dengan menjalankan perintah
    `indeks script.js`
    - Untuk membuat auto restart kita bisa menggunakan nodemon
        - instal nodemon: `npm instal nodemon`
        - Untuk menjalankan server http menggunakan nodemon: `nodemon index.js`
        - Untuk menjalankannya melalui custom script, kita dapat menambahkannya di file package.json
            - Tambahkan skrip baru dengan perintah: `nodemon index.js`
            - Misalnya, di dalam skrip: "start" : "nodemon index.js"
            - Untuk menjalankan nya, mengguanakan perintah: `nodemon index.js`
5. Tambahkan penangan permintaan untuk url GET '/'
6. Untuk menambahkan routing default, kita dapat menambahkan url "*". Ini akan menangkap semua rute yang tidak ditemukan
7. Maaf ka untuk middleware nya saya hanya make di 2 endpoint saja, yaitu di listCars dan listCarsById