import React from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../pages/shared/navbar/Navbar';
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { auth, signOut } from '../features/auth/firebase'
import { useAdminSecureQuery } from '../features/auth/authApi';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const navigate = useNavigate();

    const { user } = useSelector(state => state.auth);
    const { email } = user || {};
    const { data, isLoading, isSuccess, isError } = useAdminSecureQuery(email)
    if (!email && !isLoading && isError) {
        navigate('/');
    }

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                navigate('/');
            })
            .catch(() => { })
    }

    // decide what to render
    let content = null;
    if (isLoading && !data) {
        content = <p>Loading...</p>
    }
    if (data) {
        content = <>
            <li>
                <NavLink to="/dashboard/adminHome" className={({ isActive }) => (isActive ? 'activeNav' : 'deActiveNav')}>My Dashboard</NavLink>
            </li>
            <li className='my-4'>
                <NavLink to="/dashboard/flightTicket" className={({ isActive }) => (isActive ? 'activeNav' : 'deActiveNav')}>Publish Flight Ticket</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/hotelTicket" className={({ isActive }) => (isActive ? 'activeNav' : 'deActiveNav')}>Publish Flight Hotel</NavLink>
            </li>
        </>
    }
    if (!isLoading && !data) {
        content = <>
            <li>
                <NavLink to="/dashboard/userHome" className={({ isActive }) => (isActive ? 'activeNav' : 'deActiveNav')}>My Dashboard</NavLink>
            </li>
            <li className='my-4'>
                <NavLink to="/dashboard/bookedFlightTickets" className={({ isActive }) => (isActive ? 'activeNav' : 'deActiveNav')}>My Flight</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/userd" className={({ isActive }) => (isActive ? 'activeNav' : 'deActiveNav')}>My Hotel</NavLink>
            </li>
        </>
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-[1200px] mx-auto'>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col p-5">
                        <label htmlFor="my-drawer-2" className="lg:hidden flex justify-end"><TiThMenu size={25}></TiThMenu></label>
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="p-4 mt-2 w-64 min-h-[calc(80vh)] bg-slate-100 text-base-content relative">
                            {
                                content
                            }
                            <div className='absolute bottom-2'>
                                <div>
                                    <Link to="/">
                                        <button className='flex items-center gap-x-2 hover:pl-5 duration-300'>
                                            <FaHome className='text-blue-500' size={25}></FaHome>
                                            Home
                                        </button>
                                    </Link>
                                </div>
                                <div className='mt-3'>
                                    <button onClick={handleLogOut} className='flex items-center gap-x-2 hover:pl-5 duration-300'>
                                        <FaSignOutAlt className='text-red-500' size={25}></FaSignOutAlt>
                                        Sign Out
                                    </button>
                                </div>
                            </div>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;