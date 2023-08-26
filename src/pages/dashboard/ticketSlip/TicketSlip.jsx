import React from 'react';
import './TicketSlip.css'
import { FaMapMarkerAlt, FaPlaneDeparture } from 'react-icons/fa';

import ticketSlip from '../../../assets/dashboard/ticketSlip-bg.png'

const TicketSlip = () => {
    return (
        <div className='my-[500px]'>
            <div>
                <div className='flex items-center gap-x-3 text-white py-4 px-5 bg-[#1ab79d]'>
                    <FaPlaneDeparture size={25}></FaPlaneDeparture>
                    <h1 className='text-2xl font-bold'>TRAVEL</h1>
                </div>
                <div className='ticketSlipBg h-[300px] w-[600px] px-5'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h1 className='text-2xl ticketSlipFont'>Name</h1>
                            <h1 className='ticketSlipUser'>Emran</h1>
                        </div>
                        <div className='flex items-center gap-x-10'>
                            <div>
                                <h1 className='text-2xl ticketSlipFont'>Date</h1>
                                <h1 className='ticketSlipUser'>03 Aug</h1>
                            </div>
                            <div>
                                <h1 className='text-2xl ticketSlipFont'>Flight</h1>
                                <h1 className='ticketSlipUser'>AB 3007</h1>
                            </div>
                            <div>
                                <h1 className='text-2xl ticketSlipFont'>Seat</h1>
                                <h1 className='ticketSlipUser'>17 B</h1>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-16 my-5'>
                        <div>
                            <h1 className='text-2xl ticketSlipFont'>From</h1>
                            <h1 className='ticketSlipUser'>Dhaka</h1>
                        </div>
                        <div>
                            <h1 className='text-2xl ticketSlipFont'>To</h1>
                            <h1 className='ticketSlipUser flex items-center'>
                                Cox's Bazar
                                <FaMapMarkerAlt size={15} className='text-red-500'></FaMapMarkerAlt>
                            </h1>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default TicketSlip;