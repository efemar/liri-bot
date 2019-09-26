# liri-bot

1. Overview of how this app works and why it was built

This app was built to streamline the searches for movies information, concerts and song information with a few command lines.

It requires that the user have internet access and terminal installed on their computer.

2. How the app is organized

 Via the command lines, the app is able to access information about concerts (Bands of Town API), movies (OMDB API), songs (spotify API), as well as take outside requests(files) to search songs (spotify API).

3. How to use this app

There are 4 commands that the user can type: 'concert-this', 'movie-this', 'spotify-this-song', 'do-what-it-says' to retrieve data.

Example 1:

node liri.js concert-this 'name-of-artist'

Result: It will provide a list of concert venues names, locations and dates of the concert

Example 2:

node liri.js movie-this 'name-of-movie'

Result: It will provide the Title, the Year, the IMBD rating, Rotten Tomatoes, the country where is was produced, the languages, the plot and the actors.

When no movie is defined: it will return information about the movie "Mr. Nobody"

Example 3:

node liri.js spotify-this 'name-of-song'

Result: It will display information on Artist and Album for each of the songs with that name.

When no song is specified: It will return information (Album, URL) about the song "The Sign" by Ace of Base

Example 4:

node liri.js do-what-it-says

Result: it reads an external file (random.txt) that contains a command (spotify-this-song) for the song "All Want it that Way". It will display the Album and the Artist for each of the songs found with that name

4. Link to the video of how it works:

https://drive.google.com/open?id=1uPQ9oB_cOPSZLZjmon-Kty7kltIjOvAF

5. Link to the deployed version of the app

https://efemar.github.io/liri-bot/.

6. Technologies used in the App

This app was built using javascript and node.js. It requires that the use have internet access and terminal to retrieve information from the various APIs.

7. Contributor

This app was built by Elisa Marques, github: https://github.com/efemar?tab=repositories
