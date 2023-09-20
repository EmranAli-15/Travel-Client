import React, { useEffect } from 'react';
import SideCard from './components/SideCard';
import { useParams } from 'react-router-dom';
import { useGetFlightTicketsMutation } from '../../features/flight/flightApi';
import { useSelector } from 'react-redux';

const FlightTickets = () => {

    const { flightTickets } = useSelector(state => state.crud)

    const { from, to } = useParams();

    const [getFlightTickets, { }] = useGetFlightTicketsMutation();

    useEffect(() => {
        getFlightTickets({ from, to })
    }, [getFlightTickets, from, to])


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='md:flex max-w-[1200px] mx-auto my-20 gap-x-10'>
            <div className='md:w-[40%]'>
                <SideCard from={from}></SideCard>
            </div>

            <div className='grid gap-y-1 md:w-[60%]'>

                {
                    flightTickets.map((ticket, index) => {
                        const
                            {
                                from,
                                to,
                                fromShort,
                                toShort,
                                distance,
                                hour,
                                price,
                                departAgencyName,
                                returnAgencyName,
                                departAgencyLogo,
                                returnAgencyLogo
                            } = ticket
                        return (
                            <div key={index} className="w-full">
                                <div className='md:flex items-center p-2 border rounded-md'>
                                    <div className='md:w-[75%] py-5'>

                                        <div className='flex gap-x-10 px-4 py-2'>
                                            <div className='w-[70px]'>
                                                <img className='h-[30px] w-[30px]' src={departAgencyLogo} alt={to} />
                                                <p className='text-[14px] text-gray-500'>{departAgencyName}</p>
                                            </div>
                                            <div className='flex items-center gap-x-3'>
                                                <p>{fromShort}</p>
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
                                                <p>{toShort}</p>
                                            </div>
                                        </div>
                                        <div className='flex gap-x-10 px-4'>
                                            <div className='w-[70px]'>
                                                <img className='h-[30px] w-[30px]' src={returnAgencyLogo} alt={from} />
                                                <p className='text-[14px] text-gray-500'>{returnAgencyName}</p>
                                            </div>
                                            <div className='flex items-center gap-x-3'>
                                                <p>{toShort}</p>
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
                                                <p>{fromShort}</p>
                                            </div>
                                        </div>

                                        <div className='flex items-center justify-between px-4 pt-2 text-xs text-gray-500'>
                                            <div className='flex items-center gap-x-2 text-blue-600'>
                                                <p>{returnAgencyName},</p>
                                                <p>{departAgencyName}</p>
                                            </div>
                                            <div className='flex items-center gap-x-3'>
                                                <p className='text-green-600'>TK {price + 200} Bravofly</p>
                                                <p className='text-blue-500'>TK {price + 300} Opodo</p>
                                                <p>+5 more</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className='md:w-[25%] flex justify-between'>
                                        <div className='mr-3 w-full flex md:flex-col gap-x-5 justify-center items-center text-right md:border-l border-l-black/40 pl-2'>
                                            <h1 className='md:text-lg text-orange-600 md:font-serif font-bold'>TK, {price}</h1>
                                            <button className='bg-blue-500 px-3 py-2 mt-3 text-white rounded-md'>
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

export default FlightTickets;