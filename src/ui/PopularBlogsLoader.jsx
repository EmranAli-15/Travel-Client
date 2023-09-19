import React from 'react';

const PopularBlogsLoader = () => {
    return (
        <div>
            <div className='flex items-center gap-x-2 mb-3 animate-pulse duration-100'>
                <div className='w-[120px] h-[50px] text-slate-200 bg-slate-200'></div>
                <div className='w-full h-[50px]'>
                    <h2 className='w-full h-[10px] text-slate-200 bg-slate-200 mb-3'></h2>
                    <h2 className='w-full h-[10px] text-slate-200 bg-slate-200 mb-3'></h2>
                </div>
            </div>
        </div>
    );
};

export default PopularBlogsLoader;