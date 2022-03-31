import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { searchDestination } from "../actions";
import { useDispatch } from "react-redux";
import { AiOutlineSearch } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

function Navbar (){
const dispatch = useDispatch();
const [name, setName] = useState("");
const [nav, setNav] = useState(false);
const [logo, setLogo] = useState(false)
  
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
   
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(searchDestination(name));
  }; console.log(name)

  return(
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>TRAVEL APP.</h1>
        </div>
        <ul className='hidden md:flex'>
        <li> <Link to='/'>HOME</Link> </li>
        <li> <Link to='/destination'>DESTINATIONS</Link> </li>
        <li> <Link to='/about'>ABOUT US</Link> </li>
        <li> <Link to='/contact'>CONTACT</Link> </li>
        </ul>
                      {/* ICONOS */}
        <div className='hidden md:flex'>
          <Link to='/login'>  <BsPerson className='mr-2' size={20} /> </Link>
          <Link to='/shopping'> <FaShoppingCart className='mr-2' size={20}/> </Link>
        </div>
                        {/* HAMBURGUER */}
        <div onClick={handleNav} className='md:hidden'> 
        { nav ? <AiOutlineClose size={20}/> : <HiOutlineMenuAlt4 size={20}/>} </div>
         <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-200/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
          <ul>
            <h1 className='border-b'>TRAVEL APP</h1>
              <li> <Link to='/'>HOME</Link> </li>
              <li> <Link to='/destination'>DESTINATIONS</Link> </li>
              <li> <Link to='/about'>ABOUT US</Link> </li>
              <li> <Link to='/contact'>CONTACT</Link></li>
              <li> <Link to='login'>LOGIN</Link> </li>
                              {/* SEARCHBAR */}
        <div className='flex flex-col'>
        <form className=' w-full flex justify-between items-center max-w-[700px] mx-auto rounded-2xl border-none text-black bg-emerald-300 py-1'>
        <div>
          <input className=' px-3 py-2 font-semibold bg-transparent text-black focus:outline-none rounded-2xl border-none' 
          type='text' placeholder='Search Destinations' onChange={e => handleInputChange(e)}/> </div>
            <div onClick={e => handleClick(e)}>
              <AiOutlineSearch size={25} className='icon mr-2' style={{color: '#000000 '}}  />
            </div>
          </form>
                    </div>
                </ul>
            </div>
        </div>
    )
};
export default Navbar;