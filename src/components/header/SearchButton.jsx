/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import Suggestionlist from './Suggestionlist';

const SearchButton = ({ closeSearch }) => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate()
    const handleChange = (e) => setSearchValue(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search/${searchValue}`)
        closeSearch(e)
    }
    const closeSearchBar = (e) => {
        console.log(e.target === e.currentTarget)
        if (e.target === e.currentTarget) {
            closeSearch(e)
        }
    }

    return (
        <div className='fixed inset-0 bg-[rgba(0,0,0,0.7)]' onClick={closeSearchBar}>
            <div className='relative top-12 left-0 right-0 z-[100]'>
                <div className='bg-[#191E25] mx-auto p-5 ml-64   max-w-[64rem] rounded-lg mt-2'>
                    <div className='flex flex-col  w-[60rem] bg-[#33373D] rounded-lg'>
                        <form onSubmit={handleSubmit} className='relative'>
                            <HiOutlineSearch className='h-10 w-6 text-[#AAAAAA] absolute top-1/2 left-4 transform -translate-y-1/2' />
                            <input
                                type='text'
                                onChange={handleChange}
                                value={searchValue}
                                placeholder='Search'
                                className='w-full border-[3px] text-2xl  focus:outline-none  border-white  h-16 bg-[#33373D] rounded-lg pl-16 text-white placeholder:text-2xl font-semibold' // Apply the styles here
                            />
                        </form>
                        <div className='w-full max-h-[400px] overflow-y-auto '>
                            <Suggestionlist searchValue={searchValue} closeSearch={closeSearch} />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}


export default SearchButton