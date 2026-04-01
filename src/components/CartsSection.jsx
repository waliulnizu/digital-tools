import React from 'react';
import ProductsCartsTitle from './ui/ProductsCartsTitle';
import User from  "../assets/user.png";
import Package from "../assets/package.png";
import Rocket  from "../assets/rocket.png";

const CartsSection = ({ carts, setCarts }) => {
    // console.log(carts)
    const totalPrice = carts.reduce((total, cart) => total + cart.price, 0);
    const handlePayment = () => {
        setCarts([]);
    }
    return (
        <>
        <div className="p-12">
        

        <div className='bg-[#f2f2f2FF] px-16 py-12 rounded-xl mt-12'>
            <h1 className='text-4xl pb-3'>Your Cart</h1>

            {carts.length === 0 ? <p className='text-2xl'>Cart is empty</p>:

            <>
            {
                carts.map((cart) => (
                    <div key={cart.id} className='border border-gray-300 rounded-2xl my-4 p-4'>
                        <div className='flex justify-between items-center mt-4 '>
                            <div className='flex justify-center items-center gap-6'>
                                <img src={cart.icon} alt={cart.name} />
                <div className='space-y-1.5'>
                    <h1 className='text-xl font-bold'>{cart.name}</h1> 
                    <h4 className='text-lg'>${cart.price.toFixed(2)}/{cart.period}</h4>
                </div>
                </div>
                <button className='bg-red-500 text-white p-2 rounded-lg hover:bg-red-600'>
                    Remove
                </button>
            </div>
                </div>))
            }
             <div className='flex justify-between bg-black text-white p-4 rounded-lg mt-6 text-2xl font-semibold'>
            <div>Total</div>
            <div>${totalPrice}</div>
        </div>
                <button onClick={handlePayment} className='btn w-full mt-4 bg-red-600 text-3xl text-white rounded-lge '>Proceed to checkout</button>

            </>
            }

            
           
        </div>

        

            
        </div>   
        </>
    );
};

export default CartsSection;