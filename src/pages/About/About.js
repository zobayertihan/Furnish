import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import stylishfurniture from '../../assets/stylishfurniture.jpg'
import stylishfurniture2 from '../../assets/stylish2.jpg'
import stylishfurniture3 from '../../assets/stylish3.jpg'
import stylishfurniture4 from '../../assets/stylish4.jpg'

const About = () => {
    const container = useRef(null);
    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/137480-furniture-swap.json'),
        });
        return () => {
            Lottie.destroy();
        };
    }, [])
    return (
        <div className='min-h-screen'>
            {/* <h1 className='w-3/4 mx-auto font-bold text-2xl text-center mt-5'>At Furnish, we're dedicated to creating beautiful and functional furniture that meets the needs of our customers.</h1>
            <div ref={container} className='w-1/4 p-5 mx-auto'>
            </div> */}
            <h1 className='font-bold text-3xl text-center my-10'>About US</h1>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-400">
                            <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    points=" 8,5 8,1 16,1 16,5"
                                    strokeLinejoin="round"
                                />
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    points="9,15 1,15 1,5 23,5 23,15 15,15"
                                    strokeLinejoin="round"
                                />
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    points="22,18 22,23 2,23 2,18"
                                    strokeLinejoin="round"
                                />
                                <rect
                                    x="9"
                                    y="13"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    width="6"
                                    height="4"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Let us handle
                                <br className="hidden md:block" />
                                your{' '}
                                <span className="inline-block text-deep-purple-accent-400">
                                    furniture needs
                                </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                At Furnish, we provide high-quality, stylish furniture that is both functional and durable. From classic designs to modern styles, we have furniture to suit every taste and budget. Our skilled craftsmen use only the finest materials to create furniture that is built to last. We also offer design services to help you create a cohesive and stylish living space. Let us handle your furniture needs, so you can enjoy a comfortable and beautiful home.
                            </p>
                        </div>
                        <div>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                Explore <span className='font-bold ms-1'>Furnish</span>
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center -mx-4 lg:pl-8">
                        <div className="flex flex-col items-end px-3">
                            <img
                                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                                src={stylishfurniture}
                                alt=""
                            />
                            <img
                                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                                src={stylishfurniture2}
                                alt=""
                            />
                        </div>
                        <div className="px-3">
                            <img
                                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                                src={stylishfurniture3}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* <h1 className='font-bold text-3xl text-center my-10'>Why Us?</h1>
            <div className='grid grid-cols-3'>
                <div className='p-5'>
                    <div className='flex justify-center'>
                        <FaClock className='text-center my-auto me-2 text-2xl' />
                        <h1 className='text-center font-bold'>24X7 Customer Service</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio expedita, nihil nemo veniam omnis doloribus quae dolores temporibus nulla ex accusantium voluptas incidunt, amet facilis eligendi commodi consectetur et voluptatum.</p>
                </div>
                <div className='p-5'>
                    <div className='flex justify-center'>
                        <FaTruck className='text-center my-auto me-2 text-2xl' />
                        <h1 className='text-center font-bold'>On Time Delevery</h1>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil cupiditate expedita sed laboriosam aut omnis ipsam quisquam impedit commodi corrupti veritatis voluptates repudiandae fugit autem, esse magnam earum repellendus amet?</p>
                </div>
                <div className='p-5'>
                    <div className='flex justify-center'>
                        <FaMoneyBill className='text-center my-auto me-2 text-2xl' />
                        <h1 className='text-center font-bold'>Minimum Shipping Cost</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, itaque laborum tempore odit commodi in illum sed, expedita fugit ducimus eveniet explicabo? Delectus asperiores aspernatur magnam vitae quia aperiam alias!</p>
                </div>
            </div> */}
        </div>
    );
};

export default About;