import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import { getDetailId } from "../actions/index";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector, useDispatch } from "react-redux";
import "./CarouselCom.css";

const Carousel2 = () => {
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
                {detail.comments?.map((c, i) => {
                    return (
                        <div key={i} className='flex justify-center'>
                            <div className="w-11/12">

                            <div>{c}</div> 
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default Carousel2;
