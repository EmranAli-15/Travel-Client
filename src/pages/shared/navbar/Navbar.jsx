import React from 'react';
import logo from '../../../assets/home/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth, signOut } from '../../../features/auth/firebase'

const Navbar = () => {

    const { user } = useSelector(state => state.auth);

    const handleLogOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

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
                    {
                        user ?
                            <NavLink to="/dashboard/flightTicket">Dashboard</NavLink> :
                            ''
                    }
                </div>
                <div className="flex-none">
                    {
                        user ? <button onClick={handleLogOut}>LogOut</button> : <Link to="/login">login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;