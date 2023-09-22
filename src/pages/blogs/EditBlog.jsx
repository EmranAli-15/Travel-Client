import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleBlogQuery, useUpdateBlogMutation } from '../../features/blog/blogApi';
import SingleBlogLoader from '../../ui/SingleBlogLoader';
import { TiDelete } from 'react-icons/ti';

const EditBlog = () => {
    const { id } = useParams();
    const { data: blog, isLoading, isSuccess } = useGetSingleBlogQuery(id);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // decide what to render
    let content = null;
    if (isLoading) {
        content = <SingleBlogLoader></SingleBlogLoader>
    }
    if (!isLoading && isSuccess) {
        content = <EditForm getBlog={blog}></EditForm>
    }

    return (
        <div className='max-w-7xl mx-auto'>
            {
                content
            }
        </div>
    );
};




const EditForm = ({ getBlog }) => {
    const { title: initialTitle, details: initialDetails, img: initialImg, _id: id } = getBlog;
    const [updateBlog, { }] = useUpdateBlogMutation()

    const [title, setTitle] = useState(initialTitle);
    const [details, setDetails] = useState(initialDetails);
    const [img, setImg] = useState(initialImg);

    const handleImg = (imgIn) => {
        const updatedImg = img.filter(el => el !== imgIn);
        setImg(updatedImg)
    }

    const handleUpdate = () => {
        const data = { title, details, img, id };
        updateBlog(data)
    }

    return (
        <div className='pb-20'>
            <h1 className='text-3xl font-bold text-center underline mb-5 mt-3'>Update Your Blog</h1>

            <textarea value={title} onChange={e => setTitle(e.target.value)} required className='bg-black/5 w-full rounded-md focus:border-[#1ab79d] outline-0 p-3 border border-white' placeholder='Your Blog Title'></textarea>

            <textarea value={details} onChange={e => setDetails(e.target.value)} required className='bg-black/5 w-full h-[50vh] rounded-md focus:border-[#1ab79d] outline-0 p-3 border border-white' placeholder='Write Your Full Blog'></textarea>

            <div className='grid md:grid-cols-2 max-w-[500px] mx-auto'>
                {
                    img.map((img, index) => <div key={index} className='max:h-[200px] w-[200px] mb-2 mx-auto relative'>
                        <button className='absolute top-1 right-1 bg-white rounded-full' onClick={() => handleImg(img)}>
                            <TiDelete size={30} className='text-red-500'></TiDelete>
                        </button>
                        <img key={index} className='overflow-hidden' src={img} alt="" />
                    </div>)
                }
            </div>
            <div className='flex justify-center'>
                <button onClick={() => handleUpdate()} className='allBtn w-[80%] flex justify-center mt-5' type='submit'>Update</button>
            </div>
        </div>
    )
}

export default EditBlog;