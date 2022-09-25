// var youtube=require("youtube-playlist-videos-scraper");

// function getdata(response){
// 	var data=response["body"]
// 	console.log("videos data",data)
// }

// youtube.get_playlist_videos('https://www.youtube.com/playlist?list=PLqUX34SwGksRZHcVE2eGtxW8C0xcwEtkA',getdata)


// const ytlist = require('youtube-playlist');
 
// const url = 'https://www.youtube.com/playlist?list=PLWKjhJtqVAbnZtkAI3BqcYxKnfWn_C704';
 
// ytlist(url, 'name').then(res => {
//   console.log(res);
// });

const ytfps = require('ytfps');

ytfps('PLqUX34SwGksRZHcVE2eGtxW8C0xcwEtkA').then(playlist => {
    console.log(playlist);
}).catch(err => {
    throw err;
});