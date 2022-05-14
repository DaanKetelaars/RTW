const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(http)
const fetch = require('node-fetch')
require('dotenv').config()

// const port = process.env.PORT;


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.resolve('public')))
const apiKey = process.env.API_KEY
let url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=10&q=`

app.get("/", (req, res) => {
    const key = `${url}${req.query.q}`
    console.log(key);
    fetch(key)
        .then(async response => {
            const data = await response.json()
            const items = data.items;
            res.render('home', {
                value: req.query.q,
                items
            })
        })
});



io.on('connection', (socket) => {
    console.log('A user just connected.');
    io.emit("connection")
    socket.on('disconnect', () => {
        console.log('A user has disconnected.');
    });
    socket.on('stop', () => {
        console.log('received: stop');
        io.emit('stop');
    });
    socket.on('playPause', () => {
        console.log('received: playPause');
        io.emit('playPause')
    })
    socket.on('message', (evt) => {
        console.log(evt)
        io.emit('message', evt)
    })
})

http.listen(process.env.PORT || 8282);