import React from 'react';
import footerImg from '../assets/images/footer.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#00050D] flex flex-col items-center text-center px-4 py-6 md:px-6 w-full'>
            <div className='flex justify-center'>
                <img src={footerImg} alt='footer-image' />
            </div>

            <div className='flex gap-4'>

                <div className='text-[#79B8F3] text-xs sm:text-sm flex gap-4 items-center justify-center mt-4'>
                    <Link to='/anonymous'>Terms and Privacy Notice</Link>
                    <Link to='/anonymous'>Send us Feedback</Link>
                    <Link to='/anonymous'>Help</Link>
                </div>

                <div>
                    <p className='text-[#8197A4] text-center cursor-default text-xs sm:text-sm mt-4'>
                        © 1996-2023, Amazon.com, Inc. or its affiliates
                    </p>

                </div>

            </div>
        </div>
    );
};

export default Footer;
