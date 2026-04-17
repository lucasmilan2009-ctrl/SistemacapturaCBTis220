const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/Registro_Asistencias")
.then(() => console.log("conectando a MongoDB"))
.catch(err => console.log(error));
