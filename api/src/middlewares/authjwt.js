//autorization
require("../connections/mongo");
const jwt = require("jsonwebtoken");
const config = require("../config");
const Role = require("../models/Role");
const User = require("../models/User");

const verifyToken = async (req, res, next) => {
  //si pasa esta funcion conttinua sibno le puedo tirar un error   aca verifico si el token existe
  try {
    console.log("hola");
    // console.log(req.get("Authorization"));
    const toni = req.get("Authorization");
    const token = toni.replace("Bearer ", "");

    console.log(token);
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (!token)
      return res
        .status(403)
        .json({ message: "No token, authorization denied" });

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, config.SECRET);
      req.userId = decodedData?.id;
      console.log("28", req.userId);
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.id;
    }

    const user = await User.findById(req.userId, { password: 0 });
    console.log("user", user);
    if (!user) return res.status(404).json({ message: "User not found" });
    console.log("duda", decodedData);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalid" });
  }
};

//aca verifico si es un admin o moderador
const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: user.roles } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "admin") {
      next();
      return;
    }
  }
  return res.status(403).json({ message: "You are not an Admin" });
};

module.exports = { verifyToken, isAdmin };
