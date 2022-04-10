require("../connections/mongo");
const Router = require("express");
const User = require("../models/User");
const getUsers = Router();

getUsers.get("/", (req, res) => {
  User.find({})
    .then((result) => {
      if (result) {
        return res.json(
          result.map((r) => {
            return {
              id: r._id,
              username: r.username,
              email: r.email,
              roles: r.roles,
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
});
module.exports = getUsers;
