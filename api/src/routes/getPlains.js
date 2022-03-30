require("../connections/mongo");
const Router = require("express");
const getPlains = Router();
const Plain = require("../models/Planes");

getPlains.get("/", (req, res, next) => {
  const name = req.query.name;
  if (name) {
  } else {
    Plain.find({})
      .then((result) => {
        if (result) {
          return res.json(result);
        } else {
          res.status(404).send({ error: "Not Found" });
        }
      })
      .catch((error) => {
        next(error);
      });
  }
});
module.exports = getPlains;
