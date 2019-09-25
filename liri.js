
//TODO: install de dotenv package
require("dotenv").config();


var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');

//how to call the spotify and OMDB key

// var omdb = new OMDB(keys.omdb);

var command = process.argv[2];
var artist = process.argv.slice(3).join("-");
var movieName = process.argv.slice(3).join("-");
var songName = process.argv.slice(3).join(" ");

//TODO: Still NOT WORKING
var bandsintownQuery = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
//console.log(bandsintownURL);

var omdbQuery = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
//console.log(omdbURL);

//var spotifyQuery = 'All the Small Things'

switch (command) {
    case "concert-this":

        // concert-this <artist/band name here>`
        //calls a request from Bands in Town
        axios.get(bandsintownQuery).then(
            function (response) {
                console.log(JSON.stringify(response.data[0].venue.name, null, 2));
            })
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log("---------------Data---------------");
                    console.log(error.response.data);
                    console.log("---------------Status---------------");
                    console.log(error.response.status);
                    console.log("---------------Status---------------");
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an object that comes back with details pertaining to the error that occurred.
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error", error.message);
                }
                console.log(error.config);
            });
        //cames back with a response with name of venue, venue location, date of the event (use moment for this)









        break;

    //movie-this '<movie name here>'
    //calls a request from OMDB
    case "movie-this":
        axios.get(omdbQuery)
            .then(
                function (response) {
                    console.log(JSON.stringify(response.data, null, 2));



                })
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log("---------------Data---------------");
                    console.log(error.response.data);
                    console.log("---------------Status---------------");
                    console.log(error.response.status);
                    console.log("---------------Status---------------");
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an object that comes back with details pertaining to the error that occurred.
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error", error.message);
                }
                console.log(error.config);
            });


        //output: title, year, IMBDB, rotten, country, language, plot, actors
        //if no movie is defined, "Mr Nobody is the default



        break;

    case "spotify-this-song":
        //spotify-this-song '<song name here>'
        //calls a request from spotify

        var spotify = new Spotify({
            id: keys.spotify.id,
            secret: keys.spotify.secret
        });

        spotify
            .search({ type: 'track', query: songName })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (err) {
                console.log(err);
            });

    //output is: artist, the song's name, a preview link of the song, the album that the song is from








}













//do-what-it-says
//call the random.txt file


