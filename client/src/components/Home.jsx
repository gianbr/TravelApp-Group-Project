import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineSearch } from 'react-icons/ai';
import beachVid from '../assets/meetArg.mp4'
import { searchDestination } from "../actions";
import Navbar from "./Navbar";
import Destacados from "./Destacados";
import Footer from "./Footer";


function Home(){
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
   
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(searchDestination(name));
    setName('')
  }; console.log(name)

    return (
      <div>
      <div className='w-full h-screen relative'>
        <Navbar />
        <video className='w-full h-full object-cover' src={beachVid} autoPlay loop muted />
        
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
          <h1>Discover the culture. Explore the adventure.</h1>
                            {/* SEARCHBAR */}
          <div className='py-4'>
          <form className=' w-full flex justify-between items-center max-w-[700px] mx-auto rounded-2xl border-none text-black bg-gray-100/90 py-1'>
            <div>
              <input className=' px-3 py-2 font-semibold bg-transparent text-black focus:outline-none rounded-2xl border-none'
                type='text' placeholder='Search Destinations' onChange={e => handleInputChange(e)}/>
            </div
            >
            <div onClick={e => handleClick(e)}>
              <AiOutlineSearch size={25} className='icon mr-2' style={{color: '#000000 '}}  />
            </div>
          </form>
          </div>
                        {/* FIN DEL SEARCHBAR */}
        </div>
      </div>
      <Destacados />
      
      <Footer />
      </div>
    );
  };
  export default Home;