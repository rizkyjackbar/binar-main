// Import library Express.js
const express = require('express');

// Inisialisasi aplikasi Express
const app = express();

// Middleware untuk mengizinkan aplikasi menerima JSON
app.use(express.json());

const PORT = 9000;

// Data sementara untuk menyimpan informasi
let data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// Endpoint untuk mendapatkan semua item
app.get('/items', (req, res) => {
  res.json(data);
});

// Endpoint untuk mendapatkan item berdasarkan ID
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = data.find(item => item.id === id);

  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }

  res.json(item);
});

// Endpoint untuk menambahkan item baru
app.post('/items', (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  res.status(201).json(newItem);
});

// Endpoint untuk mengubah item berdasarkan ID
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  const index = data.findIndex(item => item.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  data[index] = updatedItem;
  res.json(updatedItem);
});

// Endpoint untuk menghapus item berdasarkan ID
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = data.findIndex(item => item.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Item not found' });
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
