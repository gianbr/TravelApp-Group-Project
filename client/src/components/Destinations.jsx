import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Destino from "./Destino";
import Filters from "./Filters";
import Pagination from "./Pagination";
import Searchbar from "./Searchbar";
//import NotFound from '../assets/mapa.webp'
import { getPlains } from "../actions";

function Destinations() {
  const plains = useSelector((state) => state.plains);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const plainsPerPage = 6;
  const end = page * plainsPerPage;
  const start = end - plainsPerPage;
  const currentPlains = plains?.slice(start, end);

	const pagination = (page) => {
		setPage(page);
	};

  useEffect(() => {
    dispatch(getPlains());
  }, [dispatch]);

  return (
    <div>
      <div className="relative z-10 bg-indigo-300 pt-6 pb-6 border-b border-gray-200">
        {/* RENDERIZADO DE FILTROS */}
        <div className="flex justify-center text-white">
          <h1>TRAVEL APP.</h1>
        </div>
        <Searchbar />
        <Filters setPage={setPage}/>
      </div>
      {/* CONTAINER DE LA CARTA - PAQUETE */}

      <div className="container mx-auto">
        <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentPlains?.map((destination) => {
            return (
              <div className="h-[556px]" key={destination.id}> {/* h-[556px] es el tamaño de la card */}
                <Destino image={destination.image} title={destination.title} location={destination.location} price={destination.price} id={destination.id} />
              </div>
            );
          })}
        </div>
        <div className=" pt-4 flex justify-center text-center p-4">
          <Pagination page={page} setPage={setPage} plainsPerPage={plainsPerPage} plains={plains.length} pagination={pagination} />
        </div>
      </div>
    </div>
  );
}
export default Destinations;
