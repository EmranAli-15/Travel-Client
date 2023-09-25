import React from 'react';
import { useSelector } from 'react-redux';
import { useBookedUserFlightTicketsQuery } from '../../../features/flight/flightApi';

const BookedFlightTickets = () => {

    const { user } = useSelector(state => state.auth);
    const { email } = user || {};
    const { } = useBookedUserFlightTicketsQuery(email);

    return (
        <div>
            my tickets
        </div>
    );
};

export default BookedFlightTickets;