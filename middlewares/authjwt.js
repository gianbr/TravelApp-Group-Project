//autorization
require("../connections/mongo");
const jwt = require("jsonwebtoken");
const config = require("../config");
const Role = require("../models/Role");
const User = require("../models/User");
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = async (req, res, next) => {
  //si pasa esta funcion conttinua sibno le puedo tirar un error   aca verifico si el token existe
  try {
    // const token = req.headers["x-access-token"];
    // console.log("hola");
    // console.log(req.get("Authorization"));
    const toni = req.get("Authorization");
    const token = toni.replace("Bearer ", "");

    // // console.log(token);
    // const isCustomAuth = token.length < 500;

    // let decodedData;

    // if (!token)
    //   return res
    //     .status(403)
    //     .json({ message: "No token, authorization denied" });

    // if (token && isCustomAuth) {
    //   decodedData = jwt.verify(token, config.SECRET);
    //   req.userId = decodedData?.id;
    //   // console.log("28", req.userId);
    // } else {
    //   decodedData = jwt.decode(token);
    //   req.userId = decodedData?.sub;
    // }
    let decodedData;
    if (!token) {
      return res
        .status(266)
        .json({ message: "No token, authorization denied" });
    }
    if (token.length > 500) {
      console.log(token);
      decodedData = jwt.decode(token);
      req.userEmail = decodedData?.email;
    } else {
      decodedData = jwt.verify(token, config.SECRET);
      req.userId = decodedData?.id;
    }

    if (req.userEmail) {
      let user = await User.findOne({ email: req.userEmail });
      if (user) {
        next();
      } else {
        return res.status(404).json({ message: "User not found" });
      }
    } else {
      const user = await User.findById(req.userId, { password: 0 });
      if (!user) return res.status(404).json({ message: "User not found" });
      next();
    }
  } catch (error) {
    // console.log(error)
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

// const dataAdmin = async (req, res) => {
//   const user = await User.findById(req.userId);
//   const roles = await Role.find({ _id: { $in: user.roles } });

//   for (let i = 0; i < roles.length; i++) {
//     if (roles[i].name === "admin") {
//       return user;
//     }
//   }
// };
module.exports = { verifyToken, isAdmin };
