import React from 'react'
import { FiChevronDown } from "react-icons/fi";


const WatchList = () => {
    return (
        <>

            <div className='flex flex-col gap-3'>
                <div>
                    <h1 className='text-[3vw] text-[#FFFFFF] py-4 font-bold px-20'>Watchlist</h1>
                </div>

                <div className='flex justify-between px-20'>
                    <div className='flex gap-3'>
                        <button className='text-[1.5vw] bg-[#FFFFFF33] py-[12px] px-[21px] text-[#FFFFFF] rounded-lg font-medium hover:bg-white hover:text-black'>All</button>
                        <button className='text-[1.5vw] bg-[#FFFFFF33] py-[12px] px-[21px] text-[#FFFFFF] rounded-lg font-medium hover:bg-white hover:text-black'>Movies</button>
                        <button className='text-[1.5vw] bg-[#FFFFFF33] py-[12px] px-[21px] text-[#FFFFFF] rounded-lg font-medium hover:bg-white hover:text-black'>TV shows</button>
                    </div>

                    <button className='text-[1.5vw] flex justify-center items-center bg-[#FFFFFF33] py-[12px] px-[21px] text-[#FFFFFF] rounded-lg font-medium hover:bg-white hover:text-black'>Most recent addition <span className='mt-1 ml-1 font-bold'><FiChevronDown /></span></button>
                </div>
            </div>


            <div className='flex gap-2 py-10 px-16'>

                <h1 className='text-teal-300 text-[1.5vw] px-5 font-bold tracking-wide'>Mamta Bhardwaj a brilliant Software Developer in Amazon</h1>
            </div>


        </>
    )
}

export default WatchList