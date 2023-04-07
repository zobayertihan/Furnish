import React from 'react';
import { FaClock, FaHandHoldingHeart, FaMoneyBill, FaTruck } from 'react-icons/fa';
import { AiFillCheckCircle } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";


const Home = () => {
    return (
        <div className='min-h-screen'>
            <div className="bg-gray-100">
                <h1 className='text-center font-bold m-auto text-black text-2xl'>Our Services</h1>
                <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                        <svg
                            viewBox="0 0 88 88"
                            className="w-full max-w-screen-xl text-indigo-100"
                        >
                            <circle fill="currentColor" cx="44" cy="44" r="15.5" />
                            <circle
                                fillOpacity="0.2"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="44"
                            />
                            <circle
                                fillOpacity="0.2"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="37.5"
                            />
                            <circle
                                fillOpacity="0.3"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="29.5"
                            />
                            <circle
                                fillOpacity="0.3"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="22.5"
                            />
                        </svg>
                    </div>
                    <div className="relative grid gap-5 sm:grid-cols-1 lg:grid-cols-3">
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-8 h-8 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <circle cx="26" cy="26" r="25" strokeWidth="3" strokeLinecap="round" fill="none" />
                                        <line x1="26" y1="26" x2="26" y2="15" strokeWidth="3" strokeLinecap="round" />
                                        <line x1="26" y1="26" x2="21" y2="26" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <p className="mb-2 font-bold">24X7 Customer Service</p>
                                <p className="text-sm leading-5 text-gray-900">
                                    At Furnish, we provide 24/7 customer service to ensure that all of your questions and concerns are addressed promptly. Trust us for exceptional support, anytime.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <FaTruck size={30} className='text-green-800' />
                                </div>
                                <p className="mb-2 font-bold">On Time Delevery</p>
                                <p className="text-sm leading-5 text-gray-900">
                                    At Furnish, we guarantee on-time delivery of your furniture. Trust us to bring your beautiful and functional pieces directly to your doorstep, hassle-free.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <FaMoneyBill size={30} className='text-blue-800' />
                                </div>
                                <p className="mb-2 font-bold">Minimum Shipping Cost</p>
                                <p className="text-sm leading-5 text-gray-900">
                                    At Furnish, we offer affordable shipping rates to minimize costs for our customers. Enjoy the convenience of having your furniture shipped directly to your doorstep.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <h1 className='text-center m-auto text-black text-2xl font-bold'>Our Focuses</h1>
                <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                        <svg
                            viewBox="0 0 88 88"
                            className="w-full max-w-screen-xl text-indigo-100"
                        >
                            <circle fill="currentColor" cx="44" cy="44" r="15.5" />
                            <circle
                                fillOpacity="0.2"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="44"
                            />
                            <circle
                                fillOpacity="0.2"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="37.5"
                            />
                            <circle
                                fillOpacity="0.3"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="29.5"
                            />
                            <circle
                                fillOpacity="0.3"
                                fill="currentColor"
                                cx="44"
                                cy="44"
                                r="22.5"
                            />
                        </svg>
                    </div>
                    <div className="relative grid gap-5 sm:grid-cols-1 lg:grid-cols-3">
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <AiFillCheckCircle size={30} className='text-red-600' />
                                </div>
                                <p className="mb-2 font-bold">Quality Craftsmanship</p>
                                <p className="text-sm leading-5 text-gray-900">
                                    We believe that quality craftsmanship is essential for creating furniture that is both beautiful and durable. That's why we use only the finest materials and work with skilled craftsmen to bring our designs to life.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <TbListDetails size={30} className='text-red-300' />
                                </div>
                                <p className="mb-2 font-bold">Attention to Detail</p>
                                <p className="text-sm leading-5 text-gray-900">
                                    We pay close attention to every detail of our furniture, from the design to the finish. Our commitment to quality ensures that our furniture is not only beautiful but also functional and long-lasting.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <svg
                                        className="w-8 h-8 text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                                <p className="mb-2 font-bold">Range of Styles</p>
                                <p className="text-sm leading-5 text-gray-900">
                                    We offer a range of furniture styles, from classic to modern, to suit every taste and budget. Our furniture is designed to complement a variety of living spaces, from cozy apartments to spacious homes.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <MdDesignServices size={30} className='text-purple-500' />
                                </div>
                                <p className="mb-2 font-bold">Design Services</p>
                                <p className="text-sm leading-5 text-gray-900">
                                    We offer design services to help customers create a cohesive and stylish living space. Our design team can work with customers to select the right furniture pieces and accessories to create a space that is both functional and aesthetically pleasing.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <RiCustomerService2Fill size={30} className='text-blue-500' />
                                </div>
                                <p className="mb-2 font-bold">Customer Service</p>
                                <p className="text-sm leading-5 text-gray-900">
                                    We believe that excellent customer service is essential for building long-lasting relationships with our customers. Our team is dedicated to providing friendly and knowledgeable assistance to ensure that our customers are completely satisfied with their purchases.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                            <div className="p-5">
                                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                    <FaHandHoldingHeart size={30} className='text-green-500' />
                                </div>
                                <p className="mb-2 font-bold">Sustainability</p>
                                <p className="text-sm leading-5 text-gray-900">
                                    We're committed to sustainability and minimizing our impact on the environment. We use eco-friendly materials and processes whenever possible, and we're always looking for ways to improve our sustainability practices.
                                </p>
                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;