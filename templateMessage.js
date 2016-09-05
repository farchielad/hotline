module.exports = {
  createSuggestionTeplate: function (recipientId) {
    console.log("inside function createSuggestionTeplate from templateMessage.js");
    var messageData = {
      recipient: {
        id: recipientId
      },
      message: {
        attachment: {
          type: "template",
          payload: {
            template_type: "generic",
            elements: [{
              title: "Artist: Pink Floyd",
              subtitle: "Song: Money",
              item_url: "https://en.wikipedia.org/wiki/The_Dark_Side_of_the_Moon",
              image_url: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
              buttons: [{
                type: "web_url",
                url: "https://en.wikipedia.org/wiki/The_Dark_Side_of_the_Moon",
                title: "Preview song"
              }, {
                type: "postback",
                title: "Request this song",
                payload: "Payload for first bubble",
              }],
            },
            {
             title: "Artist: Pink Floyd",
             subtitle: "Song: Wish you were here",
             item_url: "http://www.musiclipse.com/wp-content/uploads/2013/01/pink-floyd-wish-you-were-here-wallpaper.jpg",
             image_url: "http://www.musiclipse.com/wp-content/uploads/2013/01/pink-floyd-wish-you-were-here-wallpaper.jpg",
             buttons: [{
               type: "web_url",
               url: "https://en.wikipedia.org/wiki/Wish_You_Were_Here",
               title: "Preview Song"
             }, {
               type: "postback",
               title: "Request this song",
               payload: "Payload for second bubble",
             }]
           },
             {
              title: "Artist: Pink Floyd",
              subtitle: "Song: Sorrow",
              item_url: "https://lh6.googleusercontent.com/-brgHTFn8sKo/TXFDcmByypI/AAAAAAAABN4/TNIBiWbmS_0/s1600/Pink_Floyd_-_Pulse.jpg",
              image_url: "https://lh6.googleusercontent.com/-brgHTFn8sKo/TXFDcmByypI/AAAAAAAABN4/TNIBiWbmS_0/s1600/Pink_Floyd_-_Pulse.jpg",
              buttons: [{
                type: "web_url",
                url: "https://en.wikipedia.org/wiki/Pulse_(Pink_Floyd_album)",
                title: "Preview Song"
              }, {
                type: "postback",
                title: "Request this song",
                payload: "Payload for second bubble",
              }]
            }]
          }
        }
      }
  }
  return messageData;

}
};
