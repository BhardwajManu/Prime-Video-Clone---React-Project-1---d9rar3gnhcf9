import React, { useState, useEffect } from 'react';
import headerLogo from '../../assets/images/Logo-min.png';
import { AiFillHome } from "react-icons/ai";
import { TbCategory } from "react-icons/tb";
import { MdLiveTv } from "react-icons/md";
import { CgToolbox } from "react-icons/cg";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineSearch, HiOutlineX } from "react-icons/hi";

import profile from '../../assets/images/loginpic.png';
import CategoriesList from './CatergoryList';
import SearchButton from './SearchButton';
import UserList from './UserList';
import { Link, NavLink } from 'react-router-dom';
import { useAuthContext } from '../../Context/AuthContext';


const Header = () => {
    const [isHomeHovered, setIsHomeHovered] = useState(false);
    const [isStoreHovered, setIsStoreHovered] = useState(false);
    const [isMyStuffHovered, setIsMyStuffHovered] = useState(false);
    const [isCategoriesHovered, setCategoriesHovered] = useState(false);
    const [isSearchComponentVisible, setSearchComponentVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const { authenticated } = useAuthContext()

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
    // const toggleMobileMenu = () => {
    //     setIsMobileMenuOpen(!isMobileMenuOpen);
    // };

    // Check if the screen width is greater than 768px (adjust this value as needed)


    // Function to handle hover events
    const handleHomeHover = () => {
        setIsHomeHovered(!isHomeHovered);
    };
    const handleStoreHover = () => {
        setIsStoreHovered(!isStoreHovered);
    };

    const handleMyStuffHover = () => {
        setIsMyStuffHovered(!isMyStuffHovered);
    };
    const handleCategoriesHover = () => {
        setCategoriesHovered(!isCategoriesHovered);
    };

    // function that control the search button

    const openSearch = () => {
        setSearchComponentVisible(true);
    };
    const closeSearch = (e) => {
        e.stopPropagation()
        setSearchComponentVisible(false)

    }

    return (
        <>
            <nav className={`top-0 bg-[#000] z-[1000]  w-full ${isScrolled ? 'fixed rounded-lg  mt-4 ml-64 max-w-5xl' : 'relative'}
                 ${isMobileMenuOpen ? '' : ''}`}>
                <div className="mx-auto max-w-[65rem] h-12 sm:px-6 lg:px-8">
                    <div className="relative flex h-12 items-center justify-between max-w-[100%] max-h-[100%] flex-1">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                {/* Icon when the menu is closed */}
                                <span className="tracking-[1px] font-semibold text-[16px] text-[#AAA]">Menu</span>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <Link to="/">
                                    <img className="h-5 w-auto cursor-pointer" src={headerLogo} alt="Your Company" />
                                </Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4 ml-10 tracking-[1px] font-semibold text-[18.7px] text-[#AAA]">
                                    <div className='parent-homelist' onMouseEnter={handleHomeHover} onMouseLeave={handleHomeHover}>
                                        <Link to="/home" className="hover:bg-[#191E25] hover:text-white px-4 py-2 flex items-center">
                                            <NavLink style={({ isActive }) => ({ color: isActive ? "white" : "black" })}>
                                                <span style={{ whiteSpace: 'nowrap' }}>Home</span></NavLink>
                                            <span className={`mt-2 transform ${isHomeHovered ? 'rotate-180' : ''}`}><FiChevronDown /></span>
                                        </Link>
                                        <div className={`z-50 absolute mt-[38px] w-auto top-0 rounded-sm bg-[#191E25] py-2 ${isHomeHovered ? 'block' : 'hidden'}`}>
                                            <ul className='home-list'>
                                                <li><Link to="/home" className="block px-[17px] py-3 font-semibold text-[18px] text-[#AAAAAA] hover:bg-white hover:text-black" style={{ whiteSpace: 'nowrap' }}>All</Link></li>
                                                <li><Link to="/banner" className="block px-[17px] py-3 font-semibold text-[18px] text-[#AAAAAA] hover:bg-white hover:text-black" style={{ whiteSpace: 'nowrap' }}>Movies</Link></li>
                                                <li><Link to="/anonymous" className="block px-[17px] py-3 font-semibold text-[18px] text-[#AAAAAA] hover:bg-white hover:text-black" style={{ whiteSpace: 'nowrap' }}>TV shows</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='parent-homelist' onMouseEnter={handleStoreHover} onMouseLeave={handleStoreHover}>
                                        <Link to="/anonymous" className="hover:bg-[#191E25] hover:text-white px-4 py-2 flex items-center">
                                            <span style={{ whiteSpace: 'nowrap' }}>Store</span>
                                            <span className={`mt-2 transform ${isStoreHovered ? 'rotate-180' : ''}`}><FiChevronDown /></span>
                                        </Link>
                                        <div className={`z-50 absolute mt-[38px] w-auto top-0 rounded-sm bg-[#191E25] py-2 ${isStoreHovered ? 'block' : 'hidden'}`}>
                                            <ul className='home-list'>
                                                <li><Link to="/anonymous" className="block px-[17px] py-3 text-[18px] font-semibold text-[#AAAAAA] hover:bg-white hover:text-black" style={{ whiteSpace: 'nowrap' }}>All</Link></li>
                                                <li><Link to="/rent" className="block px-[17px] py-3 text-[18px] font-semibold text-[#AAAAAA] hover:bg-white hover:text-black" style={{ whiteSpace: 'nowrap' }}>Rent</Link></li>
                                                <li><Link to="/anonymous" className="block px-[17px] py-3 text-[18px] font-semibold text-[#AAAAAA] hover:bg-white hover:text-black" style={{ whiteSpace: 'nowrap' }}>Channels</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <Link to="/anonymous" className="hover:bg-[#191E25] hover:text-white px-2 py-2 flex" style={{ whiteSpace: 'nowrap' }}>Live TV<span className='mt-2'></span></Link>
                                    </div>
                                    <div className='parent-homelist' onMouseEnter={handleCategoriesHover} onMouseLeave={handleCategoriesHover}>
                                        <Link to="/anonymous" className="hover:bg-[#191E25] hover:text-white px-2 py-2 flex" style={{ whiteSpace: 'nowrap' }}>Categories<span className={`mt-2 transform ${isCategoriesHovered ? 'rotate-180' : ''}`}><FiChevronDown /></span></Link>
                                        <div className="z-50 absolute mt-[38px] w-auto right-0 top-0 rounded-sm bg-[#191E25] ">
                                            <div className={`${isCategoriesHovered ? 'block' : 'hidden'}`}>

                                                <CategoriesList className='home-list' />

                                            </div>
                                        </div>
                                    </div>
                                    {authenticated ? <div className='parent-homelist' onMouseEnter={handleMyStuffHover} onMouseLeave={handleMyStuffHover}>
                                        <Link to="/watchlist" className="hover:bg-[#191E25] hover:text-white px-2 py-2 flex" style={{ whiteSpace: 'nowrap' }}>My Stuff<span className={`mt-2 transform ${isMyStuffHovered ? 'rotate-180' : ''}`}><FiChevronDown /></span></Link>
                                        <div className={`z-50 absolute mt-[38px] w-auto top-0 rounded-sm bg-[#191E25] py-2 ${isMyStuffHovered ? 'block' : 'hidden'}`}>
                                            <ul className='home-list'>
                                                <li><Link to="/watchlist" className="block px-[17px] py-3 font-semibold text-[#AAAAAA] text-[18px] hover:bg-white hover:text-black" style={{ whiteSpace: 'nowrap' }}>All</Link></li>
                                                <li><Link to="/watchlist" className="block px-[17px] py-3 font-semibold text-[#AAAAAA] text-[18px] hover:bg-white hover:text-black" style={{ whiteSpace: 'nowrap' }}>Watchlist</Link></li>
                                                <li><Link to="/rent" className="block px-[17px] py-3 font-semibold text-[#AAAAAA] text-[18px] hover:bg-white hover:text-black" style={{ whiteSpace: 'nowrap' }}>Rental</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                        : <div>
                                            <Link to="/signinpage" className="hover:bg-[#191E25] hover:text-white px-2 py-2 flex" style={{ whiteSpace: 'nowrap' }}>Try for free<span className='mt-2'></span></Link>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button type="button" className='z-50 relative rounded-full p-4 text-gray-400 hover:text-white '>
                                    {isSearchComponentVisible ? (
                                        <HiOutlineX onClick={closeSearch} className="h-7 w-7 mr-[72px]" />
                                    ) : (
                                        <HiOutlineSearch onClick={openSearch} className="h-7 w-7 mr-[72px]" />
                                    )}
                                </button>
                                {/* Conditional rendering of SearchComponent */}
                                {isSearchComponentVisible && (

                                    <SearchButton closeSearch={closeSearch} />

                                )}
                            </div>
                            {/* Profile dropdown */}
                            <div className="relative ml-3 parent-homelist">
                                <div>
                                    <button type="button" className="relative flex rounded-full text-sm">
                                        <img className="h-8 w-8 hover:bg-[#191E25]" src={profile} alt="" />
                                    </button>
                                </div>
                                {/* Dropdown menu */}
                                <div className="absolute home-list right-0 z-50 origin-top-right rounded-md bg-[#191E25] flex flex-col">

                                    {/* <ProfileCategories/> fixed at the bottom */}
                                    {authenticated ? <div className="self-end">
                                        <UserList />
                                    </div>
                                        : <div>
                                            <ul className='home-list'>
                                                <li><Link to="/signinpage" className="block px-[17px] py-3 font-semibold text-[#AAAAAA] text-[18px] hover:bg-white hover:text-black" style={{ whiteSpace: 'nowrap' }}>Sign In</Link></li>
                                                <li><Link to="/help" className="block px-[17px] py-3 font-semibold text-[#AAAAAA] text-[18px] hover:bg-white hover:text-black" style={{ whiteSpace: 'nowrap' }}>Help</Link></li>
                                                <li><Link to="/anonymous" className="block px-[17px] py-3 font-semibold text-[#AAAAAA] text-[18px] hover:bg-white hover:text-black" style={{ whiteSpace: 'nowrap' }}>Watch Anywhere</Link></li>
                                            </ul>

                                        </div>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile menu */}
                {/* <div className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <a href="#" className="text-gray-300  hover-bg-gray-700 hover-text-white text-[17px] rounded-md px-3 py-2 text-base font-small flex">
                            <span><AiFillHome className='mt-1 mr-1' /></span>
                            Home
                        </a>
                        <a href="#" className="text-gray-300  hover-bg-gray-700 hover-text-white text-[17px] rounded-md px-3 py-2 text-base font-small flex">
                            <span><CgToolbox className='mt-1 mr-1' /></span>
                            Stores
                        </a>
                        <a href="#" className="text-gray-300  hover-bg-gray-700 hover-text-white text-[17px] rounded-md px-3 py-2 text-base font-small flex">
                            <span><MdLiveTv className='mt-1 mr-1' /></span>
                            Live TV
                        </a>
                        <a href="#" className="text-gray-300  hover-bg-gray-700 hover-text-white text-[17px] rounded-md px-3 py-2 text-base font-small flex">
                            <span><TbCategory className='mt-1 mr-1' /></span>
                            Categories
                        </a>
                    </div>
                </div> */}
            </nav>
        </>
    );
};

export default Header;