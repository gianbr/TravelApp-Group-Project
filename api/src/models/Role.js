const { Schema, model } = require("mongoose");

//const ROLES = ["user", "admin"];

const roleSchema = new Schema(
  {
    //este schema va a ser para el rol de cada usuario como una coleecion de roles
    name: String,
  },
  {
    versionKey: false, //(no quiero q se genere una version en el modelo, para q no aparezca su gion gion uv cada vez q se crea un documento)
  }
);
module.exports = model("Role", roleSchema);
