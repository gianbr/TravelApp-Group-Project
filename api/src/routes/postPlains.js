require("../connections/mongo");
const Router = require("express");
const postPlains = Router();
const Plain = require("../models/Planes");

postPlains.post("/", async (req, res, nex) => {
  const { title, location, price, images, stock, included, description } =
    req.body;

  const plainCreated = await Plain.insertMany({
    title,
    location,
    price,
    images,
    stock,
    included,
    description,
  });
  res.json(plainCreated);
});

module.exports = postPlains;
