import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { listTag } from '../../styles/tailwindClasses'
import { FiChevronDown } from "react-icons/fi";


const CategoryList = () => {
    const [isCategoriesHovered, setCategoriesHovered] = useState(false);


    const handleCategoriesHover = () => {
        setCategoriesHovered(!isCategoriesHovered);
    };


    return (
        <>
            <div className='parent-homelist'
                onMouseEnter={handleCategoriesHover}
                onMouseLeave={handleCategoriesHover}>
                <Link to="/anonymous" className="hover:bg-[#191E25] hover:text-white px-2 py-2 flex"
                    style={{ whiteSpace: 'nowrap' }}>Categories
                    <span className={`mt-2 transform ${isCategoriesHovered ? 'rotate-180' : ''}`}><FiChevronDown /></span></Link>
                <div className="z-50 absolute mt-11 w-auto right-0 top-0 rounded-lg bg-[#191E25] ">
                    <div className={`${isCategoriesHovered ? 'block' : 'hidden'}`}>
                        <div className='bg-[#191E25] mx-auto max-w-5xl rounded-lg'>
                            <div className="flex justify-between py-5 w-[65rem]">
                                <div className="flex flex-col  pl-24">
                                    <h1 className="text-white text-xl font-medium cursor-default">Genres</h1>
                                    <ul className="flex justify-between  font-semibold text-[#AAA]">
                                        <Link to="/anonymous">
                                            <div className='flex flex-col  cursor-default'>
                                                <li className={`${listTag}`}>Action and adventure</li>
                                                <li className={`${listTag}`}>Anime</li>
                                                <li className={`${listTag}`}>Comedy</li>
                                                <li className={`${listTag}`}>Documentary</li>
                                                <li className={`${listTag}`}>Drama</li>
                                                <li className={`${listTag}`}>Fantasy</li>
                                            </div></Link>
                                        <Link to="/anonymous">
                                            <div className='flex flex-col cursor-default'>
                                                <li className={`${listTag}`}>Horror</li>
                                                <li className={`${listTag}`}>International</li>
                                                <li className={`${listTag}`}>Kids</li>
                                                <li className={`${listTag}`}>Music videos and concerts</li>
                                                <li className={`${listTag}`}>Mystery and thrillers</li>
                                                <li className={`${listTag}`}>Romance</li>
                                            </div></Link>
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-4 pr-32">
                                    <h1 className="text-white text-xl font-medium cursor-default">Featured
                                        <span className='ml-1 cursor-default'>collections</span></h1>

                                    <ul className="flex justify-between  font-semibold text-[#AAA]">

                                        <Link to="/anonymous">
                                            <div className='flex flex-col  cursor-default'>
                                                <li className={`${listTag}`}>Hindi</li>
                                                <li className={`${listTag}`}>English</li>
                                                <li className={`${listTag}`}>Telugu</li>
                                                <li className={`${listTag}`}>Tamil</li>
                                                <li className={`${listTag}`}>Malayalam</li>
                                            </div>
                                        </Link>

                                        <Link to="/anonymous">
                                            <div className='flex flex-col  cursor-default'>
                                                <li className={`${listTag}`}>Kannada</li>
                                                <li className={`${listTag}`}>Marathi</li>
                                                <li className={`${listTag}`}>Punjabi</li>
                                                <li className={`${listTag}`}>Gujarati</li>
                                                <li className={`${listTag}`}>Bengali</li>
                                            </div>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CategoryList;