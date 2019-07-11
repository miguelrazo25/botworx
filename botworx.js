var llaves = require(".llaves.js");

var Twitter = require("twitter");

var obtenerTweets = function() {
  var cliente = new Twitter(keys.twitterLlaves);

  var params = { screen_name: "botworx" };
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

var escoje = fuction(caseData, functionData) {
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