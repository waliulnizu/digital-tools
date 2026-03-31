import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <>
          <div className='bg-[#101727FF] text-white pt-20 pb-16'>
            <div className='w-9/12 mx-auto grid grid-cols-1 md:grid-cols-6 gap-8 '>
            {/* part 1 */}
            <div className='col-span-2'>
                <h1 className='text-6xl pb-4'>DigiTool</h1>
                <p className='text-[#627382]'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
            </div>

            {/* part 2 */}
            <div className='col-span-1'>
                <h2 className='text-xl mb-4'>Product</h2>
                <ul className='space-y-1 font-light text-[#627382]'>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Template</li>
                    <li>Integrations</li>
                </ul>
            </div>

            {/* part 3 */}
            <div>
                <h2 className='text-xl mb-4'>Company</h2>
                <ul className='space-y-1 font-light text-[#627382]'>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Press</li>
                </ul>
            </div>

            {/* part 4 */}
            <div>
                <h2 className='text-xl mb-4'>Resources</h2>
                <ul className='space-y-1 font-light text-[#627382]'>
                    <li>Documentation</li>
                    <li>Help Center</li>
                    <li>Community</li>
                    <li>Contact</li>
                </ul>
            </div>

                {/* part 5 */}
            <div>
                <h2 className='text-xl mb-4'>Social Links</h2>
                <ul className='flex gap-2'>
                    <li><FaInstagram /></li>
                    <li><FaFacebook /></li>
                    <li><FaTwitter /></li>
                </ul>
            </div>

            
            
            </div>
            <hr className='w-9/12 mx-auto mt-12 text-white'/>

            <div className='w-9/12 mx-auto flex justify-between my-4 text-sm text-[#627382]'>
                <div><p>&copy; 2023 DigiTool. All rights reserved.</p></div>
                <ul className='flex gap-4'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookie</li>
                </ul>
            </div>


            
          </div>  
        </>
    );
};

export default Footer;