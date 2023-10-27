import React, { useState, useEffect } from 'react';
import { AiFillHome } from "react-icons/ai";
import { TbCategory } from "react-icons/tb";
import { MdLiveTv } from "react-icons/md";
import { CgToolbox } from "react-icons/cg";
import headerLogo from '../../assets/images/Logo-min.png';
import { HiOutlineSearch, HiOutlineX } from "react-icons/hi";
import profile from '../../assets/images/loginpic.png';
import CategoriesList from './CatergoryList';
import SearchButton from './SearchButton';
import UserList from './UserList';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../Context/AuthContext';
import { headerlistTag, menutoggle } from '../../styles/tailwindClasses'
import Store from './Store';
import Mystuff from './Mystuff';
import Homepage from './Homepage';

const Header = () => {
    const [isSearchComponentVisible, setSearchComponentVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { user, authenticated } = useAuthContext()

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

    //Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    const openSearch = () => {
        setSearchComponentVisible(true);
    };
    const closeSearch = (e) => {
        e.stopPropagation()
        setSearchComponentVisible(false)

    }

    return (
        <>
            <nav className={`top-0 bg-[#000] z-[1000] w-full ${isScrolled ? 'fixed :relative' : 'relative'} rounded-lg 
        ${isScrolled ? 'mt-5  max-w-[70rem] md:ml-56' : ''} ${isMobileMenuOpen ? '' : ''}`}>

                <div className="mx-auto max-w-[70rem] h-12 sm:px-6 lg:px-8">
                    <div className="relative flex h-12 items-center justify-between max-w-[100%] max-h-[100%] flex-1">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <button
                                onClick={toggleMobileMenu}
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2
                             text-gray-400 hover:bg-gray-700 hover:text-white">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                {/* Icon when the menu is closed */}
                                <span className="tracking-[1px] font-semibold text-[16px] text-white">Menu</span>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <Link to="/">
                                    <img
                                        className="h-5 w-auto cursor-pointer"
                                        src={headerLogo}
                                        alt="Your Company" />
                                </Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4 ml-10 tracking-[1px] font-semibold text-[18.7px] text-[#AAA]">
                                    <Homepage />
                                    <Store />
                                    <div>
                                        <Link to="/anonymous"
                                            className="hover:bg-[#191E25] hover:text-white px-2 py-2 flex"
                                            style={{ whiteSpace: 'nowrap' }}>Live TV<span
                                                className='mt-2'>
                                            </span>
                                        </Link>
                                    </div>
                                    <CategoriesList className='home-list' />
                                    <Mystuff />

                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className='z-50  sticky rounded-full text-gray-400 hover:text-white '>
                                    {isSearchComponentVisible ? (
                                        <HiOutlineX
                                            onClick={closeSearch}
                                            className="h-7 w-7 mr-[72px]" />
                                    ) : (
                                        <HiOutlineSearch
                                            onClick={openSearch}
                                            className="h-7 w-7 mr-[72px]" />
                                    )}
                                </button>
                                {/* Conditional rendering of SearchComponent */}
                                {isSearchComponentVisible && (

                                    <SearchButton closeSearch={closeSearch} />
                                )}
                            </div>
                            {/* Profile dropdown */}
                            <div className="relative ml-3 px-2 parent-homelist hover:bg-[#191E25] cursor-pointer">
                                <div>
                                    {authenticated ? (
                                        <span type="button" className="relative flex rounded-full text-sm">
                                            <span className='text-[#AAA] hidden change-button sm:block text-xl mr-2 font-semibold
                                             hover:bg-[#191E25] hover:text-white items-center'>
                                                {user.name}
                                            </span>
                                            <img className="h-8 w-8 rounded-full" src={user?.profileImage} alt="" />
                                        </span>
                                    ) : <img className="h-8 w-8 rounded-full" src={profile} alt="" />}
                                </div>

                                {/* Dropdown menu */}
                                <div className="absolute home-list right-0 z-50 origin-top-right rounded-md bg-[#191E25] flex flex-col">

                                    {/* <ProfileCategories/> fixed at the bottom */}
                                    {authenticated ? <div className="self-end">

                                        <UserList />
                                    </div>
                                        : <div>
                                            <ul className='home-list'>
                                                <li><Link to="/signinpage" className={`${headerlistTag}`} style={{ whiteSpace: "nowrap" }}>Sign In</Link></li>
                                                <li><Link to="/help" className={`${headerlistTag}`} style={{ whiteSpace: "nowrap" }} >Help</Link></li>
                                                <li><Link to="/anonymous" className={`${headerlistTag}`} style={{ whiteSpace: "nowrap" }}>Watch Anywhere</Link></li>
                                            </ul>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile menu */}
                <div className={`sm:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <Link to="/" className={`${menutoggle}`}>
                            <span><AiFillHome className='mt-1 mr-1' /></span>
                            Home
                        </Link>
                        <Link to="/banner" className={`${menutoggle}`}>
                            <span><CgToolbox className='mt-1 mr-1' /></span>
                            Stores
                        </Link>
                        <Link to="/anonymous" className={`${menutoggle}`}>
                            <span><MdLiveTv className='mt-1 mr-1' /></span>
                            Live TV
                        </Link>
                        <Link to="/anonymous" className={`${menutoggle}`}>
                            <span><TbCategory className='mt-1 mr-1' /></span>
                            Categories
                        </Link>

                        <Link to="/watchlist" className={`${menutoggle}`}>
                            <span><TbCategory className='mt-1 mr-1' /></span>
                            My stuff
                        </Link>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Header;