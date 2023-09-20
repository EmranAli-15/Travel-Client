import React, { useState } from 'react';
import uploadImg from '../../../assets/dashboard/uploadImg.png'
import { usePublishHotelTicketMutation } from '../../../features/hotel/hotelApi';

const imgToken = import.meta.env.VITE_IMAGE_TOKEN;

const HotelTicket = () => {
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${imgToken}`
    const [publishHotelTicket, { isLoading, isSuccess }] = usePublishHotelTicketMutation();


    const [hotel, setHotel] = useState('');
    const [place, setPlace] = useState('');
    const [price, setPrice] = useState('');
    const [fromCenter, setFormCenter] = useState('');
    const [time, setTime] = useState('');
    const [photo, setPhoto] = useState(null);
    const [photoName, setPhotoName] = useState('');
    const [photoError, setPhotoError] = useState('');

    const [buttonDisable, setButtonDisable] = useState(false);


    const acceptPhoto = (event) => {
        setButtonDisable(true);
        const file = event.target.files[0];
        setPhotoName(file.name.slice(0, 10));
        const formData = new FormData();
        formData.append('image', file);

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    setPhoto(imgResponse.data.display_url);
                    setButtonDisable(false);
                }
            })
    }

    const handlePublish = (event) => {
        event.preventDefault();

        if (photo === null) {
            return setPhotoError('Need a Photo')
        };

        const data = { hotel, price, place, time, photo, fromCenter }
        publishHotelTicket(data)
        if(isSuccess){
            setHotel('');
            setPhoto('');
            setPrice('');
            setPlace('');
            setTime('');
            setFormCenter('');
        }
    }



    return (
        <div>
            <form onSubmit={handlePublish}>
                <div className='md:flex justify-center gap-x-4 items-center md:mt-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Place Name</span>
                        </label>
                        <select
                            onChange={e => setPlace(e.target.value)}
                            value={place}
                            className="select select-success w-full max-w-xs">
                            <option hidden>Please Select</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chittagong">Chittagong</option>
                            <option value="Bandorban">Bandorban</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Hotel Name</span>
                        </label>
                        <input
                            required
                            onChange={e => setHotel(e.target.value)}
                            value={hotel}
                            type="text"
                            placeholder="ছায়ানীড় কূড়ে ঘর"
                            className="input input-bordered input-success w-full max-w-xs" />
                    </div>
                </div>


                <div className='md:flex justify-center gap-x-4 items-center md:mt-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            required
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            type="number"
                            placeholder="5000 tk"
                            className="input input-bordered input-success w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">From Center</span>
                        </label>
                        <input
                            required
                            value={fromCenter}
                            onChange={e => setFormCenter(e.target.value)}
                            type="number"
                            placeholder="4.5 km"
                            className="input input-bordered input-success w-full max-w-xs" />
                    </div>
                </div>


                <div className='md:flex justify-center gap-x-4 items-center md:mt-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Stay Time</span>
                        </label>
                        <input
                            required
                            value={time}
                            onChange={e => setTime(e.target.value)}
                            type="number"
                            placeholder="7 weeks"
                            className="input input-bordered input-success w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs relative mt-14">
                        <div className='flex'>
                            <label className='flex justify-center cursor-pointer -mt-6' htmlFor="inputTag">
                                <br />
                                <img className='h-[80px]' src={uploadImg} alt="" />
                                <input
                                    onChange={acceptPhoto}
                                    id="inputTag"
                                    type="file"
                                    className='hidden' />
                            </label>
                            <label className="label">
                                <span className="label-text flex">Upload a photo</span>
                            </label>
                        </div>
                        {photo ? <p className="text-green-600 text-xs text-center">{photoName}</p> : <p className="text-red-500 text-xs">{photoError}</p>}
                    </div>
                </div>


                <div>
                    <button disabled={buttonDisable} type="submit" className={`${buttonDisable ? 'cursor-not-allowed' : 'cursor-pointer'} mt-10 allBtn w-full flex justify-center`}>
                        Publish You Hotel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default HotelTicket;