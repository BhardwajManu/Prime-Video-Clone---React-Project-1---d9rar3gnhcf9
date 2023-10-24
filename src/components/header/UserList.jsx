import React, { useState } from 'react'
import kidprofile from '../../assets/images/kidProfile.png'
import { PiPlusBold } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Context/AuthContext';
import { userlistTag } from "../../styles/tailwindClasses";


const UserList = () => {
    const { logoutUser } = useAuthContext()
    const navigate = useNavigate()

    const handleSignOut = () => {
        logoutUser()
        navigate("/")
    }

    return (
        <>
            <div className='bg-[#191E25] py-2 h-auto w-full md:w-[430px]'>
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