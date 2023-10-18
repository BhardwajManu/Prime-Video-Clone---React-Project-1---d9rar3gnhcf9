import React from 'react';
import footerImg from '../../assets/images/footer.png';

const Firstfooter = () => {
    return (
        <div className='bg-[#222] flex flex-col items-center text-center px-4 py-6 md:px-6 w-full'>
            <div className='flex justify-center'>
                <img src={footerImg} alt='footer-image' />
            </div>
            <div className='text-[#0F79AF] text-xs sm:text-sm flex gap-4 items-center justify-center mt-4'>
                <a href='#'>Terms and Privacy Notice</a>
                <a href='#'>Send us Feedback</a>
                <a href='#'>Help</a>
            </div>
            <div>
                <p className='text-[#949494] text-center cursor-default text-xs sm:text-sm mt-4'>
                    © 1996-2023, Amazon.com, Inc. or its affiliates
                </p>
            </div>
        </div>
    );
};

export default Firstfooter;