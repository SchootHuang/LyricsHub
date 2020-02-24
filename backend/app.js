const mongoose = require("mongoose");
const querystring = require('querystring')

mongoose.connect("mongodb://localhost:27017/lyricshub", {
  useNewUrlParser: true
});

const lyricsSchema = new mongoose.Schema({
  album: String,
  image: String,
  lyrics: String,
  title: String,
  year: String,
  artist: String
});

const Lyricshub = mongoose.model("Lyricshub", lyricsSchema, "myCollection");

// Lyricshub.find({ title: "dreaming" }, (err, lyrics) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(lyrics);
//   }
// });

const serverHandle = (req, res) => {
  res.setHeader('Content-type', 'application/json')

  const url = req.url
  req.path = url.split('?')[0]
  req.query = querystring.parse(url.split('?')[1])

}

module.exports = {
  Lyricshub
}


