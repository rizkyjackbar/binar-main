const express = require("express");

const app = express();
const PORT = 8000;

let feeds = [
  {
    id: 1,
    title: "Hello World",
    content: "Hello Bali",
    category: "Education"
  },
  {
    id: 2,
    title: "Hello World",
    content: "Hello Jakarta",   
    category: "IT"
  },
  {
    id: 3,
    title: "Hello World",
    content: "Hello Yogyakarta",
    category: "Learning"
  },
];

app.get('/', (req, res) => {
  res.send("API is already running!");
});

app.get('/feeds', (req, res) => {
    const {category} = req.query

    if (category){
        const filtered = feeds.filter((i) => i.category == category)
        res.status(200).json(filtered)
    }
    res.status(200).json(feeds);
})

app.get('/feeds/:id', (req, res) => {
    const id = req.params.id;
    const item = feeds.filter((i)=>i.id == id);
    res.json(item);
})


app.delete('/feeds/:id', (req, res) => {
    const id = req.params.id;
    const list = feeds.filter((i)=>i.id != id);
    feeds = list;
    res.json({status: 'Successfully Deleted'});
})

// app.delete('/feeds/:id')

app.get("*", (req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(PORT, () =>
  console.log(`Server sudah jalan, di http://localhost:${PORT}`)
);
