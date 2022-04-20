require("../connections/mongo");
const Router = require("express");
const getPlains = Router();
const Plain = require("../models/Planes");

getPlains.get("/", (req, res, next) => {
  let { location } = req.query;
  if (location) {
    location = location.toLocaleLowerCase();
    Plain.find().then((result) => {
      if (result) {
        let respuesta = result.filter(
          (r) =>
            r.location.toLocaleLowerCase().includes(location) ||
            r.city.toLocaleLowerCase().includes(location) ||
            r.description.toLocaleLowerCase().includes(location) ||
            r.included.toLocaleLowerCase().includes(location)
        );
        if (respuesta.length > 0) {
          return res.json(
            respuesta.map((r) => {
              return {
                id: r._id,
                title: r.title,
                location: r.location,
                city: r.city,
                price: r.price,
                image: r.images[0],
                score: r.score,
                date: r.date,
              };
            })
          );
        } else {
          return res.json([]);
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
                city: r.city,
                price: r.price,
                image: r.images[0],
                score: r.score,
                date: r.date,
              };
            })
          );
        } else {
          res.status(404).send({
            error: "Not Found",
          });
        }
      })
      .catch((error) => {
        next(error);
      });
  }
});
module.exports = getPlains;

// Plain.find({}).then((result) => {
//   if (result) {
//     return res.json(
//       result.map((r) => {
//         return {
//           title: r.title,
//           location: r.location,
//           price: r.price,
//           image: r.images[0],
//         };
//       })
//     );
//   } else {
//     res.status(404).send({ error: "Not Found" });
//   }
// });
