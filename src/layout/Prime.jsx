import React from 'react';
import Footer from '../pages/shared/footer/Footer';
import { Outlet } from 'react-router-dom';

const Prime = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Prime;