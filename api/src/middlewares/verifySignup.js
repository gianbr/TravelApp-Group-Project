//validation si el usuario exiszte y si el rolq me estann enviando existe
require("../connections/mongo");
const { ROLES } = require("../models/Role");
const User = require("../models/User");

//si el usuario ya esta repetido

const checkDuplicateUserNameOrEmail = async (req, res, next) => {
  // const count = await User.estimatedDocumentCount();

  // // check for existing roles
  // if (count === 0) next();

  const user = await User.findOne({ username: req.body.username });
  console.log(user);
  if (user) {
    return res.status(400).json({ message: "Username already exists" });
  }

  const userEmail = await User.findOne({ email: req.body.email });
  if (userEmail) {
    return res.status(400).json({ message: "Email already exists" });
  }

  next();
};

const checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res
          .status(400)
          .json({ message: `Role ${req.body.roles[i]} does not exist` });
      }
    }
  }
  next();
};
const checkStatusBanUser = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (user.banned) {
    return res.status(400).json({ message: "This user has an active ban" });
  }
  next();
};

const checkUsernameAndEmail = async (req, res, next) => {
  // const count = await User.estimatedDocumentCount();

  // // check for existing roles
  // if (count === 0) next();

  const user = await User.findOne({ username: req.body.username });
  console.log(user);
  if (!user) {
    return res.status(400).json({ message: "Username not found " });
  }

  const userEmail = await User.findOne({ email: req.body.email });
  if (!userEmail) {
    return res.status(400).json({ message: "Email not found" });
  }

  if (!req.body.password) {
    return res.status(400).json({ message: "Password is required" });
  }

  next();
};

module.exports = {
  checkDuplicateUserNameOrEmail,
  checkRolesExisted,
  checkStatusBanUser,
  checkUsernameAndEmail,
};
