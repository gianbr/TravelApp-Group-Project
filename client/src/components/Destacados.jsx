import React from 'react';
import CardsD from './CardsD';

function Destacados(){
    return(
        <div className='max-w-[1240px] mx-auto py-16 px-4'>
            <h1 className='py-2 text-center'>Destinos Recomendados</h1>
            <hr className='py-4  border-gray-300' style={{color: '#14b8a6'}}/>
            <div>
            <CardsD/>
            </div>
        </div>
    );
};
export default Destacados;