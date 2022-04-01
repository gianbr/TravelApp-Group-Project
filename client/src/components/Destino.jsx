import React from 'react'
import { Link } from 'react-router-dom';


const Destino = ({image, title, price, location,id }) => { 
    // CARTA DE LINK DESTINATION
      return (
        <div className='max-w-sm shadow-lg h-full border-2 bg-gray-100 border-gray-100 border-opacity-100 rounded-lg overflow-hidden'>
          <img src={image} alt=""  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div' style={{ height:'260px'}}/>
              <Link to={'/destination/' + id}>
          <h3 className='text-1xl tracking-wider font-semibold text-teal-500 py-4'>{title}</h3> </Link>
          <div>
          <p className='text-center'>Locacion: {location}</p>
            <h4 className=' py-1 text-center'>Precio: ${price}</h4>
          </div>
          </div>
      );
  };
  export default Destino;