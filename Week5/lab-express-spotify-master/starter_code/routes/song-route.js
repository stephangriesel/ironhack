const express = require('express');
const router = express.Router();

const spotifyApi = require('../models/spotifyApi')

router.get('/songs', (req, res) => {
    res.render('songs')
})

module.exports = router;