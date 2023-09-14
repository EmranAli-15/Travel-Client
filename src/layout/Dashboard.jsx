import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/navbar/Navbar';
import { FaHome, FaSignOutAlt } from "react-icons/fa";

const Dashboard = () => {

    const admin = true;

    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-[1200px] mx-auto'>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col p-5">
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="p-4 mt-2 w-64 min-h-[calc(90vh)] bg-slate-100 text-base-content relative">
                            {
                                admin ?
                                    <div>
                                        <li>
                                            <NavLink to="/dashboard/flightTicket" className={({ isActive }) => (isActive ? 'activeNav' : 'deActiveNav')}>Publish Flight Ticket</NavLink>
                                        </li>
                                        <li className='mt-4'>
                                            <NavLink to="/dashboard/hotelTicket" className={({ isActive }) => (isActive ? 'activeNav' : 'deActiveNav')}>Publish Flight Hotel</NavLink>
                                        </li>
                                    </div> :
                                    <>
                                        <li>
                                            <NavLink to="">My Tickets</NavLink>
                                        </li>
                                    </>
                            }
                            <div className='absolute bottom-2'>
                                <div>
                                    <button className='flex items-center gap-x-2 hover:pl-5 duration-300'>
                                        <FaHome className='text-blue-500' size={25}></FaHome>
                                        Home
                                    </button>
                                </div>
                                <div className='mt-3'>
                                    <button className='flex items-center gap-x-2 hover:pl-5 duration-300'>
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