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
import HotelTickets from '../../pages/ticketCards/HotelTickets';
import EditBlog from '../../pages/blogs/EditBlog';
import FlightBooking from '../../pages/ticketCards/bookingTickets/FlightBooking';
import ErrorPage from '../../pages/shared/errorPage/ErrorPage';
import UserHome from '../../pages/dashboard/user/UserHome';
import Common from '../../pages/dashboard/Common';
import AdminHome from '../../pages/dashboard/admin/AdminHome';
import BookedFlightTickets from '../../pages/dashboard/user/BookedFlightTickets';

const router = createBrowserRouter([
    {
        // regular route path
        path: "/",
        element: <Prime></Prime>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: "/hotelTickets/:place",
                element: <HotelTickets></HotelTickets>
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
            },
            {
                path: "/editBlog/:id",
                element: <EditBlog></EditBlog>
            },



            // ticket booking fill up pages
            {
                path: "/flightBooking/:id",
                element: <FlightBooking></FlightBooking>
            },
        ]
    },

    // dashboard related routes
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "/dashboard",
                element: <Common></Common>
            },
            {
                path: "/dashboard/userHome",
                element: <UserHome></UserHome>
            },
            {
                path: "/dashboard/bookedFlightTickets",
                element: <BookedFlightTickets></BookedFlightTickets>
            },




            // admin sections
            {
                path: "/dashboard/adminHome",
                element: <AdminHome></AdminHome>
            },
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
        ]
    },

]);

export default router;