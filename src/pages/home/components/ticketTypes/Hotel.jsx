import React from 'react';
import '../../Home.css'
import { useNavigate } from 'react-router-dom';

const Hotel = () => {
    const navigate = useNavigate();

    const handleHotelTicket = (event) => {
        event.preventDefault();
        const form = event.target;

        const place = form.place.value;
        const dateStart = form.dateStart.value;
        const dateEnd = form.dateEnd.value;
        const guests = form.guests.value;
        const rooms = form.rooms.value;

        const ticketData = { place, dateStart, dateEnd, guests, rooms };
        navigate(`/hotelTickets/${place}`);

    }

    return (
        <div>
            <form onSubmit={handleHotelTicket} className='home-searchTicket-responsive items-center justify-between'>

                <div className='home-searchTicket'>
                    <p>Place</p>
                    <select name="place" className='lg:w-[160px]' required>
                        <option value="" hidden>Please Select</option>
                        <option>Dhaka</option>
                        <option>Chittagong</option>
                        <option>Bandorban</option>
                    </select>
                </div>


                <div className='flex hotel-date'>
                    <hr className='home-ticket-hr' />
                    <div className='home-searchTicket'>
                        <p>Booking Date</p>
                        <input name="dateStart" className='input-date outline-none' type="date" />
                    </div>
                </div>


                <div className='flex hotel-date'>
                    <hr className='home-ticket-hr' />
                    <div className='home-searchTicket'>
                        <p>End Date</p>
                        <input name="dateEnd" className='input-date outline-none' type="date" />
                    </div>
                </div>


                <div className='flex'>
                    <hr className='home-ticket-hr' />
                    <div className='home-searchTicket'>
                        <p>Guests</p>
                        <select name="guests" className='w-[160px]'>
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
                        <p>Rooms</p>
                        <select name="rooms" className='w-[160px]'>
                            <option value="" hidden>Please Select</option>
                            <option>Single</option>
                            <option>Double</option>
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

export default Hotel;