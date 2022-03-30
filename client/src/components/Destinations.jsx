import React, { useState, useEffect } from 'react'
import id1 from '../assets/Id1.jpg'
import id2 from '../assets/id2.jpg'
import id3 from '../assets/id3.jpg'
import id4 from '../assets/id4.jpg'
import id5 from '../assets/id5.jpg'
import id6 from '../assets/id6.jpeg'
import id7 from '../assets/id7.jpeg'
import id8 from '../assets/id9.jpeg'
import id9 from '../assets/id9.jpeg'
import id10 from '../assets/id10.jpeg'


function Destinations() { 
    const data = [
        {
          id: 1,
          images: id1,
          title: "Excursión a las cataratas del Iguazú, paseo en barco, tren, camión de safari",
          location: "Puerto Iguazú, Misiones",
          price: 21330,
        },
        { 
            id: 2,
            images: id2,
            title: "Visita a las ruinas de San Ignacio y a las minas de Wanda Tour de día completo",
            location: "San Ignacio, Misiones",
            price: 3050,
        },
        {
            id: 3,
            images: id3,
            title: "Vuelo panorámico en helicóptero por las Cataratas del Iguazú con traslados opcionales",
            location: "Puerto Iguazú, Misiones",
            price: 15000,
        },
        {
            id: 4,
            images: id4,
            title: "Escapada de un día al Parque Nacional Iberá desde San Ignacio",
            location: "San Ignacio, Misiones",
            price: 10000,
        },
        {
            id: 5,
            images: id5,
            title: "Entrada a la reserva de animales salvajes Güirá Oga",
            location: "Puerto Iguazú, Misiones",
            price: 4500,
        },
        {
            id: "6",
            images: id6,
            title: "Tour privado de vinos en bodegas unicas",
            location: "Mendoza, Argentina",
            price: 15445,
        },
        {
            id: "7",
            images: id7,
            title: "Día de cocina y cultura Argentina",
            location: "Mendoza, Argentina",
            price: 7445,
          },
          {
            id: "8",
            images: id8,
            title: "Un día en la vida de un gaucho mendocino en Los Andes",
            location: "Mendoza, Argentina",
            price: 24445,
          },
          {
            id: "9",
            images: id9,
            title: "Kayak Montaña y Asado",
            location: "Mendoza, Argentina",
            price: 16667,
          },
          {
            id: "10",
            images: id10,
            title: "Moto Tour Mendoza",
            location: "Mendoza, Argentina",
            price: 44446,
          },
      ];


    return(
        <div className='grid grid-cols-4 gap-4'>
        {data.map((destination) => {
          return (
            <div className='max-w-sm overflow-hidden shadow-lg'>
              <img src={destination.images} alt=""  className='w-full'/>
              <h3 className='px6 py-4 font-bold text-purple-500 text-xl mb-2'>{destination.title}</h3>
              <p>{destination.location}</p>
              <div className="info">
                <h4>{destination.price}</h4>
              </div>
            </div>
          );
        })}
      </div>
    )
};
export default Destinations