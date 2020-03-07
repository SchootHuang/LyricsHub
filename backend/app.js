const mongoose = require("mongoose");
const querystring = require('querystring')
const express = require("express");
const app = express()
const bodyParse = require("body-parser")

const lyricsSchema = new mongoose.Schema({
  album: String,
  image: String,
  lyrics: String,
  title: String,
  year: String,
  artist: String
});
app.use(bodyParse.json());
const Lyricshub = mongoose.model("Lyricshub", lyricsSchema, "myCollection");
// /search?song=taylorswift
// {song:"tayloswuft"}
app.get("/search", async (req, res, next) => {
  const query = req.query; 
  const data =  await Lyricshub.findOne(query);
  return res.json({
    lyric : data
  })
})

// app.get("/search", async (req, res, next) => {
//   const data =  await Lyricshub.find({ artist: "taylorswift" });
//   return res.json({
//     lyric : data
//   })
// })

mongoose.connect("mongodb://localhost:27017/lyricshub"

)
    .then(result => {
      app.listen(3001);
    })
    .catch(err => console.log(err));




