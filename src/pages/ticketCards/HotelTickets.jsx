import React, { useEffect } from 'react';
import HotelSideCard from './components/HotelSide';
import { BsWifi } from 'react-icons/bs';
import { TbAirConditioningDisabled } from "react-icons/tb";
import { useParams } from 'react-router-dom';
import { useGetHotelTicketsQuery } from '../../features/hotel/hotelApi';



const HotelTickets = () => {
    const { place } = useParams();
    console.log(place);
    const { data: hotelTickets, isLoading, isSuccess } = useGetHotelTicketsQuery(place);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // decide what to render
    let content = null;
    if (isLoading) {
        content = <p>Loading...</p>
    }
    if (!isLoading && isSuccess) {
        if (hotelTickets.length === 0) {
            content = <p className='text-3xl font-bold text-center'>No Hotel Found</p>
        }
        else {
            content = <>
                {
                    hotelTickets.map(ticket => {
                        const { _id, hotel, price, place, time, photo, fromCenter } = ticket || {};
                        return <div key={_id} className='md:flex items-center justify-between border rounded-md p-2'>
                            <div className='w-[200px]'>
                                <img src={photo} alt="" />
                            </div>

                            <div className='mt-3 md:mt-0'>
                                <h1 className='text-xl text-blue-500 font-bold'>{hotel}</h1>
                                <div className='flex items-center gap-x-2'>
                                    <p className='text-blue-500 underline text-xs font-medium'>{place}</p>
                                    <p className='text-blue-500 underline text-xs font-medium'>Show on map</p>
                                    <p className='text-xs'>{fromCenter} km form center</p>
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
                                    <p className='text-xs'>{time} weeks</p>
                                    <h1 className='text-xl font-bold'>{price} BDT</h1>
                                    <p className='text-xs'>+BDT 200 taxes</p>
                                </div>
                                <button className='bg-blue-500 text-white px-3 py-2 rounded-md mt-2'>
                                    See Availability
                                </button>
                            </div>
                        </div>
                    })
                }
            </>
        }
    }

    return (
        <div className='lg:flex max-w-[1200px] mx-auto my-20 gap-x-5'>
            <div className='lg:w-[35%] w-[80%] mx-auto'>
                <HotelSideCard></HotelSideCard>
            </div>
            <div className='grid mx-auto gap-y-1 lg:w-[65%]'>
                {
                    content
                }
            </div>
        </div>
    );
};

export default HotelTickets;