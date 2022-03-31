import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlains ,filterByProvince, orderByPrice, orderByScore } from "../actions";


export default function Filters () {
    const dispatch = useDispatch()

    const plains = useSelector((state) => state.plains)

    useEffect (()=>{
        dispatch(getPlains())
    }, [dispatch])
        
    function handleOrderByPrice (e) {
        e.preventDefault();
        dispatch(orderByPrice(e.target.value))
        setCurrentPage(1)
        
    }

    function handleOrderByScore (e) {
        e.preventDefault();
        dispatch(orderByScore(e.target.value))
        setCurrentPage(1)
        
    }


    function handleLocationFilter(e) {
        e.preventDefault();
        dispatch(filterByProvince(e.target.value))
        setCurrentPage(1);
        
    }

    return(
                    <div>
                        <select onChange={e => handleOrderByPrice(e)}>  
                            <option value="All">Precio</option>
                            <option value= "asc">Menor - Mayor</option>
                            <option value= "desc">Mayor - Menor</option>
                        </select>
                        
                        <select onChange={e => handleOrderByScore(e)}>  
                            <option value="All">Puntaje</option>
                            <option value= "asc">Menor - Mayor</option>
                            <option value= "desc">Mayor - Menor</option>
                        </select>
                        <select onChange={e => handleLocationFilter(e)}>  
                            <option value="All">Planes</option>

                            {plains.map((e, i)=> (
                            <option value={e.location} key={i}>{e.location}</option>
                        ))}
                        </select>
                    </div>



    )
}