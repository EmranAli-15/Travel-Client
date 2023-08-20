import React from 'react';
import Banner from './components/Banner';
import PopularPlace from './components/PopularPlace';

const Home = () => {
    return (
        <div className='mb-[500px]'>
            <Banner></Banner>

            <div className='max-w-7xl mx-auto'>
                <PopularPlace></PopularPlace>
            </div>

        </div>
    );
};

export default Home;