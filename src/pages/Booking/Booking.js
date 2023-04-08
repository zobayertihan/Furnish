import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Booking = () => {
    const product = useLoaderData();
    const check = () => {
        toast.success('Congratulation. Booking Complete', {
            duration: 5000,
            position: 'top-center'
        })
    }

    const [shipping, setShipping] = useState(150);
    const [promoCode, setPromoCode] = useState('');
    const [message, setMessage] = useState('');

    function handleApplyPromoCode() {
        if (promoCode === 'RAMADAN') {
            setShipping('FREE');
            setMessage('');
        } else {
            setMessage('Invalid promo code');
            setShipping(150);
        }
    }

    function handleChangePromoCode(event) {
        setPromoCode(event.target.value);
    }

    return (
        <div className='min-h-screen'>
            <div className="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col mt-10 bg-gray-100">
                <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
                    <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
                        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
                            {product.name}
                        </h2>
                        <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
                            Category: {product.catagory}
                        </p>
                        <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
                            Price: {product.price}
                        </p>
                        <div>
                            <p className='text-center text-base mb-5'>Shipping: {shipping}</p>
                            <div className='flex justify-center mb-5'>
                                <input type="text" value={promoCode} onChange={handleChangePromoCode} placeholder="Enter promo code" />
                                <button className='rounded px-6 bg-gray-400 hover:bg-gray-800 hover:text-white' onClick={handleApplyPromoCode}>Apply</button>
                            </div>
                            <p className='text-center mb-3'>{message}</p>
                        </div>
                        <div className="mb-10 text-center md:mb-16 lg:mb-20">
                            <a
                                onClick={check}
                                href="/products"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-gray-400 hover:bg-gray-800 hover:text-white focus:shadow-outline focus:outline-none"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
                <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-10 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                    <img
                        className="object-cover w-full h-full rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                        src={product.image}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Booking;