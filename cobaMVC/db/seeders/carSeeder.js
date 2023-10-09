const { Car } = require("../models");

const seedCars = async () => {
  try {
    const cars = [
      {
        name: "Mobil A",
        type: "small",
        image: "mobil_a.jpg",
        capacity: 4,
        rentPerDay: 50.0,
        description: "Mobil kecil dengan bahan bakar efisien.",
        availableAt: "2023-10-05",
      },
      {
        name: "Mobil B",
        type: "medium",
        image: "mobil_b.jpg",
        capacity: 5,
        rentPerDay: 75.0,
        description: "Mobil sedang dengan ruang yang luas.",
        availableAt: "2023-10-06",
      },
      {
        name: "Mobil C",
        type: "large",
        image: "mobil_c.jpg",
        capacity: 7,
        rentPerDay: 100.0,
        description: "Mobil besar untuk perjalanan keluarga.",
        availableAt: "2023-10-07",
      },
    ];

    for (const carData of cars) {
      await Car.create(carData);
    }

    console.log("Seeder: Data mobil berhasil ditambahkan.");
  } catch (error) {
    console.error("Seeder error:", error);
  }
};

seedCars();
