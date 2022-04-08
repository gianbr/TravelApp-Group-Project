import React from 'react'
import { Link } from 'react-router-dom';


const Destino = ({image, title, price, location,id }) => { 
    // CARTA DE LINK DESTINATION
      return (
      <div className=''>
        <div className="max-w-sm shadow-lg h-full border-2 bg-gray-100 border-gray-100 border-opacity-100 rounded-lg overflow-hidden">
          <img src={image} alt="not found"  className='pt-2 group container rounded-md flex justify-center items-center mx-auto content-div' style={{ width:'300', height:'260px'}}/>
           <div className='pt-2'>
           <Link to={'/destination/' + id}>
            <h3 className='font-semibold text-slate-700 leading-snug'>{title}</h3> </Link>
            </div>
            <div className='py-4'>
            <p className=' pt-4 text-center text-1xl mt-2 text-slate-600'>Locacion: {location}</p>
            <p className='text-center text-1xl mt-2  text-slate-600'>Precio: ${price}</p>
            </div>  
          </div>
        </div>
      );
  };
  export default Destino;
