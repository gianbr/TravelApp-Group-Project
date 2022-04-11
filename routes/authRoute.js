require("../connections/mongo");
const User = require("../models/User");
const Role = require("../models/Role");
const { Router } = require("express");
const authRoute = Router();
const { authJwt, verifySignUp } = require("../middlewares");
const jwt = require("jsonwebtoken");
const config = require("../config");

authRoute.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
  return next();
});

//Registro
authRoute.post("/signup", [verifySignUp.checkStatusBanUser, verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;

    const newUser = new User({
      username,
      email,
      password: await User.encryptPassword(password), //guardo la contraseña encriptada
    });

    if (roles) {
      //
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id); //me va a devolver un arreglo con los IDS
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id]; //si el usuario no tiene roles, le asigno el rol de user por defecto
    }

    const savedUser = await newUser.save(); //guardo el usuario
    console.log(savedUser);

    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
      expiresIn: "86400s", //1 dia
    }); //genero el token, el payload es un objeto vacio, el segundo parametro es la clave secreta, el tercer parametro es un objeto con opciones

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
  }
});

//Iniciar sesion
authRoute.post("/signin", [verifySignUp.checkStatusBanUser], async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email }).populate("roles"); //me devuelve los roles en formato string con su id
  if (!userFound) return res.status(400).json({ message: "User not found" });

  const matchPassword = await User.comparePassword(req.body.password, userFound.password);

  if (!matchPassword) return res.status(401).json({ token: null, message: "Password incorrect" });

  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: "86400s", //1 dia
  });
  const user = await User.findById(userFound._id);
  const roles = await Role.find({ _id: { $in: user.roles } });
  console.log(userFound);
  res.json({ token: token, username: user.username, id: user._id, roles });
});

module.exports = authRoute;
