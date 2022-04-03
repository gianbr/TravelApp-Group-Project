import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import StarRating from "./StartRating";


function CardsD({ image, title, location, score, id}){

return( 
                    // CARTA
    <div>
    <div className='h-full border-2 bg-gray-100 border-gray-100 border-opacity-100 rounded-lg overflow-hidden' >
            <Link to={'/destination/' + id}>
    <img  src={image} alt='vacation' /> </Link>
    <div className='px-6 py-4'>
    <div>
    <h2 className='text-base font-medium mb-1'>{title} </h2>
    <p className='leading-relaxed mb-3'>{location} </p>
    </div>
    <div className='flex justify-between items-center'>
                    <StarRating score={score} />
       
            </div>
        </div>
    </div>
 

    </div> 
)};
export default CardsD;