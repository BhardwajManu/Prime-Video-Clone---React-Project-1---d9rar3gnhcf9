import React, { useEffect, useState } from 'react';
import headerLogo from '../../assets/images/Logo-min.png';
import profile from '../../assets/images/user.png';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import useFetch from '../../Hooks/useFetch';
import { useAuthContext } from '../../Context/AuthContext';

const Useredit = () => {
    const { data, patch } = useFetch(null)
    const { user, setProfileImage } = useAuthContext()
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("prime_user")) || "")
    const [name, setName] = useState(`${userInfo.name}`)



    useEffect(() => {
        if (!data)
            return
        setProfileImage(data.data.user.profileImage)
    }, [data])

    const handleProfileImageChange = async (e) => {
        if (!(e.target.files.length > 0)) {
            return
        }
        let formData = new FormData()
        formData.append("profileImage", e.target.files[0], "file.png")
        await patch("/user/updateProfileImage", formData)
    }


    const handleNameChange = (event) => {
        console.log(event)
        setName(event.target.value)

    }

    return (
        <>

            <div className='bg-[#0F171e] min-h-screen'>

                {/* Header */}
                <div className='px-6 sm:px-10 py-6 w-full sm:w-[13vw] text-[#FFFFFF]'>
                    <Link to="/">
                        <img src={headerLogo} alt='' /></Link>
                </div>

                <div className='flex flex-col items-center justify-center gap-1'>

                    {/* Title */}
                    <h1 className='text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] sm:text-center cursor-default'>
                        Edit profile
                    </h1>

                    {/* Profile Image */}
                    <div>
                        <img
                            src={user.profileImage ? user.profileImage : profile}
                            alt=''
                            className='p-2 m-4 sm:w-[100px] sm:h-[100px] w-[60px] h-[60px] rounded-full hover:border-2 hover:border-solid
                             hover:border-white cursor-pointer'
                        />

                        {/* Change Text */}
                        <label htmlFor='profileImage' className='change-button text-[#AAA] flex items-center justify-center font-semibold 
                        text-xl cursor-pointer'>
                            Change
                            <input
                                type='file'
                                id='profileImage'
                                className='hidden'
                                accept="image/*"
                                onChange={handleProfileImageChange} />
                        </label>
                    </div>

                    {/* Input Field */}
                    <input
                        type='text'
                        name="name"
                        className='bg-[#0000004D] text-white px-[11px] py-[11px] w-full sm:w-[320px] h-[48.2px] mt-10 border-2 
                        border-solid border-[#425265] rounded'
                        value={name}
                        placeholder=''
                        onChange={handleNameChange}
                    />

                    {/* Account PIN and Locks */}
                    <div className='flex justify-between items-center gap-2 mt-6 cursor-default'>
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
                <div className='flex flex-col mx-6 sm:mr-64 mt-4 items-center cursor-default'>
                    <p className='w-full sm:w-[312px] h-[36px] text-[#FFFFFF] font-semibold'>
                        Remove profile
                    </p>
                    <p className='w-full sm:w-[312px] h-[20px] text-[#8197A4] font-[15px]'>
                        The account profile can't be removed.
                    </p>
                </div>

                {/* Buttons */}
                <div className='flex justify-center items-center mt-12'>
                    <Link to="/manageprofiles"><button className='w-[90.7px] h-[48px] text-[#FFFFFF] font-[17px] py-3 px-5 mr-4
                     bg-[#425265] rounded'>
                        Cancel
                    </button>
                    </Link>
                    <button className='opacity-20 w-[120.7px] h-[48px] text-[#FFFFFF] bg-[#425265] rounded flex items-center 
                    justify-center'>
                        Save changes
                    </button>
                </div>
            </div>
            <Footer />
        </>

    );
};

export default Useredit;