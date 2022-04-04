import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getDetailId, clearState} from '../actions/index'
import { useSelector,useDispatch} from 'react-redux';
import { Link } from "react-router-dom"
import Carousel from "./Carousel"
import CarouselCom from './CarouselCom';


function Details (){
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state)=>state.detail);
  

  useEffect(() => {
    dispatch(getDetailId(id));
    dispatch(clearState())
  }, [dispatch, id]);
 
  

  return (
    <div className='bg-slate-200'>      
    <div  className='border-2 border-teal-500 mx-28  bg-white'>
          
        <div>
          <div className='bg-teal-500'>
            <h3 className='ml-11 mt-4 font-bold text-3xl text-white'>{detail.city}, {detail.location}</h3>
          </div>
        
        <div>
          
          {detail.score<=2
        ? <h3 className='text-right mr-10'>Puntaje: <p className='text-red-500'>{detail.score}</p></h3>
        : <h3 className='text-right mr-10'>Puntaje:<p className='text-green-500'>{detail.score}</p></h3>
        }
                           
        </div> 
        <Carousel />
        </div>
        
        <br/>
       
             <div className=' mx-12'>
              <p>
                {detail.description}
              </p>
            </div> 
           
        <br/> 
      
      <div> 
        <p className='bg-teal-500 text-white'><strong>INCLUYE: </strong></p>
        {detail.included?.map((i,id) => (
            <div key={id}>
            <h4 className='ml-12'>-{i}</h4>
            </div>
        ))}
      </div>
      <div className='text-right mr-12'>
              <h3>Disponible: {detail.stock}</h3>
              <h3>Precio: {detail.price}</h3>
            </div>
      
      <br/>
      <div className='mx-52 border-2 border-teal-600 mb-20 rounded-md bg-teal-500 text-white'>
      <p className='mt-3 ml-5'><strong>COMENTARIOS: </strong></p>
        <CarouselCom/>
      </div>
      <div className='flex justify-end mr-2 mb-4 text-4xl font-mono text-teal-500'>
              <Link to="/destination">
                  <button>VOLVER</button>
              </Link> 
            </div>
      </div>
   
  </div>
    )
};
  export default Details;