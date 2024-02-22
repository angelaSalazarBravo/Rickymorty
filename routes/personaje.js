const express = require("express");
const router = express.Router();
const Personaje = require("../models/character");

// GET todos
router.get("/todos", async (req, res, next) => {
  try {
    const personajes = await Personaje.find();
    res.render("todos", { personajes });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error al obtener los personajes de la base de datos");
  }
});

module.exports = router;
