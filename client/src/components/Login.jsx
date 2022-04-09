import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import loginImg from '../assets/login.jpeg'
import { signin } from '../actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function Login() {
    const dispatch = useDispatch();
    const [data, setData] = useState({
      email: "",
      password: "",
    });
  

const handleSubmit = async (e) => {
      e.preventDefault();
        dispatch(signin(data),
        console.log("albi",data))
          
      }
  
  
  
      const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        console.log("change",e.target.value)
       
    }
  
return (
  <div className='relative w-full h-screen bg-zinc-900/90'>
    <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />
    <div className='flex justify-center items-center h-full'>
    
    <form  className='max-w-[400px] w-full mx-auto bg-white p-8'>
        <h2 className='text-4xl font-bold text-center py-4'>TRAVEL APP.</h2>
        
        <div className='flex justify-between py-8'>
        <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
            </div>

        <div className='flex flex-col mb-4'>
            <label>Correo</label>
            <input onChange={handleChange} className='border relative bg-gray-100 p-2' type="text" name='email'/>
            </div>
        
        <div className='flex flex-col '>
            <label>Contraseña</label>
            <input onChange={handleChange} className='border relative bg-gray-100 p-2' type="password" name='password'/>
            </div>
        <div onClick={handleSubmit}>
         <button className='w-full py-3 mt-8 bg-teal-400 hover:bg-indigo-500 relative text-white'>Iniciar Sesion</button> 
        </div>
           
        <div>
        <button className='w-full py-3 mt-8 bg-teal-400 hover:bg-indigo-500 relative text-white'> Registrate</button>
            </div>
            </form>
        </div>
    </div>
  );
};
export default Login;