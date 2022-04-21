require("../connections/mongo");
const { Router } = require("express");
const getCheckAdmin = Router();
const Plain = require("../models/Planes");
const authJwt = require("../middlewares/authjwt");
const RoleAdmin = require("../middlewares/RoleAdm");
const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/User");
const Role = require("../models/Role");
const dotenv = require("dotenv");
dotenv.config();

getCheckAdmin.get("/", async (req, res) => {
  try {
    const toni = req.get("Authorization");
    const token = toni?.replace("Bearer ", "");
    let decodedData;
    if (!token) {
      return res
        .status(266)
        .json({ message: "No token, authorization denied" });
    }
    if (token.length > 500) {
      decodedData = jwt.decode(token, process.env.GOOGLE_CLIENT_SECRET);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.verify(token, config.SECRET);
      req.userId = decodedData?.id;
    }
    console.log("usuario", req.userId);
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "admin") {
        return res.status(200).json({ message: "Tienes permitido el acceso" });
      }

      return res
        .status(266)
        .json({ message: "No tienes los permisos necesarios" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = getCheckAdmin;
