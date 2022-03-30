const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const planes = require("./src/data/data.json");
const Plain = require("./src/models/Planes");

dotenv.config();

//Conectandome a la base de datos mediante mongoose
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

app.listen(8800, () => {
  console.log("Backend server is running!");
});

//Precarga de datos
Plain.insertMany(planes)
  .then(function () {
    console.log("Data inserted"); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
