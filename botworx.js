var llaves = require('./llaves.js');

var Twitter = require("twitter");

var spotify = require('spotify');

var obtenerTweets = function() {
  var cliente = new Twitter(llaves.twitterKeys);

  var params = { screen_name: "Murderman Killbot" };
  cliente.get("statuses/user_timeline", params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);

      for (var i = 0; i < tweets.legnth; i++) {
        console.log(tweets[i].created_at);
        console.log(" ");
        console.log(tweets[i].text);
      }
    }
  });
}

spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
  if ( err ) {
      console.log('Error occurred: ' + err);
      return;
  }
  console.log(data);
});

var escoje = function(caseData, functionData) {
    switch(caseData) {
        case 'mis-tweets' :
            obtenerTweets();
            break;
        default:
        console.log('HOMIE dont play that!');
    }
}

var ejecutirlo = function(argUno, argDos) {
    escoje(argUno, argDos);
};

ejecutirlo(process.argv[2], process.arch[3]);