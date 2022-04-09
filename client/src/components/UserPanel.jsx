import { React, useState } from "react";
import {Link} from 'react-router-dom'
import beachVid from '../assets/production ID_4205697.mp4'
import Destacados from "./Destacados";
import Footer from "./Footer";
import { FaShoppingCart } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
//import { RiLogoutBoxRLine } from 'react-icons/ri'

const username = window.localStorage.getItem("user");
function UserPanel(){

/* const handleLogout = () => {
  localStorage.removeItem("token");
	history.push('/');
};  
 */
const [nav, setNav] = useState(false);
const [logo, setLogo] = useState(false)
  
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };
    return (
      <div>
      <div className='w-full h-screen relative'>
      <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>TRAVEL APP.</h1>
        </div>
        <ul className='hidden md:flex'>
        <li> <Link to='/'>HOME</Link> </li>
        <li> <Link to='/destination'>DESTINOS</Link> </li>
        <li> <Link to='/about'>ACERCA DE </Link> </li>
        </ul>
                      {/* ICONOS */}
        <div className='hidden md:flex'>
        <p className="text-xl mb-4">Welcome, {username} </p>
          {/*   <RiLogoutBoxRLine  onClick={handleLogout} className='mr-2' size={20}/> */}
          <Link to='/shopping'> <FaShoppingCart className='mr-2' size={20}/> </Link>
        </div>
                        {/* HAMBURGUER */}
        <div onClick={handleNav} className='md:hidden'> 
        { nav ? <AiOutlineClose size={20}/> : <HiOutlineMenuAlt4 size={20}/>} </div>
         <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-200/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
          <ul>
            <h1 className='border-b'>TRAVEL APP</h1>
              <li> <Link to='/'>HOME</Link> </li>
              <li> <Link to='/destination'>DESTINOS</Link> </li>
              <li> <Link to='/about'>ACERCA DE</Link> </li>
              
                </ul>
            </div>
        </div>
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
  export default UserPanel;