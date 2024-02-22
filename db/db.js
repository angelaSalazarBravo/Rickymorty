const mongoose = require("mongoose");

const uri =
  "mongodb+srv://usuario:12345678abc@cluster0.ulerm98.mongodb.net/rickandmorty?retryWrites=true&w=majority";

mongoose.connect(uri, {});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error de conexion"));
db.once("open", () => {
  console.log("Conectado la base de datos exitosa");
});
