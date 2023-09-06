import React, { useState } from 'react';
import { BsFillAirplaneEnginesFill } from "react-icons/bs";
import { FaHotel, FaCar } from "react-icons/fa";
import '../Home.css'
import Flight from './ticketTypes/Flight';
import Hotel from './ticketTypes/Hotel';
import Car from './ticketTypes/Car';


const SearchTicket = () => {

    const [toggle, setToggle] = useState(1);
    const toggleUpdate = (index) => {
        setToggle(index)
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='bg-[#eef2f6] px-5 py-4 rounded-t-2xl border-b-2 border-[#313541]'>
                <ul className='flex items-center gap-x-10'>
                    <li
                        className={`${toggle === 1 && 'home-activeStyle'} home-listStyle`}
                        onClick={() => toggleUpdate(1)}>
                        <BsFillAirplaneEnginesFill></BsFillAirplaneEnginesFill> Flight
                    </li>
                    <li
                        className={`${toggle === 2 && 'home-activeStyle'} home-listStyle`}
                        onClick={() => toggleUpdate(2)}><FaHotel></FaHotel> Hotel
                    </li>
                    <li
                        className={`${toggle === 3 && 'home-activeStyle'} home-listStyle`}
                        onClick={() => toggleUpdate(3)}><FaCar></FaCar> Cars
                    </li>
                </ul>
            </div>
            <div className='mt-1 bg-white p-2 lg:border-b-2'>


                {/* FLIGHT form */}
                <div className={`${toggle === 1 ? 'block' : 'hidden'}`}>
                    <Flight></Flight>
                </div>



                {/* HOTEL form */}
                <div className={`${toggle === 2 ? 'block' : 'hidden'}`}>
                    <Hotel></Hotel>
                </div>



                {/* CAR form */}
                <div className={`${toggle === 3 ? 'block' : 'hidden'}`}>
                    <Car></Car>
                </div>
            </div>
        </div>
    );
};

export default SearchTicket;