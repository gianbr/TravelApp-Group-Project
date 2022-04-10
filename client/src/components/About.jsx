import React from "react";
import Mapa from '../assets/mapa.webp'
import { Link } from "react-router-dom";

function About() {
  return (
    <div className='w-full h-screen relative'>
       <img className='w-full h-full bg-size:cover bg-no-repeat bg-blend opacity-50' src={Mapa} alt='mapa' />
      <div className="max-w-[1240px] mx-auto">
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-align: justify text-center'>
          <Link to="/">
            <button className="rounded-2xl py-2 p-3 mb-5 focus:outline-none focus:ring focus:ring-indigo-500 bg-green-400 hover:bg-indigo-300 relative text-white font-semibold">Inicio</button>
          </Link>
          <h2>Vive una aventura con nosotros</h2>
          <div className='font-style: italic'>
          <h3>Travel App es una empresa que lleva a viajeros que están en busca de experiencias auténticas,</h3>
          <h3>a explorar lugares y conocer Argentina a través de los ojos de su gente.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;