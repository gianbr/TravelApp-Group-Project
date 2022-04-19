require("../connections/mongo");
const User = require("../models/User");
const Role = require("../models/Role");
const { Router } = require("express");
const authRoute = Router();
const { authJwt, verifySignUp } = require("../middlewares");
const jwt = require("jsonwebtoken");
const config = require("../config");
const dotenv = require("dotenv");
const { OAuth2Client } = require("google-auth-library");

dotenv.config();

authRoute.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  return next();
});

//Registro
authRoute.post(
  "/signup",
  [
    verifySignUp.checkStatusBanUser,
    verifySignUp.checkDuplicateUserNameOrEmail,
    verifySignUp.checkRolesExisted,
  ],
  async (req, res) => {
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
  }
);

//Iniciar sesion
authRoute.post(
  "/signin",
  [verifySignUp.checkStatusBanUser],
  async (req, res) => {
    const userFound = await User.findOne({ email: req.body.email }).populate(
      "roles"
    ); //me devuelve los roles en formato string con su id
    if (!userFound) return res.status(264).json({ message: "User not found" });

    const matchPassword = await User.comparePassword(
      req.body.password,
      userFound.password
    );

    if (!matchPassword)
      return res
        .status(265)
        .json({ token: null, message: "Password incorrect" });

    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
      expiresIn: "86400s", //1 dia
    });
    const user = await User.findById(userFound._id);
    const roles = await Role.find({ _id: { $in: user.roles } });
    console.log(userFound);
    res.status(200).json({ token: token, username: user.username, id: user._id, roles });
  }
);

const origin =
  "720796673981-us7jgj5e8ospme3qt22432hiedcni3vt.apps.googleusercontent.com";

authRoute.post("/google", async (req, res) => {
  console.log(req.body);
  try {
    const googleId = origin;

    const googleClient = new OAuth2Client({
      clientId: `${googleId}`,
    });

    const { token, roles } = req.body;

    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: `${googleId}`,
    });

    const payload = ticket.getPayload();

    console.log(payload);

    const newUser = new User({
      username: payload.name,
      email: payload.email,
      password: payload.at_hash, //guardo la contraseña encriptada
    });

    if (roles) {
      //
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id); //me va a devolver un arreglo con los IDS
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id]; //si el usuario no tiene roles, le asigno el rol de user por defecto
    }

    const user = await User.findOne({ email: payload.email });
    if (user)
      return res.status(200).json({
        token: token,
        username: user.username,
        id: user._id,
      });
    console.log("encontrado", user);
    // return res.status(400).json({ message: "Email already exists" })
    //guardo el usuario

    const userNew = await newUser.save();
    console.log("creado", userNew);
    const jtoken = jwt.sign({ id: userNew._id }, config.SECRET, {
      expiresIn: "86400s", //1 dia
    });
    return res.status(201).json({
      token: jtoken,
      username: userNew.username,
      id: userNew._id,
    });
  } catch (error) {
    console.log(error);
  }
});
// return res.status(200).json({
//   token: jtoken,
//   username: userNew.username,
//   id: userNew._id });

// const user = await User.find({where: {email: payload.email}, defaults: {
//   password: payload.at_hash,
//   name: payload.name,
//   roleId: 1,
//   activated: true,
// }})

// const jtoken = jwt.sign({email: user[0].email, name: user[0].name, role:user[0].roleId, id:user[0].id}, process.env.TOKENSECRET, {
//   expiresIn: 1440
// });

// res.json({
//   mensaje: 'Autenticación correcta',
//   token: jtoken,
//   id: user[0].id,
//   role: user[0].roleId,
//   name: user[0].name,
//   email: user[0].email,
// });

// });

// const users = [];

// function upsert(array, item) {
//   const i = array.findIndex((_item) => _item.email === item.email);
//   if (i > -1) array[i] = item;
//   else array.push(item);
// }

// const client = new OAuth2Client(process.env.CLIENT_ID);
// //iniciar sesion con google
// authRoute.post("/google", async (req, res) => {
//   const { token } = req.body;
//   const ticket = await client.verifyIdToken({
//     idToken: token,
//     audience: process.env.CLIENT_ID,
//   });
//   const { name, email, picture } = ticket.getPayload();
//   upsert(users, { name, email, picture });
//   res.status(201).json({ name, email, picture });
// });

module.exports = authRoute;
