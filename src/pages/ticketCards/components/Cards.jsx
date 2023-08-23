import React from 'react';
import '../TicketCards.css'

import { FaRoad } from 'react-icons/fa';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const Cards = ({ tickets }) => {

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 mx-4'>

            {
                tickets.map((ticket, index) =>
                    <Link to="/" key={index} className="card rounded-none ticket-cards card-compact w-full">
                        <figure><img src={ticket.img} /></figure>
                        <div className="card-body">
                            <div className="card-title flex items-center justify-between">
                                <div>
                                    <p>{ticket.place}</p>
                                    <p className='text-xs'>{ticket.from} - {ticket.to}</p>
                                </div>
                                <div>
                                    <p className='flex items-center justify-end text-red-500'>
                                        <FaBangladeshiTakaSign></FaBangladeshiTakaSign> {ticket.tk}
                                    </p>
                                    <p className='text-xs text-gray'>Round Trip</p>
                                </div>
                            </div>
                            <div className='divided-line'></div>
                            <div className='flex items-center justify-between text-gray'>
                                <p><FaRoad className='text-[#313541]' size={20}></FaRoad></p>
                                <p>{ticket.distance} - {ticket.hour} hours</p>
                                <p>Available: <span className='text-black'>{ticket.availableSits} sits</span></p>
                            </div>
                            <p className='text-center pt-4'>Travel with low cost</p>
                        </div>
                    </Link>
                )
            }

        </div>
    );
};

export default Cards;