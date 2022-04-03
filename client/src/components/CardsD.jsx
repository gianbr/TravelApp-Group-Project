import React from 'react';

import { RiStarFill } from 'react-icons/ri'
import { RiStarHalfFill } from 'react-icons/ri'



function CardsD({ image, title, location, score}){

return( 
                    // CARTA
    <div>
    <div className='h-full border-2 bg-gray-100 border-gray-100 border-opacity-100 rounded-lg overflow-hidden' >
    <img  src={image} alt='vacation' />
    <div className='px-6 py-4'>
    <div>
    <h2 className='text-base font-medium mb-1'>{title} </h2>
    <p className='leading-relaxed mb-3'>{location} </p>
    </div>
    <div className='flex justify-between items-center'>
    
       
            </div>
        </div>
    </div>
 

    </div> 
)};
export default CardsD;