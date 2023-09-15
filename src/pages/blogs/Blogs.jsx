import React, { useState } from 'react';
const imgToken = import.meta.env.VITE_IMAGE_TOKEN;

const Blogs = () => {
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${imgToken}`

    const tickets = [
        {
            img: "https://www.travelandexplorebd.com/storage/app/public/posts/October2019/dreamstime_xxl_55742473.jpg",
            from: "DHA",
            to: "COX'S",
            tk: 700,
            place: "Cox's Bazar",
            hour: 4.5,
            distance: 100,
            availableSits: 15,
        },
        {
            img: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
            from: "DHA",
            to: "RANG",
            tk: 500,
            place: "Rangga Mati",
            hour: 4.5,
            distance: 100,
            availableSits: 25,
        },
        {
            img: "https://www.travelandexplorebd.com/storage/app/public/posts/October2019/dreamstime_xxl_55742473.jpg",
            from: "DHA",
            to: "COX'S",
            tk: 500,
            place: "Cox's Bazar",
            hour: 4.5,
            distance: 100,
            availableSits: 25,
        },
        {
            img: "https://www.travelandexplorebd.com/storage/app/public/posts/October2019/dreamstime_xxl_55742473.jpg",
            from: "DHA",
            to: "COX'S",
            tk: 500,
            place: "Cox's Bazar",
            hour: 4.5,
            distance: 100,
            availableSits: 25,
        },
        {
            img: "https://www.travelandexplorebd.com/storage/app/public/posts/October2019/dreamstime_xxl_55742473.jpg",
            from: "DHA",
            to: "COX'S",
            tk: 500,
            place: "Cox's Bazar",
            hour: 4.5,
            distance: 100,
            availableSits: 25,
        },
    ]
    const photos = tickets.length;






    // functionality for get multiple photos
    const data = [];
    const [urls, setUrls] = useState([]);

    const selectedFile = (event) => {
        const selectedFiles = event.target.files;
        console.log(selectedFiles);

        for (const one of selectedFiles) {
            data.push(one);
        }
    };

    const onSubmit = () => {
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
                console.log('All uploads completed');
            })
            .catch((error) => {
                console.error('Error uploading files:', error);
            });
    };

    const submit = () => {
        console.log(urls);
    };



    // function for view more photos and full details
    const handleMore = () => {

    }


    return (
        <div className='my-[500px] md:flex gap-x-10 max-w-[1200px] mx-auto'>
            <div className='md:w-[25%]'>
                <p className='text-5xl font-bold'>Left side text</p>
            </div>
            <div className='md:w-[50%]'>
                <div>
                    {
                        photos > 1 &&
                        <div className="flex gap-2 justify-center">
                            <div>
                                <img className='w-full' src={tickets[0].img} alt="" />
                            </div>
                        </div>
                    }
                    {
                        photos > 2 &&
                        <div className="flex gap-2 justify-center mt-20">
                            <div className="p-1 w-1/2">
                                <img className='w-full' src={tickets[0].img} alt="" />
                            </div>
                            <div className="p-1 w-1/2">
                                <img className='w-full' src={tickets[0].img} alt="" />
                            </div>
                        </div>
                    }

                    {
                        photos > 3 &&
                        <div className="grid grid-cols-2 gap-2 mt-20">
                            <div onClick={handleMore} className="cursor-pointer p-1 flex justify-end">
                                <img className='w-full' src={tickets[0].img} alt="" />
                            </div>
                            <div onClick={handleMore} className="cursor-pointer p-1 ">
                                <img className='w-full' src={tickets[1].img} alt="" />
                            </div>
                            <div onClick={handleMore} className="cursor-pointer max-h-[300px] p-2 col-span-2 flex justify-center relative">
                                <img className='w-full' src={tickets[2].img} alt="" />
                            </div>
                        </div>
                    }

                    {
                        photos > 3 &&
                        <div className="grid grid-cols-2 gap-2 mt-20">
                            <div onClick={handleMore} className="cursor-pointer p-1 flex justify-end">
                                <img className='w-full' src={tickets[0].img} alt="" />
                            </div>
                            <div onClick={handleMore} className="cursor-pointer p-1 ">
                                <img className='w-full' src={tickets[1].img} alt="" />
                            </div>
                            <div onClick={handleMore} className="cursor-pointer max-h-[300px] p-2 col-span-2 flex justify-center relative">
                                <img className='w-full opacity-30' src={tickets[2].img} alt="" />
                                <div className='absolute top-20 opacity-100'>
                                    View more {photos - 3} photos
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className='md:w-[25%]'>
                <p className='text-5xl font-bold'>Right side text</p>
            </div>
        </div>
    );
};

export default Blogs;





{/* <div>
    <div>
        <input onChange={selectedFile} type="file" multiple />
    </div>
    <div className='my-10'>
        <button onClick={onSubmit}>upload files</button>
    </div>
    <div>
        <button onClick={submit}>Submit</button>
    </div>
</div> */}