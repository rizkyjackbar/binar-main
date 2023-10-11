const express = require('express');
const app = express();
const port = 3300;
const { isFirstPingMiddleware } = require('./middleware');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', isFirstPingMiddleware);
app.use('/todos', require('./controllers/todoController'));

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
