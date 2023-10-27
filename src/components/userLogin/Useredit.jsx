import React, { useEffect, useState } from 'react';
import headerLogo from '../../assets/images/Logo-min.png';
import profile from '../../assets/images/user.png';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import useFetch from '../../Hooks/useFetch';
import { useAuthContext } from '../../Context/AuthContext';

const Useredit = () => {
    const { data, error, patch } = useFetch(null)
    const { user, setUser } = useAuthContext()
    const [name, setName] = useState(``);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setName(e.target.value)
    }

    useEffect(() => {
        // eslint-disable-next-line no-extra-boolean-cast
        if (!!data?.data?.user) {
            setUser({ data: { ...data.data.user } })
            navigate("/manageprofiles")
        }

        if (error) {
            alert(error)
            return
        }
    }, [data])

    useEffect(() => {
        if (user) { setName(user.name) }
    }, [user])

    const handleProfileImageChange = async (e) => {
        if (!(e.target.files.length > 0)) {
            return
        }
        let formData = new FormData()
        formData.append("profileImage", e.target.files[0], "file.png")
        await patch("/user/updateProfileImage", formData)
    }

    const updateMe = async () => {
        if (user.name !== name && !!name) {
            await patch("user/updateme", { name: name });
        }
    }

    return (
        <>
            <div className='bg-[#0F171e] min-h-screen '>

                {/* Header */}
                <Link to='/'>
                    <div className='px-6 sm:px-10 py-6 w-full ml-5  md:w-[15vw] text-[#FFFFFF]'>
                        <img src={headerLogo} alt='' />
                    </div>
                </Link>

                <div className='flex flex-col items-center justify-center sm:px-4 px-4 gap-1'>

                    {/* Title */}
                    <h1 className='text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] sm:text-center'>
                        Edit profile
                    </h1>

                    {/* Profile Image */}
                    <img
                        src={user.profileImage ? user.profileImage : profile}
                        alt=''
                        className='p-2 m-4 sm:w-[100px] sm:h-[100px] w-[60px] h-[60px] rounded-full hover:border-2 hover:border-solid hover:border-white cursor-pointer'
                    />

                    {/* Change Text */}
                    <label htmlFor='profileImage' className='change-button text-[#8197A4] w-[51.29px] h-[20px] font-[15px] cursor-pointer'>
                        change
                        <input type='file' id='profileImage' className='hidden' accept="image/*" onChange={handleProfileImageChange} />
                    </label>

                    {/* Input Field */}
                    <input
                        onChange={handleChange}
                        value={name}
                        name='name'
                        type='text'
                        className='bg-[#0000004D] text-white px-[11px] py-[11px] w-full sm:w-[320px] h-[48.2px] mt-10 border-2 border-solid border-[#425265] rounded'

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
                            <Link to='/settingsignin'>
                                <button className='text-[#FFFFFF] bg-[#425265] w-[100px] h-[48px] rounded'>
                                    Manage
                                </button>
                            </Link>
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
                    <Link to='/manageprofile'>
                        <button className='w-[90.7px] h-[48px] text-[#FFFFFF] font-[17px] py-3 px-5 mr-4 bg-[#425265] rounded'>
                            Cancel
                        </button>
                    </Link>

                    <button
                        onClick={() => {
                            updateMe()
                        }}
                        disabled={user?.name === name || !name} className='disabled:opacity-20 w-[120.7px] h-[48px] text-[#FFFFFF] bg-[#425265] rounded flex items-center justify-center'>
                        Save changes
                    </button>

                </div>
            </div>

            <Footer />

        </>


    );
};
export default Useredit;