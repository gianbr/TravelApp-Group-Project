import React from "react"


export default function cards({title, price, location, images }) {

  return (
      <div className='relative hover:opacity-80 shadow-md transition-all cursor-pointer p-3 bg-blue-200/10 backdrop-blur-lg w-56'>
  
            <div className={`${price} w-full h-5/6 bg-cover bg-center`}>
              <h1 className={`absolute left-2/4 top-1/2 translate uppercase -translate-x-1/2 -translate-y-1/2 text-2xl text-white`}><img src={images} alt="" className="w-56" /> </h1>
            </div>

            <div className='m-2 lg:m-4'>
                <h1 className=' uppercase text-white font-bold f'>{location}</h1>    
                <h1 >{title}</h1>
            </div>

        </div>
    );
}
