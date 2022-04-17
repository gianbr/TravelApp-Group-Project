require("../connections/mongo");
const jwt = require("jsonwebtoken");
const config = require("../config");
const Role = require("../models/Role");
const User = require("../models/User");

//const RoleAdm = Router();

const roleAdmin = async (req, res, next) => {
  try {
    const toni = req.get("Authorization");
    const token = toni.replace("Bearer ", "");

    let decodedData;

    if (!token) {
      res.status(266).json({ message: "No token, authorization denied" });
    }
    decodedData = jwt.verify(token, config.SECRET);
    req.userId = decodedData?.id;
    console.log("usuario", req.userId);
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "admin") {
        return res.status(200).json({ message: "Tienes permitido el acceso" });
      }

      return res
        .status(267)
        .json({ message: "No tienes los permisos necesarios" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { roleAdmin };
