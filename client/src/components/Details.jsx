import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  getDetailId,
  clearState,
  addItem,
  deletePlain,
} from "../actions/index";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import CarouselCom from "./CarouselCom";
import Calendario from "./Calendario";
import { v4 as uuid } from "uuid";
import __ from "lodash";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  const [item, setItem] = useState({}); //Estado para construir item y agregarlo al carrito
  const [disabled, setDisabled] = useState(true);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("test")));
  const cart = useSelector((state) => state.cartPlains);

  const history = useHistory();

  const cartId = uuid();
  console.log("esto es el item: ", item);

  useEffect(() => {
    dispatch(getDetailId(id));
    dispatch(clearState());
    // return () => {
    // 	//componentWillUnmount, para resetear el item cuando se fueran del detalle de la excursión.
    // 	setItem((prevState) => {
    // 		return {};
    // 	});
    // };
  }, [dispatch, id]);

  const handleDate = (date) => {
    // console.log(typeof date)
    let dateJson = JSON.stringify(date);
    // console.log(dateJson)
    let dateJsonSliced = dateJson.slice(1, 11);
    // console.log(dateJsonSliced)
    // console.log(typeof dateJson)
    // console.log(dateJson)
    // console.log(disabled);
    setItem((prevState) => {
      return { ...prevState, date: dateJsonSliced };
    });
  };

  const handleAddCart = () => {
    dispatch(
      addItem({
        ...item,
        name: detail.title,
        price: detail.price,
        image: detail.images,
        city: detail.city,
        location: detail.location,
        cartId: cartId,
        stock: detail.stock,
        id,
      })
    );
    history.push("/destination");
  };

  const handleQuantity = (e) => {
    setItem((prevState) => {
      if (e.target.value > detail.stock || e.target.value <= 0) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
      return { ...prevState, [e.target.name]: parseInt(e.target.value) };
    });
  };

  const handleDelete = (id) => {
    const sure = window.confirm("Are you sure you want to delete this?");
    if (sure) {
      dispatch(deletePlain(id));
      console.log(id);
      alert("Deleted Successfully!");
      history.push("/destination");
    }
  };

  const renderCartButton = () => {
    if (!__.isEmpty(user)) {
      return (
        <button
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddCart}
          disabled={disabled}
        >
          Agregar al carrito
        </button>
      );
    } else {
      return (
        <Link to="/login">
          <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Agregar al carrito
          </button>
        </Link>
      );
    }
  };

  // const renderEditAndDeleteButton = () => {
  //   if (!__.isEmpty(user)) {
  //     let roles = user.roles.map((role) => role.name);
  //     if (roles.includes("admin")) {
  //       return (
  //         <div className="flex justify-between">
  //           <button className="absolute top-0.5 left-3 bg-indigo-300 hover:bg-blue-300 text-white font-bold py-1 px-3 rounded-full">
  //             <Link to={`/editarservicios/${id}`}>
  //               <svg
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 className="h-5 w-5"
  //                 viewBox="0 0 20 20"
  //                 fill="currentColor"
  //               >
  //                 <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
  //               </svg>
  //             </Link>
  //           </button>
  //           <button
  //             onClick={() => handleDelete(id)}
  //             className="absolute top-0.5 right-3 bg-indigo-300 hover:bg-blue-300 text-white font-bold py-1 px-3 rounded-full"
  //           >
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               className="h-5 w-5"
  //               viewBox="0 0 20 20"
  //               fill="currentColor"
  //             >
  //               <path
  //                 fillRule="evenodd"
  //                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
  //                 clipRule="evenodd"
  //               />
  //             </svg>
  //           </button>
  //         </div>
  //       );
  //     }
  //   }
  // };

  // create a function that checks if the item in the cart has the same id and date as the detail
  const checkIdDate = (cart) => {
    return cart.find(
      (cartItem) => cartItem.date === item.date && cartItem.id === id
    );
  };

  const renderStock = () => {
    const checkedIdDate = checkIdDate(cart);
    if (checkedIdDate) {
      return (
        <h3 className="text-base leading-4 text-gray-800 m-2">
          Máximo: {detail.stock - checkedIdDate.quantity} personas
        </h3>
      );
    } else {
      return (
        <h3 className="text-base leading-4 text-gray-800 m-2">
          Máximo: {detail.stock} personas
        </h3>
      );
    }
  };

  const maxStockInput = () => {
    const checkedIdDate = checkIdDate(cart);
    if (checkedIdDate) {
      return (
        <input
          className="border-solid border-2 border-indigo-300"
          type="number"
          name="quantity"
          min={1}
          max={detail.stock - checkedIdDate.quantity}
          onChange={handleQuantity}
          value={item.quantity}
          disabled={detail.stock - checkedIdDate.quantity === 0 ? true : false}
        />
      );
    } else {
      return (
        <input
          className="border-solid border-2 border-indigo-300"
          type="number"
          name="quantity"
          min={1}
          max={detail.stock}
          onChange={handleQuantity}
          value={item.quantity}
        />
      );
    }
  };

  const renderEditAndDeleteButton = () => {
    if (!__.isEmpty(user)) {
      let roles = user.roles.map((role) => role.name);
      if (roles.includes("admin")) {
        return (
          <div className="flex justify-between">
            <button className="absolute top-0.5 left-3 bg-indigo-300 hover:bg-blue-300 text-white font-bold py-1 px-3 rounded-full">
              <Link to={`/editarservicios/${id}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </Link>
            </button>
            <button
              onClick={() => handleDelete(id)}
              className="absolute top-0.5 right-3 bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-3 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        );
      }
    }
  };

  return (
    <div className="bg-slate-200">
      <div className="border-2 border-indig-300 mx-28  bg-gray-100/90">
        <div className="h-5 relative">
          {renderEditAndDeleteButton()}
          {/* <button className="absolute top-0.5 left-3 bg-indigo-300 hover:bg-blue-300 text-white font-bold py-1 px-3 rounded-full">
						<Link to={`/servicios/${id}`}>
							<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
							>
							<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
							</svg>
						</Link>
					</button>
					<button
					onClick={() => handleDelete(id)}
					className="absolute top-0.5 right-3 bg-indigo-300 hover:bg-blue-300 text-white font-bold py-1 px-3 rounded-full"
					>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
						fillRule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clipRule="evenodd"
						/>
					</svg>
					</button> */}
        </div>
        <div>
          <div className="bg-indigo-300">
            <h3 className="ml-11 mt-4 p-2 font-bold text-3xl text-white text-center">
              {detail.title}
            </h3>
          </div>

          <div className="flex justify-between">
            <div className="ml-5 mt-5">
              {detail.city}, {detail.location}
            </div>
            {detail.score <= 2 ? (
              <h3 className="text-right mr-10">
                {" "}
                Puntaje: <p className="text-red-500">{detail.score}</p>
              </h3>
            ) : (
              <h3 className="text-right mr-10">
                Puntaje:<p className="text-green-500">{detail.score}</p>
              </h3>
            )}
          </div>
          <Carousel />
        </div>

        <br />

        <div className=" mx-12">
          <p>{detail.description}</p>
        </div>

        <br />

        <div>
          <p className="bg-indigo-300 text-white">
            <strong>INCLUYE: </strong>
          </p>
          <div>
            <h4 className="ml-12">-{detail?.included}</h4>
          </div>
        </div>
        <hr className="bg-indigo-300 h-5" />
        <div className="flex justify-evenly mt-5">
          <div className="flex items-center">
            <h3 className="text-base leading-4 text-gray-800 m-2">Fecha:</h3>
            <Calendario handleDate={handleDate} detailsDates={detail.date} />
          </div>
          <div className="py-2 pr-2 flex items-center">
            <h3 className="text-base leading-4 text-gray-800 m-2">
              Personas:{" "}
            </h3>
            {/* <input onChange={(e) => handleQuantity(e)} className="border-solid border-2 border-indigo-300" type="number" name="quantity" min={1} max={}/> */}
            {maxStockInput()}
          </div>
          <div>
            {/* <h3 className="text-base leading-4 text-gray-800 m-2">
							Máximo:{" "}
							{detail.stock} personas
						</h3> */}
            {renderStock()}
            <h3 className="text-base leading-4 text-gray-800 m-2">
              Precio: ${detail.price}
            </h3>
          </div>
        </div>

        <br />
        <div className="mx-52 border-2 border-indigo-500 mb-20 rounded-md bg-indigo-300 text-white list-none">
          <p className="mt-3 ml-5">
            <strong>COMENTARIOS: </strong>
          </p>
          <CarouselCom />
        </div>
        <div className="flex justify-center gap-56 mb-4 text-1xl font-mono text-teal-500 mb-10">
          <Link to="/destination">
            <button className="rounded-2xl py-2 p-3 focus:outline-none focus:ring focus:ring-indigo-500 bg-indigo-400 hover:bg-indigo-300 relative text-white font-semibold">
              VOLVER
            </button>
          </Link>
          {renderCartButton()}
        </div>
      </div>
    </div>
  );
}
export default Details;
