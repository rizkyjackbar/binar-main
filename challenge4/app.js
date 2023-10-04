const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const { Car } = require("./models");

const app = express();
const port = 4000;

app.use(bodyParser.json());

// Konfigurasi multer untuk penanganan pengunggahan gambar
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.json({ message: "Ping Successfully" });
});

// Rute untuk menambahkan data mobil dengan pengunggahan gambar
app.post("/api/cars", upload.single("image"), async (req, res) => {
  try {
    const { name, type, capacity, rentPerDay, description, availableAt } =
      req.body;
    const image = req.file.filename; // Mengambil nama gambar yang diunggah

    const car = await Car.create({
      name,
      type,
      image,
      capacity,
      rentPerDay,
      description,
      availableAt,
    });
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rute untuk memodifikasi data mobil
app.put("/api/cars/:id", async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) {
      return res.status(404).json({ error: "Mobil tidak ditemukan" });
    }
    await car.update(req.body);
    res.status(200).json(car);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rute untuk menghapus data mobil
app.delete("/api/cars/:id", async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) {
      return res.status(404).json({ error: "Mobil tidak ditemukan" });
    }
    await car.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Rute untuk mendapatkan data mobil berdasarkan ID
app.get("/api/cars/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const car = await Car.getById(id);
    res.status(200).json(car);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Rute untuk melihat daftar mobil
app.get("/api/cars", async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di port http://localhost:${port}`);
});
