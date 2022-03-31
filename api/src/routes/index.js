const { Router } = require("express");
const getDetails = require("./getDetails");
const getPlains = require("./getPlains");
const postPlains = require("./postPlains");
const setPlainsDb = require("./setPlainsDB");
const router = Router();

router.use("/setplainsdb", setPlainsDb);
router.use("/getplains", getPlains);
router.use("/getdetails", getDetails);
router.use("/postPlains", postPlains);

module.exports = router;
