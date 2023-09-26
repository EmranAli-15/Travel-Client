import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useBookedUserFlightTicketsQuery } from '../../../features/flight/flightApi';
import TicketSlip from '../ticketSlip/TicketSlip';
import { AiFillIdcard } from 'react-icons/ai';

const BookedFlightTickets = () => {

    const [isSkip, isSetSkip] = useState(true);
    const { user } = useSelector(state => state.auth);
    const { email } = user || {};
    const { data: tickets, isLoading, isSuccess } = useBookedUserFlightTicketsQuery(email, {
        skip: isSkip
    });

    useEffect(() => {
        if (email) {
            isSetSkip(false)
        }
    }, [email]);


    const [slipData, setSlipData] = useState({});
    const [opened, setOpened] = useState(false);
    const handleModal = (data) => {
        setSlipData(data);
        setOpened(!opened)
    }

    const loader = <div className='flex items-center max-w-[700px] justify-between border p-4 rounded my-4'>
        <div className='text-slate-200 bg-slate-200'>
            Dhaka - Chittagong
        </div>
        <div className='text-slate-200 bg-slate-200'>
            Tk 590
        </div>
    </div>

    // decide what to render
    let content = null;
    if (isLoading) {
        content = <>
            {loader}
            {loader}
            {loader}
            {loader}
        </>
    }
    if (!isLoading && isSuccess && tickets) {
        const { name, result } = tickets;
        content = result.map(ticket => {
            const { _id, from, to, price } = ticket
            return <div key={_id} className='flex items-center max-w-[700px] justify-between border p-4 rounded my-4'>
                <div className='text-xl font-bold'>
                    <span className='text-blue-500'>{from}</span> - <span className='text-green-500'>{to}</span>
                </div>
                <div className='text-xl font-bold text-red-500'>
                    Tk {price}
                </div>
                <button onClick={() => handleModal({ticket, name})}>
                    <AiFillIdcard size={30} className='text-blue-500'></AiFillIdcard>
                </button>
            </div>
        })
    }

    return (
        <div>
            {
                content
            }
            {
                opened &&
                <div className=''>
                    <div onClick={() => setOpened(!opened)} className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer">

                    </div>
                    <div className="rounded space-y-8 bg-white w-full md:w-auto overflow-x-scroll p-10 absolute top-[130%] md:top-[40%] left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                        <TicketSlip data={slipData}></TicketSlip>
                    </div>
                </div>
            }
        </div>
    );
};

export default BookedFlightTickets;