import { React, useState } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { signup } from "../actions";
import { validate } from "./validate";
import Navbar from "./Navbar";
import surfer from "../assets/surfer.svg";

const Register = () => {
  const [errors, setErrors] = useState({});
  console.log(errors);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    if (
      Object.keys(errors).length ||
      !data.username ||
      !data.email ||
      !data.password
    ) {
      e.preventDefault();
      return swal({
        title: "¡Rellene los campos para continuar!",
        icon: "error",
      });
    } else {
      e.preventDefault();
      dispatch(signup(data), console.log("submit", data));
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...data,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <div className="w-full h-screen relative bg-indigo-300">
      <Navbar />
      <div className="flex justify-center items-center h-full shadow rounded-lg">
        <div class="mb-4">
          <img src={surfer} alt="" />
        </div>
        <form className="max-w-[400px] w-full mx-auto bg-white p-8">
          <h2 className="text-4xl font-bold text-center py-4">TRAVEL APP.</h2>

          <div className="flex flex-col mb-4">
            <label>Nombre</label>
            <input
              onChange={handleChange}
              placeholder="Nombre"
              className="border relative bg-gray-100 p-2"
              name="username"
              type="text"
            />
            {errors.username && <p>{errors.username}</p>}
          </div>

          <div className="flex flex-col mb-4">
            <label>Correo</label>
            <input
              placeholder="Correo"
              onChange={handleChange}
              className="border relative bg-gray-100 p-2"
              name="email"
              type="text"
            />
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div className="flex flex-col ">
            <label>Contraseña</label>
            <input
              placeholder="Contraseña"
              onChange={handleChange}
              className="border relative bg-gray-100 p-2"
              name="password"
              type="password"
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div onClick={handleSubmit}>
            <button className="w-full py-3 mt-6 bg-indigo-400 hover:bg-indigo-500 relative text-white">
              Ingresa tus datos
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
