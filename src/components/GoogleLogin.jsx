import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { auth, signInWithPopup } from '../features/auth/firebase'
import { GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {

    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(error => { console.log(error) })
    }

    return (
        <div className='my-5'>
            <button onClick={handleLogin} className='flex items-center justify-center gap-x-2 border-2 border-[#43eed1] p-2 rounded-3xl w-full'>
                <FcGoogle size={25}></FcGoogle>
                <p className='text-lg font-bold'>Google Login</p>
            </button>
        </div>
    );
};

export default GoogleLogin;