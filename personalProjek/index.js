// Import library Express.js
const express = require("express");

// Inisialisasi aplikasi Express
const app = express();

// Middleware untuk mengizinkan aplikasi menerima JSON
app.use(express.json());

// Anda bisa menggunakan port lain jika diperlukan
const PORT = 9000;

// carsList sementara untuk menyimpan informasi
let carsList = [
{
    id: "6e2bc663-5197-441a-957b-bc75e4a2da7c",
    image: "./images/car01.min.jpg",
    rentPerDay: 200000,
    capacity: 2,
    description:
    " Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter.",
    availableAt: "2022-03-23T15:49:05.563Z",
},
{
    id: "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
    image: "./images/car02.min.jpg",
    rentPerDay: 800000,
    capacity: 6,
    description:
    " Rear passenger map pockets. Electrochromic rearview mirror. Dual chrome exhaust tips. Locking glove box.",
    availableAt: "2022-03-23T15:49:05.563Z",
},
{
    id: "bf6b5c43-1377-4ae0-8908-310c64266f81",
    image: "./images/car03.min.jpg",
    rentPerDay: 900000,
    capacity: 6,
    description:
    " Driver & front passenger map pockets. Direct-type tire pressure monitor system. Cargo area lamp. Glove box lamp.",
    availableAt: "2022-03-23T15:49:05.563Z",
},
{
    id: "5b67f1d7-92d4-41c7-8577-4435740aadf1",
    image: "./images/car04.min.jpg",
    rentPerDay: 900000,
    capacity: 6,
    description: ' 6.1L SRT V8 "Hemi" engine.',
    availableAt: "2022-03-23T15:49:05.563Z",
},
{
    id: "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
    image: "./images/car05.min.jpg",
    rentPerDay: 200000,
    capacity: 2,
    description:
    " Body color sill extension. Torsion beam rear suspension w/stabilizer bar. Front & rear passenger folding assist grips.",
    availableAt: "2022-03-23T15:49:05.563Z",
},
{
    id: "3eead6db-c536-406b-9bc5-85d4c6e38a76",
    image: "./images/car06.min.jpg",
    rentPerDay: 900000,
    capacity: 4,
    description:
    " Tilt steering column. Carpeted cargo area. Tip start system. Leather-wrapped shift knob.",
    availableAt: "2022-03-23T15:49:05.563Z",
},
{
    id: "752685ce-dd39-40e5-9af5-93fdd36dea7e",
    image: "./images/car07.min.jpg",
    rentPerDay: 900000,
    capacity: 4,
    description:
    " Silver finish interior door handles. 160-amp alternator. Tire pressure monitoring system (TPMS). Cloth covered headliner.",
    availableAt: "2022-03-23T15:49:05.563Z",
},
{
    id: "d97e0af5-2728-4ce3-ba7f-9d83a0837db6",
    image: "./images/car08.min.jpg",
    rentPerDay: 300000,
    capacity: 2,
    description:
    " XM satellite radio receiver -inc: 90 day trial subscription. Dual front illuminated visor vanity mirrors.",
    availableAt: "2022-03-23T15:49:05.563Z",
},
{
    id: "0d5de078-a5fc-456b-9487-47eb450a01c6",
    image: "./images/car09.min.jpg",
    rentPerDay: 1000000,
    capacity: 6,
    description:
    " Rear reading & courtesy lamps. Zone body construction -inc: front/rear crumple zones, hood deformation point.",
    availableAt: "2022-03-23T15:49:05.563Z",
},
];

// Route untuk request ping
app.get("/", (req, res) => {
  res.json({ message: "Ping successfully" });
});

// Endpoint untuk mendapatkan semua car
app.get("/cars", (req, res) => {
  res.json(carsList);
});

// Endpoint untuk mendapatkan car berdasarkan ID
app.get("/cars/:id", (req, res) => {
  const id = req.params.id;
  const car = carsList.find((car) => car.id === id);

  if (!car) {
    return res.status(404).json({ error: "Car not found" });
  }

  res.json(car);
});

// Endpoint untuk menambahkan car baru
app.post("/cars", (req, res) => {
  const newCar = req.body;
  carsList.push(newCar);
  res.status(201).json(newCar);
});

// Endpoint untuk mengubah car berdasarkan ID
app.put("/cars/:id", (req, res) => {
  const id = req.params.id; // Tidak perlu parseInt
  const updatedCar = req.body;
  const index = carsList.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Car not found" });
  }

  carsList[index] = updatedCar;
  res.json(updatedCar);
});

// Endpoint untuk menghapus car berdasarkan ID
app.delete("/cars/:id", (req, res) => {
  const id = req.params.id; // Tidak perlu parseInt
  const index = carsList.findIndex((car) => car.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Car not found" });
  }

  carsList.splice(index, 1);
  res.status(204).send();
});

app.get("*", (req, res) => {
  res.status(404).send("404 Not Found");
});

// Jalankan server pada port yang telah ditentukan
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
