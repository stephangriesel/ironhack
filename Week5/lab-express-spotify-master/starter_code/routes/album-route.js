const express = require('express');
const router = express.Router();

const spotifyApi = require('../models/spotifyApi')

router.get('/albums', (req, res) => {
    res.render('albums')
})

module.exports = router;