$(document).ready(function() {
  var streamNames = [
    "ESL_SC2",
    "OgamingSC2",
    "streamerhouse",
    "bmkibler",
    "freecodecamp",
    "saltybet"
  ];

  for (let i = 0; i < streamNames.length; i++) {
    $.getJSON(
      "https://wind-bow.glitch.me/twitch-api/streams/"+streamNames[i],
      function(data) {    
        if (data.stream == null) {
          $("#linkme" + [i]).text("Offline");
          $("#linkme" + [i]).css("color","red");
         $.getJSON(
      "https://wind-bow.glitch.me/twitch-api/channels/"+streamNames[i],function(data2){
     var imgLink2 = data2.logo;
     $("#img" + [i]).attr("src",imgLink2);

      });
        } else {
          var linkPage="https://go.twitch.tv/"+streamNames[i];
          var imgLink = data.stream.channel.logo;
          var info= data.stream.channel.status;          
          $("#linkme" + [i]).text("Online");
          $("#linkme" + [i]).attr("href",linkPage);
          $("#linkme" + [i]).attr("target","blank");

          $("#linkme" + [i]).css("color","green");          
          $("#img" + [i]).attr("src",imgLink);
          $("#info" + [i]).html(info);

          
          
        }/*else*/
      }/*function data*/
    );/*getjson*/
  }/*for*/
});
