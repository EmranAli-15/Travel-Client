import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Prime from '../../layout/Prime';
import Home from '../../pages/home/Home';
import FlightTickets from '../../pages/ticketCards/FlightTickets';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';
import TicketSlip from '../../pages/dashboard/ticketSlip/TicketSlip';
import Blogs from '../../pages/blogs/Blogs';
import Dashboard from '../../layout/Dashboard';
import FlightTicket from '../../pages/dashboard/admin/FlightTicket';
import HotelTicket from '../../pages/dashboard/admin/HotelTicket';
import BlogsLayout from '../../layout/BlogsLayout';
import UploadBlog from '../../pages/blogs/UploadBlog';
import SingleBlog from '../../pages/blogs/SingleBlog'
import BlogsLoader from '../../ui/BlogsLoader';

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
                path: "/flightTickets/:from/:to",
                element: <FlightTickets></FlightTickets>
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
                path: "/uploadBlog",
                element: <UploadBlog></UploadBlog>
            }
        ]
    },

    // dashboard related routes
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "/dashboard/flightTicket",
                element: <FlightTicket></FlightTicket>
            },
            {
                path: "/dashboard/hotelTicket",
                element: <HotelTicket></HotelTicket>
            },
        ]
    },

    // blogs related routes
    {
        path: "/blogs",
        element: <BlogsLayout></BlogsLayout>,
        children: [
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/blogs/singleBlog/:id",
                element: <SingleBlog></SingleBlog>
            },
            {
                path: "/blogs/loader",
                element: <BlogsLoader></BlogsLoader>
            },
        ]
    },

]);

export default router;