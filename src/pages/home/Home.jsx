import React from 'react';
import Banner from './components/Banner';
import PopularPlace from './components/PopularPlace';
import WhyBest from './components/WhyBest';
import HappyCustomers from './components/HappyCustomers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <div className='max-w-7xl mx-auto'>
                <PopularPlace></PopularPlace>
                <WhyBest></WhyBest>
            </div>
            <HappyCustomers></HappyCustomers>

        </div>
    );
};

export default Home;