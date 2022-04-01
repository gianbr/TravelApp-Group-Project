import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPlains } from '../actions';
import Destino from './Destino';

function Destinations() { 
const dispatch = useDispatch();
const plains = useSelector((state) => state.plains);

useEffect(() => {
  dispatch(getPlains());
}, [dispatch]);



    return(
        <div className='max-w-[1240px] mx-auto py-16 px-4'>
          <div className='grid grid-cols-3 gap-4'>
        {plains?.map((destination) => {
          return (
            <div key={destination.id}>
                <Destino 
                image={destination.image}
                title={destination.title}
                location={destination.location}
                price={destination.price}
                id={destination.id}
                />
            </div>
          );
        })}
        </div>
      </div>
    )
};
export default Destinations