import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



export default function Detail()  {
   
    return (
        <div className="">

                <div className="">
                    <div className="">
                        <img
                            src=""
                            alt=""
                        />
                    </div>
                    <div className="">
                        <div className="">
                                <button className="" >Back</button>
                        </div>
                        <div className="">
                            <div className=''>
                                <span> Id: </span>
                                <h1>Title: </h1>
                            </div>
                            <div className="">
                                <span> location: </span>
                                <span> Precio: </span>
                                <span>Score: </span>
                                <span>Stock: </span>
                            </div>
                            <div className=''>
                                <p>Comments: </p>
                            </div>
                            <div className=''>
                                <p>Description: </p>
                            </div>
                            <div>Includes: </div>
                        </div>
                    </div>
                </div>
           
    
        </div>
    );
}
