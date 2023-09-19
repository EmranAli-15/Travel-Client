import React from 'react';
import moment from 'moment';
import { useGetBlogsQuery } from '../../features/blog/blogApi';
import { LiaUserCircle } from "react-icons/lia";
import { Link } from 'react-router-dom';
import BlogsLoader from '../../ui/BlogsLoader';

const Blogs = () => {
    const { data: allBlogs, isLoading, isSuccess } = useGetBlogsQuery();


    // decide what to render
    let content = null;
    if (isLoading) {
        return content = <>
            <BlogsLoader></BlogsLoader>
            <BlogsLoader></BlogsLoader>
        </>
    }
    if (!isLoading && isSuccess) {
        return content = <>
            {
                allBlogs.map(blog => {
                    const { _id, title, details, authorName, authorPhoto, date, img } = blog
                    return <div key={_id} className='border p-2 rounded mb-5'>
                        <div className='flex items-center justify-between my-2'>
                            <div className='flex items-center gap-x-2'>
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            authorPhoto ? <img src={authorPhoto} /> : <LiaUserCircle size={40}></LiaUserCircle>
                                        }

                                    </div>
                                </div>
                                <p className='text-gray-500'>{authorName ? authorName : 'John Doe'}</p>
                            </div>
                            <p className='text-gray-500'>
                                {moment(date).fromNow()}
                            </p>
                        </div>
                        <h1 className='text-lg mb-3 font-medium'>{title}</h1>

                        {/* conditional images rendering */}
                        <Link to={`/blogs/singleBlog/${_id}`}>
                            {
                                img.length === 1 &&
                                <div className="flex gap-2 justify-center">
                                    <div>
                                        <img className='w-full' src={img[0]} alt="" />
                                    </div>
                                </div> ||
                                img.length === 2 &&
                                <div className="flex gap-2 justify-center">
                                    <div className="p-[2px] w-1/2">
                                        <img className='w-full' src={img[0]} alt="" />
                                    </div>
                                    <div className="p-[2px] w-1/2">
                                        <img className='w-full' src={img[1]} alt="" />
                                    </div>
                                </div> ||
                                img.length === 3 &&
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="p-[2px]">
                                        <img className='w-full' src={img[0]} alt="" />
                                    </div>
                                    <div className="p-[2px] ">
                                        <img className='w-full' src={img[1]} alt="" />
                                    </div>
                                    <div className="max-h-[300px] p-2 col-span-2 flex justify-center relative">
                                        <img className='w-full' src={img[2]} alt="" />
                                    </div>
                                </div> ||
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="p-[2px]">
                                        <img className='w-full' src={img[0]} alt="" />
                                    </div>
                                    <div className="p-[2px] ">
                                        <img className='w-full' src={img[1]} alt="" />
                                    </div>
                                    <div className="max-h-[300px] p-[2px] col-span-2 flex justify-center relative">
                                        <img className='w-full opacity-30' src={img[2]} alt="" />
                                        <div className='absolute top-1/2 -translate-y-1/2 opacity-100 font-bold text-2xl'>
                                            View more {img.length - 3} photos
                                        </div>
                                    </div>
                                </div>
                            }
                        </Link>


                        <div className='my-3'>
                            {
                                details.length <= 200 ? details : <>{details.slice(0, 200)} .....<br />
                                    <p className='text-right'><Link to={`/blogs/singleBlog/${_id}`} className='text-blue-500'>learn more</Link></p>
                                </>
                            }
                        </div>
                    </div>
                }
                )
            }
        </>
    }

    return (
        <div>
            {
                content
            }
        </div>
    );
};

export default Blogs;