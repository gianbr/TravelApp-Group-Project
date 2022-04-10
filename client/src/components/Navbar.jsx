import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { BsPerson } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
//import { useUser } from '../hooks/useUser';
import { Logout } from '../actions';
import { useDispatch } from 'react-redux';

function Navbar (){
const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
const [nav, setNav] = useState(false);
const [logo, setLogo] = useState(false);
const dispatch = useDispatch();
// const [data, setData] = useState({
//   email: "",
//   password: "",
// });
// const {isLoggedIn} = useUser();
  const handleNav = () => {
      setNav(!nav);
    setLogo(!logo)
  };

  const logout = () => {
    dispatch(Logout());
    window.location.replace('/');
    setUser(null);
  };

  return(
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>TRAVEL APP.</h1>
        </div>
        <ul className='hidden md:flex'>
        <li> <Link to='/'>HOME</Link> </li>
        <li> <Link to='/destination'>DESTINOS</Link> </li>
        <li> <Link to='/servicios'>SERVICIOS</Link> </li>
        <li> <Link to='/about'>ACERCA DE </Link> </li>
        </ul>
                      {/* ICONOS */}
        <div className='hidden md:flex'>
          <Link to='/shopping'> <FaShoppingCart className='mr-2' size={20}/> </Link>
          {/* {user?.result?():(<Link to='/' onClick={logout}> <AiOutlineClose className='mr-2' size={20}/> </Link>)}     */}
          <Link to='/login'> <BsPerson className='mr-2' size={20}/> </Link>
        </div>

        {user !== null ? (
            // <p>{user?.name}</p>
            <Link>
            <button>Sign In</button>
            </Link>
        ) : (
          <Link>
            <button onClick={logout}>Logout</button>
          </Link>
          
        )}








                        {/* HAMBURGUER */}
        <div onClick={handleNav} className='md:hidden'> 
        { nav ? <AiOutlineClose size={20}/> : <HiOutlineMenuAlt4 size={20}/>} </div>
         <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-200/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
          <ul>
            <h1 className='border-b'>TRAVEL APP</h1>
              <li> <Link to='/'>HOME</Link> </li>
              <li> <Link to='/destination'>DESTINOS</Link> </li>
              <li> <Link to='/servicios'>SERVICIOS</Link></li>
              <li> <Link to='/about'>ACERCA DE</Link> </li>
              <li> <Link to='login'>LOGIN</Link> </li>
                </ul>
            </div>
        </div>
    )
};
export default Navbar;