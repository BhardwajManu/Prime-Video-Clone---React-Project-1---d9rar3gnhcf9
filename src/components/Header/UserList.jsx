import React from 'react'
import kidprofile from '../../assets/images/kidProfile.png'
import { PiPlusBold } from "react-icons/pi";

const UserList = () => {
    return (
        <>
            <div className='bg-[#191E25] py-2 h-auto w-full md:w-[430px]'>
                <ul className="flex flex-col md:flex-row justify-between py-2 px-4 gap-3 tracking-[0.32px] font-medium text-[20px] text-[#AAA]">

                    <div className='flex flex-col gap-5'>
                        <h1 className="text-[#FFFFFF] text-2xl font-medium">Your account</h1>
                        <div className='flex flex-col gap-3 '>
                            <li className='hover:bg-white hover:text-black hover:rounded-lg py-2 px-1'>Help</li>
                            <li className='hover:bg-white hover:text-black hover:rounded-lg py-2 px-1'>Watch Anywhere</li>
                            <li className='hover:bg-white hover:text-black hover:rounded-lg py-2 px-1'>Account & Settings</li>
                            <li className='hover:bg-white hover:text-black hover:rounded-lg py-2 px-1'>Prime Benefits</li>
                            <li className='hover:bg-white hover:text-black hover:rounded-lg py-2 px-1'>Sign out</li>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <h1 className="text-[#FFFFFF] text-2xl font-medium">Profiles</h1>
                        <div className='flex flex-col gap-3'>
                            <li className='hover:bg-white hover:text-black flex gap-2 hover:rounded-lg py-2 px-1'><img className='w-[30px] h-[30px]' src={kidprofile} alt='' /><span>Kids</span></li>
                            <li className='hover:bg-white hover:text-black flex gap-2 hover:rounded-lg py-2 px-1'><button className='bg-[#425265] w-[30px] h-[30px] flex items-center justify-center rounded-full'><PiPlusBold className='text-[#AAAAAA]' />
                            </button>Add new</li>
                            <li className='hover:bg-white hover:text-black hover:rounded-lg py-2 px-1'>Manage profile</li>
                            <li className='hover:bg-white hover:text-black hover:rounded-lg py-2 px-1'>Learn more</li>
                        </div>
                    </div>

                </ul>
            </div>


        </>
    )
}

export default UserList