import React from "react"
import act6 from '../assets/actividad4.jpeg'
import act3 from '../assets/actividad7.jpeg'
import act5 from '../assets/actividad7.jpeg'

export default function CardsPackage({location, images }) {

  return (
    < div className= 'grid grid-cols-4 gap-4 rounded-lg  border-4  shadow-md transition-all cursor-pointer p-10 backdrop-blur-lg' >
      <div className='h-full border-2 hover:opacity-80 bg-gray-100 border-gray-100 border-opacity-100 rounded-lg overflow-hidden' >
        <img src={act6} alt='vacation' />
        <div className='px-6 py-4'>
          <div className='flex justify-center m-1 lg:m-5'>
            <p className='leading-relaxed mb-3'>Ubicacion</p>
          </div>
        </div>
      </div>
  {/* CARTA */ }
      <div className='h-full border-2 bg-gray-100 hover:opacity-80  border-gray-100  border-opacity-100 rounded-lg overflow-hidden' >
    <img src={act6} alt='vacation' />
    <div className='px-6 py-4'>
          <div className='flex justify-center m-1 lg:m-5'>
        <p className='leading-relaxed mb-3'>Ubicacion</p>
      </div>
    
    </div>
  </div>
  {/* CARTAS */  }
      <div className='h-full border-2 hover:opacity-80  bg-gray-100 border-gray-100 border-opacity-100 rounded-lg overflow-hidden' >
    <img src={act3} alt='vacation' />
    <div className='px-6 py-4'>
          <div className='flex justify-center m-1 lg:m-5'>
        <p className='leading-relaxed mb-3'>Ubicacion</p>
      </div>
    </div>
  </div>
  {/* CARTA */ }
      <div className='h-full border-2 hover:opacity-80 bg-gray-100 border-gray-100  border-opacity-100  rounded-lg overflow-hidden' >
    <img src={act5} alt='vacation' />
    <div className='px-6 py-4'>
          <div className='flex justify-center m-1 lg:m-5'>
        <p className='leading-relaxed mb-3'>Ubicacion</p>
      </div>
    </div>
  </div>

    </div > 
)
};