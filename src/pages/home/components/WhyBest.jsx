import React from 'react';
import '../Home.css'
import why1 from '../../../assets/home/why1.png'
import why2 from '../../../assets/home/why2.png'
import why3 from '../../../assets/home/why3.png'
import why4 from '../../../assets/home/why4.png'

import why_hover1 from '../../../assets/home/why1_hover.png'
import why_hover2 from '../../../assets/home/why2_hover.png'
import why_hover3 from '../../../assets/home/why3_hover.png'
import why_hover4 from '../../../assets/home/why4_hover.png'

const WhyBest = () => {
    return (
        <div className='mx-6 md:mx-0'>
            <h1 className='heading'>WHY WE ARE BEST</h1>
            <p className='text-center text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In aspernatur soluta cupiditate necessitatibus <br /> fuga enim illum placeat iste error suscipit.</p>

            <div className='mt-12 why-best-container'>
                <div className='why-best-one w-[200px]'>
                    <div className='bg-img'>
                    </div>
                    <h1 className='text-xl text-center'>Amazing Travel</h1>
                    <p className='text-gray text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis?</p>
                </div>
                <div className='why-best-two w-[200px]'>
                    <div className='bg-img'>
                    </div>
                    <h1 className='text-xl text-center'>Amazing Travel</h1>
                    <p className='text-gray text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis?</p>
                </div>
                <div className='why-best-three w-[200px]'>
                    <div className='bg-img'>
                    </div>
                    <h1 className='text-xl text-center'>Amazing Travel</h1>
                    <p className='text-gray text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis?</p>
                </div>
                <div className='why-best-four w-[200px]'>
                    <div className='bg-img'>
                    </div>
                    <h1 className='text-xl text-center'>Amazing Travel</h1>
                    <p className='text-gray text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis?</p>
                </div>
            </div>

        </div>
    );
};

export default WhyBest;