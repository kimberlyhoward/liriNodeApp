require("dotenv").config();
var fs = require("fs");

//get spotify, twitter and request. 
var Spotify = require('node-spotify-api');
var Twitter = require("twitter");
var request = require("request");

// link for security keys file.
var keys = require("./keys.js");

// make a new spotify or twitter.
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// Define commands
// Command is the 3rd argument on node.
// // Search is the 4th argument

var command = process.argv[2];
var search = process.argv[3];
var song = process.argv[4];

// run function

function runSwitch(command, search) {

    switch (command) {
        case "my-tweets":

            console.log("Tweets");

            myTweets();
            break;

        case "spotify-this-song":
            spotifySong(search);
            break;

        case "movie-this":
            movieThis(search);
            break;

        case "do-what-it-says":
            doWhatItSays();
            break;
    }
};
//Get tweets

function myTweets() {

    var params = { screen_name: 'kimberlyhoward' };

    client.get('statuses/user_timeline', params, function (error, tweets, response) {

        for (var i = 0; i < 5; i++) {
            console.log(tweets[i].created_at);
            console.log(tweets[i].text)
        }
    });
};


// //Get Spotify
var Spotify = require('node-spotify-api');

function spotifySong(song)
{

spotify.search({ type: 'track', query: song }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
    // console.log(data);
    var songs = data.tracks.items;
    console.log(songs);

    console.log('Artists Name: ' + data.tracks.items[0].artists[0].name);

});
}

// //OMDB call for Movie.
var movieThis = function (movieName) {
    request('http://www.omdbapi.com/?apikey=7e5a37b3&t=' + movieName + "&y=&plot=short&r=json", function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var movieData = JSON.parse(body);
            console.log('Title: ' + movieData.Title);
            console.log('Year: ' + movieData.Year);
            console.log('Rated: ' + movieData.Rated);
            console.log('IMDB Rating: ' + movieData.imdbRating);
            console.log('Actors: ' + movieData.Actors);
        }
    });
}
    runSwitch(command, search);