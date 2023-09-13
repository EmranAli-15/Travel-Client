import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Prime from '../../layout/Prime';
import Home from '../../pages/home/Home';
import TicketCards from '../../pages/ticketCards/TicketCards';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';
import TicketSlip from '../../pages/dashboard/ticketSlip/TicketSlip';
import Blogs from '../../pages/blogs/Blogs';
import Dashboard from '../../layout/Dashboard';
import FlightTicket from '../../pages/dashboard/admin/FlightTicket';

const router = createBrowserRouter([
    {
        // regular route path
        path: "/",
        element: <Prime></Prime>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/ticketCards",
                element: <TicketCards></TicketCards>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/ticketSlip",
                element: <TicketSlip></TicketSlip>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [{
            path: "/dashboard/flightTicket",
            element: <FlightTicket></FlightTicket>
        }]
    }
]);

export default router;