import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { removeItem, addItemFromCart, removeAllItemsFromCart, checkout } from '../actions/index'
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa'
import StripeCheckout from "react-stripe-checkout";


const KEY = process.env.REACT_APP_STRIPE;
function Shopping() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cartPlains);
    console.log(cart)
    const onToken = (token) => {
      const totalAmount = cart.map((e) => e.price * e.quantity).reduce((partialSum, a) => partialSum + a, 0);
      let plains = cart.map(c => {
          return{
              plainId: c.id,
              quantity: c.quantity,
              price: c.price,
              date: c.date
          }
      })
      const data = {
        plains,
        email: token.email,
        amount: totalAmount,
        token: token.id
      };
     // console.log(data);
     handleCheckout(data);
    };

    const pricePack = cart.map((e) => e.price * e.quantity).reduce((partialSum, a) => partialSum + a, 0);

    const discount = () => {
        if(pricePack > 199999){
            return pricePack - ((pricePack/100) * 25)
        } else if (pricePack > 999999) {
            return pricePack - ((pricePack/100) * 20)
        } else if (pricePack > 49999) {
            return pricePack - ((pricePack/100) * 15)            
        } else if (pricePack > 39999) {
            return pricePack - ((pricePack/100) * 15)
        } else if (pricePack > 29999) {
            return pricePack - ((pricePack/100) * 10)
        } else if (pricePack > 19999) {
            return pricePack - ((pricePack/100) * 5)
        } else {
            return pricePack} 
        }

       
    const handleAdd = (e, producto) => {
        if(producto.quantity + 1 > producto.stock){
            alert('No hay stock suficiente')
            console.log(producto.quantity)
        }else{
            dispatch(addItemFromCart(producto))
            console.log("quantity", producto.quantity)
        }
    }
    const handleCheckout = (info) => {
        dispatch(checkout(info))
    }

    const handleRemove = (product) => {
        dispatch(removeItem(product))
    }

    const handleRemoveAllCart = (product) => {
        dispatch(removeAllItemsFromCart(product))
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

                                                <div class="w-1/5 mx-auto">
                                                    <img class="h-24" src={item.image[0]} alt=""/>
                                                </div>
                                                <div class="flex flex-col justify-between ml-4 flex-grow w-1/5"> {/* DATOS DEL PRODUCTO */}
                                                {/* <Link to={'/destination/' + item.id} style={{lineHeight:'0.5'}}> */}
                                                    <span class="font-bold text-sm">{item.name}</span>
                                                {/* </Link> */}
                                                    <span class="text-gray-500 text-xs">{item.city}, {item.location}</span>
                                                    <FaTrash className="text-red-500 text-2x1 cursor-pointer" onClick={() => handleRemoveAllCart(item)}/>
                                                    {/* <h5 onClick={(e) => handleRemove(item)} class="font-semibold hover:text-red-500 text-red-500 text-xs cursor-pointer">Quitar</h5> */}
                                                </div>

                                            <div class="flex justify-center w-1/5"> {/* QUANTITY */}
                                                <FaMinus className="text-red-500 text-2xl cursor-pointer" onClick={(e) => handleRemove(item)} />
                                                <span class="mx-2 border text-center w-8">{item.quantity}</span>
                                                <FaPlus className="text-green-500 text-2xl cursor-pointer" onClick={(e) => handleAdd(e, item)} />
                                            </div>
                                            <span class="text-center w-1/5 font-semibold text-sm">{item.date}</span>
                                    
                                             
                                             <span class="text-center w-1/5 font-semibold text-sm">${item.price * item.quantity}</span> 
                                            
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
                            <div className="flex justify-between py-6 text-sm uppercase">
                                <span>Precio total</span>
                                <span>$ {pricePack}</span>
                            </div>
                            <div className="flex justify-between py-6 text-sm uppercase ">
                            <span>Descuento</span>
                            <span>$ {(pricePack - discount())}</span>
                            </div>
                            <hr/>
                            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total</span>
                              
                                <span>$ {discount()}</span>                                                            
                                
                            </div>
                             <StripeCheckout
                            name="Travel App"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6NodUpVl-Hyx0WuWpdC8oK_RLaHvMjgkXuw&usqp=CAU"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${pricePack}`}
                            amount={cart.pricePack * 100}
                            token={onToken}  
                            stripeKey={KEY}
                            >   
                             <button              
                               type="submit" 
                               class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                               Confirmar y pagar
                               </button>
                            </StripeCheckout>
                             
                             
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Shopping
