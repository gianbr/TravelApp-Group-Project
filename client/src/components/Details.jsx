import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getDetailId} from '../actions/index'
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
  }, [dispatch, id]);
  

  return (
    <div>      
    <div  className='border-2 border-teal-500 mx-28  bg-white'>
          
        <div>
        <h3 className='ml-11 mt-4 font-bold text-3xl'>{detail.city}, {detail.location}</h3>
        <div>
          
          {detail.score<=2
        ? <h3 className='text-right mr-2'>Puntaje: <p className='text-red-500'>{detail.score}</p></h3>
        : <h3 className='text-right mr-6'>Puntaje:<p className='text-green-500'>{detail.score}</p></h3>
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
      
      <div className='ml-12'> 
        <p><strong>INCLUYE: </strong></p>
        {detail.included?.map((i,id) => (
            <div key={id}>
            <h4>{i}</h4>
            </div>
        ))}
      </div>
      <div className='text-right mr-12'>
              <h3>Disponible: {detail.stock}</h3>
              <h3>Precio: {detail.price}</h3>
            </div>
      
      <br/>
      <div className='mx-52 border-2 border-teal-600 mb-20 rounded-sm bg-teal-300'>
      <p className='mt-3 ml-5'><strong>COMENTARIOS: </strong></p>
        <CarouselCom/>
      </div>
      <div className='flex justify-end mr-2 mb-4'>
              <Link to="/destination">
                  <button>VOLVER</button>
              </Link> 
            </div>
      </div>
   
  </div>
    )
};
  export default Details;