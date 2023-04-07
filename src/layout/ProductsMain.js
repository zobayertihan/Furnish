import React from 'react';
import LeftNav from '../components/Navbar/LeftNav';
import { Outlet } from 'react-router-dom';

const ProductsMain = () => {
    return (
        <div className='flex md:flex-row flex-col'>
            <div className='md:w-3/12 flex justify-center bg-gray-300'>
                <LeftNav ></LeftNav>
            </div>
            <div className='md:w-9/12 bg-gray-50 p-10'>
                <Outlet ></Outlet>
            </div>
        </div>
    );
};

export default ProductsMain;