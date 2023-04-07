import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);


    const navItems = <>
        <li className='me-5'>
            <Link to='/' className='hover:border-b-2 border-pink-600' smooth={true} duration={500}>
                Home
            </Link>
        </li>
        <li className='me-5'>
            <Link to='/products' className='hover:border-b-2 border-pink-600' smooth={true} duration={500}>
                Products
            </Link>
        </li>
        {/* <li className='me-5'>
            <Link to='/booking' className='hover:border-b-2 border-pink-600' smooth={true} duration={500}>
                Booking
            </Link>
        </li> */}
        <li className='me-5'>
            <Link to='/about' className='hover:border-b-2 border-pink-600' smooth={true} duration={500}>
                About
            </Link>
        </li>
        <li className='me-5'>
            <Link to='/contact' className='hover:border-b-2 border-pink-600' smooth={true} duration={500}>
                Contact
            </Link>
        </li>
    </>

    return (
        <div className='w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                {/* <img src={Logo} alt='Logo' style={{ width: '200px' }} /> */}
                <h1 className='text-xl font-bold'>Furnish</h1>
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                {navItems}
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
                }
            >
                <li className='py-4 text-2xl'>
                    <Link onClick={handleClick} to='/' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-4 text-2xl'>
                    {' '}
                    <Link onClick={handleClick} to='/products' smooth={true} duration={500}>
                        Products
                    </Link>
                </li>
                <li className='py-4 text-2xl'>
                    {' '}
                    <Link onClick={handleClick} to='/booking' smooth={true} duration={500}>
                        Booking
                    </Link>
                </li>
                <li className='py-4 text-2xl'>
                    {' '}
                    <Link onClick={handleClick} to='/about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-4 text-2xl'>
                    {' '}
                    <Link onClick={handleClick} to='/contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;