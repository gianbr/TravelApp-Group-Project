const { Schema, model } = require("mongoose"); //le damos los datos q queramos al usuario ya que van a tener sus propios modelos
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    banned: {
      type: Boolean,
      default: false,
    },
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId, //un usuario puede tener multiples roles, como relacion uno a muchos
      },
    ], //que tiene permitido hacer y que no , este arreglo de roles van a ser puros ID
  },
  {
    timestamps: true, // (fecha de creacion y actualizacion)
    versionKey: false, //(no quiero q se genere una version en el modelo, para q no aparezca su gion gion uv cada vez q se crea un documento)
  }
);

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword); //compara el password que se envio con el que se recibio returna un true o false si no coincide
};

var User = model("User", userSchema);
module.exports = User;
