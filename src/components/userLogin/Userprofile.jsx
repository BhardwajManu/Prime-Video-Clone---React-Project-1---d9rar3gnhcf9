import React, { useState } from 'react'
import headerLogo from '../../assets/images/Logo-min.png'
import profile from '../../assets/images/user.png'
import profilekid from '../../assets/images/profileImage.png'
import { PiPlusBold } from "react-icons/pi";
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const Userprofile = () => {
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("prime_user")) || "")



    return (
        <>
            <div className='bg-[#0F171e] h-[80vh]'>

                <div className='px-6 sm:px-10 py-6 w-[13vw] text-[#FFFFFF]'>
                    <Link to="/"><img src={headerLogo} alt='' /></Link>
                </div>

                <div className='flex flex-col items-center justify-around gap-6 sm:gap-10 lg:gap-12'>

                    <h1 className='text-2xl sm:text-3xl font-extrabold text-[#FFFFFF]'>Who's Watching?</h1>

                    <div className='flex flex-col gap-6 sm:gap-12 md:gap-24 lg:gap-32 items-center'>

                        <div className='flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-5'>
                            <div>
                                <img
                                    src={profile}
                                    alt=''
                                    className='p-[2px] m-[12px] w-[132px] h-[132px] rounded-full hover:border-2 hover:border-solid
                                  hover:border-white cursor-pointer' />
                                <span className='text-[#AAA] font-bold cursor-pointer text-lg tracking-wide mx-12 hover:text-white'>{userInfo.name}</span>
                            </div>
                            <div>
                                <img
                                    src={profilekid}
                                    alt=''
                                    className='p-[2px] m-[12px] w-[132px] h-[132px] rounded-full hover:border-2 hover:border-solid
                                  hover:border-white cursor-pointer' />
                                <span className='text-[#AAA] font-bold cursor-pointer text-lg tracking-wide mx-[54px] hover:text-white'>Kids</span>
                            </div>
                            <div>
                                <button className='bg-[#425265] p-[2px] m-[12px] w-[132px] h-[132px] flex items-center justify-center 
                                rounded-full hover:border-2 hover:border-solid hover:border-white cursor-pointer'>
                                    <PiPlusBold className='cursor-pointer h-[33px] w-[33px] text-white' />
                                </button>
                                <span className='text-[#AAA] font-bold cursor-pointer text-lg tracking-wide mx-10 hover:text-white'>
                                    Add new
                                </span>
                            </div>
                        </div>

                        <div>
                            <Link to="/editprofile">
                                <button className='text-[#FFFFFF] bg-[#425265] w-[115.14px] h-[48px] rounded'>
                                    Edit profile
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Userprofile