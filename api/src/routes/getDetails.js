require("../connections/mongo");
const Router = require("express");
const getDetails = Router();
const Plain = require("../models/Planes");

getDetails.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const details = await Plain.findById(id);
    return res.json({
      title: details.title,
      location: details.location,
      city: details.city,
      price: details.price,
      images: details.images,
      comments: details.comments.map((c) => c.body),
      stock: details.stock,
      score: details.score,
      included: details.included.map((i) => i.body),
      description: details.description.body,
      date: details.date,
    });
  } catch (error) {
    next(error);
  }
});
module.exports = getDetails;
