import React from "react";
import {useState, useEffect } from 'react';
import { useDispatch} from "react-redux";
import { postPlain } from "../actions";
import swal from 'sweetalert';
import regsVideo from '../assets/pexels-cottonbro-5329613.mp4'
import { Link } from "react-router-dom";



export default function CreateForm(){
    const dispatch = useDispatch(); 

    const [plain, setPlain] = useState({
        title: '',
        location:'',
        city:'',
        price:'',
        images:[],
        stock:'',
        included:[{body: ''}],
        description:[{body: ''}]
    });
    useEffect(() => { 
      window.scrollTo(0, 0)
    }
      , []); 
    function handleImages(e){
        if(e.target.value){
            setPlain({
                ...plain,
                images: [...plain.images, e.target.value]
            })
        }
        console.log('imagenes',e.target.value);
    }
    
    function handleIncluded(e){
        if(e.target.value){
        setPlain({
            ...plain,
            included: [{...plain.included.body, body: e.target.value}]
        })
    }
console.log('included', e.target.value);
}
 
function handleDescription(e){
  if(e.target.value){
    setPlain({
      ...plain,
      description: {...plain.description.body, body: e.target.value}
    });
  };
};

    function handleSubmit(e){
        e.preventDefault();
        if(!plain.title || plain.title.length > 30) return swal( "El titulo es obligatorio" , " ...y maximo de 30 letras",{button: "Entendido",} );
        if(!plain.price || plain.price <= 0) return swal( "El precio es obligatorio" , " ...y no puede ser menor o igual a 0",{button: "Entendido",} );
        if(plain.images.length === 0) return swal({title: 'Debe ingresar al menos 1 imagen', button: "Entendido",} );
        if(plain.included.length === 0) return swal({title: 'Debe ingresar al menos 1 servicio incluido',button: "Entendido",} );
        if(!plain.description) return swal({title:'La descripción es obligatoria', button: "Entendido",} );
        if(!plain.city) return swal({title: 'La ciudad es obligatoria',button: "Entendido",} );
        if(!plain.location) return swal({title: 'La ubicación es obligatoria',button: "Entendido",} );
        if(!plain.stock || plain.stock <= 0) return swal( "El stock es obligatorio" , " ...y no puede ser menor o igual a 0",{button: "Entendido",} );
        dispatch(postPlain(plain));
        swal( {title: "¡Servicio creado exitosamente!", icon: "success"} );
    }
    
return(
  <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
        <video className='w-full h-full object-cover' src={regsVideo} autoPlay loop muted />
        </div>
                                {/* FORMULARIO */}
        <div className='bg-gray-100 flex flex-col-2 justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-transparent p-4' onSubmit={handleSubmit}>
                <h2 className='text-4xl font-bold text-center'>Vive la aventura. Crea tu paquete.</h2>
                
    <div className="flex flex-col py-2">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlForm="grid-first-name">
        Titulo
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Excursion/Paseo..."
      onChange={(e)=>setPlain({...plain, title: e.target.value})}/>

<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlForm="grid-first-name">
        Imagenes
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="url" placeholder="Inserte url aqui..."
      onChange={handleImages}/>
      
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="url" placeholder="Inserte url aqui..."
      onChange={handleImages}/>
      
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="url" placeholder="Inserte url aqui..."
      onChange={handleImages}/>
    </div>
    <div className="flex flex-col py-2">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlForm="grid-first-name">
        Precio
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" placeholder="3000"
      onChange={(e)=>setPlain({...plain, price: e.target.value})}/>

<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlForm="grid-first-name">
        Incluido
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Guia/Bebidas..."
      onChange={handleIncluded}/>
      
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Guia/Bebidas..."
      onChange={handleIncluded}/>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Guia/Bebidas..."
      onChange={handleIncluded}/>


    </div>

  <div>
    <div className="flex flex-col py-2">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlForm="grid-city">
        Ciudad
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="CABA"
      onChange={(e)=>setPlain({...plain, city: e.target.value})}/>
      
    </div>
    <div className="flex flex-col py-2">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlForm="grid-state">
        Provincia
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-indigo-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={(e)=>setPlain({...plain, location: e.target.value})}>
        <option>Seleccionar</option>
          <option>Buenos Aires</option>
          <option>Mendoza</option>
          <option>Misiones</option>
          <option>Rio Negro</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col py-2">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlForm="grid-first-name">
       Descripcion
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Experiencia unica..."
      onChange={handleDescription}/>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlForm="grid-first-name">
      
       Stock
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" placeholder="10"
      onChange={(e)=>setPlain({...plain, stock: e.target.value})}/>

    </div>
    
<div className="flex justify-between">
    <button className='w-full max-w-[700px] mx-auto rounded-2xl py-2 pt-4 p-3 focus:outline-none focus:ring focus:ring-indigo-500 bg-indigo-400 hover:bg-indigo-300 relative text-white font-semibold' type= 'submit'>Crea tu servicio</button>
      </div>
      <div className="pt-4">
      <Link to='/'>
    <button className='w-full max-w-[700px] mx-auto rounded-2xl py-2 pt-4 p-3 focus:outline-none focus:ring focus:ring-indigo-500 bg-indigo-400 hover:bg-indigo-300 relative text-white font-semibold' type= 'submit'>Pagina Principal</button>
    </Link>
      </div>
            </form>
        </div>
        {/* FIN DEL FORMULARIO */}
    </div>
)};