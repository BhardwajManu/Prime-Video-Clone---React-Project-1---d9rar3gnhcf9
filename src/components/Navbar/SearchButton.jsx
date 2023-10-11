import React from 'react'
import { HiOutlineSearch } from "react-icons/hi";

const SearchButton = () => {
    return (

        <div className='bg-[#191E25] px-[20px] ml-64 py-[20px]  max-w-[64rem] rounded-lg mt-2'>
            <div className='flex flex-col w-[60rem] bg-[#33373D]'>
                <div className='relative'>
                    <HiOutlineSearch className='h-10 w-6 text-[#AAAAAA] absolute top-1/2 left-4 transform -translate-y-1/2' />
                    <input
                        type='search'
                        placeholder='Search'
                        className='w-[61.5rem] border-[3px] text-2xl  focus:outline-none  border-white  h-16 bg-[#33373D] rounded-lg pl-16 text-white placeholder:text-2xl font-semibold' // Apply the styles here
                    />
                </div>
            </div>
        </div>


    )
}


export default SearchButton