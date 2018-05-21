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

// run function

function runSwitch(command, search) {

    switch (command) {
        case "my-tweets":
            myTweets();
            break;

        case "spotify-this-song":
            spotifySong();
            break;

        case "movie-this":
            movieThis();
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


//Get Spotify
function spotifySong(songTrack) {
    client.get( )
}
//Spotify functionality

var spotSearch = new Spotify({
    id: config.SPOTIFY_ID
    , secret: config.SPOTIFY_SECRET
});

var findName = function (artist) {
    return artist.name;
}
//function to run spotify call. 
var rogueSpotify = function (songName) {
    spotSearch.search({ type: "track", query: songName }
        , function (err, data) {
            if (err) {
                console.log("error occurred: " + err);
                return;
            }
            var songs = data.tracks.items;
            for (i = 0; i < songs.length; i++) {
                console.log(i);
                console.log("Artist(s): " + songs[i].artists.map(
                    findName));
                console.log("Song Name: " + songs[i].name);
                console.log("Release Date: " + songs[i].album.release_date);
                console.log("album: " + songs[i].album.name);
                console.log("---------------------------------------------------------");
            }
        });
}

//OMDB call for Movie.
var rogueMovie = function (movieName) {
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
//switch case to take in user inputs. 
var userReq = function (caseData, functionData) {
    switch (caseData) {
        case "my-tweets":
            rogueTweets();
            break;
        case "spotify-this-song":
            rogueSpotify(functionData);
            break;
        case "movie-this":
            rogueMovie(functionData);
        case "do-what-it-says":
            rogueMyBidding();
            break;
        default:
            console.log("LIRI don't know nothin bout dat!");
    }
}

var runUserReq = function (uIOne, uITwo) {
    userReq(uIOne, uITwo);
};

runUserReq(process.argv[2], process.argv[3]);


