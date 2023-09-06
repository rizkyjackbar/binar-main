// Definisikan kelas dasar Kendaraan
class Kendaraan {
  constructor(merk, jenis, roda) {
    this.merk = merk;
    this.jenis = jenis;
    this.roda = roda;
    this.kecepatan = 0;
    this.gigi = "N";
  }

  maju() {
    this.kecepatan = 30; // Set kecepatan saat maju
  }

  mundur() {
    this.kecepatan = -10; // Set kecepatan saat mundur
  }

  pindahGigi(gigi) {
    this.gigi = gigi;
  }

  infoKendaraan() {
    return `Merk: ${this.merk}, Jenis: ${this.jenis}, Roda: ${this.roda}, Kecepatan: ${this.kecepatan} km/h, Gigi: ${this.gigi}`;
  }
}

// Definisikan kelas Mobil yang merupakan turunan dari Kendaraan
class Mobil extends Kendaraan {
  constructor(merk, roda) {
    super(merk, "Mobil", roda);
  }

  klakson() {
    return "Tin tin!";
  }
}

// Definisikan kelas Motor yang merupakan turunan dari Kendaraan
class Motor extends Kendaraan {
  constructor(merk) {
    super(merk, "Motor", 2);
  }

  klakson() {
    return "Tet tet!";
  }
}

// Contoh penggunaan
const mobil = new Mobil("Toyota", 4);
console.log(mobil.infoKendaraan()); // Output: Merk: Toyota, Jenis: Mobil, Roda: 4, Kecepatan: 0 km/h, Gigi: N

mobil.maju();
console.log(mobil.infoKendaraan()); // Output: Merk: Toyota, Jenis: Mobil, Roda: 4, Kecepatan: 30 km/h, Gigi: N

mobil.pindahGigi("D");
console.log(mobil.infoKendaraan()); // Output: Merk: Toyota, Jenis: Mobil, Roda: 4, Kecepatan: 30 km/h, Gigi: D

console.log(mobil.klakson()); // Output: Tin tin!

const motor = new Motor("Honda");
console.log(motor.infoKendaraan()); // Output: Merk: Honda, Jenis: Motor, Roda: 2, Kecepatan: 0 km/h, Gigi: N

motor.mundur();
console.log(motor.infoKendaraan()); // Output: Merk: Honda, Jenis: Motor, Roda: 2, Kecepatan: -10 km/h, Gigi: N

console.log(motor.klakson()); // Output: Tet tet!
