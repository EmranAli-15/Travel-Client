import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Prime from '../../layout/Prime';
import Home from '../../pages/home/Home';
import TicketCards from '../../pages/ticketCards/TicketCards';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';
import TicketSlip from '../../pages/dashboard/ticketSlip/TicketSlip';
import Blogs from '../../pages/blogs/Blogs';

const router = createBrowserRouter([
    {
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
]);

export default router;