require("../connections/mongo");
const express = require("express");
const wishList = express.Router();
const authJwt = require("../middlewares/authjwt");
const WishList = require("../models/WishList");
const Plain = require("../models/Planes");

wishList.post("/create", [authJwt.verifyToken], async (req, res) => {
  try {
    const { userId } = req.body;
    const userWL = await WishList.findOne({ userId: userId });
    if (!userWL) {
      const newWL = new WishList({
        userId,
      });
      const savedWL = await newWL.save();
      res.status(200).json({ message: "WishList created successfully" });
    } else {
      res.status(200).json({ message: "The user already has a wish list" });
    }
  } catch (error) {
    console.error(error);
  }
});

wishList.put("/additem", [authJwt.verifyToken], async (req, res) => {
  try {
    const { userId, plainId } = req.body;
    const userWL = await WishList.updateOne(
      {
        userId: userId,
      },
      {
        $push: {
          plains: { plainId },
        },
      }
    );
    if (userWL) {
      return res.status(200).json(userWL);
    } else {
      return res.status(400).json({ message: "Error" });
    }
  } catch (error) {
    console.error(error);
  }
});

wishList.get("/userwl", [authJwt.verifyToken], async (req, res) => {
  try {
    const { userId } = req.body;
    const userWL = await WishList.findOne({ userId: userId });
    if (userWL) {
      if (userWL.plains.length > 0) {
        const plains = await Promise.all(
          userWL.plains.map(async (p) => {
            let plain = await Plain.findById(p.plainId);
            return {
              title: plain.title,
              price: plain.price,
              location: plain.location,
              city: plain.city,
              date: plain.date,
              images: plain.images,
            };
          })
        );
        console.log(plains);
        return res.status(200).json(plains);
      } else {
        return res.status(200).json([]);
      }
    } else {
      return res.status(200).json([]);
    }
  } catch (error) {
    console.error(error);
  }
});

wishList.delete("/deletewl", [authJwt.verifyToken], async (req, res) => {
  try {
    const { userId, plainId } = req.body;
    const user = await WishList.findOne({ userId: userId });
    user.plains = user.plains.filter((p) => p.plainId !== plainId);
    await user.save();
    res.status(200).json({ message: "WishList deleted successfully" });
  } catch (error) {
    res.status(270).json({ message: "No se pudo eliminar" });
  }
});

module.exports = wishList;
