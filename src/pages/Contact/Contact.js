import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        // e.preventDefault();
        // const form = e.target;
        // emailjs.sendForm('service_krm90qx', 'template_zevkhv1', form.current, 'WmP-IBcnkmV4h3qy4')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
        form.reset();
    };
    return (
        <div id='contacts' className='max-w-[1000px] mx-auto my-10 h-screen w-full flex items-center justify-center flex-col bg-gray-300'>
            <h1 className='text-5xl border-b-4 border-gray-700'>Contact</h1>
            <p className='my-5 text-center font-semibold text-xl'>Send us a email</p>
            <form className="container flex flex-col mx-auto space-y-6 ng-untouched ng-pristine ng-valid" ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 gap-10 col-span-full ">
                    <div className="col-span-full w-3/4 mx-auto">
                        <label for="name" className="text-lg">Name</label>
                        <input name="user_name" id="name" type="text" placeholder=" Your Name" className="p-2 h-full w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full w-3/4 mx-auto">
                        <label for="email" className="text-lg">Email</label>
                        <input name="user_email" id="email" type="email" placeholder=" Email" className="p-2 h-full w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full w-3/4 mx-auto">
                        <label for="message" className="text-lg">Message</label>
                        <textarea name="message" id="message" placeholder=" Your Message" className="h-full w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900m p-5" data-gramm="false" wt-ignore-input="true"></textarea>
                    </div>
                    <div className='flex items-center justify-center'>
                        <input className='btn btn-primary rounded-md px-5 py-1 bg-gray-700 text-white' type="submit" value="Send" />
                    </div>
                </div>

            </form>
            <div className="divider mt-10">OR</div>
            <div>
                <p className='p-5 text-center'>Contact us With</p>
                <p className='text-lg font-semibold text-center'> zobayertihan@gmail.com</p>
            </div>
        </div>
    );
};

export default Contact; <h1>Contact Page</h1>