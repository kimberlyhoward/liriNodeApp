require("dotenv").config();
var fs = require("fs");
// var inquirer = require("inquirer");

//get spotify, twitter and request. 
var Spotify = require("spotify");
var twitter = require("twitter");
var request = require("request");

// link for security keys file.
var keys = require("./keys.js");

// make a new spotify or twitter.
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// Define commands
var command = process.argv[2];
var search = process.argv[3];


// Command is the 3rd argument on node.  
// // Search is the 4th argument

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

function myTweets(){
console.log ("twitter");
};


runSwitch();
console.log (command);
