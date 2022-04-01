import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DetailsPackage} from "../actions";


export default function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    let packages = useSelector((state) => state.detail);
    useEffect(() => {
        dispatch(DetailsPackage(id));
    }, [id, dispatch]);
  

    return (
        <div className="detailRender">


         
                <div className="">
                    <div className="">
                        <img
                            src=""
                            alt=""
                        />
                    </div>
                    <div className="">
                        <div className="">
                            <Link to="/home" >
                                <button className="" onClick="" >Back</button>
                            </Link>
                        </div>
                        <div className="midInf">
                            <div className='name'>
                                <h1>Title:</h1>
                            </div>
                            <div className="heWe">
                                <span> </span>
                                <span> </span>
                            </div>
                            <div className=''>
                            </div>
                            <div className=''>
                               
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
}
