import { React,useState } from 'react'
import loginImg from '../assets/login.jpeg'
import { signup } from '../actions'
import { useDispatch,} from 'react-redux';
import swal from 'sweetalert';
import { validate } from './validate';


const Register = () => {
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    if(!data.email || !data.password || !data.username ){
     return swal({title: "¡Rellene los campos para continuar!", icon: "error"});
  }else { 
    e.preventDefault();
      dispatch(signup(data),
      console.log("submit",data))
    };
  };


const handleChange = (e) => {
    setData({
      ...data, 
      [e.target.name] : e.target.value
  });
   setErrors(validate({
       ...data, 
       [e.target.name] : e.target.value
  }));
  };
  

return (
  <div className='relative w-full h-screen bg-zinc-900/90'>
    <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />
    <div className='flex justify-center items-center h-full'>
    
      <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
        <h2 className='text-4xl font-bold text-center py-4'>TRAVEL APP.</h2>

        <div className='flex flex-col mb-4'>
            <label>Usuario</label>
            <input onChange={handleChange} className='border relative bg-gray-100 p-2' name='username' type="text" />
            {errors.username && (<p>{errors.username}</p>)}
            </div>

        <div className='flex flex-col mb-4'>
            <label>Correo</label>
            <input onChange={handleChange} className='border relative bg-gray-100 p-2' name='email' type="text" />
            {errors.email && (<p>{errors.email}</p>)}
            </div>
        
        <div className='flex flex-col '>
            <label>Contraseña</label>
            <input onChange={handleChange} className='border relative bg-gray-100 p-2' name='password'  type="password" />
            {errors.password && (<p>{errors.password}</p>)}
            </div>
        <div onClick={handleSubmit} >
        <button className='w-full py-3 mt-8 bg-teal-400 hover:bg-indigo-500 relative text-white'>Ingresa tus datos</button>
          
            </div>
           
            
            </form>
        </div>
    </div>
  );
};


export default Register;