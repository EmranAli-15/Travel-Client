import React from 'react';
import '../TicketCards.css'

import { Link } from 'react-router-dom';
import SideCard from './SideCard'


const Cards = ({ tickets }) => {


    return (
        <div className='md:flex'>
            <div className='md:w-[40%] mb-5'>
                <SideCard></SideCard>
            </div>
            <div className='grid gap-y-4 md:w-[60%]'>

                {
                    tickets.map((ticket, index) => {
                        const { img, from, to, tk, place, hour, distance, availableSits } = ticket
                        return (
                            <Link to="/" key={index} className="w-full">
                                <div className='flex items-center bg-[#ebf2f5f5] hover:border-b-[4px] hover:border-b-[#1ab79d] duration-300 border border-b-[4px] border-b-transparent rounded-md'>
                                    <div className='p-4'>
                                        <img className='h-[100px] md:h-[200px] w-[125px] md:w-[250px] rounded-md' src={img} alt={place} />
                                    </div>

                                    <div className='flex md:w-[75%] justify-between'>
                                        <div>
                                            <h1 className='md:text-xl w-full flex justify-between'>
                                                <span>
                                                    {place}
                                                </span>
                                                <span className='md:hidden block text-red-500'>
                                                    {tk} Tk.
                                                </span>
                                            </h1>
                                            <p className='text-xs text-gray-400'>{from} - {to}</p>

                                            <p className='mt-3'>Distance : <span className='md:font-serif'>{distance} km.</span></p>
                                            <p>Available Sits : <span className='md:font-serif'>{availableSits}</span></p>
                                            <p>Journey Hour : <span className='md:font-serif'>{hour} hour</span></p>
                                        </div>
                                        <div className='mr-5 text-right hidden md:block'>
                                            <h1 className='md:text-lg text-orange-600 md:font-serif font-bold'>TK, {tk}</h1>
                                            <button className='allBtn mt-3'>
                                                Book now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                    )
                }

            </div>
        </div>
    );
};

export default Cards;