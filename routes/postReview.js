require("../connections/mongo");
const Router = require("express");
const { default: mongoose } = require("mongoose");
const postReview = Router();
const Plain = require("../models/Planes");
const authJwt = require("../middlewares/authjwt");

postReview.patch(
  "/:id",
  [authJwt.verifyToken],
  async (req, res) => {
    const { id } = req.params;
    const { score, comments } = req.body;
    console.log("score", score);
    console.log("comments", comments);
    const user = await Plain.findById(id);
    console.log(user.comments);
    user.comments = user.comments?.concat(comments);
    user.score = Math.floor((Number(user.score) + Number(score)) / 2);
    await user.save();
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(270).send(`No plain with id: ${id}`);
    //   const post = {
    //     score: Number(score),
    //     comments: comments.concat(comments),
    //   };
    //   const userReview = await Plain.aggregate;
    return res.json(user);
  }
);

module.exports = postReview;
