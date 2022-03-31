import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'
import loginImg from '../assets/login.jpeg'
import { Link } from 'react-router-dom'

function Login() {
  
return (
  <div className='relative w-full h-screen bg-zinc-900/90'>
    <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />
    <div className='flex justify-center items-center h-full'>
    
    <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
        <h2 className='text-4xl font-bold text-center py-4'>TRAVEL APP.</h2>
        
        <div className='flex justify-between py-8'>
        <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
        <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
            </div>

        <div className='flex flex-col mb-4'>
            <label>Username</label>
            <input className='border relative bg-gray-100 p-2' type="text" />
            </div>
        
        <div className='flex flex-col '>
            <label>Password</label>
            <input className='border relative bg-gray-100 p-2' type="password" />
            </div>
            
        <button className='w-full py-3 mt-8 bg-teal-400 hover:bg-indigo-500 relative text-white'>Sign In</button>
           
        <div>
        <p className='flex items-center mt-2'><input className='mr-2' type="checkbox" />Remember Me</p>
        <Link> <p className='text-center text-black mt-8'>Not a member? Sign up now</p> </Link> 
            </div>
            
            </form>
        </div>
    </div>
  );
};
export default Login;