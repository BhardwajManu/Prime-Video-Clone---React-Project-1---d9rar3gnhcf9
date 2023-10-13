import React from 'react'
import loginlogo from '../../assets/images/login.png'
import { BiSolidRightArrow } from "react-icons/bi";
import { Link } from 'react-router-dom';



const SignIn = () => {
    return (
        <div className='w-full '>
            <div className='w-full h-screen bg-white py-5'>
                <form className='w-[350px] mx-auto flex flex-col items-center'>
                    <img className='w-32' src={loginlogo} alt='' />
                    <div className='w=full border border-zinc-200 p-6'>
                        <h2 className='font-titleFont text-3xl font-medium mb-4'>Sign in</h2>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Email or mobile phone number</p>
                                <input className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' type='email' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Password</p>
                                <input className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' type='password ' />
                            </div>
                            <button onClick={(e) => e.preventDefault()} className='w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border  border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>Continue</button>
                        </div>
                        <p className='text-[14px] test-black leading-4 mt-4'>By continuing, you agree to the Amazon <span className='text-blue-600 hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>Conditions of Use and Privacy Notice.</span></p>
                        <p className='text-sx text-gray-600 mt-4 cursor-pointer flex items-center gap-1 group'><BiSolidRightArrow /><span className='text-[14px] text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1'>Need help?</span></p>
                    </div>
                    <p className='w-full text-xs text-gray-400 mt-4 flex items-center'>
                        <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
                        <span className='w-1/3 text-center'>New to Amazon?</span>
                        <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
                    </p>
                    <Link to="/signuppage"><button className='w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-white to-white hover:bg-gradient-to-b border  border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>Create your Amazon account</button></Link>
                </form>
                <div className='w-full mt-4 bg-gradient-to-t from-white via-white to bg-gray-50 flex flex-col items-center justify-center py-10'>
                    <div className='flex flex-col gap-6 items-center justify-center'>
                        <div className='flex items-center gap-6'>
                            <p className='text-blue-600 hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>Terms and Privacy Notice</p>
                            <p className='text-blue-600 hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>Send us feedback</p>
                            <p className='text-blue-600 hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>Help</p>
                        </div>
                        <div>
                            <p className='text-xs text-gray-600'>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignIn;