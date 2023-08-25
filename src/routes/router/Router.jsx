import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Prime from '../../layout/Prime';
import Home from '../../pages/home/Home';
import TicketCards from '../../pages/ticketCards/TicketCards';
import Login from '../../pages/login/Login';

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
            }
        ]
    },
]);

export default router;