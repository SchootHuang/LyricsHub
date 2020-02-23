const mongoose = require("mongoose");
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

Lyricshub.find({ title: "dreaming" }, (err, lyrics) => {
  if (err) {
    console.log(err);
  } else {
    console.log(lyrics);
  }
});
