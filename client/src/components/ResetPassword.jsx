import { React,useState } from 'react'
import loginImg from '../assets/login.jpeg'
import {Link, useParams} from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';


const ResetPassword = () => {
          // REACT HOOKS
  const urlBack = 'http://localhost:8800';
  const [errors, setErrors] = useState({});
	const [resetPassword, setResetPassword] = useState('');
	const {token} = useParams();
  const [inputValues, setInputValues] = useState({
    username: null,
    email: null,
		password: null,
	});
	
        // FUNCIONALIDAD
  const onEnterKey = e => {
		if (e.key === 'Enter') handleSend(e);
	};

	const handleInputChange = event => {
		if (errors) setErrors('');
		if (resetPassword) setResetPassword('');
		setInputValues({...inputValues, [event.target.name]: event.target.value});
	};

  const handleSend = event => {
		event.preventDefault();

		const {email, password, username} = inputValues;

		// Guard clauses
		if (!email || !password || !username)
			return setErrors('Debes completar todos los campos');
		axios
			.patch(`${urlBack}/updateuser/resetPassword`, {...inputValues, token})
			.then(() => setResetPassword('La contraseña se actualizó con éxito'),
      swal( {title: "¡Contraseña creada exitosamente!", icon: "success"}))
			.catch(() => setErrors('No se pudo actualizar la contraseña'));
	};

  

return (
  <div className='relative w-full h-screen bg-zinc-900/90'>
    <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />
    <div className='flex justify-center items-center h-full'>
    
      <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
        <h2 className='text-4xl font-bold text-center py-4'>TRAVEL APP.</h2>

        <div className='flex flex-col mb-4'>
            <label>Usuario</label>
            <input value={inputValues.username}
					placeholder="Usuario"
					onChange={handleInputChange}
					onKeyPress={onEnterKey} className='border relative bg-gray-100 p-2' name='username' type="text" />
            {errors.username && (<p>{errors.username}</p>)}
            </div>

        <div className='flex flex-col mb-4'>
            <label>Correo</label>
            <input value={inputValues.email}
					placeholder="Correo"
					onChange={handleInputChange}
					onKeyPress={onEnterKey} className='border relative bg-gray-100 p-2' name='email' type="text" />
            {errors.email && (<p>{errors.email}</p>)}
            </div>
        
        <div className='flex flex-col '>
            <label>Contraseña nueva</label>
            <input 
            placeholder='Contraseña'
            value={inputValues.password}
						onChange={handleInputChange}
						onKeyPress={onEnterKey} className='border relative bg-gray-100 p-2' name='password'  type='password' />
            {errors.password && (<p>{errors.password}</p>)}
            </div>
        <div onClick={handleSend} >
        <button className='w-full py-3 mt-8 bg-teal-400 hover:bg-indigo-500 relative text-white'>Restablecer contraseña</button>
            </div>
        <Link to='/login'>
        <button className='w-full py-3 mt-8 bg-transparent relative text-black'>Regresa al inicio de sesion</button>
        </Link>
             </form>
        </div>
    </div>
  );
};


export default ResetPassword;