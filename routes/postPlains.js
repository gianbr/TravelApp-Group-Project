require("../connections/mongo");
const Router = require("express");
const postPlains = Router();
const Plain = require("../models/Planes");
const authJwt = require("../middlewares/authjwt");

postPlains.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  async (req, res, nex) => {
    const {
      title,
      location,
      city,
      price,
      images,
      stock,
      included,
      description,
      date,
      score
    } = req.body;

    const plainCreated = await Plain.insertMany({
      title,
      location,
      city,
      price,
      images,
      stock,
      included,
      description,
      date,
      score
    });
    res.json(plainCreated);
  }
);

module.exports = postPlains;

//router.post("/postPlains", [authJwt.verifyToken, authJwt.isAdmin], postPlains); //necesita token
