import React, { useState } from "react";
import "./styles.css";
import StarRating from "./StartRating";
import {Link} from "react-router-dom"


function CardsD({ image, title, location, score}){

return( 
                    // CARTA
    <div>
        <Link to="/destination/">
    <div className='h-full border-2 bg-gray-100 border-gray-100 border-opacity-100 rounded-lg overflow-hidden' >
            <img src={image} alt='vacation' className="h-96"  />
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
 
</Link>
    </div> 
)};
export default CardsD;