const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Anda bisa menggunakan port lain jika diperlukan

// Data array mobil (contoh data)
const cars = [
  {
    "id": "6e2bc663-5197-441a-957b-bc75e4a2da7c",
    "image": "./images/car01.min.jpg",
    "rentPerDay": 200000,
    "capacity": 2,
    "description": " Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter.",
    "availableAt": "2022-03-23T15:49:05.563Z"
  },
  {
    "id": "9ff03bbc-b18c-4ba7-8f3a-4c4b5c2f6c77",
    "image": "./images/car02.min.jpg",
    "rentPerDay": 800000,
    "capacity": 6,
    "description": " Rear passenger map pockets. Electrochromic rearview mirror. Dual chrome exhaust tips. Locking glove box.",
    "availableAt": "2022-03-23T15:49:05.563Z"
  },
  {
    "id": "bf6b5c43-1377-4ae0-8908-310c64266f81",
    "image": "./images/car03.min.jpg",
    "rentPerDay": 900000,
    "capacity": 6,
    "description": " Driver & front passenger map pockets. Direct-type tire pressure monitor system. Cargo area lamp. Glove box lamp.",
    "availableAt": "2022-03-23T15:49:05.563Z"
  },
  {
    "id": "5b67f1d7-92d4-41c7-8577-4435740aadf1",
    "image": "./images/car04.min.jpg",
    "rentPerDay": 900000,
    "capacity": 6,
    "description": " 6.1L SRT V8 \"Hemi\" engine.",
    "availableAt": "2022-03-23T15:49:05.563Z"
  },
  {
    "id": "23574b8f-3e89-4685-a348-67c1f7e5b3c4",
    "image": "./images/car05.min.jpg",
    "rentPerDay": 200000,
    "capacity": 2,
    "description": " Body color sill extension. Torsion beam rear suspension w/stabilizer bar. Front & rear passenger folding assist grips.",
    "availableAt": "2022-03-23T15:49:05.563Z"
  },
  {
    "id": "3eead6db-c536-406b-9bc5-85d4c6e38a76",
    "image": "./images/car06.min.jpg",
    "rentPerDay": 900000,
    "capacity": 4,
    "description": " Tilt steering column. Carpeted cargo area. Tip start system. Leather-wrapped shift knob.",
    "availableAt": "2022-03-23T15:49:05.563Z"
  },
  {
    "id": "752685ce-dd39-40e5-9af5-93fdd36dea7e",
    "image": "./images/car07.min.jpg",
    "rentPerDay": 900000,
    "capacity": 4,
    "description": " Silver finish interior door handles. 160-amp alternator. Tire pressure monitoring system (TPMS). Cloth covered headliner.",
    "availableAt": "2022-03-23T15:49:05.563Z"
  },
  {
    "id": "d97e0af5-2728-4ce3-ba7f-9d83a0837db6",
    "image": "./images/car08.min.jpg",
    "rentPerDay": 300000,
    "capacity": 2,
    "description": " XM satellite radio receiver -inc: 90 day trial subscription. Dual front illuminated visor vanity mirrors.",
    "availableAt": "2022-03-23T15:49:05.563Z"
  },
  {
    "id": "0d5de078-a5fc-456b-9487-47eb450a01c6",
    "image": "./images/car09.min.jpg",
    "rentPerDay": 1000000,
    "capacity": 6,
    "description": " Rear reading & courtesy lamps. Zone body construction -inc: front/rear crumple zones, hood deformation point.",
    "availableAt": "2022-03-23T15:49:05.563Z"
  }
];

const createCars = [];

app.use(express.json());
app.use(bodyParser.json());

// Route untuk request ping
app.get('/', (req, res) => {
  res.json({ message: 'Ping successfully' });
});

// Route untuk request list cars
app.get('/list', (req, res) => {
  res.json(cars);
});

app.get('/cars/:id', (req, res) => {
  const carId = req.params.id;
  const car = cars.find((car) => car.id === carId);

  if (!car) {
    return res.status(404).json({ message: 'Mobil tidak ditemukan' });
  }

  res.json(car);
});

// // Route untuk request create cars
app.post('/create-cars', (req, res) => {
  const newCar = req.body; // Data mobil baru dari permintaan POST
  createCars.push(newCar); // Menambahkan data mobil baru ke dalam array
  res.json(createCars); // Merespon dengan array yang berisi data mobil
});


// app.post('/create', (req, res) => {
//   const newCar = req.body;
//   newCar.id = cars.length + 1; // ID baru adalah panjang array + 1
//   cars.push(newCar);
//   res.status(201).json(newCar);
// });

// // Route untuk request update cars berdasarkan ID
// app.put('/update/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const updatedCar = req.body;
//   const index = cars.findIndex((c) => c.id === id);

//   if (index === -1) {
//     return res.status(404).json({ message: 'Car not found' });
//   }

//   cars[index] = { ...cars[index], ...updatedCar };
//   res.json(cars[index]);
// });

// // Route untuk request delete cars berdasarkan ID
// app.delete('/delete/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const index = cars.findIndex((c) => c.id === id);

//   if (index === -1) {
//     return res.status(404).json({ message: 'Car not found' });
//   }

//   const deletedCar = cars.splice(index, 1);
//   res.json(deletedCar[0]);
// });

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
