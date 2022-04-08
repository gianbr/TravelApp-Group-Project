const { Router } = require("express");
const getDetails = require("./getDetails");
const getPlains = require("./getPlains");
const postPlains = require("./postPlains");
const setPlainsDb = require("./setPlainsDB");
const authRoute = require("./authRoute");
const router = Router();

router.use("/setplainsdb", setPlainsDb);

router.use("/getplains", getPlains); //libre acceso cualquiera puede consultar
router.use("/postPlains", postPlains);
router.use("/auth", authRoute);
router.use("/", getDetails);

module.exports = router;
