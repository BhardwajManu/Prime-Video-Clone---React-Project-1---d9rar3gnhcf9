import React from 'react'
import kidprofile from '../../assets/images/kidProfile.png'
import { PiPlusBold } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Context/AuthContext';


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
                <ul className="flex flex-col md:flex-row justify-between py-2 px-4 gap-3 tracking-[0.32px] font-medium text-[20px] text-[#AAA]">

                    <div className='flex flex-col gap-5'>
                        <h1 className="text-[#FFFFFF] text-2xl font-medium">Your account</h1>
                        <div className='flex flex-col gap-3 '>
                            <Link to="/help"><li className='hover:bg-white hover:text-black hover:rounded-lg py-2 px-1'>Help</li></Link>
                            <Link to="/anonymous"><li className='hover:bg-white hover:text-black hover:rounded-lg py-2 px-1'>Watch Anywhere</li></Link>
                            <Link to="/usersettings"><li className='hover:bg-white hover:text-black hover:rounded-lg py-2 px-1'>Account & Settings</li></Link>
                            <Link to="/primeprofits"><li className='hover:bg-white hover:text-black hover:rounded-lg py-2 px-1'>Prime Benefits</li></Link>
                            <li onClick={handleSignOut} className='hover:bg-white hover:text-black hover:rounded-lg py-2 px-1 cursor-pointer'>Sign out</li>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <h1 className="text-[#FFFFFF] text-2xl font-medium">Profiles</h1>
                        <div className='flex flex-col gap-3'>
                            <Link to="/anonymous"><li className='hover:bg-white hover:text-black flex gap-2 hover:rounded-lg py-2 px-1'><img className='w-[30px] h-[30px]' src={kidprofile} alt='' /><span>Kids</span></li></Link>
                            <Link to="/anonymous"><li className='hover:bg-white hover:text-black flex gap-2 hover:rounded-lg py-2 px-1'><button className='bg-[#425265] w-[30px] h-[30px] flex items-center justify-center rounded-full'><PiPlusBold className='text-[#AAAAAA]' />
                            </button>Add new</li></Link>
                            <Link to="/manageprofiles"><li className='hover:bg-white hover:text-black hover:rounded-lg py-2 px-1'>Manage profile</li></Link>
                            <Link to="/learnmore"><li className='hover:bg-white hover:text-black hover:rounded-lg py-2 px-1'>Learn more</li></Link>
                        </div>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default UserList