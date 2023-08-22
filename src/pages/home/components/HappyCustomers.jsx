import React, { useEffect, useRef, useState } from 'react';
import '../Home.css'

import happyClient from '../../../assets/home/happy-client.png'

const HappyCustomers = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsIntersecting(true);
                        entry.target.classList.add('animate');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 1 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);



    return (
        <div className='mt-24 happy-client-bg w-full'>
            <div className='md:flex items-center max-w-[1400px] mx-auto py-5 md:py-16'>
                <div className='md:w-1/2'>
                    <img className='opacity-80' src={happyClient} alt="" />
                </div>
                <div ref={skillsRef} className={`skills ${isIntersecting ? 'animate' : ''} md:w-1/2`}>
                    <div className='skill'>
                        <div className='skill-name'>FLIGHTS</div>
                        <div className='skill-bar'>
                            <div className='skill-percentage' per="90%" style={{ maxWidth: "90%" }}>

                            </div>
                        </div>
                    </div>

                    <div className='skill'>
                        <div className='skill-name'>HOTELS</div>
                        <div className='skill-bar'>
                            <div className='skill-percentage' per="70%" style={{ maxWidth: "70%" }}>

                            </div>
                        </div>
                    </div>

                    <div className='skill'>
                        <div className='skill-name'>CARS</div>
                        <div className='skill-bar'>
                            <div className='skill-percentage' per="60%" style={{ maxWidth: "60%" }}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HappyCustomers;
