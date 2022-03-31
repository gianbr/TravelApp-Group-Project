import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";

export default function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(getDetail(id));
    }, [id, dispatch]);


    return (
        <div className="detailRender">


            {length > 0 ? (
                <div className="detailCard">
                    <div className="image">
                        <img
                            src=""
                            alt=""
                        />
                    </div>
                    <div className="midRight">
                        <div className="midInf">
                            <div className='name'>
                                <span> </span>
                                <h1></h1>
                            </div>
                            <div className="heWe">
                                <span> </span>
                                <span> </span>
                            </div>
                            <div className='stats'>
                              
                            </div>
                            <div className=''>
                     
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <p>LOADING...</p>
                    <img src="" alt="" />
                </div>
            )}
        </div>
    );
}
