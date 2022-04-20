const { Router } = require("express");
const getDetails = require("./getDetails");
const getPlains = require("./getPlains");
const postPlains = require("./postPlains");
const setPlainsDb = require("./setPlainsDB");
const authRoute = require("./authRoute");
const updatePlain = require("./updatePlain");
const deletePlain = require("./deletePlain");
const updateUser = require("./updateUser");
const getUsers = require("./getUsers");
const apiLugares = require("./apiLugares");
const getCheckAdmin = require("./getCheckAdmin");
const postReview = require("./postReview");
const router = Router();

router.use("/setplainsdb", setPlainsDb);
router.use("/getplains", getPlains); //libre acceso cualquiera puede consultar
router.use("/postPlains", postPlains);
router.use("/auth", authRoute);
router.use("/getDetails", getDetails);
router.use("/updateplain", updatePlain);
router.use("/deleteplain", deletePlain);
router.use("/updateuser", updateUser);
router.use("/getusers", getUsers);
router.use("/apiLugares", apiLugares);
router.use("/checkAdmin", getCheckAdmin);
router.use("/postreview", postReview);

module.exports = router;
