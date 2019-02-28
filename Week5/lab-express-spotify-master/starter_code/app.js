const express = require('express');
const hbs = require('hbs');
var SpotifyWebApi = require('spotify-web-api-node');



const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// Credentials - move credentials to config file
const clientId = '358ec408641f4dbdb6e44e196262b599',
    clientSecret = '36ae7e70fe7a48a185451c9c25bbaf61';

const spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret
});

// Retrieve an access token
spotifyApi.clientCredentialsGrant()
  .then( data => {
    spotifyApi.setAccessToken(data.body['access_token']);
  })
  .catch(error => {
    console.log('Something went wrong when retrieving an access token', error);
  })

// setting the spotify-api goes here:






// the routes go here:



app.listen(3010, () => console.log("My Spotify project running on port 3000 🎧 🥁 🎸 🔊"));
