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
      price,
      images,
      stock,
      included,
      description,
      date,
    } = req.body;

    const plainCreated = await Plain.insertMany({
      title,
      location,
      price,
      images,
      stock,
      included,
      description,
      date,
    });
    res.json(plainCreated);
  }
);

module.exports = postPlains;

//router.post("/postPlains", [authJwt.verifyToken, authJwt.isAdmin], postPlains); //necesita token
