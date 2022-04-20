/* import React, { useState, useEffect } from 'react' */
import { useSelector, useDispatch } from 'react-redux'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
import { removeAllItemsFromWish } from '../actions/index'
import imagen from "../assets/sin autorizacion.png"






function WishList() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.wishList);
    const user = window.localStorage.getItem("user");
   
    const handleRemoveAllWish = (product) => {
        dispatch(removeAllItemsFromWish(product))
    }
 
    return (
        <>        
        {user ?(
            <div> {/* RENDERIZADO */}   
            {/* <div className="bg-indigo-300 h-0">
                <Navbar />
            </div> */}
            <div class="container mx-auto">
                <div class="flex shadow-md">
                    <div class="w-4/5 bg-white px-10 py-10"> {/* CONTAINER ITEMS */}
                        <div class="flex justify-between border-b pb-8"> {/* ITEMS TITULOS */}
                            <h1 class="font-semibold text-2xl">Whishlist </h1>
                            {cart.length === 1 
						    ? ( <h2 class="font-semibold text-2xl">{cart.length} elemento</h2>) 
						    : ( <h2 class="font-semibold text-2xl">{cart.length} elementos</h2>)
						    }
                        </div>
                        <div class="flex mt-10 mb-5"> {/* ITEMS COLUMNAS */}
                            <h3 class="font-semibold text-gray-600 text-xs uppercase w-3/5">Detalles de la Whishlist</h3>
                           { <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Personas </h3>}
                            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                        </div>
                        {cart.map((item) => {
                                return (
                                    <>
                                       
                                        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"> {/* TODO EL PRODUCTO */}
                                                
                                                <div class="w-1/5 mx-auto">
                                                    <img class="h-24" src={item.image[0]} alt=""/>
                                                </div>
                                                <div class="flex flex-col justify-between ml-4 flex-grow w-1/5"> {/* DATOS DEL PRODUCTO */}
                                                 <Link to={'/destination/' + item.id} style={{lineHeight:'0.5'}}> 
                                                    <span class="font-bold text-sm">{item.name}</span>
                                                </Link> 
                                                    <span class="text-gray-500 text-xs">{item.city}, {item.location}</span>
                                                    {/* <FaTrash className="text-red-500 text-2x1 cursor-pointer" onClick={() => handleRemoveAllCart(item)}/> */}
                                                    {/* <h5 onClick={(e) => handleRemove(item)} class="font-semibold hover:text-red-500 text-red-500 text-xs cursor-pointer">Quitar</h5> */}
                                                </div>
                                            <div class="flex justify-center w-1/5"> {/* QUANTITY */}
                                               {/*  <FaMinus className="text-red-500 text-2xl cursor-pointer" onClick={(e) => handleRemove(item)} /> */}
                                                <span class="mx-2 border text-center w-8">{item.quantity}</span>
                                                {/* <FaPlus className="text-green-500 text-2xl cursor-pointer" onClick={(e) => handleAdd(e, item)} /> */}
                                            </div>
                                            
                                            <span class="text-center w-1/5 font-semibold text-sm">${item.price * item.quantity}</span> {/* PRECIO MULTIPLICADO */}
                                                <FaTrash className="text-red-500 text-2x1 cursor-pointer" onClick={() =>  handleRemoveAllWish(item)}/>
                                        </div>
                                        
                                    </>
                                )
                        })}
                        <Link to={'/destination/'}>
                            <h5 href="#" class="flex font-semibold text-indigo-600 text-sm mt-10">
                
                            <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
                            Volver a destinos
                        </h5>
                        </Link>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
        ):
        (
           <img src={imagen} alt="no autorizado"/>
        )
    }
        </>

        
    )
}

export default WishList;
