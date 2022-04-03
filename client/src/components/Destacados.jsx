import React ,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlains } from '../actions';
import CardsD from './CardsD';

function Destacados(){
    const dispatch = useDispatch();
    const plains = useSelector((state) => state.plains);

    useEffect(() => {
        dispatch(getPlains());
    }, [dispatch]);


    return(
        <div className='max-w-[1240px] mx-auto py-16 px-4'>
            <h1 className='py-2 text-center'>Recommended Destinations</h1>
            <hr className='py-4  border-gray-300' style={{color: '#14b8a6'}}/>
            <div className='grid grid-cols-4 gap-4'>
            {plains?.slice(0,4).map((p) => {
                return (
                <CardsD
                key={p.title}
                image={p.image}  
                title={p.title}
                location={p.location}  
                score={p.score}
                /> )
            })}    
            </div>
        </div>
    );
};
export default Destacados;