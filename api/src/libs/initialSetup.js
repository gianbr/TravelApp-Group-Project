require("../connections/mongo");
const Role = require("../models/Role");
const User = require("../models/User");

const bcrypt = require("bcryptjs");

const createRoles = async () => {
  try {
    // Count Documents
    const count = await Role.estimatedDocumentCount();

    // check for existing roles
    if (count > 0) return;

    // Create default Roles
    const values = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "admin" }).save(),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

const createAdmin = async () => {
  // check for an existing admin user
  const user = await User.findOne({ email: "admin@localhost" });
  // get roles _id
  const roles = await Role.find({ name: { $in: "admin" } });

  if (!user) {
    // create a new admin user
    await User.create({
      username: "admin",
      email: "admin@localhost",
      password: await bcrypt.hash("admin", 10),
      roles: roles.map((role) => role._id),
    });
    console.log("Admin User Created!");
  }
};
module.exports = { createRoles, createAdmin };
