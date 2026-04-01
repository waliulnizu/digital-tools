import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = ({carts}) => {
    return (
        <>
        
        <div className='w-9/12 mx-auto py-5'>
            <div className='flex justify-between'>
                {/* logo  */}
                <div className='font-bold text-4xl text-blue-600'>DigiTools</div>
                {/* menu  */}
                <div>
                    <ul className='flex gap-5 text-lg font-medium'>
                        <li>Products</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                {/* login */}
                <div className='flex items-center text-md gap-4'>
                    <div className='relative text-3xl text-blue-700'>
                        <CiShoppingCart />
                        <span className='absolute -top-2 -right-3 text-xs bg-red-500 text-white rounded-full px-2 py-0.5'>{carts?.length || 0}</span>
                    </div>
                    <button>Login</button>
                    <button className='btn btn-info rounded-2xl'>Get Started</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Navbar;