require("../connections/mongo");
const Router = require("express");
const getPlains = Router();
const Plain = require("../models/Planes");

getPlains.get("/", (req, res, next) => {
  let { title } = req.query;
  if (title) {
    title = title.toLocaleLowerCase();
    Plain.find().then((result) => {
      if (result) {
        let respuesta = result.filter((r) =>
          r.location.toLocaleLowerCase().includes(title)
        );
        if (respuesta.length > 0) {
          return res.json(
            respuesta.map((r) => {
              return {
                id: r._id,
                title: r.title,
                location: r.location,
                price: r.price,
                image: r.images[0],
              };
            })
          );
        } else {
          return res.status(404).send({ error: "Not Found" });
        }
      }
    });
  } else {
    Plain.find({})
      .then((result) => {
        if (result) {
          return res.json(
            result.map((r) => {
              return {
                id: r._id,
                title: r.title,
                location: r.location,
                price: r.price,
                image: r.images[0],
              };
            })
          );
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
