const { Todo } = require('./models');

const seedData = [
  { task: 'Belajar Node.js' },
  { task: 'Makan siang' },
  { task: 'Beli buah' },
];

async function seed() {
  try {
    await Todo.bulkCreate(seedData);
    console.log('Data berhasil ditambahkan ke tabel todos.');
  } catch (err) {
    console.error('Gagal menambahkan data:', err);
  } finally {
    process.exit(); // Keluar setelah selesai
  }
}

seed();