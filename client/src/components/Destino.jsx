import React from 'react'
import { Link } from 'react-router-dom';


const Destino = ({image, title, price, location,id}) => { 
    return (
        <div className='max-w-sm overflow-hidden shadow-lg'>
        <img src={image} alt=""  className='w-full' style={{width:'400px', height:'200px'}}/>
            <Link to={'/destination/' + id}>
        <h3 className='px6 py-4 font-bold text-teal-500 text-xl mb-2'>{title}</h3>
        </Link>
        <p>{location}</p>
        <div className="info">
        <h4>$ {price}</h4>
        </div>
        </div>
    );
};
export default Destino;