require("../connections/mongo");
const Router = require("express");
const { default: mongoose } = require("mongoose");
const updatePlain = Router();
const Plain = require("../models/Planes");
const authJwt = require("../middlewares/authjwt");

updatePlain.patch(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  async (req, res, next) => {
    const { id } = req.params;
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
    } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ message: "No plain with that id" });
    const updatedPlain = {
      title,
      location,
      city,
      price,
      images,
      stock,
      included,
      description,
      date,
      _id: id,
    };
    await Plain.findByIdAndUpdate(id, updatedPlain, { new: true });
    res.json(updatedPlain);
  }
);

module.exports = updatePlain;
