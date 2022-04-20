require("../connections/mongo");
const User = require("../models/User");
const Role = require("../models/Role");
const { Router } = require("express");
const updateUser = Router();
const authJwt = require("../middlewares/authjwt");
const jwt = require("jsonwebtoken");
const { verifySignUp } = require("../middlewares");
const bcrypt = require("bcryptjs");

updateUser.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

updateUser.put(
  "/addadmin/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const roleUser = await Role.findOne({ name: "admin" });
      const user = await User.findById(id);
      if (!user) {
        return res.json({ message: "User not found" });
      }
      // return res.json(admin.roles[0]);
      if (user.roles.length === 2) {
        return res.json({
          message: "The user already has all the available roles",
        });
      }
      await User.findOneAndUpdate(
        {
          _id: user._id,
        },
        {
          $push: {
            roles: roleUser._id,
          },
        }
      );
      return res.json({ message: "Successful update" });
    } catch (error) {
      next(error);
    }
  }
);
updateUser.put(
  "/addban/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      if (user.username === "admin") {
        return res.json({ message: "Can't ban admin" });
      }
      if (!user) {
        return res.json({ message: "User not found" });
      }
      await User.findOneAndUpdate(
        {
          _id: user._id,
        },
        {
          $set: {
            banned: true,
          },
        }
      );
      return res.json({ message: "Successfully banned user" });
    } catch (error) {
      next(error);
    }
  }
);
updateUser.put(
  "/removeban/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      if (!user) {
        return res.json({ message: "User not found" });
      }
      await User.findOneAndUpdate(
        {
          _id: user._id,
        },
        {
          $set: {
            banned: false,
          },
        }
      );
      return res.json({ message: "Ban removed successfully" });
    } catch (error) {
      next(error);
    }
  }
);
updateUser.delete(
  "/delete/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      if (user.username === "admin") {
        return res.json({ message: "Can't remove admin" });
      }
      if (!user) {
        return res.json({ message: "User not found" });
      }
      await User.findByIdAndDelete(id);
      return res.json({ message: "User deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
);
updateUser.put(
  "/removeadmin/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      const roleUser = await Role.findOne({ name: "user" });
      if (user.username === "admin") {
        return res.json({
          message: "Unable to remove admin role from admin user",
        });
      }
      if (!user) {
        return res.json({ message: "User not found" });
      }
      await User.findOneAndUpdate(
        {
          _id: user._id,
        },
        {
          $set: {
            roles: roleUser._id,
          },
        }
      );
      return res.json({ message: "Admin role removed successfully" });
    } catch (error) {
      next(error);
    }
  }
);

updateUser.patch(
  "/resetPassword",
  verifySignUp.checkUsernameAndEmail,
  async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      //console.log(password);
      const passwordHash = await bcrypt.hash(password, 10);
      await User.findOneAndUpdate(
        {
          _id: user._id,
        },
        { $set: { password: passwordHash } }
      );
      res.json({ message: "Password updated successfully" });
    } catch (error) {
      console.log(error);
    }
  }
);

module.exports = updateUser;
