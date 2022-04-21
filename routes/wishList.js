require("../connections/mongo");
const express = require("express");
const wishList = express.Router();
const authJwt = require("../middlewares/authjwt");
const WishList = require("../models/WishList");
const Plain = require("../models/Planes");
const { ObjectId } = require("mongodb");

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
    const WL = await WishList.findOne({ userId: userId });
    let plains = WL.plains;
    console.log(plains);
    plains.forEach((p) => {
      if (p.plainId == plainId) {
        res.status(200).json({ message: "El plan ya esta en la wl" });
      }
    });
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

wishList.get("/:id", [authJwt.verifyToken], async (req, res) => {
  try {
    // const { userId } = req.body;
    const userId = req.params.id;
    console.log(userId);
    const userWL = await WishList.findOne({ userId: userId });
    if (userWL) {
      if (userWL.plains.length > 0) {
        const plains = await Promise.all(
          userWL.plains.map(async (p) => {
            let plain = await Plain.findById(p.plainId);
            return {
              id: plain._id,
              title: plain.title,
              price: plain.price,
              location: plain.location,
              city: plain.city,
              date: plain.date,
              images: plain.images,
              quantity: plain.stock,
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

wishList.put("/deletewl", [authJwt.verifyToken], async (req, res) => {
  // const { userId } = req.params.id;
  // const { plainId } = req.body;
  const { userId, plainId } = req.body;
  // console.log(userId);
  // console.log(plainId);
  // await Album.findOneAndUpdate(
  //   { _id: albumId },
  //   { $pull: { images: { _id: imageId } } },
  //   { safe: true, multi: false }
  // );
  let WL = await WishList.findOne({ userId: userId });
  let userWl = await WishList.findByIdAndUpdate(
    { _id: WL._id },
    {
      $pull: { plains: { plainId: plainId } },
    },
    { safe: true, multi: false }
  );
  res.json(userWl);

  // if (userWl) {
  //   if (userWl.plains.length == 0) {
  //     return res.status(200).json([]);
  //   } else {
  //     userWl.plains.forEach(async (p) => {
  //       let plain = await p.findOne({ plainId: plainId });
  //       if (plain) {
  //         console.log("*************");
  //       }

  //       // } p.remove();
  //       // } else {
  //       //   console.log("*************************");
  //       // }
  //     });
  //     // let plains = userWl.plains.map((p) => {
  //     //   console.log(p);
  //     //   if (p.plainId == plainId) {
  //     //     p.remove();
  //     //   }
  //     // });
  //     // let Wl = await WishList.updateOne(
  //     //   { userId: userId },
  //     //   {
  //     //     $set: {
  //     //       plains: plains,
  //     //     },
  //     //   }
  //     // );
  //     res.status(200).json(userWl);
  //   }
  // } else {
  //   res.status(200).json([]);
  // }
  // user.plains = user.plains.filter((p) => p.plainId !== plainId);
  // await user.save();
  // console.log(user);
  // res.status(200).json(user);
});

module.exports = wishList;
