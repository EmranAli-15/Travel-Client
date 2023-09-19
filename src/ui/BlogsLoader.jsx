import React from 'react';

const BlogsLoader = () => {
    return (
        <div className='border p-2 rounded mb-5 animate-pulse duration-100'>
            <div className='flex items-center justify-between my-2'>
                <div className='flex items-center gap-x-2'>
                    <div className="avatar">
                        <div className="w-10 text-slate-200 bg-slate-200 rounded-full">

                        </div>
                    </div>
                    <p className='text-slate-200 bg-slate-200'>loading...</p>
                </div>
                <p className='text-slate-200 bg-slate-200'>
                    loading...loading
                </p>
            </div>


            <h1 className='w-full h-[40px] text-slate-200 bg-slate-200 mb-3'>loading...</h1>


            <div className="w-full h-[300px] text-slate-200 bg-slate-200">
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default BlogsLoader;