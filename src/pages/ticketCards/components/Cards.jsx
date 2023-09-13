import React from 'react';
import '../TicketCards.css'

import { Link } from 'react-router-dom';
import FlightSideCard from './FlightSideCard'
import { BsDashLg } from 'react-icons/bs';


const Cards = ({ tickets }) => {


    return (
        <div className='lg:flex'>
            <div className='lg:w-[40%] mb-5'>
                <FlightSideCard></FlightSideCard>
            </div>
            <div className='grid gap-y-4 lg:w-[60%]'>

                {
                    tickets.map((ticket, index) => {
                        const { departAgency, departAgencyName, returnAgency, returnAgencyName, from, to, tk, place, hour, distance } = ticket
                        return (
                            <div key={index} className="w-full">
                                <div className='md:flex items-center bg-[#ebf2f5f5] hover:border-b-[4px] hover:border-b-[#1ab79d] duration-300 border border-b-[4px] border-b-transparent rounded-md'>
                                    <div className='md:w-[75%] py-2'>
                                        <div className='flex gap-x-10 px-4 py-2'>
                                            <div>
                                                <img className='h-[30px] w-[30px]' src={departAgency} alt={place} />
                                                <p className='text-[14px] text-gray-500'>{departAgencyName}</p>
                                            </div>
                                            <div className='flex items-center gap-x-3'>
                                                <p>{from}</p>
                                                <div className='flex flex-col items-center mt-4'>
                                                    <div className='flex items-center gap-x-2'>
                                                        <span className='h-[2px] w-16 bg-black/50'></span>
                                                        <span className='h-2 w-2 border border-black/50'></span>
                                                        <span className='h-[2px] w-16 bg-black/50'></span>
                                                    </div>
                                                    <div className='text-xs text-gray-500 flex items-center gap-x-1'>
                                                        <p>{distance} km.</p>
                                                        <p>-</p>
                                                        <p>{hour} h</p>
                                                    </div>
                                                </div>
                                                <p>{to}</p>
                                            </div>
                                        </div>
                                        <div className='flex gap-x-10 px-4'>
                                            <div>
                                                <img className='h-[30px] w-[30px]' src={returnAgency} alt={place} />
                                                <p className='text-[14px] text-gray-500'>{returnAgencyName}</p>
                                            </div>
                                            <div className='flex items-center gap-x-3'>
                                                <p>{to}</p>
                                                <div className='flex flex-col items-center mt-4'>
                                                    <div className='flex items-center gap-x-2'>
                                                        <span className='h-[2px] w-16 bg-black/50'></span>
                                                        <span className='h-2 w-2 border border-black/50'></span>
                                                        <span className='h-[2px] w-16 bg-black/50'></span>
                                                    </div>
                                                    <div className='text-xs text-gray-500 flex items-center gap-x-1'>
                                                        <p>{distance} km.</p>
                                                        <p>-</p>
                                                        <p>{hour} h</p>
                                                    </div>
                                                </div>
                                                <p>{from}</p>
                                            </div>
                                        </div>

                                        <div className='flex items-center justify-between px-4 text-xs text-gray-500'>
                                            <div className='flex items-center gap-x-2'>
                                                <p>{returnAgencyName}</p>
                                                <p>{departAgencyName},</p>
                                            </div>
                                            <div className='flex items-center gap-x-3'>
                                                <p className='text-black'>TK {tk + 200} Bravofly</p>
                                                <p className='text-blue-500'>TK {tk + 300} Opodo</p>
                                                <p>+5 more</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='md:w-[25%] flex justify-between'>
                                        <div className='mr-3 w-full flex md:flex-col gap-x-5 justify-center items-center text-right md:border-l border-l-black/40 pl-2'>
                                            <h1 className='md:text-lg text-orange-600 md:font-serif font-bold'>TK, {tk}</h1>
                                            <button className='allBtn mt-3'>
                                                Book now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                }

            </div>
        </div>
    );
};

export default Cards;