const SpotifyWebApi = require('spotify-web-api-node');

// Credentials - move credentials to config file
const clientId = '358ec408641f4dbdb6e44e196262b599',
    clientSecret = '36ae7e70fe7a48a185451c9c25bbaf61';

const spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret
});

// Get access token
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err.message);
  })



module.exports = spotifyApi;