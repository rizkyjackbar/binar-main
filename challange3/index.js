const express = require('express');
const app = express();
const port = 3000; // Anda bisa menggunakan port lain jika diperlukan

// Data array mobil (contoh data)
const cars = [
  { id: 1, brand: 'Toyota', model: 'Camry' },
  { id: 2, brand: 'Honda', model: 'Civic' },
  // Tambahkan data mobil lainnya sesuai kebutuhan
];

app.use(express.json());

// Route untuk request / (ping)
app.get('/', (req, res) => {
  res.json({ message: 'Ping successfully' });
});

// Route untuk request list cars
app.get('/list', (req, res) => {
  res.json(cars);
});

// Route untuk request detail cars berdasarkan ID
app.get('/detail/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const car = cars.find((c) => c.id === id);

  if (!car) {
    return res.status(404).json({ message: 'Car not found' });
  }

  res.json(car);
});

// Route untuk request create cars
app.post('/create', (req, res) => {
  const newCar = req.body;
  newCar.id = cars.length + 1; // ID baru adalah panjang array + 1
  cars.push(newCar);
  res.status(201).json(newCar);
});

// Route untuk request update cars berdasarkan ID
app.put('/update/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedCar = req.body;
  const index = cars.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Car not found' });
  }

  cars[index] = { ...cars[index], ...updatedCar };
  res.json(cars[index]);
});

// Route untuk request delete cars berdasarkan ID
app.delete('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = cars.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Car not found' });
  }

  const deletedCar = cars.splice(index, 1);
  res.json(deletedCar[0]);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
