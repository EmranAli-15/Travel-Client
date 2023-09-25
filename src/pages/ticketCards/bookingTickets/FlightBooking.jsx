import React from 'react';
import bags from '../../../assets/dashboard/bags_tick.svg'
import { useParams } from 'react-router-dom';
import { useGetSingleFlightQuery } from '../../../features/flight/flightApi';
import { FaArrowRight, FaSuitcaseRolling } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
import StepperIndicator from './StepperIndicator';
import FlightForm from './FlightForm';

const FlightBooking = () => {
    const { id } = useParams();
    const { data: singleFlight, isLoading, isSuccess } = useGetSingleFlightQuery(id)

    // decide what to render
    let content = null;
    if (isLoading) {
        content = <div className='h-[300px] flex justify-center items-center'>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if (!isLoading && isSuccess) {
        const { from, to, departAgencyLogo, returnAgencyLogo } = singleFlight || {};
        content = <div className='bg-slate-200'>
            <div className='max-w-[1400px] mx-4 md:mx-auto pb-48'>
                <StepperIndicator></StepperIndicator>

                <div className='mt-5 max-w-[700px] mx-auto bg-white p-4 rounded-md'>
                    <div className='flex items-center gap-x-5 mb-10'>
                        <img className='w-[70px]' src={bags} alt="" />
                        <div>
                            <h1 className='text-2xl md:text-3xl font-bold'>Check-in bags</h1>
                            <h1 className='md:text-xl font-bold text-[#1ab79d]'>1 bags (30kg) included for each passenger</h1>
                        </div>
                    </div>

                    <div className='flex justify-center md:justify-start'>
                        <h1 className='text-lg font-bold'>Passenger 1 <span className='text-sm text-gray'>Adult</span></h1>
                    </div>

                    <div className='md:flex items-center justify-between mt-7 md:mt-3'>
                        <div className='flex justify-center items-center gap-x-2'>
                            <img className='w-[40px] rounded-full' src={departAgencyLogo} alt="" />
                            <div>
                                <p className='text-gray'>Departure</p>
                                <h4 className='font-bold flex items-center gap-x-3'>{from} <FaArrowRight></FaArrowRight> {to}</h4>
                            </div>
                        </div>
                        <div className='flex items-center justify-center mt-3 md:mt-0 gap-x-3'>
                            <div className='text-gray flex items-center'>
                                1 <RxCross2></RxCross2> 30kg <FaSuitcaseRolling></FaSuitcaseRolling>
                            </div>
                            <p className='px-1 text-xs md:text-base text-white bg-[#1ab79d] rounded-xl'>included</p>
                        </div>
                    </div>

                    <div className='border bg-white border-dashed my-3'></div>

                    <div className='md:flex items-center justify-between mt-3'>
                        <div className='flex justify-center items-center gap-x-2'>
                            <img className='w-[40px] rounded-full' src={returnAgencyLogo} alt="" />
                            <div>
                                <p className='text-gray'>Return</p>
                                <h4 className='font-bold flex items-center gap-x-3'>{to} <FaArrowRight></FaArrowRight> {from}</h4>
                            </div>
                        </div>
                        <div className='flex items-center justify-center mt-3 md:mt-0 gap-x-3'>
                            <div className='text-gray flex items-center'>
                                1 <RxCross2></RxCross2> 30kg <FaSuitcaseRolling></FaSuitcaseRolling>
                            </div>
                            <p className='px-1 text-xs md:text-base text-white bg-[#1ab79d] rounded-xl'>included</p>
                        </div>
                    </div>

                    <div className='border bg-red-300 border-dashed my-6'></div>

                    <FlightForm flight={singleFlight}>
                    </FlightForm>
                </div>
            </div>
        </div>
    }

    return (
        <div>
            {
                content
            }
        </div>
    );
};

export default FlightBooking;