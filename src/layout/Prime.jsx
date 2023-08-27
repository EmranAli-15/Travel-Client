import React from 'react';
import Footer from '../pages/shared/footer/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/navbar/Navbar';

const Prime = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Prime;