// Import library Express.js
const express = require('express');

// Inisialisasi aplikasi Express
const app = express();

// Middleware untuk mengizinkan aplikasi menerima JSON
app.use(express.json());

// Anda bisa menggunakan port lain jika diperlukan
const PORT = 9000;

// Data sementara untuk menyimpan informasi
let data = [
  { id: 1, name: 'Car 1' },
  { id: 2, name: 'Car 2' },
  { id: 3, name: 'Car 3' },
];

// Route untuk request ping
app.get('/', (req, res) => {
  res.json({ message: 'Ping successfully' });
});

// Endpoint untuk mendapatkan semua car
app.get('/cars', (req, res) => {
  res.json(data);
});

// Endpoint untuk mendapatkan car berdasarkan ID
app.get('/cars/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const car = data.find(item => item.id === id);

  if (!car) {
    return res.status(404).json({ error: 'Car not found' });
  }

  res.json(car);
});

// Endpoint untuk menambahkan car baru
app.post('/cars', (req, res) => {
  const newCar = req.body;
  data.push(newCar);
  res.status(201).json(newCar);
});

// Endpoint untuk mengubah car berdasarkan ID
app.put('/cars/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedCar = req.body;
  const index = data.findIndex(item => item.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Car not found' });
  }

  data[index] = updatedCar;
  res.json(updatedCar);
});

// Endpoint untuk menghapus car berdasarkan ID
app.delete('/cars/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex(item => item.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Car not found' });
  }

  data.splice(index, 1);
  res.status(204).send();
});

// Port yang digunakan oleh server
// const port = process.env.PORT || 9000;

// Jalankan server pada port yang telah ditentukan
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
