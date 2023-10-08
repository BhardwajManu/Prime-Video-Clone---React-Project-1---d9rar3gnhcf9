import React from 'react';
import headerlogo from '../../assets/images/Logo-min.png'
import avatar from '../../assets/images/userImg.png'
import search from '../../assets/images/search.png'
import { useEffect, useState } from 'react';


const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Add a scroll event listener to track scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Check if the screen width is greater than 768px (adjust this value as needed)
    const isLargeScreen = window.innerWidth > 768;

    return (
        <>
            <nav className={`top-0 bg-[#000]   w-full ${isScrolled ? 'fixed rounded-lg z-50 mt-4 ml-64 max-w-5xl' : ''}
                 ${isMobileMenuOpen ? '' : ''}`}>
                <div className="mx-auto max-w-5xl h-12 px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-12 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            {/* <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-[#FFF] hover:bg-gray-800 hover:text-[#FFF] font-bold" aria-controls="mobile-menu" aria-expanded="false"> */}
                            <button
                                type="button"
                                onClick={toggleMobileMenu} // Add onClick to toggle the mobile menu
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-[#FFF] hover:bg-gray-800 hover:text-[#FFF] font-bold"
                                aria-controls="mobile-menu"
                                aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                            >
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                {/* Icon when menu is closed */}
                                <span className=''>Menu</span>
                                {/* Icon when menu is open */}
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="ml-2 h-5 w-auto" src={headerlogo} alt="Your Company" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className=" z-index flex space-x-4 ml-10 tracking-[1px] font-semibold text-[18.7px] text-[#AAA]">
                                    <div className='parent-homelist'>
                                        <a href="#" className=" hover:bg-[#191E25] hover:text-white text-[1.2vw] px-4 py-2">Home</a>
                                        <div className="z-50 absolute mt-[38px] w-auto top-0 rounded-sm bg-[#191E25] py-2 ">
                                            <ul className='home-list text-left '>
                                                <li><a href="#" className="block px-[17px] py-3 text-sm font-semibold text-[#AAAAAA] text-[18.7px] hover:bg-white hover:text-black  ">All</a></li>
                                                <li><a href="#" className="block px-[17px] py-3 text-sm font-semibold text-[#AAAAAA] text-[18.7px] hover:bg-white hover:text-black  ">Movies</a></li>
                                                <li><a href="#" className="block px-[17px] py-3 text-sm font-semibold text-[#AAAAAA] text-[18.7px] hover:bg-white whitespace-nowrap hover:text-black ">TV shows</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='parent-storelist'>
                                        <a href="#" className=" hover:bg-[#191E25] hover:text-white text-[1.2vw] px-4 py-2">Store</a>
                                        <div className="z-50 absolute mt-[38px]  w-auto top-0 rounded-sm bg-[#191E25] py-2 font-semibold">
                                            <ul className='store-list text-left'>
                                                <li><a href="#" className="block px-[17px] py-3 text-sm text-[#AAAAAA] text-[18.7px] hover:bg-white hover:text-black  ">All</a></li>
                                                <li><a href="#" className="block px-[17px] py-3 text-sm text-[#AAAAAA] text-[18.7px] hover:bg-white hover:text-black  ">Movies</a></li>
                                                <li><a href="#" className="block px-[17px] py-3 text-sm text-[#AAAAAA] text-[18.7px] hover:bg-white whitespace-nowrap hover:text-black ">TV shows</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <a href="#" className=" hover:bg-[#191E25] hover:text-white text-[1.2vw] px-3 py-2">Live TV</a>
                                    </div>
                                    <div>
                                        <a href="#" className=" hover:bg-[#191E25] hover:text-white text-[1.2vw] px-3 py-2">Categories</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 text-white">
                            <button type="button" className="relative flex  text-base " id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">Open user menu</span>
                                <img className="h-9 w-9 " src={search} alt="" />
                            </button>

                            <div className="space-x-4 hidden sm:ml-6 sm:block text-[#AAA] text-[18.7px] font-semibold tracking-[1px]">
                                <a href="#" className=" hover:bg-[#191E25] hover:text-white px-3 py-2 text-[1.2vw]">Try for free</a>
                                <a href="#" className=" hover:bg-[#191E25] hover:text-white px-3 py-2">EN</a>
                            </div>

                            {/* Profile dropdown */}
                            <div className="relative ml-3 avtar-parent">
                                <div>
                                    <button type="button" className="relative flex rounded-full bg-gray-800 text-sm " id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src={avatar} alt="" />
                                    </button>
                                </div>

                                {/* Dropdown menu */}

                                <div className="avtar absolute text-left right-0 z-10 mt-3 w-56 origin-top-right rounded-md bg-[#222] py-3" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                                    {/* Active: "bg-gray-100", Not Active: "" */}
                                    <a href="#" className="block ml-5 mr-5 rounded-lg hover:bg-white hover:text-black px-5 py-3 text-[18.7px] font-semibold  text-gray-300" role="menuitem" tabIndex="-1" id="user-menu-item-0">Sign In</a>
                                    <a href="#" className="block ml-5 mr-5 rounded-lg hover:bg-white hover:text-black px-5 py-3 text-[18.7px] font-semibold  text-gray-300" role="menuitem" tabIndex="-1" id="user-menu-item-1">Help</a>
                                    <a href="#" className="block ml-5 mr-5  rounded-lg hover:bg-white hover:text-black px-5 py-3 text-[18.7px] font-semibold  text-gray-300" role="menuitem" tabIndex="-1" id="user-menu-item-2">Watch Anywhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`sm:hidden ${isMobileMenuOpen ? 'z-50' : ''}`} id="mobile-menu" >
                    {/* <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col items-start"> */}
                    <div className={`space-y-1 px-2 pb-3 pt-2 flex flex-col items-start ${isMobileMenuOpen ? 'block' : 'hidden'}`} >

                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <a href="#" className="text-gray-300 hover-bg-gray-700 hover-text-white  rounded-md px-3 py-2 text-base font-medium">Home</a>
                        <a href="#" className="text-gray-300 hover-bg-gray-700 hover-text-white  rounded-md px-3 py-2 text-base font-medium">Store</a>
                        <a href="#" className="text-gray-300 hover-bg-gray-700 hover-text-white  rounded-md px-3 py-2 text-base font-medium">Live TV</a>
                        <a href="#" className="text-gray-300 hover-bg-gray-700 hover-text-white  rounded-md px-3 py-2 text-base font-medium">Categories</a>
                    </div>
                </div>
            </nav >
        </>
    );
};

export default Header;
