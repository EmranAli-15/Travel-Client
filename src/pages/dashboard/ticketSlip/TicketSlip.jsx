import React from 'react';
import './TicketSlip.css'
import { FaMapMarkerAlt, FaPlaneDeparture } from 'react-icons/fa';
import QRCode from "react-qr-code";

import ticketSlip from '../../../assets/dashboard/ticketSlip-bg.png'

const TicketSlip = () => {

    return (
        <div className='my-[500px]'>
            <div>
                <div className='overflow-x-auto'>
                    <div className='flex items-center gap-x-3 w-[650px] text-white py-4 px-5 bg-[#1ab79d]'>
                        <FaPlaneDeparture size={25}></FaPlaneDeparture>
                        <h1 className='text-2xl font-bold'>TRAVEL</h1>
                    </div>
                    <div className='ticketSlipBg h-[350px] w-[650px] px-5 py-5 border'>
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

                        <div className='flex items-center justify-between'>
                            <div style={{ height: "100px", width: "100px" }} className='relative -bottom-10'>
                                <QRCode
                                    size={256}
                                    style={{ height: "80px", width: "80px" }}
                                    value="dd"
                                    viewBox={`0 0 256 256`}
                                />
                            </div>
                            <div>
                                <h1 className='text-2xl ticketSlipFont'>Gate</h1>
                                <h1 className='text-4xl font-semibold font-sans'>A</h1>
                            </div>
                            <div>
                                <h1 className='text-2xl ticketSlipFont'>Boarding Time</h1>
                                <h1 className='text-4xl font-sans text-red-500 flex items-center'>
                                    19:10
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default TicketSlip;