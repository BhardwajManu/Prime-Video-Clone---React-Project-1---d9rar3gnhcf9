import React from 'react';
import headerLogo from '../../assets/images/Logo-min.png';
import profile from '../../assets/images/user.png';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const Useredit = () => {
    return (
        <>

            <div className='bg-[#0F171e] min-h-screen'>

                {/* Header */}
                <div className='px-6 sm:px-10 py-6 w-full sm:w-[13vw] text-[#FFFFFF]'>
                    <Link to="/"><img src={headerLogo} alt='' /></Link>
                </div>

                <div className='flex flex-col items-center justify-center gap-1'>

                    {/* Title */}
                    <h1 className='text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] sm:text-center'>
                        Edit profile
                    </h1>

                    {/* Profile Image */}
                    <img
                        src={profile}
                        alt=''
                        className='p-2 m-4 sm:w-[100px] sm:h-[100px] w-[60px] h-[60px] rounded-full hover:border-2 hover:border-solid hover:border-white cursor-pointer'
                    />

                    {/* Change Text */}
                    <p className='text-[#8197A4] w-[51.29px] h-[20px] font-[15px]'>
                        change
                    </p>

                    {/* Input Field */}
                    <input
                        type='text'
                        className='bg-[#0000004D] px-[11px] py-[11px] w-full sm:w-[320px] h-[48.2px] mt-10 border-2 border-solid border-[#425265] rounded'
                        placeholder='Your Name'
                    />

                    {/* Account PIN and Locks */}
                    <div className='flex justify-between items-center gap-2 mt-6'>
                        <div className='flex flex-col'>
                            <p className='w-full sm:w-[420px] h-[36px] text-[#FFFFFF] font-semibold'>
                                Account PIN and locks
                            </p>
                            <p className='w-full sm:w-[420px] h-[36px] text-[#8197A4] font-[15px]'>
                                This PIN bypasses Purchase and Viewing in any profile on this account. It also overrides all profile lock PINs.
                            </p>
                        </div>
                        <div>
                            <Link to="/usersettings"><button className='text-[#FFFFFF] bg-[#425265] w-[100px] h-[48px] rounded'>
                                Manage
                            </button></Link>
                        </div>
                    </div>

                    {/* Horizontal Line */}
                    <hr className='text-[#FFFFFF] w-4/5 sm:w-2/5 mt-8'></hr>
                </div>

                {/* Remove Profile */}
                <div className='flex flex-col mx-6 sm:mr-64 mt-4 items-center'>
                    <p className='w-full sm:w-[312px] h-[36px] text-[#FFFFFF] font-semibold'>
                        Remove profile
                    </p>
                    <p className='w-full sm:w-[312px] h-[20px] text-[#8197A4] font-[15px]'>
                        The account profile can't be removed.
                    </p>
                </div>

                {/* Buttons */}
                <div className='flex justify-center items-center mt-12'>
                    <Link to="/manageprofiles"><button className='w-[90.7px] h-[48px] text-[#FFFFFF] font-[17px] py-3 px-5 mr-4 bg-[#425265] rounded'>
                        Cancel
                    </button></Link>
                    <button className='opacity-20 w-[120.7px] h-[48px] text-[#FFFFFF] bg-[#425265] rounded flex items-center justify-center'>
                        Save changes
                    </button>
                </div>
            </div>
            <Footer />
        </>


    );
};

export default Useredit;