const express = require('express');
const app = express();

const PORT = 8000;

app.use(express.json())
const handleCreateCar = (req, res) => {
    res.status(200).send('Hello World!')
}

// app.get('/', (req, res)=>{
//     res.status(200).send('Hello World!')
// });


app.listen(PORT, ()=>{
    console.log("Server sudah berjalan, silahkan buka http://0.0.0.0:%d", PORT)
})