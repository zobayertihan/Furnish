import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { FaMoon } from 'react-icons/fa';
import '.././style.css'
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    const moonRef = useRef(null);

    useEffect(() => {
        anime({
            targets: moonRef.current,
            translateX: '100%',
            duration: 3000,
            easing: 'linear',
            loop: true,
        });
    }, []);

    return (
        <div className="relative p-6 py-12 bg-gradient-to-r from-blue-700 to-yellow-500 dark:text-gray-900">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* <h2 className="text-center text-6xl tracking-tighter font-bold">
                        Ramadan
                        <br className="sm:hidden" /> Campaign
                    </h2> */}
                    <div className="text-center text-6xl tracking-tighter font-bold">
                        <TypeAnimation
                            sequence={[
                                'Ramadan Campaign'
                            ]}
                            wrapper="h1"
                            cursor={false}
                            speed={1}
                            repeat={0}
                            style={{ fontSize: '1em' }}
                        />
                    </div>
                    <div className="space-x-2 text-center py-2 lg:py-0">
                        <span>Free shipping for whole month! Use code:</span>
                        <span className="font-bold text-lg">RAMADAN</span>
                    </div>
                    <a
                        href="/products"
                        className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 text-gray-900 border-gray-400 font-bold"
                    >
                        Products
                    </a>
                </div>
                <FaMoon
                    ref={moonRef}
                    className="absolute top-20 right-0 w-20 animate-moon text-yellow-300"
                />
            </div>
        </div>
    );
};

export default Banner;
