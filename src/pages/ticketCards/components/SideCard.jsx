import React, { useState } from 'react';
import { BsFillTagFill, BsSearch } from "react-icons/bs";
import { LiaMinusSquare, LiaPlusSquare } from "react-icons/lia";
import { HiOutlineUsers } from "react-icons/hi";
import { Link } from 'react-router-dom';

// /searchFlightTickets

const SideCard = ({ from, to }) => {

    const [show, setShow] = useState(false);

    const [name, setName] = useState(to);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [count, setCount] = useState(1);


    const handleSearch = (event) => {

    }

    return (
        <div className='w-[80%] mx-auto lg:mx-0 relative'>
            <div className='flex gap-x-2 justify-center text-blue-500 items-center w-full p-2 bg-blue-100'>
                <BsFillTagFill></BsFillTagFill>
                We price match
            </div>

            <div className='mt-5 p-4 bg-[#febb02]'>
                <form onSubmit={handleSearch}>
                    <div className='relative'>
                        <p className='text-xs'>Type your destination</p>
                        <BsSearch size={22} className='absolute top-6 right-2.5 text-[#1ab79d]'></BsSearch>
                        <input
                            required
                            onChange={e => setName(e.target.value)}
                            value={name}
                            type="text"
                            className='w-full outline-none rounded-sm p-2'
                        />
                    </div>
                    <div className='relative mt-3'>
                        <p className='text-xs'>Check-in-date</p>
                        <input
                            onChange={e => setCheckIn(e.target.value)}
                            value={checkIn}
                            type="date"
                            className='w-full outline-none rounded-sm p-2'
                        />
                    </div>
                    <div className='relative mt-3'>
                        <p className='text-xs'>Check-out-date</p>
                        <input
                            onChange={e => setCheckOut(e.target.value)}
                            value={checkOut}
                            type="date"
                            className='w-full outline-none rounded-sm p-2'
                        />
                    </div>
                    <div className='relative mt-3'>
                        <p className='text-xs'>Total sits</p>
                        <div onClick={() => setShow(!show)} className='flex justify-between items-center rounded-sm p-2 h-[42px] cursor-pointer bg-white'>
                            {count} <span className='text-[#1ab79d]'><HiOutlineUsers size={23}></HiOutlineUsers></span>
                        </div>
                    </div>
                    <div >
                        <Link to={`/flightTickets/${from}/${name}`}>
                            <button className='allBtn flex justify-center w-full mt-3' type='submit'>
                                Search
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
            <div className={`${show ? 'block' : 'hidden'} absolute -bottom-2 right-0 p-4 w-full z-10`}>
                <div className='bg-white h-14 flex items-center justify-between'>
                    <p className='text-lg font-semibold ml-4'>Sits :</p>
                    <div className='flex items-center gap-x-4 mr-4'>
                        <button className={count <= 1 && 'cursor-not-allowed'} disabled={count <= 1} onClick={() => setCount(count - 1)}>
                            <LiaMinusSquare size={30}></LiaMinusSquare>
                        </button>
                        <span className='text-lg font-semibold'>{count}</span>
                        <button onClick={() => setCount(count + 1)}>
                            <LiaPlusSquare size={30}></LiaPlusSquare>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideCard;