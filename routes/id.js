var express = require("express");
var router = express.Router();
var Personaje = require("../models/character");

/* GET home page. */
router.get("/", async (req, res) => {
  try {
    const id = req.query.id;
    const personajes = await Personaje.findOne({ id });
    res.render("id", { personajes });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error al obtener los personajes de la base de datos");
  }
});

module.exports = router;
