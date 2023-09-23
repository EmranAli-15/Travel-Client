import React from 'react';

const StepperIndicator = () => {
    return (
        <div className='py-5 max-w-[600px] mx-auto'>
            <ol className="flex items-center">
                <li className="relative w-full mb-6">
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <span className="flex w-3 h-3 bg-blue-600 rounded-full"></span>
                        </div>
                        <div className="flex w-full bg-gray-400 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3">
                        <h3 className="font-medium text-gray-900 dark:text-white">Step 1</h3>
                    </div>
                </li>
                <li className="relative w-full mb-6">
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <span className="flex w-3 h-3 bg-blue-600 rounded-full"></span>
                        </div>
                        <div className="flex w-full bg-gray-400 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3">
                        <h3 className="font-medium text-gray-900 dark:text-white">Step 2</h3>
                    </div>
                </li>
                <li className="relative w-full mb-6">
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <span className="flex w-3 h-3 bg-blue-600 rounded-full"></span>
                        </div>
                        <div className="flex w-full bg-gray-400 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3">
                        <h3 className="font-medium text-gray-900 dark:text-white">Step 2</h3>
                    </div>
                </li>
                <li className="relative w-full mb-6">
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full ring-0 ring-white dark:bg-gray-700 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <span className="flex w-3 h-3 bg-gray-900 rounded-full dark:bg-gray-300"></span>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h3 className="font-medium text-gray-900 dark:text-white">Step 3</h3>
                    </div>
                </li>
            </ol>
        </div>
    );
};

export default StepperIndicator;