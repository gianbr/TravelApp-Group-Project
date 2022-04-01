require("../connections/mongo");
const Router = require("express");
const getDetails = Router();
const Plain = require("../models/Planes");

getDetails.get("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const details = await Plain.findById(id);
		return res.json(details);
	} catch (error) {
		next(error);
	}
});
module.exports = getDetails;
