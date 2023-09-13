import React, { useState } from 'react';
import uploadImg from '../../../assets/dashboard/uploadImg.png'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from '../../../firebase/firebase.config';

const imgToken = import.meta.env.VITE_IMAGE_TOKEN;

const FlightTicket = () => {
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${imgToken}`

    const [distance, setDistance] = useState('');
    const [hour, setHour] = useState('');
    const [departAgencyName, setDepartAgencyName] = useState('');
    const [returnAgencyName, setReturnAgencyName] = useState('');
    const [departAgencyLogo, setDepartAgencyLogo] = useState('');
    const [returnAgencyLogo, setReturnAgencyLogo] = useState('');
    const [departError, setDepartError] = useState(null);
    const [returnError, setReturnError] = useState(null);




    const handlePublish = (event) => {
        event.preventDefault();

        const from = event.target.from.value;
        const to = event.target.to.value;
        // if (departError === '') {
        //     return setDepartError('Need a Logo')
        // };
        // if (returnAgencyLogo === '') {
        //     return setReturnError('Need a Logo')
        // };

        // console.log(
        //     from,
        //     to,
        //     fromShort,
        //     toShort,
        //     distance,
        //     hour,
        //     departAgencyName,
        //     returnAgencyName,
        //     departAgencyLogo,
        //     returnAgencyLogo
        // )
    }

    const [files, setFiles] = useState([]);
    const [urls, setUrls] = useState([]);
    const [percent, setPercent] = useState(0);

    // Handle file upload event and update state
    function handleChange(event) {
        const selectedFiles = event.target.files;
        setFiles([...files, ...selectedFiles]);
    }

    const handleUpload = async () => {
        if (files.length === 0) {
            alert("Please upload one or more images first!");
            return;
        }

        // Create an array to store the promises for getting download URLs
        const urlPromises = [];

        for (const file of files) {
            const storageRef = ref(storage, `/files/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            // Create a promise for getting the download URL
            const urlPromise = new Promise((resolve, reject) => {
                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        const percent = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );
                        setPercent(percent);
                    },

                    (err) => {
                        console.log(err);
                        reject(err);
                    },

                    async () => {
                        try {
                            const url = await getDownloadURL(uploadTask.snapshot.ref);
                            resolve(url);
                        } catch (error) {
                            console.error(error);
                            reject(error);
                        }
                    }
                );
            });

            urlPromises.push(urlPromise);
        }

        // Wait for all promises to resolve and collect the URLs
        try {
            const downloadUrls = await Promise.all(urlPromises);
            setUrls(downloadUrls);
            console.log("Download URLs:", downloadUrls);
        } catch (error) {
            console.error("Error getting download URLs:", error);
        }
    };



    return (
        <div>
            <form onSubmit={handlePublish}>
                <div className='md:flex justify-center gap-x-4 items-center'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Starting Place</span>
                        </label>
                        <select
                            required
                            name="from"
                            className="select select-success w-full max-w-xs">
                            <option selected>Dhaka</option>
                            <option>Chittagong</option>
                            <option>Bandorban</option>
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
                            <option selected>Chittagong</option>
                            <option>Dhaka</option>
                            <option>Bandorban</option>
                        </select>
                    </div>
                </div>


                <div className='md:flex justify-center gap-x-4 items-center'>
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


                <div className='md:flex justify-center gap-x-4 items-center'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Distance</span>
                        </label>
                        <input
                            required
                            value={distance}
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
                            value={hour}
                            onChange={e => setHour(e.target.value)}
                            type="number"
                            placeholder="7 hour"
                            className="input input-bordered input-success w-full max-w-xs" />
                    </div>
                </div>


                <div className='md:flex justify-center gap-x-4 items-center'>
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


                <div className='md:flex justify-center gap-x-4 items-center'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Depart Agency Logo</span>
                        </label>
                        <label className='flex justify-center cursor-pointer -mt-6' htmlFor="inputTag">
                            <br />
                            <img className='h-[80px]' src={uploadImg} alt="" />
                            <input
                                onChange={e => setDepartAgencyLogo(e.target.files[0])}
                                id="inputTag"
                                type="file"
                                className='hidden' />
                        </label>
                        {departAgencyLogo ? '' : <p className="text-red-500 text-xs text-center">{returnError}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Return Agency Logo</span>
                        </label>
                        <label className='flex justify-center cursor-pointer -mt-6' htmlFor="inputTagTwo">
                            <br />
                            <img className='h-[80px]' src={uploadImg} alt="" />
                            <input
                                onChange={e => setReturnAgencyLogo(e.target.files[0])}
                                id="inputTagTwo"
                                type="file"
                                className='hidden' />
                        </label>
                        {returnAgencyLogo ? '' : <p className="text-red-500 text-xs text-center">{returnError}</p>}
                    </div>
                </div>


                <div>
                    <button type="submit" className='mt-10 allBtn w-full flex justify-center'>
                        Publish You Ticket
                    </button>
                </div>
            </form>




            <div>
                <input type="file" onChange={handleChange} multiple />
                <button onClick={handleUpload}>Upload to Firebase</button>
                {/* <p>{percent} "% done"</p> */}
            </div>
        </div>
    );
};

export default FlightTicket;