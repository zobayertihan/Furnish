import React, { useEffect, useRef, useState } from 'react';
import { FaHandHoldingHeart, FaMoneyBill, FaTruck } from 'react-icons/fa';
import { AiFillCheckCircle } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import Lottie from 'lottie-web';
import { Link, useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import 'swiper/swiper-bundle.min.css';
import "./../../style.css";
import { Autoplay, Pagination, EffectFade, Parallax } from "swiper";
import Banner from '../Banner';
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
    const products = useLoaderData();
    console.log(products)
    const container = useRef(null);
    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/123726-address.json'),
        });
        return () => {
            Lottie.destroy();
        };
    }, [])
    return (
        <div className='min-h-screen'>
            <div className='mb-5 relative'>
                <Swiper
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={true}
                    parallax={true}
                    modules={[Pagination, EffectFade, Autoplay, Parallax]}
                    className="mySwiper1">
                    <SwiperSlide>
                        <div className="swiper-slide-content img-rgblayer">
                            <img className='w-screen md:h-96 h-32 parallax-bg' src="https://i.ibb.co/hfGytF8/b1.webp" alt="" />
                            <div className="swiper-slide-title font-bold z-40" data-title="FURNISH">FURNISH</div>
                            <div className="swiper-slide-sub-title font-bold z-40">
                                <TypeAnimation
                                    sequence={[
                                        'Where products meeet quality.'
                                    ]}
                                    wrapper="h3"
                                    cursor={false}
                                    speed={1}
                                    repeat={0}
                                    style={{ fontSize: '1em' }}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide-content img-rgblayer">
                            <img className='w-screen md:h-96 h-32 parallax-bg' src="https://i.ibb.co/dg1FdDP/b2.jpg" alt="" />
                            <div className="swiper-slide-title z-40 font-bold" data-title="FURNISH">FURNISH</div>
                            <div className="swiper-slide-sub-title z-40 font-bold">
                                <TypeAnimation
                                    sequence={[
                                        'Where products meeet quality.'
                                    ]}
                                    wrapper="h3"
                                    cursor={false}
                                    speed={1}
                                    repeat={0}
                                    style={{ fontSize: '1em' }}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide-content img-rgblayer">
                            <img className='w-screen md:h-96 h-32' src="https://i.ibb.co/Gd72thv/b3.jpg" alt="" />
                            <div className="swiper-slide-title z-40 font-bold" data-title="FURNISH">FURNISH</div>
                            <div className="swiper-slide-sub-title z-40 font-bold">
                                <TypeAnimation
                                    sequence={[
                                        'Where products meeet quality.'
                                    ]}
                                    wrapper="h3"
                                    cursor={false}
                                    speed={1}
                                    repeat={0}
                                    style={{ fontSize: '1em' }}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide-content img-rgblayer">
                            <img className='w-screen md:h-96 h-32' src="https://i.ibb.co/LNCJZhq/b4.jpg" alt="" />
                            <div className="swiper-slide-title z-40 font-bold" data-title="FURNISH">FURNISH</div>
                            <div className="swiper-slide-sub-title z-40 md:font-bold font-normal">
                                <TypeAnimation
                                    sequence={[
                                        'Where products meeet quality.'
                                    ]}
                                    wrapper="h3"
                                    cursor={false}
                                    speed={1}
                                    repeat={0}
                                    style={{ fontSize: '1em' }}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide-content img-rgblayer">
                            <img className='w-screen md:h-96 h-32' src="https://i.ibb.co/jh0zHD4/b5.jpg" alt="" />
                            <div className="swiper-slide-title font-bold z-40" data-title="FURNISH">FURNISH</div>
                            <div className="swiper-slide-sub-title font-bold z-40">
                                <TypeAnimation
                                    sequence={[
                                        'Where products meeet quality.'
                                    ]}
                                    wrapper="h3"
                                    cursor={false}
                                    speed={1}
                                    repeat={0}
                                    style={{ fontSize: '1em' }}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
            <div className='mb-10'>
                <h1 className='text-center font-bold text-3xl my-2'>Our Products</h1>
                {/* <p className='text-center my-3'>We promise to deliver the best furniture to you.</p> */}
                <div className='text-center my-3 font-bold'>
                    <TypeAnimation
                        sequence={[
                            'We promise to deliver the best furniture to you.'
                        ]}
                        wrapper="h3"
                        cursor={false}
                        speed={1}
                        repeat={0}
                        style={{ fontSize: '1em' }}
                    />
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {
                        products.map(product =>
                            <div key={product.id}>
                                <SwiperSlide>
                                    <img className='h-32 md:h-64 mx-auto' src={product.image} alt="" />
                                </SwiperSlide>
                                {/* <div className='swiper-slide1'>
                                    <img src={product.image} alt="" />
                                </div> */}
                            </div>
                        )
                    }
                </Swiper>
                <div className='my-2 flex justify-center'>
                    <Link className='text-center px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 text-gray-900 border-gray-400 font-bold lg:w-1/6' to={'/products'}>See All Products</Link>
                </div>
            </div>
            <Banner></Banner>
            <div className='bg-gray-100'>
                <section className="text-gray-800">
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-center">
                        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className="text-5xl mb-5 font-bold leading-none sm:text-6xl">
                                Our Address
                            </h1>
                            <p>
                                Mirpur,Dhaka, Bangladesh
                            </p>
                            <p>
                                Phone: 01XXXXXXXXX
                            </p>
                            <p>
                                Email: Admin_X@gmail.com
                            </p>
                        </div>
                        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" ref={container}>
                        </div>
                    </div>
                </section>
            </div>
            <div className="bg-gray-100">
                <h1 className='text-center font-bold m-auto text-black text-3xl'>Our Services</h1>
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
                <h1 className='text-center m-auto text-black text-3xl font-bold'>Our Focuses</h1>
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
            <section className="p-6 dark:bg-gray-600 dark:text-gray-100">
                <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
                        <p className="text-sm sm:text-base">Clients</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">22</p>
                        <p className="text-sm sm:text-base">Years of experience</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
                        <p className="text-sm sm:text-base">Workshops</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;