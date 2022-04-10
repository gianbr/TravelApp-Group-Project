require("../connections/mongo");
const Router = require("express");
const { default: mongoose } = require("mongoose");
const deletePlain = Router();
const Plain = require("../models/Planes");
const authJwt = require("../middlewares/authjwt");

deletePlain.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  async (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ message: `No plain with that id:${id}` });
    await Plain.findByIdAndDelete(id);
    res.json({ message: `Plain deleted successfully` });
  }
);

module.exports = deletePlain;
