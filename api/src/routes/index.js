const { Router } = require("express");
const getDetails = require("./getDetails");
const getPlains = require("./getPlains");
const postPlains = require("./postPlains");
const setPlainsDb = require("./setPlainsDB");
const router = Router();

router.use("/setplainsdb", setPlainsDb);
router.use("/getplains", getPlains);
router.use("/postPlains", postPlains);
router.use("/", getDetails);

module.exports = router;
