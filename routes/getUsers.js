require("../connections/mongo");
const Router = require("express");
const User = require("../models/User");
const Role = require("../models/Role");
const getUsers = Router();

getUsers.get("/", async (req, res) => {
  const users = await User.find({});
  if (users) {
    const respuesta = await Promise.all(
      users.map(async (u) => {
        let roles = "";
        if (u.roles.length > 1) {
          let rol1 = await Role.findById(u.roles[0]);
          roles = roles + rol1.name + ", ";
          // roles.push(rol1.name);
          let rol2 = await Role.findById(u.roles[1]);
          roles = roles + rol2.name;
          // roles.push(rol2.name);
        } else {
          roles = await Role.findById(u.roles);
          roles = roles.name;
        }
        return {
          roles,
          username: u.username,
          email: u.email,
          id: u._id,
        };
      })
    );
    return res.status(200).json(respuesta);
  } else {
    return res.status(200).json([]);
  }
  // console.log(users);
  // User.find({})
  //   .then((result) => {
  //     if (result) {
  //       return res.json(
  //         result.map(async (r) => {
  //           let rol = await Role.findById(r.roles);
  //           console.log(rol);
  //           return {
  //             id: r._id,
  //             username: r.username,
  //             email: r.email,
  //             roles: r.roles,
  //           };
  //         })
  //       );
  //     } else {
  //       res.status(404).send({
  //         error: "Not Found",
  //       });
  //     }
  //   })
  //   .catch((error) => {
  //     next(error);
  //   });
});
module.exports = getUsers;
