import React from 'react';
import '../../Home.css'

const Flight = () => {

    const handleFlightTicket = (event) => {
        event.preventDefault();
        const form = event.target;

        const from = form.from.value;
        const to = form.to.value;
        const date = form.date.value;
        const guests = form.guests.value;
        const classType = form.class.value;

        const ticketData = { from, to, date, guests, classType };
        console.log(ticketData);
    }

    return (
        <div>
            <form onSubmit={handleFlightTicket} className='home-searchTicket-responsive items-center justify-between'>

                <div className='home-searchTicket'>
                    <p>Destination From</p>
                    <select name="from" className='lg:w-[160px]' required>
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
                        <select name="to" className='w-[160px]' required>
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
                        <input name="date" className='input-date outline-none' type="date" required />
                    </div>
                </div>


                <div className='flex'>
                    <hr className='home-ticket-hr' />
                    <div className='home-searchTicket'>
                        <p>Guests</p>
                        <select name="guests" className='w-[160px]' required>
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
                        <select name="class" className='w-[160px]' required>
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
    );
};

export default Flight;