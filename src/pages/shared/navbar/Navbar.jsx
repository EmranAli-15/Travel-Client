import React from 'react';
import logo from '../../../assets/home/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth, signOut } from '../../../features/auth/firebase'
import { BsPersonCircle } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { FaBlog } from 'react-icons/fa';
import { MdOutlineScreenShare, MdSpaceDashboard } from "react-icons/md";

const Navbar = () => {

    const { user } = useSelector(state => state.auth);

    return (
        <div className="navbar bg-slate-100">
            <div className="navbar-start">
                <div className="dropdown -ml-2">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="pl-5 dropdown-content py-5 mt-2 z-[1] shadow bg-base-100 min-w-[calc(100vw-10vw)]">
                        {
                            user ?
                                <li className='mt-3'>
                                    <Link to="/dashboard" className='flex items-center pl-4 gap-x-2 mt-3 font-medium'>
                                        <div>
                                            <MdSpaceDashboard className='text-blue-500' size={20}></MdSpaceDashboard>
                                        </div>
                                        Dashboard
                                    </Link>
                                </li> :
                                <li className='flex items-center pl-[13px] gap-x-2 mt-3 font-medium'>
                                    <Link to="/login"> <BiLogIn className='text-blue-500' size={22}></BiLogIn> </Link>
                                    Log in
                                </li>
                        }
                        <li>
                            <Link to="/blogs" className='flex items-center pl-[19px] gap-x-2 mt-3 font-medium'>
                                <div>
                                    <FaBlog className='text-blue-500' size={17}></FaBlog>
                                </div>
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link to="/uploadBlog" className='flex items-center pl-4 gap-x-2 mt-3 font-medium'>
                                <div>
                                    <MdOutlineScreenShare className='text-blue-500' size={20}></MdOutlineScreenShare>
                                </div>
                                <h1>Share Your Blog</h1>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link to="/">
                    <img className='md:w-full w-[80%] ml-5' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex gap-x-20">
                <ul className="flex gap-x-10 menu-horizontal px-1">
                    <li><NavLink to="/blogs" className="flex items-center gap-x-1 text-xl"> <FaBlog className='text-blue-500'></FaBlog> Blogs</NavLink></li>
                </ul>
                <div className='flex items-center gap-x-5'>
                    <p className='font-serif'>+880 1875184878</p>
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar-end mr-5">
                <Link to="/uploadBlog" className='lg:flex items-center gap-x-1 mr-10 hidden'>
                    <div>
                        <MdOutlineScreenShare size={30} className='text-blue-500'></MdOutlineScreenShare>
                    </div>
                    <h1 className='text-xl'>Share Your Blog</h1>
                </Link>
                <div>
                    {
                        user ?
                            <Link to="/dashboard"> <BsPersonCircle className='text-[#1ab79d]' size={30}></BsPersonCircle> </Link> :
                            <Link to="/login"> <BiLogIn className='text-[#1ab79d]' size={30}></BiLogIn> </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;