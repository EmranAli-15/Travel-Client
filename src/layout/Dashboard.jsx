import React, { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../pages/shared/navbar/Navbar';
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { auth, signOut } from '../features/auth/firebase'
import { useAdminSecureQuery } from '../features/auth/authApi';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(false);

    const { user, isAdmin, dashboardLoading } = useSelector(state => state.auth);
    const { email } = user || {};
    console.log(dashboardLoading)
    useAdminSecureQuery(email)

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                navigate('/');
            })
            .catch(() => { })
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
                                isAdmin && !dashboardLoading &&
                                <>
                                    <li>
                                        <NavLink to="/dashboard/flightTicket" className={({ isActive }) => (isActive ? 'activeNav' : 'deActiveNav')}>Publish Flight Ticket</NavLink>
                                    </li>
                                    <li className='mt-4'>
                                        <NavLink to="/dashboard/hotelTicket" className={({ isActive }) => (isActive ? 'activeNav' : 'deActiveNav')}>Publish Flight Hotel</NavLink>
                                    </li>
                                </> ||
                                !isAdmin && !dashboardLoading &&
                                <>
                                    <li>
                                        <NavLink to="" className={({ isActive }) => (isActive ? 'activeNav' : 'deActiveNav')}>My Tickets</NavLink>
                                    </li>
                                </> ||
                                <>Loading</>
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