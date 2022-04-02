import React from "react";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { getPlains ,filterByProvince, orderByPrice, orderByScore } from "../actions";
import { FaHome } from 'react-icons/fa'
import { Link } from "react-router-dom";


export default function Filters () {
const dispatch = useDispatch()

useEffect (()=>{
 dispatch(getPlains())
}, [dispatch]);
        
function handleOrderByPrice (e) {
  e.preventDefault();
  dispatch(orderByPrice(e.target.value))
};

function handleOrderByScore (e) {
  e.preventDefault();
  dispatch(orderByScore(e.target.value))
};

function handleLocationFilter(e) {
  e.preventDefault();
  dispatch(filterByProvince(e.target.value))
};

    return(
     <div className=' max-w-7xl mx-auto pt-1 py-3 px-3 sm:px-6 lg:px-8 bg-teal-500 flex items-center justify-between flex-wrap'>
        <div><h1 className='mr-4' style={{color: '#ffff'}}>TRAVEL APP</h1></div>
                    {/* FILTERS */}
               
                {/* FILTRADO POR PROVINCIA */}
        <select className='mr-2 flex items-center justify-center px-4 py-2 border border-teal-500	border-color: rgb(20 184 166); rounded-md shadow-sm text-base font-medium text-black' onChange={e => handleLocationFilter(e)}>  
            <option value="All">Provincia</option>
            <option value="Misiones">Misiones</option>
            <option value="Mendoza">Mendoza</option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Río Negro">Río Negro</option>
               
                {/* ORDENAMIENTO POR PRECIO */}
                </select>
        <select className="mr-2 flex items-center justify-center px-4 py-2 border border-teal-500	border-color: rgb(20 184 166); rounded-md shadow-sm text-base font-medium text-black" onChange={e => handleOrderByPrice(e)}>  
            <option value="All">Precio</option>
            <option value= "asc">Menor - Mayor</option>
            <option value= "desc">Mayor - Menor</option>
                </select>
            
                {/* ORDENAMIENTO POR PUNTAJE  */}
        <select className='mr-2 flex items-center justify-center px-4 py-2 border border-teal-500	border-color: rgb(20 184 166); rounded-md shadow-sm text-base font-medium text-black' onChange={e => handleOrderByScore(e)}>  
            <option value="All">Puntaje</option>
            <option value= "asc">Menor - Mayor</option>
            <option value= "desc">Mayor - Menor</option>
               </select>
               {/* PAGINA PRINCIPAL */}
        <button> <Link to='/' > <FaHome className='mr-4' style={{color: '#ffff'}} size={25}/> </Link> </button>
     </div>
    );
};