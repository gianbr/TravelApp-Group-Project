const { Router } = require("express");
const getDetails = require("./getDetails");
const getPlains = require("./getPlains");
const setPlainsDb = require("./setPlainsDB");
const router = Router();

router.use("/setplainsdb", setPlainsDb);
router.use("/getplains", getPlains);
router.use("/", getDetails);

module.exports = router;
