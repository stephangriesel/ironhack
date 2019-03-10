const express = require('express');
const router = express.Router();

const spotifyApi = require('../models/spotifyApi')

router.get('/artists', (req, res) => {
    spotifyApi.searchArtists(req.query.artist)
    .then(data => {
      console.log("The received data from the API: ", data.body.artists.items);
      var artistsResult = data.body.artists.items;

      artistsResult.forEach( artist => console.log(artist.name))
      res.render('artists', {artists: data.body.artists.items});
    })
    .catch(err => {
      console.log("The error while searching artists occurred: ", err);
    })
})

module.exports = router;