import React from 'react';
import Banner from './components/Banner';
import PopularPlace from './components/PopularPlace';
import WhyBest from './components/WhyBest';
import HappyCustomers from './components/HappyCustomers';
import ContactUs from '../contactUs/ContactUs';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Travel with Blog</title>
            </Helmet>
            <Banner></Banner>

            <div className='max-w-7xl mx-auto'>
                <PopularPlace></PopularPlace>
                <WhyBest></WhyBest>
            </div>
            <HappyCustomers></HappyCustomers>
            <div className='max-w-7xl mx-auto'>
                <ContactUs></ContactUs>
            </div>
        </div>
    );
};

export default Home;