import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { googleLogIn, setCurrentUser, signin } from "../actions";
import Navbar from "./Navbar";
import { validate } from "./validate";
import swal from "sweetalert";
import undraw from "../assets/undraw_dream_world_re_x2yl.svg"

const PORT = "720796673981-us7jgj5e8ospme3qt22432hiedcni3vt.apps.googleusercontent.com";

function Login() {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const responseGoogle = async (response) => {
      const user = dispatch(googleLogIn({ token: response.tokenId }));
      //console.log(user);
      dispatch(setCurrentUser(user));
  };

  const handleSubmit = async (e) => {
    if (!Object.keys(errors)) {
      e.preventDefault();
      return swal({
        title: "¡Rellene los campos para continuar!",
        icon: "error",
      });
    } else {
      e.preventDefault();
      dispatch(signin(data), console.log("submit", data));
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value);
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
      <div className="mb-4">
                <img src={undraw} alt=""/>
            </div>
        <form className="max-w-[400px] w-full mx-auto bg-white p-8">
        
        <div className="flex flex-col mb-4">
            <label>Correo</label>
            <input onChange={handleChange} className="border relative bg-gray-100 p-2" type="text" name="email" />
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div className="flex flex-col ">
            <label>Contraseña</label>
            <input onChange={handleChange} className="border relative bg-gray-100 p-2" type="password" name="password" />
            {errors.password && <p>{errors.password}</p>}
          </div>

          <div onClick={handleSubmit}>
            <button type="submit"
              className="w-full py-3 mt-4 bg-indigo-400 hover:bg-indigo-500 relative text-white rounded-full"
            > Inicia Sesion
            </button>
          </div>

          <div >
          <GoogleLogin
                            clientId={PORT}
                            className="w-full rounded-full py-2 mt-6 bg-gray-100 shadow shadow-gray-400 relative text-black flex justify-center items-center"
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={"single_host_origin"}
                        />
            </div>
          <div>
            <Link to="/register">
              <button type="submit" className="w-full py-3 mt-6 bg-transparent relative text-black"
              > No tienes una cuenta? Registrate Aqui.
              </button>
            </Link>{" "}

            <Link to="/resetpassword">
              <button type="submit" className="w-full py-3 bg-transparent relative text-black"
              > ¿Olvidaste tu contraseña?
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;

