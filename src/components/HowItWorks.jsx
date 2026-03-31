import React from 'react';
import User from  "../assets/user.png";
import Package from "../assets/package.png";
import Rocket  from "../assets/rocket.png";

const HowItWorks = () => {
    return (
        <>
        <div className='bg-[#f9fafcFF] py-32'>
            <div className='w-9/12 mx-auto'>
                <h1 className='text-center text-5xl mb-4'>Get Started in 3 Steps</h1>
                <p className='text-center text-base text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 '>
                   <div className='flex  bg-white p-4 rounded-xl shadow-lg'>
                    <div className='flex flex-col items-center space-y-4 pt-8 '>
                        <img src={User} alt="" />
                        <h2 className='text-2xl font-bold text-[#627382]'>Create an Account</h2>
                        <p className='text-[#627382] text-center'>Sign up for free and gain access to our exclusive collection of digital tools.</p>
                    </div>
                    <div>
                        <h5 className='text-end bg-blue-600 text-white p-2 w-8 h-8 rounded-full flex justify-center items-center'>01</h5>
                    </div>
                   </div>
                   <div className='flex  bg-white p-4 rounded-xl shadow-lg'>
                    <div className='flex flex-col items-center space-y-4 pt-8'>
                        <img src={Package} alt="" />
                        <h2 className='text-2xl font-bold text-[#627382]'>Create an Account</h2>
                        <p className='text-[#627382] text-center'>Sign up for free and gain access to our exclusive collection of digital tools.</p>
                    </div>
                    <div>
                        <h5 className='text-end bg-blue-600 text-white p-2 w-8 h-8 rounded-full flex justify-center items-center'>02</h5>
                    </div>
                   </div>
                   <div className='flex  bg-white p-4 rounded-xl shadow-lg'>
                    <div className='flex flex-col items-center space-y-4 pt-8'>
                        <img src={Rocket} alt="" />
                        <h2 className='text-2xl font-bold text-[#627382]'>Create an Account</h2>
                        <p className='text-[#627382] text-center'>Sign up for free and gain access to our exclusive collection of digital tools.</p>
                    </div>
                    <div>
                        <h5 className='text-end bg-blue-600 text-white p-2 w-8 h-8 rounded-full flex justify-center items-center'>03</h5>
                    </div>
                   </div>

                    
                </div>
            </div>
        </div> 
        </>
    );
};

export default HowItWorks;