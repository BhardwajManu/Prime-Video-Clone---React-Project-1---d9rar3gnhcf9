import React from 'react'


const Filters = () => {
    return (
        <>
            <div className='py-10'>
                <div className='flex justify-between gap-5 '>
                    <div className='flex gap-6'>
                        <button className='text-[1.3vw] flex justify-between items-center bg-[#FFFFFF33] py-[14px] px-[21px]  text-[#FFFFFF] rounded-lg font-medium hover:bg-white hover:text-black'>Filter<span className='mt-1 ml-1 font-bold'></span></button>
                        <button className='text-[1.3vw] flex justify-between items-center bg-[#FFFFFF33] py-[14px] px-[21px]  text-[#FFFFFF] rounded-lg font-medium hover:bg-white hover:text-black'>Genre<span className='mt-1 ml-1 font-bold'></span></button>
                        <button className='text-[1.3vw] flex justify-between items-center bg-[#FFFFFF33] py-[14px] px-[50px]  text-[#FFFFFF] rounded-lg font-medium hover:bg-white hover:text-black'>Video Quality<span className='mt-1 ml-1 font-bold'></span></button>
                        <button className='text-[1.3vw] flex justify-between items-center bg-[#FFFFFF33] py-[14px] px-[50px]  text-[#FFFFFF] rounded-lg font-medium hover:bg-white hover:text-black'>Content Type<span className='mt-1 ml-1 font-bold'></span></button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Filters;