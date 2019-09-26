

require("dotenv").config();


var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var fs = require("fs")
var moment = require("moment")

var command = process.argv[2];
var artist = process.argv.slice(3).join("-");
var movieName = process.argv.slice(3).join("-");

if (!movieName) {
    movieName = "Mr. Nobody";
}

var songName = process.argv.slice(3).join(" ");


var bandsintownQuery = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
var omdbQuery = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";



function searchSpotifyNoTrack() {

    var spotify = new Spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secret
    });
    spotify
        .search({ type: "track", query: "The Sign" })
        .then(function (response) {

            console.log ("Artist: " + "Ace of Base")
            console.log("Song: " + "The Sign") 
            console.log("Url: " + response.tracks.items[5].album.external_urls.spotify)
            console.log("Album Name: " + "Happy Nation")
            // console.log("\n-----------------\n")


        })
        .catch(function (err) {
            console.log(err);
        });
}


function searchSpotify(songName) {
    var spotify = new Spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secret
    });
    spotify
        .search({ type: 'track', query: songName })
        .then(function (response) {

            console.log(JSON.stringify(response.tracks.items.length))
            //console.log(JSON.stringify(response.tracks.items[0], null, 2))
            //console.log(response.tracks)
            // console.log ("Artist: " + response.tracks.items[0].album.artists[0].name)
            // console.log("Song: " + songName)
            // console.log("Url: " + response.tracks.items[0].album.external_urls.spotify)
            // console.log("Album Name: " + response.tracks.items[0].album.name)
            // console.log("\n-----------------\n")


            // if (response.tracks.items.length === 0) {
            //     songName = "The Sign"
            // }

            for (var i = 0; i < response.tracks.items.length; i++) {
                printTrack(response.tracks.items[i])
            }

        })
        .catch(function (err) {
            console.log(err);
        });
}

function printTrack(track) {
    var artist = track.album.artists[0].name
    var song = songName
    var spotifyUrl = track.album.external_urls.spotify
    var albumName = track.album.name
    console.log("Artist: " + artist)
    console.log("Song: " + song)
    console.log("Url: " + spotifyUrl)
    console.log("Album Name: " + albumName)
    console.log("\n-----------------\n")
}


switch (command) {
    case "concert-this":
        axios.get(bandsintownQuery).then(
            function (response) {
                //console.log(JSON.stringify(response.data, null, 2));

                //var band = response.data[0]

                for (var i = 0; i < response.data.length; i++) {
                    console.log("Band's Name: " + artist)
                    console.log("Venue Name: " + response.data[i].venue.name)
                    console.log("Venue Location: " + response.data[i].venue.city)
                    console.log("Date of Event: " + moment(response.data[i].datetime, moment.ISO_8601).format("MM/DD/YYYY"))
                    console.log("\n-----------------\n")
                }


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
        break;

    case "movie-this":
        axios.get(omdbQuery)
            .then(
                function (response) {
                    console.log(JSON.stringify(response.data, null, 2));
                    console.log("Title: " + response.data.Title)
                    console.log("Year: " + response.data.Year)
                    console.log("IMBD Rating: " + response.data.imdbRating)
                    console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value)
                    console.log("Country where it was produced: " + response.data.Ratings[1].Value)
                    console.log("Language: " + response.data.Language)
                    console.log("Plot: " + response.data.Plot)
                    console.log("Actors: " + response.data.Actors)


                })
            .catch(function (error) {
                console.log(error);
            });
        break;

    case "spotify-this-song":

        if (!songName) {
            songName = "The Sign";
            artist = "Ace of Base",
                searchSpotifyNoTrack(songName, artist);
        } else {
            searchSpotify(songName)
        }

    
        break;

    case "do-what-it-says":
        //call the random.txt file
        fs.readFile("random.txt", "utf8", function (err, data) {
            if (err) {
                return console.log(err);
            }
            data = data.split(", ");

            spotify(data[1]);


        })
}













