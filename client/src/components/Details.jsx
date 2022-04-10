import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getDetailId, clearState, addItem } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import CarouselCom from "./CarouselCom";
import Calendario from "./Calendario";

function Details() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const detail = useSelector((state) => state.detail);
	const [item, setItem] = useState({}); //Estado para construir item y agregarlo al carrito
	const [disabled, setDisabled] = useState(true);

	const history = useHistory();

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
		console.log(date)
		let dateJson = JSON.stringify(date);
		setItem((prevState) => {
			return { ...prevState, date: dateJson };
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
				id,
			})
		);
		history.push("/destination");
	};

	const handleQuantity = (e) => {
		setItem((prevState) => {
			if (e.target.value <= detail.stock && e.target.value > 0) {
				setDisabled(false);
			}
			return { ...prevState, [e.target.name]: e.target.value };
		});
	}

	return (
		<div className="bg-slate-200">
			<div className="border-2 border-indig-300 mx-28  bg-gray-100/90">
				<div>
					<div className="bg-indigo-300">
						<h3 className="ml-11 mt-4 font-bold text-3xl text-white">
							{detail.city},{" "}
							{detail.location}
						</h3>
					</div>

					<div>
						{detail.score <= 2 
						? ( <h3 className="text-right mr-10"> Puntaje:{" "}<p className="text-red-500">{detail.score}</p></h3>) 
						: (<h3 className="text-right mr-10">Puntaje:<p className="text-green-500">{detail.score}</p></h3>)
						}
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
					{detail.included?.map((i, id) => (
						<div key={id}>
							<h4 className="ml-12">
								-{i}
							</h4>
						</div>
					))}
				</div>
				<hr className="bg-indigo-300 h-5" />
				<div className="flex justify-evenly mt-5">
					<div className="flex items-center">
						<h3 className="text-base leading-4 text-gray-800 m-2">Fecha:</h3>
						<Calendario
							handleDate={handleDate}
							detailsDates={
								detail.date
							}
						/>
					</div>
					<div className="py-2 pr-2 flex items-center">
						<h3 className="text-base leading-4 text-gray-800 m-2">Personas: </h3>
						<input onChange={(e) => handleQuantity(e)} className="border-solid border-2 border-indigo-300" type="number" name="quantity" min={1} max={detail.stock}/>
					</div>
					<div>
						<h3 className="text-base leading-4 text-gray-800 m-2">
							Máximo:{" "}
							{detail.stock} personas
						</h3>
						<h3 className="text-base leading-4 text-gray-800 m-2">Precio: ${detail.price}</h3>
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
					<button disabled={disabled} onClick={handleAddCart} className="rounded-2xl py-2 p-3 focus:outline-none focus:ring focus:ring-indigo-500 bg-green-400 hover:bg-indigo-300 relative text-white font-semibold">
						Agregar al carrito
					</button>
				</div>
			</div>
		</div>
	);
}
export default Details;
