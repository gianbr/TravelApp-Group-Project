import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { removeItem } from '../actions/index'

function Shopping() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cartPlains);

    const pricePack = cart.map((e) => e.price * e.quantity).reduce((partialSum, a) => partialSum + a, 0);

    const handleRemove = (product) => {
        dispatch(removeItem(product))
    }

    return (
        <div> {/* RENDERIZADO */}   
            {/* <div className="bg-indigo-300 h-0">
                <Navbar />
            </div> */}
            <div class="container mx-auto">
                <div class="flex shadow-md">
                    <div class="w-3/4 bg-white px-10 py-10"> {/* CONTAINER ITEMS */}
                        <div class="flex justify-between border-b pb-8"> {/* ITEMS TITULOS */}
                            <h1 class="font-semibold text-2xl">Carrito de compras</h1>
                            <h2 class="font-semibold text-2xl"></h2>
                            {cart.length == 1 
						    ? ( <h2 class="font-semibold text-2xl">{cart.length} elemento</h2>) 
						    : ( <h2 class="font-semibold text-2xl">{cart.length} elementos</h2>)
						    }
                        </div>
                        <div class="flex mt-10 mb-5"> {/* ITEMS COLUMNAS */}
                            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Detalles del carrito</h3>
                            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Personas</h3>
                            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Fecha</h3>
                            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                        </div>
                        {cart.map((item) => {
                                return (
                                    <>
                                        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"> {/* TODO EL PRODUCTO */}

                                                <div class="w-80 w-1/5 mx-auto">
                                                    <img class="h-24" src={item.image[0]} alt=""/>
                                                </div>
                                                <div class="flex flex-col justify-between ml-4 flex-grow w-1/5"> {/* DATOS DEL PRODUCTO */}
                                                    <span class="font-bold text-sm">{item.name}</span>
                                                    <span class="text-gray-500 text-xs">{item.city}, {item.location}</span>
                                                    <h5 onClick={(e) => handleRemove(item)} class="font-semibold hover:text-red-500 text-red-500 text-xs cursor-pointer">Quitar</h5>
                                                </div>

                                            <div class="flex justify-center w-1/5"> {/* QUANTITY */}
                                                <span class="mx-2 border text-center w-8">{item.quantity}</span>
                                            </div>
                                            <span class="text-center w-1/5 font-semibold text-sm">{item.date.slice(1, 11)}</span>
                                            <span class="text-center w-1/5 font-semibold text-sm">${item.price * item.quantity}</span> {/* PRECIO MULTIPLICADO */}
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

                    <div id="summary" class="w-1/4 px-8 py-10"> {/* TOTAL CARRITO + ITEMS */}
                        <h1 class="font-semibold text-2xl border-b pb-8">Resumen</h1> {/* TITULO */}
                        <div class="border-t"> {/* TOTAL */}
                            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total</span>
                                <span>${pricePack}</span>
                            </div>
                            <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Shopping
