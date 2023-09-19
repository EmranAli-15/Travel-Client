import React, { useState } from 'react';
import uploadImg from '../../../assets/dashboard/uploadImg.png'
import { usePublishFlightTicketMutation } from '../../../features/flight/flightApi';

const imgToken = import.meta.env.VITE_IMAGE_TOKEN;

const FlightTicket = () => {
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${imgToken}`
    const [publishFlightTicket, { isLoading }] = usePublishFlightTicketMutation();

    const [distanceStr, setDistance] = useState('');
    const [hourStr, setHour] = useState('');
    const [priceStr, setPrice] = useState('');
    const [departAgencyName, setDepartAgencyName] = useState('');
    const [returnAgencyName, setReturnAgencyName] = useState('');
    const [departAgencyLogo, setDepartAgencyLogo] = useState('');
    const [returnAgencyLogo, setReturnAgencyLogo] = useState('');
    const [fromShort, setFromShort] = useState('');
    const [toShort, setToShort] = useState('');
    const [departLogoName, setDepartLogoName] = useState('');
    const [returnLogoName, setReturnLogoName] = useState('');

    const [departError, setDepartError] = useState(null);
    const [returnError, setReturnError] = useState(null);

    const [buttonDisable, setButtonDisable] = useState(false);

    const acceptDepartLogo = (event) => {
        setButtonDisable(true);
        const file = event.target.files[0];
        setDepartAgencyLogo(file);
        setDepartLogoName(file.name.slice(0, 10));
        const formData = new FormData();
        formData.append('image', file);

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    setDepartAgencyLogo(imgResponse.data.display_url);
                    setButtonDisable(false);
                }
            })
    }
    const acceptReturnLogo = (event) => {
        setButtonDisable(true);
        const file = event.target.files[0];
        setReturnAgencyLogo(file);
        setReturnLogoName(file.name.slice(0, 10));
        const formData = new FormData();
        formData.append('image', file);

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    setReturnAgencyLogo(imgResponse.data.display_url);
                    setButtonDisable(false);
                }
            })
    }




    const handlePublish = (event) => {
        event.preventDefault();

        const from = event.target.from.value;
        const to = event.target.to.value;
        const price = parseFloat(priceStr);
        const distance = parseFloat(distanceStr);
        const hour = parseFloat(hourStr)

        if (departAgencyLogo === '') {
            return setDepartError('Need a Logo')
        };
        if (returnAgencyLogo === '') {
            return setReturnError('Need a Logo')
        };

        const data = {
            from,
            to,
            fromShort,
            toShort,
            distance,
            hour,
            price,
            departAgencyName,
            returnAgencyName,
            departAgencyLogo,
            returnAgencyLogo
        }
        console.log(data)
        publishFlightTicket(data);
    }



    return (
        <div>
            <form onSubmit={handlePublish}>
                <div className='md:flex justify-center gap-x-4 items-center md:mt-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Starting Place</span>
                        </label>
                        <select
                            required
                            name="from"
                            className="select select-success w-full max-w-xs">
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chittagong">Chittagong</option>
                            <option value="Bandorban">Bandorban</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Destination Place</span>
                        </label>
                        <select
                            required
                            name="to"
                            className="select select-success w-full max-w-xs">
                            <option value="Chittagong">Chittagong</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Bandorban">Bandorban</option>
                        </select>
                    </div>
                </div>


                <div className='md:flex justify-center gap-x-4 items-center md:mt-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Starting Place Short Name</span>
                        </label>
                        <input
                            required
                            onChange={e => setFromShort(e.target.value)}
                            type="text"
                            placeholder="DHA .. max length 6 digit"
                            className="input input-bordered input-success w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Destination Place Short Name</span>
                        </label>
                        <input
                            required
                            onChange={e => setToShort(e.target.value)}
                            type="text"
                            placeholder="COX'S .. max length 6 digit"
                            className="input input-bordered input-success w-full max-w-xs" />
                    </div>
                </div>


                <div className='md:flex justify-center gap-x-4 items-center md:mt-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Distance</span>
                        </label>
                        <input
                            required
                            value={distanceStr}
                            onChange={e => setDistance(e.target.value)}
                            type="number"
                            placeholder="300 km."
                            className="input input-bordered input-success w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Journey Hour</span>
                        </label>
                        <input
                            required
                            value={hourStr}
                            onChange={e => setHour(e.target.value)}
                            type="number"
                            placeholder="7 hour"
                            className="input input-bordered input-success w-full max-w-xs" />
                    </div>
                </div>


                <div className='md:flex justify-center gap-x-4 items-center md:mt-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Depart Agency Name</span>
                        </label>
                        <input
                            required
                            value={departAgencyName}
                            onChange={e => setDepartAgencyName(e.target.value)}
                            type="text"
                            placeholder="Emirate Airlines"
                            className="input input-bordered input-success w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Return Agency Name</span>
                        </label>
                        <input
                            required
                            value={returnAgencyName}
                            onChange={e => setReturnAgencyName(e.target.value)}
                            type="text"
                            placeholder="Bangladesh Airlines"
                            className="input input-bordered input-success w-full max-w-xs" />
                    </div>
                </div>


                <div className='flex justify-center'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            required
                            value={priceStr}
                            onChange={e => setPrice(e.target.value)}
                            type="number"
                            placeholder="5000 tk"
                            className="input input-bordered input-success w-full max-w-xs" />
                    </div>
                </div>


                <div className='md:flex justify-center gap-x-4 items-center md:mt-4'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Depart Agency Logo</span>
                        </label>
                        <label className='flex justify-center cursor-pointer -mt-6' htmlFor="inputTag">
                            <br />
                            <img className='h-[80px]' src={uploadImg} alt="" />
                            <input
                                onChange={acceptDepartLogo}
                                id="inputTag"
                                type="file"
                                className='hidden' />
                        </label>
                        {departAgencyLogo ? <p className="text-green-600 text-xs text-center">{departLogoName}</p> : <p className="text-red-500 text-xs text-center">{departError}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text flex">Return Agency Logo</span>
                        </label>
                        <label className='flex justify-center cursor-pointer -mt-6' htmlFor="inputTagTwo">
                            <br />
                            <img className='h-[80px]' src={uploadImg} alt="" />
                            <input
                                onChange={acceptReturnLogo}
                                id="inputTagTwo"
                                type="file"
                                className='hidden' />
                        </label>
                        {returnAgencyLogo ? <p className="text-green-600 text-xs text-center">{returnLogoName}</p> : <p className="text-red-500 text-xs text-center">{returnError}</p>}
                    </div>
                </div>


                <div>
                    <button disabled={buttonDisable} type="submit" className={`${buttonDisable ? 'cursor-not-allowed' : 'cursor-pointer'} mt-10 allBtn w-full flex justify-center`}>
                        Publish You Ticket
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FlightTicket;