const { Router } = require("express");
const getPlains = require("./getPlains");
const setPlainsDb = require("./setPlainsDB");
const router = Router();

router.use("/setplainsdb", setPlainsDb);
router.use("/getplains", getPlains);
//Hola voy a molestar
//La linea 9
//EA
module.exports = router;
