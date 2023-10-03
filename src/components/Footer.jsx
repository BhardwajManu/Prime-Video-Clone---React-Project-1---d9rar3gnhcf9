import React from 'react'
import footerImg from '../assets/images/footer.png'

const Footer = () => {
    return (
        <div className='bg-[#222] flex flex-col items-center text-center px-6 py-6 w-full'>
            <div className='flex justify-center'>
                <img src={footerImg} alt='footer-image' />
            </div>
            <div className='text-[#0f79af] text-[15px] flex gap-4 items-center justify-center'>
                <a href='#'>Terms and Privacy Notice</a>
                <a href='#'>Send us Feadback</a>
                <a href='#'>Help</a>
            </div>
            <div>
                <p className='text-[#949494] text-center cursor-default text-base'>© 1996-2023, Amazon.com,Inc. or its affiliates</p>
            </div>
        </div>
    )
}
export default Footer;
