import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Product = () => {
    const products = useLoaderData()
    return (
        <div className='min-h-screen'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    products.map(product =>
                        <div key={product.id}>
                            <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg hover:-translate-y-2" >
                                <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
                                    <img src={product.image}
                                        alt=""
                                        className="h-full w-full" />
                                </div>
                                <h2 className="mt-4 font-bold text-xl">{product.name}</h2>
                                <div className='grid grid-cols-2 gap-3 my-3'>
                                    <div className='flex items-center'>Catagory : {product.catagory}</div>
                                    <div className='flex items-center'>Price: {product.price}</div>
                                </div>
                                <Link to={`/products/${product.id}/booking`}><button className='btn btn-info'>Book</button></Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Product;