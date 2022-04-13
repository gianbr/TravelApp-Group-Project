import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { BsPerson } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
//import { useUser } from '../hooks/useUser';
import { Logout } from '../actions';
import { useDispatch } from 'react-redux';
import __ from 'lodash'

function Navbar ({user}){
// const [human, setHuman] = useState(JSON.parse(localStorage.getItem(user)));
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
    // setUser(null);
  };

  const showServices = () => {
    if(!__.isEmpty(user)){
      let roles = user.roles.map(role => role.name);
      if(roles.includes('admin')){
        return(
          <>
            <li> <Link to='/servicios'>SERVICIOS</Link> </li>
          </>
        )
      }
    }
  }

  const showLogin = () => {
    if(__.isEmpty(user)){
      return(
        <>
          <Link to='/login'> <BsPerson className='mr-2' size={20}/> </Link>
        </>
      )
    }else{
      return(
        <>
          <span className='mx-5 fw-500'>Hola, {user.username.toUpperCase()} ♥</span>
          <Link onClick={logout} to='/'>LOGOUT</Link>
        </>
      )
    }
  }

  return(
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white '>
      <div >
        <h1>TRAVEL APP.</h1>
        </div>
        <ul className='hidden md:flex'>
          <li> <Link to='/'>HOME</Link> </li>
          <li> <Link to='/destination'>DESTINOS</Link> </li>
          <li> <Link to='/about'>ACERCA DE </Link> </li>
          {showServices()}
        </ul>
                      {/* ICONOS */}
        <div className='hidden md:flex'>
          <Link to='/shopping'> <FaShoppingCart className='mr-2' size={20}/> </Link>
        {showLogin()}
        </div>


                        {/* HAMBURGUER */}
        <div onClick={handleNav} className='md:hidden'> 
        { nav ? <AiOutlineClose size={20}/> : <HiOutlineMenuAlt4 size={20}/>} </div>
         <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-200/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
          <ul>
            <h1 className='border-b'>TRAVEL APP</h1>
              <li> <Link to='/'>HOME</Link> </li>
              <li> <Link to='/destination'>DESTINOS</Link> </li>
              {showServices()}
              <li> <Link to='/about'>ACERCA DE</Link> </li>
              <li> <Link to='login'>LOGIN</Link> </li>
                </ul>
            </div>
        </div>
    )
};
export default Navbar;