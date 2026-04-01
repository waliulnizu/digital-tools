import React from 'react';
import { FaCheck } from 'react-icons/fa6';

const PricingSection = () => {
    return (
        <>
            <div className='w-9/12 mx-auto pt-20'>
                <h1 className='text-4xl font-bold text-center py-2'>Simple, Transparent Pricing</h1>
                <p className='text-center text-[#627382] mt-2'>Choose the plan that fits your needs. No hidden fees, cancel anytime.</p>


                <div className=' py-28 grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='flex flex-col h-full space-y-4  p-8 rounded-xl bg-[#f9fafc]'>
                        <div className='space-y-3'>
                            <h1 className='text-5xl'>Starter</h1>
                            <p className='text-[#627382]'>Perfect for getting started</p>
                        </div>
                        <div className='text-4xl'>$0/<span className='text-base'>month</span></div>
                        <ul className='text-[#627382]'>
                            <li> <FaCheck className="inline-block mr-1 text-green-500" /> Access to 10 free tools</li>
                            <li> <FaCheck className="inline-block mr-1 text-green-500" /> Basic templates</li>
                            <li> <FaCheck className="inline-block mr-1 text-green-500" /> Community support</li>
                            <li> <FaCheck className="inline-block mr-1 text-green-500" /> 1 Project per month</li>
                        </ul>
                        <div className='flex-1'></div>
                        <button className='bg-blue-500 text-white py-2 px-4 rounded-md w-full mt-auto hover:bg-blue-600'>Get Started Free</button>
                    </div>


                    {/* card 2 */}
                    <div className='relative flex flex-col h-full space-y-4 p-8 rounded-xl bg-gradient-to-b from-[#4F39F6] to-[#9514FA] text-white'>
                        <div className='space-y-3 '>
                            <h1 className='text-5xl'>Pro</h1>
                            <p className=''>Best for professionals</p>
                        </div>
                        <div className='text-4xl'>$99/<span className='text-base'>month</span></div>
                        <ul className=''>
                            <li> <FaCheck className="inline-block mr-1" /> in pro</li>
                            <li> <FaCheck className="inline-block mr-1" /> collaboration</li>
                            <li> <FaCheck className="inline-block mr-1" /> Custom integration</li>
                            <li> <FaCheck className="inline-block mr-1" /> Dedicated support</li>
                            <li> <FaCheck className="inline-block mr-1" /> SLA guarantee</li>
                            <li> <FaCheck className="inline-block mr-1" /> Custom banding</li>
                        </ul>
                        <div className='flex-1'></div>
                        <button className='bg-white text-blue-700 py-2 px-4 rounded-md w-full mt-auto hover:bg-gray-100'>Contact Sales</button>
                        <div className='absolute -top-4 left-42 bg-[#fef3c6FF] text-[#bb4d00FF] text-sm justufy-center items-center px-4 py-2 rounded-2xl'>
                            <h1>Most Popular</h1>
                        </div>
                    </div>





                    <div className='flex flex-col h-full space-y-4 p-8 rounded-xl  bg-[#f9fafc]'>
                        <div className='space-y-3'>
                            <h1 className='text-5xl'>Enterprise</h1>
                            <p className='text-[#627382]'>For teams and businesses</p>
                        </div>
                        <div className='text-4xl'>$99/<span className='text-base'>month</span></div>
                        <ul className='text-[#627382]'>
                            <li> <FaCheck className="inline-block mr-1 text-green-500" /> in pro</li>
                            <li> <FaCheck className="inline-block mr-1 text-green-500" /> collaboration</li>
                            <li> <FaCheck className="inline-block mr-1 text-green-500" /> Custom integration</li>
                            <li> <FaCheck className="inline-block mr-1 text-green-500" /> Dedicated support</li>
                            <li> <FaCheck className="inline-block mr-1 text-green-500" /> SLA guarantee</li>
                            <li> <FaCheck className="inline-block mr-1 text-green-500" /> Custom banding</li>
                        </ul>
                        <div className='flex-1'></div>
                        <button className='bg-blue-500 text-white py-2 px-4 rounded-md w-full mt-auto hover:bg-blue-600'>Contact Sales</button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default PricingSection;