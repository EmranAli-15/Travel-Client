import React, { useEffect, useState } from 'react';
import blogImg from '../../assets/home/blogImg.png'
import { useUploadBlogMutation } from '../../features/blog/blogApi';
import { useSelector } from 'react-redux';
const imgToken = import.meta.env.VITE_IMAGE_TOKEN;

const UploadBlog = () => {
    const { user } = useSelector(state => state.auth);
    console.log(user);
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${imgToken}`
    const [uploadBlog, { isLoading, isSuccess }] = useUploadBlogMutation();

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [btnDisable, setBtnDisable] = useState(false);

    // functionality for get multiple photos
    let data = [];
    const [urls, setUrls] = useState([]);

    const selectedFile = (event) => {
        setBtnDisable(true);
        const selectedFiles = event.target.files;
        console.log(selectedFiles);

        for (const one of selectedFiles) {
            data.push(one);
        }


        if (data.length === 0) {
            return alert('Please select a file');
        }
        const fetchPromises = [];

        for (const file of data) {
            const formData = new FormData();
            formData.append('image', file);

            const fetchPromise = fetch(image_hosting_url, {
                method: 'POST',
                body: formData
            })
                .then((res) => res.json())
                .then((imgResponse) => {
                    if (imgResponse.success) {
                        setUrls((prevUrls) => [...prevUrls, imgResponse.data.display_url]);
                    }
                });

            fetchPromises.push(fetchPromise);
        }
        Promise.all(fetchPromises)
            .then(() => {
                console.log('all file uploaded');
                setBtnDisable(false);
            })
            .catch((error) => {
                console.error('Error uploading files:', error);
            });



    };

    const onSubmit = (event) => {
        event.preventDefault();
        const authorName = user?.displayName;
        const authorPhoto = user?.photoURL;
        const date = new Date();
        const blog = { img: urls, title, details, authorName, authorPhoto, date }

        uploadBlog(blog);

        setDetails('');
        setTitle('');
    };

    return (
        <div>
            <h1 className='text-4xl text-center font-serif mt-5'>Share Your Awesome Moment!</h1>
            <form onSubmit={onSubmit}>
                <div className='max-w-[800px] mx-auto pt-5 pb-10'>
                    <textarea value={title} onChange={e => setTitle(e.target.value)} required className='bg-black/5 w-full rounded-md focus:border-[#1ab79d] outline-0 p-3 border border-white' placeholder='Your Blog Title'></textarea>
                    <textarea value={details} onChange={e => setDetails(e.target.value)} required className='bg-black/5 w-full h-[50vh] rounded-md focus:border-[#1ab79d] outline-0 p-3 border border-white' placeholder='Write Your Full Blog'></textarea>
                    <div className='flex items-center mt-5'>
                        <div className="form-control flex flex-col items-center w-[20%]">
                            <label className='flex justify-center cursor-pointer -mt-6' htmlFor="inputTag">
                                <br />
                                <img className='h-[80px]' src={blogImg} alt="" />
                                <input
                                    onChange={selectedFile}
                                    multiple
                                    id="inputTag"
                                    type="file"
                                    className='hidden' />
                            </label>
                            <label>
                                {btnDisable && <p className='text-red-500'>uploading..</p>}
                            </label>
                        </div>
                        <div className='w-[80%]'>
                            <button disabled={btnDisable} type='submit' className={`${btnDisable && 'cursor-not-allowed'} allBtn w-full flex justify-center`}>Upload Blog</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UploadBlog;