const express = require('express');
const { Pool } = require('pg');
const morgan = require('morgan');
const app = express();
const port = 3300;

app.use(morgan('dev')); // Middleware logging

app.set('view engine', 'ejs');

const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

app.use(express.urlencoded({ extended: false }));

app.use('/', require('./controllers/todoController')(pool));

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
