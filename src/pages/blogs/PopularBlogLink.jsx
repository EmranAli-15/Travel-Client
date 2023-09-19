// This page will show the right side of blogs page //

import React from 'react';
import { usePopularBlogLinkQuery } from '../../features/blog/blogApi';
import { Link } from 'react-router-dom';
import PopularBlogsLoader from '../../ui/PopularBlogsLoader';

const PopularBlogLink = () => {

    const { data: popularBlogs, isLoading, isSuccess } = usePopularBlogLinkQuery();

    // decide what to render
    let content = null;
    if (isLoading) {
        return content = <>
            <PopularBlogsLoader></PopularBlogsLoader>
            <PopularBlogsLoader></PopularBlogsLoader>
            <PopularBlogsLoader></PopularBlogsLoader>
            <PopularBlogsLoader></PopularBlogsLoader>
            <PopularBlogsLoader></PopularBlogsLoader>
        </>
    }
    if (!isLoading && isSuccess) {
        return content = <div>
            {
                popularBlogs.map(blogs => <Link to={`/blogs/singleBlog/${blogs._id}`} key={blogs._id} className='flex items-center gap-x-2 mb-3'>
                    <img className='w-[80px]' src={blogs.img[0]} alt="" />
                    <h2 className='text-blue-400 font-bold text-[16px] mb-3'>{blogs.title.length < 20 ? blogs.title : <>{blogs.title.slice(0, 20)} ...</>}</h2>
                </Link>)
            }
        </div>;
    }

    return (
        <div>
            {
                content
            }
        </div>
    );
};

export default PopularBlogLink;