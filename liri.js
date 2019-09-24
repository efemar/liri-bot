
//TODO: install de dotenv package
require("dotenv").config();


var keys = require("./keys.js");
var axios = require("axios");

//how to call the spotify and OMDB key
var spotify = new Spotify(keys.spotify);
var omdb = new OMDB(keys.omdb);



//TODO:
// concert-this <artist/band name here>`
//calls a request from Bands in Town





//cames back with a response with name of venue, venue location, date of the event (use moment for this)
//need to install the band's node package
//need to install

//spotify-this-song '<song name here>'
//calls a request from spotify
//output is: artist, the song's name, a preview link of the song, the album that the song is from
//need to install the spotify package


//movie-this '<movie name here>'
//calls a request from OMDB
//output: title, year, IMBDB, rotten, country, language, plot, actors
//if no movie is defined, "Mr Nobody is the default


//do-what-it-says
//call the random.txt file