import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Prime from '../../layout/Prime';
import Home from '../../pages/home/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Prime></Prime>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);

export default router;