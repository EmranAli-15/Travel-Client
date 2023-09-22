import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleBlogQuery } from '../../features/blog/blogApi';
import SingleBlogLoader from '../../ui/SingleBlogLoader';

const SingleBlog = () => {
    const { id } = useParams();
    const { data: singleBlog, isLoading, isSuccess } = useGetSingleBlogQuery(id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // decide what to render
    let content = null;
    if (isLoading) {
        return content = <SingleBlogLoader></SingleBlogLoader>
    }
    if (!isLoading && isSuccess) {
        return content = <SingleBlogPost blog={singleBlog}></SingleBlogPost>
    }

    return (
        <div>
            {content}
        </div>
    );
};

const SingleBlogPost = ({ blog }) => {
    return (
        <div className='mx-4 md:mx-0'>
            <h1 className='text-2xl font-medium'>{blog.title}</h1>

            <p className='my-3'>{blog.details}</p>

            <div>
                {
                    blog.img.map((img, index) => <img key={index} className='mb-1' src={img} alt="" />)
                }
            </div>
        </div>
    )
}



export default SingleBlog;