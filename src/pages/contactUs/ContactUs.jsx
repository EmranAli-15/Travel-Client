import React, { useRef } from 'react';
import emailGif from '../../assets/home/sendEmail.gif'
import Swal from 'sweetalert2';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p19cvrn', 'template_x1orh98', form.current, 'O3orrpK8lKwi2zyaI')
            .then((result) => {
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'You will get response soon!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }, (error) => {
            });
    };

    return (
        <div className='md:flex mt-20 pb-20'>
            <div className='md:w-1/2'>
                <form className='w-[80%] mx-auto' ref={form} onSubmit={sendEmail}>
                    <div>
                        <label>Your Name</label><br />
                        <input className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#1ab79d] focus:ring-[#1ab79d] block w-full rounded-md sm:text-sm focus:ring-1' type="text" name="from_name" />
                    </div>
                    <div className='my-5'>
                        <label>Your Email</label><br />
                        <input className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#1ab79d] focus:ring-[#1ab79d] block w-full rounded-md sm:text-sm focus:ring-1' type="email" name="user_email" />
                    </div>
                    <div>
                        <label>Write Message</label><br />
                        <textarea className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#1ab79d] focus:ring-[#1ab79d] block w-full rounded-md sm:text-sm focus:ring-1 h-[200px]' name="message" />
                    </div>
                    <button className='w-full allBtn flex justify-center mt-2' type="submit">SEND</button>
                </form>
            </div>
            <div className='md:w-1/2 flex  flex-col items-center'>
                <img className='md:h-[300px]' src={emailGif} alt="" />
                <p className='mx-3 text-gray'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit necessitatibus culpa enim eum. Quae nisi iste quam obcaecati blanditiis odit provident optio accusantium vitae quaerat possimus non sapiente cupiditate architecto, corrupti excepturi odio magni modi rerum voluptatibus! Eos quibusdam deserunt quasi modi rerum eaque provident, reiciendis, vero voluptatem aliquid inventore.</p>
            </div>
        </div>
    );
};

export default ContactUs;