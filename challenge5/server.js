const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const secureRoutes = require('./routes/secureRoutes');

app.use(express.json());

// Menggunakan rute user
app.use('/api', userRoutes);

// Menggunakan rute yang memerlukan autentikasi
app.use('/api/secure', secureRoutes);

const port = process.env.PORT || 8100;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
