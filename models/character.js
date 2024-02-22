const mongoose = require("mongoose");

const personajeSchema = new mongoose.Schema({
  id: Number,
  gender: String,
  name: String,
  image: String,
  url: String,
  created: String,
});

const Personaje = mongoose.model("personaje", personajeSchema);

module.exports = Personaje;
