import React from 'react';

const StatsBar = () => {
    return (
        <>
            <div className='bg-gradient-to-b from-[#4F39F6] to-[#9514FA] text-white p-6 py-2'>
                <div className='w-8/12 mx-auto my-16 flex justify-between items-center'>
                   <div>
                    <h1 className='text-6xl mb-2'>50K+</h1>
                    <p className='text-xs font-bold'>Active Users</p>
                   </div>
                   <div>
                    <h1 className='text-6xl mb-2'>200+</h1>
                    <p className='text-xs font-bold'>Premium Tools</p>
                   </div>
                   <div>
                    <h1 className='text-6xl mb-2'>4.9</h1>
                    <p className='text-xs font-bold'>Rating</p>
                   </div>
                </div>

            </div>
        </>
    );
};

export default StatsBar;