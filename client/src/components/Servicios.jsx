import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postPlain, getCity, getProvince, getIsAdmin } from "../actions";
import swal from "sweetalert";
import regsVideo from "../assets/pexels-cottonbro-5329613.mp4";
import { Link } from "react-router-dom";
import { validarServicios } from "./validarServicios";
import { useSelector } from "react-redux";
import Form from "@rjsf/core";
// import schema from "../../data/data2";
const schema = {
  type: "object",
  properties: {
    country: {
      type: "string",
      title: "Provincia",
      enum: ["Buenos Aires", "Río Negro", "Misiones", "Mendoza"],
    },
  },
  dependencies: {
    country: {
      oneOf: [
        {
          properties: {
            country: {
              enum: ["Buenos Aires"],
            },
            province: {
              type: "string",
              title: "Ciudad",
              enum: ["Tandíl", "Mar del Plata", "Tigre", "Nuñez", "CABA"],
            },
          },
        },
        {
          properties: {
            country: {
              enum: ["Río Negro"],
            },
            province: {
              type: "string",
              title: "State",
              enum: [
                "San Carlos de Bariloche",
                "Viedma",
                "Cipolletti",
                "El Bolsón",
              ],
            },
          },
        },
        {
          properties: {
            country: {
              enum: ["Misiones"],
            },
            province: {
              type: "string",
              title: "State",
              enum: ["Puerto Iguazú", "San Ignacio", "Posadas", "Oberá"],
            },
          },
        },
        {
          properties: {
            country: {
              enum: ["Mendoza"],
            },
            province: {
              type: "string",
              title: "State",
              enum: ["Mendoza", "Rivadavia", "Las Heras", "Godoy Cruz"],
            },
          },
        },
      ],
    },
  },
};
const uiSchema = {
  "ui:widget": (props) => {
    return (
      <input
        type="text"
        className="custom"
        placeholder="hola"
        onChange={(event) => props.onChange(event.target.value)}
      />
    );
  },
};

export default function CreateForm() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const lugares = useSelector((state) => state.lugares);
  const admin = useSelector((state) => state.isAdmin);

  const [plain, setPlain] = useState({
    title: "",
    location: "",
    city: "",
    price: "",
    images: [],
    stock: "",
    included: "",
    description: "",
  });
  console.log(plain);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getIsAdmin());
  }, [dispatch]);

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setPlain({
      ...plain,
      images: [...plain.images, base64],
    });
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
    });
  };

  // const onsubmit = (event) => {
  //   console.log(event);
  //   alert(JSON.stringify(event.formData));
  // };
  // function handleChangeProvince(e){
  //   if(e.target.value){
  //     setPlain({})}
  // }

  // function handleChangeCity(){

  // }

  function handleSubmit(e) {
    if (
      !plain.title ||
      !plain.price ||
      !plain.location ||
      !plain.city ||
      !plain.stock ||
      !plain.images ||
      !plain.included ||
      !plain.description
    ) {
      return swal({
        title: "¡Rellene los campos para continuar!",
        icon: "error",
      });
    } else {
      e.preventDefault();
      dispatch(postPlain(plain));
      swal({ title: "¡Servicio creado exitosamente!", icon: "success" });
    }
  }

  return (
    <>
      {admin ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
          <div className="hidden sm:block">
            <video
              className="w-full h-full object-cover"
              src={regsVideo}
              autoPlay
              loop
              muted
            />
          </div>
          {/* FORMULARIO */}
          <div className="bg-gray-100 flex flex-col-2 justify-center">
            <form
              className="max-w-[400px] w-full mx-auto bg-transparent p-4"
              onSubmit={handleSubmit}
            >
              <h2 className="text-4xl font-bold text-center">
                Vive la aventura. Crea tu paquete.
              </h2>

              <div className="flex flex-col py-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlForm="grid-first-name"
                >
                  Titulo
                </label>
                {errors.title && <p>{errors.title}</p>}
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Excursion/Paseo..."
                  onChange={(e) =>
                    setPlain({ ...plain, title: e.target.value })
                  }
                />

                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlForm="grid-first-name"
                >
                  Imagenes
                </label>
                {errors.images && <p>{errors.images}</p>}
                <div>
                  <input
                    type="file"
                    onChange={(e) => {
                      uploadImage(e);
                    }}
                  />{" "}
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlForm="grid-first-name"
                >
                  Precio
                </label>
                {errors.price && <p>{errors.price}</p>}
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="number"
                  placeholder="3000"
                  onChange={(e) =>
                    setPlain({ ...plain, price: e.target.value })
                  }
                />

                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlForm="grid-first-name"
                >
                  Incluido
                </label>
                {errors.included && <p>{errors.included}</p>}
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Guia/Bebidas..."
                  onChange={(e) =>
                    setPlain({ ...plain, included: e.target.value })
                  }
                />
              </div>
              <Form schema={schema} uiSchema={uiSchema} />
              <div>
                <div className="flex flex-col py-2">
                  {errors.city && <p>{errors.city}</p>}
                </div>
                <div className="flex flex-col py-2">
                  {errors.location && <p>{errors.location}</p>}
                </div>
                <div className="flex flex-col py-2">
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      {/* <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlForm="grid-first-name"
                >
                  Descripcion
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Experiencia unica..."
                  onChange={(e) =>
                    setPlain({ ...plain, description: e.target.value })
                  }
                />
                {errors.description && <p>{errors.description}</p>}
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlForm="grid-first-name"
                >
                  Stock
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="number"
                  placeholder="10"
                  onChange={(e) =>
                    setPlain({ ...plain, stock: e.target.value })
                  }
                />
                {errors.stock && <p>{errors.stock}</p>}
              </div>
              <div>
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlForm="grid-first-name"
                >
                  Date
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="number"
                  placeholder="10"
                  onChange={(e) => setPlain({ ...plain, date: e.target.value })}
                />
                {errors.date && <p>{errors.date}</p>}
              </div>

              <div className="flex justify-between">
                <button
                  className="w-full max-w-[700px] mx-auto rounded-2xl py-2 pt-4 p-3 focus:outline-none focus:ring focus:ring-indigo-500 bg-indigo-400 hover:bg-indigo-300 relative text-white font-semibold"
                  type="submit"
                >
                  Crea tu servicio
                </button>
              </div>
              <div className="pt-4">
                <Link to="/">
                  <button
                    className="w-full max-w-[700px] mx-auto rounded-2xl py-2 pt-4 p-3 focus:outline-none focus:ring focus:ring-indigo-500 bg-indigo-400 hover:bg-indigo-300 relative text-white font-semibold"
                    type="submit"
                  >
                    Pagina Principal
                  </button>
                </Link>
              </div>
            </form>
          </div>
          {/* FIN DEL FORMULARIO */}
        </div>
      ) : (
        <h1>A DORMIR LA SIESTA</h1>
      )}
    </>
  );
}
