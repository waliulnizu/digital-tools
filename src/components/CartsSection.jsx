import React from 'react';
import ProductsCartsTitle from './ui/ProductsCartsTitle';
import User from  "../assets/user.png";
import Package from "../assets/package.png";
import Rocket  from "../assets/rocket.png";

const CartsSection = () => {
    return (
        <>
        <div className="w-9/12 mx-auto py-28">
        <ProductsCartsTitle />

        <div className='bg-[#f2f2f2FF] p-8 rounded-xl mt-12'>
            <h1 className='text-4xl pb-3'>Your Cart</h1>
            <div className='flex justify-between items-center mt-4'>
                <div className='flex justify-center items-center gap-6'>
                <img src={User} alt="user" />
                <div className='space-y-1.5'>
                    <h1 className='text-xl font-bold'>Ai Writing pro</h1>
                    <h4 className='text-lg'>$19.99/month</h4>
                </div>
                </div>
                <button className='bg-red-500 text-white p-2 rounded-lg hover:bg-red-600'>
                    Remove
                </button>
            </div>
        </div>
            
        </div>   
        </>
    );
};

export default CartsSection;