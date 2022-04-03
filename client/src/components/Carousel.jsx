
import React, { useEffect } from 'react'
import { Carousel } from "react-responsive-carousel";
import { useParams } from 'react-router-dom'
import { getDetailId } from '../actions/index'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useSelector, useDispatch } from 'react-redux';

const Carousel1 = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.detail);


    useEffect(() => {
        dispatch(getDetailId(id));
    }, [dispatch, id]);


    return (
        <div>
            <Carousel
                useKeyboardArrows
                infiniteLoop
                autoPlay
                interval={6000}
                showThumbs={false}
            >
                {detail.images?.map((e, i) => {
                    return (
                        <div className='flex justify-center'>
                            <div key={i} className="w-8/12  rounded-md ">
                                <img
                                    className="flex h-96 rounded-md shadow-lg shadow-[#040c16]"
                                    src={e}
                                    alt="Not found"
                                />
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default Carousel1;