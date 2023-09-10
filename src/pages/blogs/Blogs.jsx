import React, { useState } from 'react';
import './Blogs.css'
import { FaCameraRetro } from 'react-icons/fa';

const Blogs = () => {

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


    const handleMore = () => {
        console.log('hello')
    }
    const [name, setName] = useState([]);
    let arr = []
    const handleFileChange = (e) => {
        const selectedFiles = e.target.files;


        for (let i = 0; i < selectedFiles.length; i++) {
            const file = selectedFiles[i];
            arr.push(file)
            // console.log(`Selected File ${i + 1}: ${file.name}`);
        }
        console.log(arr)
        setName(arr);
    };

    return (
        <div className='my-[500px] max-w-[1400px] mx-auto'>
            {/* {
                photos > 2 &&
                <div className="flex gap-4 justify-center">
                    <div className="p-2">
                        <img className='max-w-[500px]' src={tickets[0].img} alt="" />
                    </div>
                    <div className="p-2">
                        <img className='max-w-[500px]' src={tickets[0].img} alt="" />
                    </div>
                </div>
            }
            {
                photos > 3 &&
                <div className="grid grid-cols-2 gap-4">
                    <div onClick={handleMore} className="cursor-pointer p-2 flex justify-end">
                        <img className=' w-[500px]' src={tickets[0].img} alt="" />
                    </div>
                    <div onClick={handleMore} className="cursor-pointer p-2 ">
                        <img className='w-[500px]' src={tickets[1].img} alt="" />
                    </div>
                    <div onClick={handleMore} className="cursor-pointer p-2 col-span-2 flex justify-center relative">
                        <img className='w-[1000px] h-[500px] opacity-30' src={tickets[2].img} alt="" />
                        <div className='absolute top-20 opacity-100'>
                            View more {photos - 3} photos
                        </div>
                    </div>
                </div>
            } */}


            {/* <div>
                <input type="file" multiple onChange={handleFileChange} />
            </div> */}
            <div>
                <label htmlFor="inputTag">
                    {name.length > 0 ? name.length : 'Select'}
                    <br />
                    <FaCameraRetro></FaCameraRetro>
                    <input id="inputTag" type="file" multiple onChange={handleFileChange} />
                    <br />
                    <span id="imageName"></span>
                </label>
            </div>
        </div>
    );
};

export default Blogs;