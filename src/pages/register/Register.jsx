import React, { useState } from 'react';
import { FaEyeSlash, FaUserAlt, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import signUpImg from '../../assets/authentication/signupImg.png'
import { auth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from '../../features/auth/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, loading } from '../../features/auth/authSlice';

const Register = () => {
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // const { user } = useSelector(state => state.auth);

    const handleCreateUser = (event) => {
        event.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                dispatch(login({
                    email: result.user.email
                }))
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleLogout = () => {
        signOut(auth)
            .then(result => {
                dispatch(logout());
            })
            .catch(error => { })
    }

    const handleLogin = () => {
        dispatch(loading(true))
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                dispatch(login({
                    email: email
                }))
                dispatch(loading(false))
            })
            .catch(error => {
                console.log(error)
            })
    }



    return (
        <div className='max-w-7xl mx-auto'>
            <div>
                <div className="flex flex-col md:flex-row justify-between h-full items-center min-h-screen sm:justify-center sm:pt-0">
                    <div className="w-full md:w-1/2">
                        <img src={signUpImg} alt="" />
                    </div>
                    <div className="w-full md:w-1/2 px-6 py-4 md:mt-6 border-b-[5px] border-b-[#4ed8c1] overflow-hidden bg-white shadow-2xl  sm:max-w-lg sm:rounded-lg relative">
                        <FaUserAlt className="my-8 mx-auto text-6xl text-[#4ed8c1]"></FaUserAlt>
                        <form onSubmit={handleCreateUser}>
                            <div className="relative z-0 w-full mb-6 mt-4 group">
                                <input
                                    type="text"
                                    className="block py-2.5 pl-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1ab79d] focus:outline-none focus:ring-0 focus:border-[#1ab79d] peer"
                                    required
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                                <label
                                    htmlFor="floating_email"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#1ab79d] peer-focus:dark:text-[#1ab79d] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Your Name*
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-6 mt-4 group">
                                <input
                                    type="email"
                                    id="floating_email"
                                    className="block py-2.5 pl-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1ab79d] focus:outline-none focus:ring-0 focus:border-[#1ab79d] peer"
                                    required
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <label
                                    htmlFor="floating_email"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#1ab79d] peer-focus:dark:text-[#1ab79d] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Your Email*
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    type={`${toggle ? 'text' : 'password'}`}
                                    id="floating_password"
                                    className="block py-2.5 pl-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1ab79d] focus:outline-none focus:ring-0 focus:border-[#1ab79d] peer"
                                    required
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <label
                                    htmlFor="floating_password"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#1ab79d] peer-focus:dark:text-[#1ab79d] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Password*
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    type={`${toggle ? 'text' : 'password'}`}
                                    id="floating_password"
                                    className="block py-2.5 pl-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#1ab79d] focus:outline-none focus:ring-0 focus:border-[#1ab79d] peer"
                                    required
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)}
                                />
                                <label
                                    htmlFor="floating_password"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#1ab79d] peer-focus:dark:text-[#1ab79d] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Confirm Password*
                                </label>
                            </div>
                            <button className="flex items-center w-full mt-4">
                                <div className="relative w-full inline-flex items-center justify-center px-12 py-2 overflow-hidden text-lg font-medium text-pink border-2 border-[#4ed8c1] rounded-3xl hover:text-white group hover:bg-gray-50">
                                    <div className="absolute left-0 block w-full h-0 transition-all bg-[#4ed8c1] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></div>
                                    <div className="absolute right-0 flex items-center justify-end me-4 w-full h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                        <svg className="w-5 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </div>
                                    <div>
                                        <input className="relative text-pink transition-colors duration-200 ease-in-out delay-100 group-hover:text-white" type="submit" value='Register' />
                                    </div>
                                </div>
                            </button>

                        </form>
                        <div className="mt-10 flex flex-col md:flex-row items-center justify-center">
                            Already have an account{" "}
                            <span>
                                <Link to='/login'><p className="text-pink font-bold hover:underline hover:text-blue-500 ms-2">
                                    LOGIN
                                </p></Link>
                            </span>
                        </div>

                        <div onClick={() => setToggle(!toggle)} className='cursor-pointer absolute top-[270px] right-6'>
                            {
                                toggle ? <FaEye size={20}></FaEye> :
                                    <FaEyeSlash className='text-gray' size={20}></FaEyeSlash>
                            }
                        </div>

                        <div className='flex gap-x-10'>
                            <button onClick={handleLogout}>
                                logOut
                            </button>
                            <button onClick={handleLogin}>
                                login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;