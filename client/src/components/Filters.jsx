import React from "react";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { getPlains ,filterByProvince, orderByPrice, orderByScore } from "../actions";
import { FaHome } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa'


export default function Filters ({setPage}) {
const dispatch = useDispatch()

useEffect (()=>{
 dispatch(getPlains())
}, [dispatch]);
        
function handleOrderByPrice (e) {
  e.preventDefault();
  dispatch(orderByPrice(e.target.value))
  setPage(1)
};

function handleOrderByScore (e) {
  e.preventDefault();
  dispatch(orderByScore(e.target.value))
  setPage(1)
};

function handleLocationFilter(e) {
  e.preventDefault();
  dispatch(filterByProvince(e.target.value))
  setPage(1)
};

    return(
     <div className=' max-w-7xl mx-auto pt-1 py-3 px-3 sm:px-6 lg:px-8 bg-indigo-300 flex justify-center'>
                    {/* FILTERS */}
                    
                    <button> <Link to='/' > <FaHome className='mr-2 ml-1' style={{color: '#ffff'}} size={25}/> </Link> </button>
                {/* FILTRADO POR PROVINCIA */}
        <select className='mr-2 flex justify-start px-4 py-2 border border-indigo-300	border-color: rgb(20 184 166); rounded-md shadow-sm text-base font-medium text-black' onChange={e => handleLocationFilter(e)}>  
            <option value="All">Provincia</option>
            <option value="Misiones">Misiones</option>
            <option value="Mendoza">Mendoza</option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Río Negro">Río Negro</option>
               
                {/* ORDENAMIENTO POR PRECIO */}
                </select>
        <select className="mr-2 flex items-center justify-center px-4 py-2 border border-indigo-300	border-color: rgb(20 184 166); rounded-md shadow-sm text-base font-medium text-black" onChange={e => handleOrderByPrice(e)}>  
            <option value="All">Precio</option>
            <option value= "asc">Menor - Mayor</option>
            <option value= "desc">Mayor - Menor</option>
                </select>
            
                {/* ORDENAMIENTO POR PUNTAJE  */}
        <select className='mr-2 flex items-center justify-center px-4 py-2 border border-indigo-300	border-color: rgb(20 184 166); rounded-md shadow-sm text-base font-medium text-black' onChange={e => handleOrderByScore(e)}>  
            <option value="All">Puntaje</option>
            <option value= "asc">Menor - Mayor</option>
            <option value= "desc">Mayor - Menor</option>
               </select>
                  <button><Link to='/shopping'> <FaShoppingCart className='mr-2 text-white' size={20}/> </Link></button>
               {/* PAGINA PRINCIPAL */}
     </div>
    );
};