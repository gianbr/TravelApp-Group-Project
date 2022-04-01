import React from 'react';
import act6 from '../assets/actividad6.jpeg'
import act3 from '../assets/actividad3.jpeg'
import act5 from '../assets/actividad5.jpeg'
import { RiStarFill } from 'react-icons/ri'
import { RiStarHalfFill } from 'react-icons/ri'

function CardsD(){

return( 
                    // CARTA
    <div className='grid grid-cols-4 gap-4'>
    <div className='h-full border-2 bg-gray-100 border-gray-100 border-opacity-100 rounded-lg overflow-hidden' >
    <img  src={act6} alt='vacation' />
    <div className='px-6 py-4'>
    <div>
    <h2 className='text-base font-medium mb-1'>Nombre del paquete</h2>
    <p className='leading-relaxed mb-3'>Ubicacion</p>
    </div>
    <div className='flex justify-between items-center'>
        <RiStarFill className='mr-1' size={15}/>  <RiStarFill className='mr-1' size={15}/>
        <RiStarFill className='mr-1' size={15}/> <RiStarFill className='mr-1' size={15}/>
            <RiStarHalfFill className='mr-1' size={15}/>
            </div>
        </div>
    </div>
                    {/* CARTA */}
    <div className='h-full border-2 bg-gray-100 border-gray-100  border-opacity-100 rounded-lg overflow-hidden' >
    <img  src={act6} alt='vacation' />
    <div className='px-6 py-4'>
    <div>
    <h2 className='text-base font-medium mb-1'>Nombre del paquete</h2>
    <p className='leading-relaxed mb-3'>Ubicacion</p>
    </div>
    <div className='flex justify-between items-center'>
    <RiStarFill className='mr-1' size={15}/>  <RiStarFill className='mr-1' size={15}/>
    <RiStarFill className='mr-1' size={15}/> <RiStarFill className='mr-1' size={15}/>
            <RiStarHalfFill className='mr-1' size={15}/>
            </div>
        </div>
    </div>
                            {/* CARTA */}
    <div className='h-full border-2 bg-gray-100 border-gray-100 border-opacity-100 rounded-lg overflow-hidden' >
    <img  src={act3} alt='vacation' />
    <div className='px-6 py-4'>
    <div>
    <h2 className='text-base font-medium mb-1'>Nombre del paquete</h2>
    <p className='leading-relaxed mb-3'>Ubicacion</p>
    </div>
    <div className='flex justify-between items-center'>
    <RiStarFill className='mr-1' size={15}/>  <RiStarFill className='mr-1' size={15}/>
    <RiStarFill className='mr-1' size={15}/> <RiStarFill className='mr-1' size={15}/>
        <RiStarHalfFill className='mr-1' size={15}/>
            </div>
        </div>
    </div>
                                {/* CARTA */}
    <div className='h-full border-2 bg-gray-100 border-gray-100  border-opacity-100  rounded-lg overflow-hidden' >
    <img  src={act5} alt='vacation' />
    <div className='px-6 py-4'>
    <div>
    <h2 className='text-base font-medium mb-1'>Nombre del paquete</h2>
    <p className='leading-relaxed mb-3'>Ubicacion</p>
    </div>
    <div className='flex justify-between items-center'>
    <RiStarFill className='mr-1' size={15}/>  <RiStarFill className='mr-1' size={15}/>
    <RiStarFill className='mr-1' size={15}/> <RiStarFill className='mr-1' size={15}/>
            <RiStarHalfFill className='mr-1' size={15}/>
            </div>
        </div>
    </div>

    </div> 
)};
export default CardsD;