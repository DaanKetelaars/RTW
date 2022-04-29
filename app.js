const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(http)
const fetch = require('node-fetch')
require('dotenv').config()

const port = process.env.PORT || 8282;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.resolve('public')))

const apiKey = process.env.API_KEY
let url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=50&q=meme`
console.log(url);

app.get("/", (req, res) => {
    const key = `${url}`
    fetch(key)
        .then(async response => {
            const data = await response.json()
            const items = data.items;
            console.log(items);
            res.render('home', {})
        })
});

io.on('connection', (socket) => {
    console.log('connected')
    socket.on('message', (evt) => {
        console.log(evt)
        socket.broadcast.emit('message', evt)
    })
})

http.listen(port, () => console.log('listening on port ' + port));