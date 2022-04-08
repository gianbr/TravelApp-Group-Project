import { React, useEffect } from "react";
import beachVid from '../assets/production ID_4205697.mp4'
import Navbar from "./Navbar";
import Destacados from "./Destacados";
import Footer from "./Footer";


function Home() {
  
  useEffect(() => { 
    window.scrollTo(0, 0)
  }
    , []); 
  
    return (
      
      <div>
      <div className='w-full h-screen relative'>
        <Navbar />
        <video className='w-full h-full object-cover' src={beachVid} autoPlay loop muted />
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
          <h1>Descubre la cultura. Vive una aventura.</h1>
        </div>
      </div>
    
      <Destacados />
      <Footer />
      </div>
    );
  };
  export default Home;