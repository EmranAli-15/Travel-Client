import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/navbar/Navbar';

const Dashboard = () => {

    const admin = true;

    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col p-5">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="p-4 w-64 min-h-[calc(90vh)] bg-blue-100 text-base-content relative">
                        {
                            admin ?
                                <div>
                                    <li className='bg-green-300 px-2 py-1'>
                                        <NavLink to="/dashboard/flightTicket" className="font-serif text-white">Publish Flight Ticket</NavLink>
                                    </li>
                                    <li className='mt-4 bg-green-300 px-2 py-1'>
                                        <NavLink to="" className="font-serif">Publish Flight Hotel</NavLink>
                                    </li>
                                </div> :
                                <>
                                    <li>
                                        <NavLink to="">My Tickets</NavLink>
                                    </li>
                                </>
                        }
                        <div className='absolute bottom-2'>
                            Logout
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;