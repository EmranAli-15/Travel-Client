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
            <div className='mt-1 bg-white p-2 lg:border-b-2'>
                <div className={`${toggle === 1 ? 'block' : 'hidden'}`}>
                    <form className='home-searchTicket-responsive items-center justify-between'>
                        
                        <div className='home-searchTicket'>
                            <p>Destination From</p>
                            <select className='lg:w-[160px]'>
                                <option value="" hidden>Please Select</option>
                                <option>Chittagong</option>
                                <option>Sylhet</option>
                                <option>Bandorban</option>
                            </select>
                        </div>


                        <div className='flex'>
                            <hr className='home-ticket-hr' />
                            <div className='home-searchTicket'>
                                <p>Destination To</p>
                                <select className='w-[160px]'>
                                    <option value="" hidden>Please Select</option>
                                    <option>Chittagong</option>
                                    <option>Sylhet</option>
                                    <option>Bandorban</option>
                                </select>
                            </div>
                        </div>


                        <div className='flex'>
                            <hr className='home-ticket-hr' />
                            <div className='home-searchTicket'>
                                <p>Journey Date</p>
                                <input className='cursor-pointer outline-none' type="date" name="" id="" />
                            </div>
                        </div>


                        <div className='flex'>
                            <hr className='home-ticket-hr' />
                            <div className='home-searchTicket'>
                                <p>Guests</p>
                                <select className='w-[160px]'>
                                    <option value="" hidden>Please Select</option>
                                    <option>1 Person</option>
                                    <option>2 Persons</option>
                                    <option>3 Persons</option>
                                    <option>4 Persons</option>
                                </select>
                            </div>
                        </div>


                        <div className='flex'>
                            <hr className='home-ticket-hr' />
                            <div className='home-searchTicket'>
                                <p>Class</p>
                                <select className='w-[160px]'>
                                    <option value="" hidden>Please Select</option>
                                    <option>Economy</option>
                                    <option>Business</option>
                                </select>
                            </div>
                        </div>


                        <div className='flex'>
                            <hr className='home-ticket-hr mt-[13px]' />
                            <div className='home-searchTicket flex justify-center'>
                                <button className='allBtn'>
                                    <input className='cursor-pointer' type="submit" value="SEARCH" />
                                </button>
                            </div>
                        </div>
                    </form>
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