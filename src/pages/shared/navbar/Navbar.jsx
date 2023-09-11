import React from 'react';
import logo from '../../../assets/home/logo.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const { user, loading } = useSelector(state => state.auth);

    return (
        <div className='hidden md:block'>
            <div className="flex items-center justify-between navbar bg-base-100">
                <div>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div>
                    central
                </div>
                <div>
                    {user ? user.email : 'haray gechi'}
                </div>
                <div>
                    {loading ? 'loading...' : ''}
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;