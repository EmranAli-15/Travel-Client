import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { FaBangladeshiTakaSign } from "react-icons/fa6";

import '../Home.css'
import { FaRoad } from 'react-icons/fa';


const PopularPlace = () => {
    return (
        <div className='my-24'>
            <div className='heading mb-8'>
                You May Like To Visit
            </div>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        540: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1000: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        }
                    }}
                    className="popular-place"
                >
                    <SwiperSlide>
                        <div className="card popular-place-card card-compact w-full mx-4">
                            <figure><img src="https://www.travelandexplorebd.com/storage/app/public/posts/October2019/dreamstime_xxl_55742473.jpg" /></figure>
                            <div className="card-body">
                                <div className="card-title flex items-center justify-between">
                                    <div>
                                        <p>Cox's bazar</p>
                                        <p className='text-xs'>DHA - COX'S</p>
                                    </div>
                                    <div>
                                        <p className='flex items-center justify-end text-red-500'>
                                            <FaBangladeshiTakaSign></FaBangladeshiTakaSign> 500
                                        </p>
                                        <p className='text-xs text-gray'>Round Trip</p>
                                    </div>
                                </div>
                                <div className='divided-line'></div>
                                <div className='flex items-center justify-between text-gray'>
                                    <p><FaRoad className='text-[#313541]' size={20}></FaRoad></p>
                                    <p>100km</p>
                                </div>
                                <p className='text-center'>Travel with low cost</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card popular-place-card card-compact w-full mx-4">
                            <figure><img src="https://www.travelandexplorebd.com/storage/app/public/posts/October2019/dreamstime_xxl_55742473.jpg" /></figure>
                            <div className="card-body">
                                <div className="card-title flex items-center justify-between">
                                    <div>
                                        <p>Cox's bazar</p>
                                        <p className='text-xs'>DHA - COX'S</p>
                                    </div>
                                    <div>
                                        <p className='flex items-center justify-end text-red-500'>
                                            <FaBangladeshiTakaSign></FaBangladeshiTakaSign> 500
                                        </p>
                                        <p className='text-xs text-gray'>Round Trip</p>
                                    </div>
                                </div>
                                <div className='divided-line'></div>
                                <div className='flex items-center justify-between text-gray'>
                                    <p><FaRoad className='text-[#313541]' size={20}></FaRoad></p>
                                    <p>100km</p>
                                </div>
                                <p className='text-center'>Travel with low cost</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card popular-place-card card-compact w-full mx-4">
                            <figure><img src="https://www.travelandexplorebd.com/storage/app/public/posts/October2019/dreamstime_xxl_55742473.jpg" /></figure>
                            <div className="card-body">
                                <div className="card-title flex items-center justify-between">
                                    <div>
                                        <p>Cox's bazar</p>
                                        <p className='text-xs'>DHA - COX'S</p>
                                    </div>
                                    <div>
                                        <p className='flex items-center justify-end text-red-500'>
                                            <FaBangladeshiTakaSign></FaBangladeshiTakaSign> 500
                                        </p>
                                        <p className='text-xs text-gray'>Round Trip</p>
                                    </div>
                                </div>
                                <div className='divided-line'></div>
                                <div className='flex items-center justify-between text-gray'>
                                    <p><FaRoad className='text-[#313541]' size={20}></FaRoad></p>
                                    <p>100km</p>
                                </div>
                                <p className='text-center'>Travel with low cost</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default PopularPlace;