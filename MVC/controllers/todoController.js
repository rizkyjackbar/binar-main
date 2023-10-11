const express = require('express');
const router = express.Router();
const { Todo } = require('../models');

// Mendapatkan semua tugas
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Gagal mengambil data tugas' });
  }
});

// Mendapatkan tugas berdasarkan ID
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findByPk(id);
    if (!todo) {
      res.status(404).json({ error: 'Tugas tidak ditemukan' });
      return;
    }
    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Gagal mengambil data tugas' });
  }
});

// Mengupdate tugas berdasarkan ID
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { task } = req.body;
  try {
    const todo = await Todo.findByPk(id);
    if (!todo) {
      res.status(404).json({ error: 'Tugas tidak ditemukan' });
      return;
    }
    await todo.update({ task });
    res.json({ message: 'Tugas berhasil diperbarui', todo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Gagal mengupdate data tugas' });
  }
});


// Menghapus tugas berdasarkan ID
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findByPk(id);
    if (!todo) {
      res.status(404).json({ error: 'Tugas tidak ditemukan' });
      return;
    }
    await todo.destroy();
    res.json({ message: 'Tugas dihapus' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Gagal menghapus data tugas' });
  }
});

module.exports = router;
