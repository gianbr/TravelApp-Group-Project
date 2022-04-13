import React from 'react'
import { Link } from 'react-router-dom';


const Destino = ({image, title, price, location,id }) => { 
    // CARTA DE LINK DESTINATION
    return (
                    // CARTA
        <div className="rounded-lg flex justify-center">
            <Link to={"/destination/" + id}>
            <div className='w-96 h-[556px] border-2 bg-gray-100 border-opacity-100' >  {/* h-[556px] es el tamaño de la card */}
                <div className='w-96 h-96'> 
                    <img src={image} alt='vacation' className="w-96 h-96 rounded-lg shadow-lg shadow-[#040c16]" />
                </div>
                <div className='px-6 py-4'>
                    <div>
                        <h2 className='text-base font-medium mb-1'>{title} </h2>
                        <p className='leading-relaxed mb-3'> <strong>Ubicación: {location} </strong> </p>
                    </div>
                    <div className='flex justify-between items-center'>
                    <p>  <strong>Precio: ${price}</strong> </p>
                    </div>
                </div>
            </div>
            </Link>
        </div> 
    );
};
export default Destino;
