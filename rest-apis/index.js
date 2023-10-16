const express = require('express');
const {v4: uuidv4} = require('uuid');
// const feeds = require('./feed.js');
// const fs = require('fs')
// const feeds = JSON.parse(fs.readFileSync('feed.json', 'utf-8'))

// const middleware = require('./middleware');
// const handler = require('./handler')

const feedController = require('./app/controllers/feed.js')
const userController = require('./app/controllers/user.js')

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('API is already running');
})

// REST Endpoints

// app.get('/feeds', handler.handleListFeeds)
app.get('/feeds', feedController.list);

// app.get('/feeds/:id', middleware.findAndSetFeedsById, handler.handleDetailFeeds)
app.get('/feeds/:id', feedController.findAndSetFeedsById, feedController.detail);

// app.delete('/feeds/:id', middleware.findAndSetFeedsById, handler.handleDeleteFeeds)
app.delete('/feeds/:id', feedController.findAndSetFeedsById, feedController.destroy);

// app.post('/feeds', handler.handlePostFeeds)
app.post('/feeds', feedController.create);

// app.put('/feeds/:id', middleware.findAndSetFeedsById, handler.handlePutFeeds)
app.put('/feeds/:id', feedController.findAndSetFeedsById, feedController.update);

app.get('*', (req,res)=>{
    res.status(404).send('404 Not Found');
})

app.post('/register', userController.register);

app.post('/login', userController.login);

app.listen(PORT, () => console.log('Listening on http://localhost:3000'))


