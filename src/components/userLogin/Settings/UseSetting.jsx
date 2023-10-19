import React, { useState } from 'react';
import loginlogo from '../../../assets/images/Login.png';
import { Link } from 'react-router-dom';
import { BiSolidRightArrow } from 'react-icons/bi';
import { useAuthContext } from '../../../Context/AuthContext';
import useFetch from '../../../Hooks/useFetch'



const UseSetting = () => {
    const { user } = useAuthContext()
    const [currentPassword, setCurrentPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { data, patch } = useFetch(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!(!!currentPassword && password === confirmPassword)) {
            alert('Password doesnot matches.')
            return
        }
        await patch("/user/updateMyPassword", { name: user.name, email: user.email, passwordCurrent: currentPassword, password: password, appType: "ott" })
        console.log(data);
    };
    return (
        <div className='w-full'>
            <div className='w-full min-h-screen bg-white py-5'>
                <form onSubmit={handleSubmit} className='w-[350px] mx-auto flex flex-col items-center'>
                    <img className='w-32' src={loginlogo} alt='' />
                    <div className='w-full border border-zinc-200 p-6'>
                        <h2 className='font-titleFont text-2xl sm:text-3xl font-medium mb-4'>Sign in</h2>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-xs sm:text-sm font-medium'>Current password</p>
                                <input
                                    className='w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#E77600] focus-within:shadow-amazonInput duration-100'
                                    type='password'
                                    name='currentPassword'
                                    placeholder='Current password'
                                    value={currentPassword}
                                    onChange={({ target }) => {
                                        setCurrentPassword(target.value)
                                    }}
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-xs sm:text-sm font-medium'>New password</p>
                                <input
                                    className='w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#E77600] focus-within:shadow-amazonInput duration-100'
                                    type='password'
                                    name='newPassword'
                                    placeholder='At least 6 characters'
                                    value={password}
                                    onChange={({ target }) => {
                                        setPassword(target.value)
                                    }}
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-xs sm:text-sm font-medium'>Confirm password</p>
                                <input
                                    className='w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#E77600] focus-within:shadow-amazonInput duration-100'
                                    type='password'
                                    name='newPasswordConfirm'
                                    placeholder='At least 6 characters'
                                    value={confirmPassword}
                                    onChange={({ target }) => {
                                        setConfirmPassword(target.value)
                                    }}
                                />
                            </div>
                            <button
                                className='w-full py-1.5 text-sm font-normal rounded-sm bg-[#F7CA00] hover:bg-gradient-to-b border  border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'
                                type="submit"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </form>
                <div className='w-full mt-4 bg-gradient-to-t from-white via-white to bg-gray-50 flex flex-col items-center justify-center py-10'>
                    <div className='flex flex-col gap-6 items-center'>
                        <div className='flex items-center gap-6'>
                            <Link to="/learnmore"><p className='text-blue-600 hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>
                                Terms and Privacy Notice
                            </p></Link>
                            <Link to="/signinpage"><p className='text-blue-600 hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>
                                Send us feedback
                            </p></Link>
                            <Link to="/help"><p className='text-blue-600 hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>Help</p></Link>
                        </div>
                        <div>
                            <p className='text-xs text-gray-600'>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UseSetting;