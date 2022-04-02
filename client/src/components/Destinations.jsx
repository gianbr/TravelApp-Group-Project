import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPlains } from '../actions';
import Destino from './Destino';
import Filters from './Filters';
import { searchDestination } from "../actions";
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';

function Destinations() { 

const dispatch = useDispatch();
  const plains = useSelector((state) => state.plains);
  const [name, setName] = useState("");

  

useEffect(() => {
  dispatch(getPlains());
}, [dispatch]);
  
const handleInputChange = (e) => {
  e.preventDefault();
  setName(e.target.value);
};
 
const handleClick = (e) => {
  e.preventDefault();
  if (name) {
    dispatch(searchDestination(name));
    setName('')
  };
}



return(
  <div>
   <div className="relative z-10 flex items-baseline justify-between bg-teal-500 pt-10 pb-6 border-b border-gray-200">
     
     {/* RENDERIZADO DE FILTROS */}
      <Filters />
      <div className='py-4'>
          <form onSubmit={e => handleClick(e)} className=' w-full flex justify-between items-center max-w-[700px] mx-auto rounded-2xl border-none text-black bg-gray-100/90 py-1'>
            <div>
              <input className=' px-3 py-2 font-semibold bg-transparent text-black focus:outline-none rounded-2xl border-none'
                type='text' placeholder='Busca tu destino' onChange={e => handleInputChange(e)}/>
                </div>
          <div>
            <AiOutlineSearch size={25} className='icon mr-2' style={{ color: '#000000 ' }} onClick={e => handleClick(e)}/>
              </div>
          </form>
          </div>
      </div>
      {/* CONTAINER DE LA CARTA - PAQUETE */}
  <div className='container mx-auto'>
    <div className='py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
    {plains?.map((destination) => {
      return (
       <div key={destination.id}>
        <Destino 
          image={destination.image}
          title={destination.title}
          location={destination.location}
          price={destination.price}
          id={destination.id} />
            </div>
          );
        })}
         </div>
        </div>
      </div>
    );
};
export default Destinations;