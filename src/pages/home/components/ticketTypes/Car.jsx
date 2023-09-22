import React from 'react';
import '../../Home.css'

const Car = () => {

    const handleCarTicket = (event) => {
        event.preventDefault();
        const form = event.target;

        const from = form.from.value;
        const to = form.to.value;
        const dateStart = form.dateStart.value;
        const dateEnd = form.dateEnd.value;
        const sits = form.sits.value;

        const ticketData = { from, to, dateStart, dateEnd, sits };
    }

    return (
        <div>
            <form onSubmit={handleCarTicket} className='home-searchTicket-responsive items-center justify-between'>

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
                        <input name="dateStart" className='input-date outline-none' type="date" required />
                    </div>
                </div>


                <div className='flex'>
                    <hr className='home-ticket-hr' />
                    <div className='home-searchTicket'>
                        <p>End Date</p>
                        <input name="dateEnd" className='input-date outline-none' type="date" required />
                    </div>
                </div>


                <div className='flex'>
                    <hr className='home-ticket-hr' />
                    <div className='home-searchTicket'>
                        <p>Sits</p>
                        <select name="sits" className='w-[160px]' required>
                            <option value="" hidden>Please Select</option>
                            <option>2 Sit</option>
                            <option>4 Sit</option>
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

export default Car;