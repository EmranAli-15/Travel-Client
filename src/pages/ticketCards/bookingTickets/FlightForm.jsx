import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useBookedFlightMutation } from '../../../features/flight/flightApi';

const FlightForm = ({ flight } = {}) => {
    const [bookedFlight, { isLoading, isSuccess }] = useBookedFlightMutation()
    const { user } = useSelector(state => state.auth);
    const { email } = user || {};
    const { _id, price } = flight || {};

    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { flightId: _id, name, email }
        console.log(data);
        bookedFlight(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='md:flex px-5'>
                <div className='md:w-1/2 h-10 border flex items-center pl-3 font-medium'>
                    {email}
                </div>
                <div className='md:w-1/2 text-right text-[25px] font-bold text-red-500'>
                    Tk {price}
                </div>
            </div>
            <div className='md:flex px-5 mt-3'>
                <input onChange={e => setName(e.target.value)} className='md:w-1/2 h-10 border outline-none font-medium pl-3' type="text" name="" id="" placeholder='Enter Your Name' required />
            </div>

            <div className='flex justify-center mt-5'>
                <button type='submit' className='allBtn'>Book Now</button>
            </div>
        </form>
    );
};

export default FlightForm;