import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/navbar/Navbar'
import Advertising from '../pages/blogs/Advertising';
import PopularBlogLink from '../pages/blogs/PopularBlogLink';

const BlogsLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='my-[50px] md:flex gap-x-10 max-w-[1200px] mx-auto'>

                <div className='md:w-[25%] hidden md:block sticky top-10 h-max'>
                    <Advertising></Advertising>
                </div>

                <div className='md:w-[50%]'>
                    <Outlet></Outlet>
                </div>

                <div className='md:w-[25%] hidden md:block sticky top-10 h-max'>
                    <PopularBlogLink></PopularBlogLink>
                </div>

            </div>
        </div>
    );
};

export default BlogsLayout;