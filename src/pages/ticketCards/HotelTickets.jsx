import React from 'react';
import HotelSideCard from './components/HotelSide';
import { BsWifi } from 'react-icons/bs';
import { TbAirConditioningDisabled } from "react-icons/tb";



const HotelTickets = () => {
    return (
        <div className='lg:flex max-w-[1200px] mx-auto my-20 gap-x-5'>
            <div className='lg:w-[35%] w-[80%] mx-auto'>
                <HotelSideCard></HotelSideCard>
            </div>
            <div className='grid mx-auto gap-y-1 lg:w-[65%]'>
                <div className='md:flex items-center justify-between border rounded-md p-2'>
                    <div className='w-[200px]'>
                        <img src="https://i.ibb.co/wg7thP8/modern-studio-apartment-design-with-bedroom-living-space.jpg" alt="" />
                    </div>

                    <div className='mt-3 md:mt-0'>
                        <h1 className='text-xl text-blue-500 font-bold'>Hotel Name Here</h1>
                        <div className='flex items-center gap-x-2'>
                            <p className='text-blue-500 underline text-xs font-medium'>City Name</p>
                            <p className='text-blue-500 underline text-xs font-medium'>Show on map</p>
                            <p className='text-xs'>4.3 km form center</p>
                        </div>
                        <div className='lg:border-l lg:m-2 lg:pl-2'>
                            <p className='text-xs font-bold'>Budget Double Room</p>
                            <p className='text-xs'>1 twin bed</p>
                            <p className='flex items-center gap-x-1 text-xs font-bold'>Free wifi <BsWifi className='text-blue-500' size={20}></BsWifi> </p>
                            <p className='flex items-center gap-x-1 text-xs font-bold'>Free AC <TbAirConditioningDisabled className='text-blue-500' size={20}></TbAirConditioningDisabled></p>
                            <p className='text-xs'>Entire apartment • 4 bedrooms • 1 living room • 4 bathrooms •</p>
                        </div>
                    </div>

                    <div className='md:text-right flex md:block justify-between items-center mt-3 md:mt-0'>
                        <div>
                            <p className='text-xs'>4 weeks</p>
                            <h1 className='text-xl font-bold'>450 BDT</h1>
                            <p className='text-xs'>+BDT 200 taxes</p>
                        </div>
                        <button className='bg-blue-500 text-white px-3 py-2 rounded-md mt-2'>
                            See Availability
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelTickets;