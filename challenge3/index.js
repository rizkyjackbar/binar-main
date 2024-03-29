const express = require("express");
const app = express();
app.use(express.json());

const PORT = 3000;
const { carsListMiddleware } = require("./carsListMiddleware");
const { carMiddleware } = require("./carMiddleware");

const carsList = require("./cars.json");

app.get("/", (req, res) => {
  res.json({ message: "Ping Successfully" });
});

app.get("/cars", carsListMiddleware, (req, res) => {
  res.json(res.locals.carsList);
});

app.get("/cars/:id", carsListMiddleware, carMiddleware, (req, res) => {
  res.json(res.locals.car);
});

app.post("/cars", (req, res) => {
  const newCar = req.body;
  carsList.push(newCar);
  res.status(201).json(newCar);
});

app.put("/cars/:id", (req, res) => {
  const id = req.params.id;
  const updatedCar = req.body;
  const index = carsList.findIndex((item) => item.id == id);

  if (index === -1) {
    return res.status(404).json({ error: "Car not found" });
  }

  carsList[index] = updatedCar;
  res.json(updatedCar);
});

app.delete("/cars/:id", (req, res) => {
  const id = req.params.id;
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

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
