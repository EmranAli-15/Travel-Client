import React, { useState } from 'react';
import { BsFillAirplaneEnginesFill } from "react-icons/bs";
import { FaHotel, FaCar } from "react-icons/fa";
import '../Home.css'


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
            <div className='mt-1 bg-white p-2 border-b-2'>
                <div className={`${toggle === 1 ? 'block' : 'hidden'}`}>
                    <div className='flex items-center'>
                        <div>
                            <p>Destination From</p>
                            <select className='w-[160px] outline-none text-xl'>
                                <option>English</option>
                                <option>Japanese</option>
                                <option>Italian</option>
                            </select>
                        </div>
                        <hr className='h-[2px] border-[#313541] w-[40px] rotate-90'/>
                        <div>
                            <p>Destination To</p>
                            <select className='w-[160px] outline-none text-xl pb-4'>
                                <option>English</option>
                                <option>Japanese</option>
                                <option>Italian</option>
                            </select>
                        </div>
                        <hr className='h-[2px] border-[#313541] w-[40px] rotate-90'/>
                        <div>
                            <p>Destination To</p>
                            <select className='w-[160px] outline-none text-xl pb-4'>
                                <option>English</option>
                                <option>Japanese</option>
                                <option>Italian</option>
                            </select>
                        </div>
                        <hr className='h-[2px] border-[#313541] w-[40px] rotate-90'/>
                        <div>
                            <p>Destination To</p>
                            <select className='w-[160px] outline-none text-xl pb-4'>
                                <option>English</option>
                                <option>Japanese</option>
                                <option>Italian</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                
                
                
                
                <div className={`${toggle === 2 ? 'block' : 'hidden'}`}>
                    jahangir
                </div>
                <div className={`${toggle === 3 ? 'block' : 'hidden'}`}>
                    najim
                </div>
            </div>
        </div>
    );
};

export default SearchTicket;