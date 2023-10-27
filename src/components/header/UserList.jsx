import React, { useState } from 'react'
import kidprofile from '../../assets/images/kidProfile.png'
import { PiPlusBold } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Context/AuthContext';
import { userlistTag } from "../../styles/tailwindClasses";
import profile from '../../assets/images/loginpic.png';
import { AiFillHome } from "react-icons/ai";
import { TbCategory } from "react-icons/tb";
import { MdLiveTv } from "react-icons/md";
import { CgToolbox } from "react-icons/cg";
import { menutoggle } from '../../styles/tailwindClasses'




const UserList = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { logoutUser, user, authenticated } = useAuthContext()
    const navigate = useNavigate()

    const handleSignOut = () => {
        logoutUser()
        navigate("/")
    }
    //Toggle mobile menu
    const toggleProfileIcon = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div className="absolute inset-x-0 right-0 flex items-start sm:hidden z-50">
                {/* Mobile menu button */}
                <button
                    onClick={toggleProfileIcon}
                    type="button"
                    className="relative inline-flex items-center justify-center rounded-md p-2
                             text-gray-400 hover:bg-gray-700 hover:text-white">
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Open main menu</span>
                    {/* Icon when the menu is closed */}
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
                </button>
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
            <div className='bg-[#191E25] py-2 h-auto w-full md:w-[430px] rounded-xl hidden sm:block'>
                <ul className="flex flex-col md:flex-row justify-between py-2 px-9 font-medium text-lg text-[#AAA]">

                    <div className='flex flex-col gap-3'>
                        <span className="text-[#FFFFFF] text-xl font-medium">Your account</span>
                        <div className='flex flex-col  '>
                            <Link to="/help"><li className={`${userlistTag}`}>Help</li></Link>
                            <Link to="/anonymous"><li className={`${userlistTag}`}>Watch Anywhere</li></Link>
                            <Link to="/usersettings"><li className={`${userlistTag}`}>Account & Settings</li></Link>
                            <Link to="/primeprofits"><li className={`${userlistTag}`}>Prime Benefits</li></Link>
                            <li
                                onClick={handleSignOut}
                                className={`${userlistTag}`}>
                                Sign out
                            </li>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h1 className="text-[#FFFFFF] text-xl font-medium">Profiles</h1>
                        <div className='flex flex-col '>
                            <Link
                                to="/anonymous"><li
                                    className={`${userlistTag} flex gap-2`}>
                                    <img
                                        className='w-[30px] h-[30px]'
                                        src={kidprofile}
                                        alt=''

                                    />
                                    <span>Kids</span>
                                </li>
                            </Link>
                            <Link to="/anonymous">
                                <li className={`${userlistTag} flex gap-2`}>
                                    <button className='bg-[#425265] w-[30px] h-[30px] flex items-center justify-center rounded-full'>
                                        <PiPlusBold className='text-[#AAAAAA]' />
                                    </button>Add new</li></Link>
                            <Link to="/manageprofiles"><li className={`${userlistTag}`}>Manage profile</li></Link>
                            <Link to="/learnmore"><li className={`${userlistTag}`}>Learn more</li></Link>
                        </div>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default UserList