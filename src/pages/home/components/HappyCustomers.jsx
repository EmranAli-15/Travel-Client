import React, { useEffect, useRef, useState } from 'react';
import '../Home.css'

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
        <div className='mt-24'>
            <div ref={skillsRef} className={`skills ${isIntersecting ? 'animate' : ''}`}>
                <div className='skill'>
                    <div className='skill-name'>HTML</div>
                    <div className='skill-bar'>
                        <div className='skill-percentage' per="90%" style={{ maxWidth: "90%" }}>

                        </div>
                    </div>
                </div>

                <div className='skill'>
                    <div className='skill-name'>CSS</div>
                    <div className='skill-bar'>
                        <div className='skill-percentage' per="70%" style={{ maxWidth: "70%" }}>

                        </div>
                    </div>
                </div>

                <div className='skill'>
                    <div className='skill-name'>JS</div>
                    <div className='skill-bar'>
                        <div className='skill-percentage' per="60%" style={{ maxWidth: "60%" }}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HappyCustomers;
