require("../connections/mongo");
const Router = require("express");
const setPlainsDb = Router();
const Plain = require("../models/Planes");
const planes = require("../data/data.json");

setPlainsDb.get("/", (req, res) => {
  //Pre carga de datos en la db
  Plain.insertMany(planes)
    .then(function () {
      console.log("Data inserted"); // Success
      res.send("Data inserted");
    })
    .catch(function (error) {
      res.send(error);
      console.log(error); // Failure
    });
});
module.exports = setPlainsDb;
