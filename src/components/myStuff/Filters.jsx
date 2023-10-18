import React from 'react'
import { FiChevronDown } from "react-icons/fi";
import Header from '../header/Header';
import Footer from '../Footer';


const Filters = () => {
    return (
        <>

            <div className='py-10'>
                <div className='flex justify-between gap-5 '>
                    <div className='flex gap-6'>
                        <button className='text-[1.3vw] flex justify-between items-center bg-[#FFFFFF33] py-[14px] px-[21px]  text-[#FFFFFF] rounded-lg font-medium hover:bg-white hover:text-black'>Filter<span className='mt-1 ml-1 font-bold'><FiChevronDown /></span></button>
                        <button className='text-[1.3vw] flex justify-between items-center bg-[#FFFFFF33] py-[14px] px-[21px]  text-[#FFFFFF] rounded-lg font-medium hover:bg-white hover:text-black'>Genre<span className='mt-1 ml-1 font-bold'><FiChevronDown /></span></button>
                        <button className='text-[1.3vw] flex justify-between items-center bg-[#FFFFFF33] py-[14px] px-[50px]  text-[#FFFFFF] rounded-lg font-medium hover:bg-white hover:text-black'>Video Quality<span className='mt-1 ml-1 font-bold'><FiChevronDown /></span></button>
                        <button className='text-[1.3vw] flex justify-between items-center bg-[#FFFFFF33] py-[14px] px-[50px]  text-[#FFFFFF] rounded-lg font-medium hover:bg-white hover:text-black'>Content Type<span className='mt-1 ml-1 font-bold'><FiChevronDown /></span></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Filters;