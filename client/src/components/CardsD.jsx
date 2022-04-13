import React from "react";
import "./styles.css";
import StarRating from "./StartRating";
import {Link} from "react-router-dom"


function CardsD({ image, title, location, score, id}){

return( 
                    // CARTA
    <div >
        <Link to={"/destination/" + id}>
            <div className='h-full border-2 bg-gray-100 border-gray-100 border-opacity-100  overflow-hidden ' >
                <div className="h-96 w-96 object-cover">
                    <img src={image} alt='vacation' className="h-96 w-96 rounded-lg shadow-lg shadow-[#040c16]"  />
                </div>
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