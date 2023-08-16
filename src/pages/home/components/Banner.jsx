import React from 'react';
import '../Home.css'
import homeBg from '../../../assets/home/homeBg.jpg'
import SearchTicket from './SearchTicket';

const Banner = () => {
    return (
        <div className='relative'>
            <div>
                <img className='w-full' src={homeBg} alt="" />
            </div>
            <div className='lg:absolute lg:bottom-0 lg:transform lg:left-1/2 lg:-translate-x-1/2'>
                <SearchTicket></SearchTicket>
            </div>
        </div>
    );
};

export default Banner;