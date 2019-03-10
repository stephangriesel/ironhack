const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
const port = 3015;
const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

// Routes 
// Artists Route
const artistRoutes = require('./routes/artist-route')
app.use('/', artistRoutes)

// Song Route
const songRoutes = require('./routes/song-route')
app.use('/', songRoutes)

// Album Route
const albumRoutes = require('./routes/album-route')
app.use('/', albumRoutes)

// Index page
app.get('/', (req, res, next) => {
    res.render('index');
});

app.listen(port, () => console.log(`My Spotify project running on port ${port} 🎧 🥁 🎸 🔊`));
