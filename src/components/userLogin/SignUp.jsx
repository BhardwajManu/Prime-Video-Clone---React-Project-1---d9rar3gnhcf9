import React, { useState } from 'react'
import loginlogo from '../../assets/images/loginlogo.png'
import { BiSolidRightArrow } from "react-icons/bi";



const SignUp = () => {
    const [clientName, setClientName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");

    const [errClientName, setErrClientName] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errPassword, setErrPassword] = useState("");
    const [errCPassword, setErrCPassword] = useState("");

    // Handle function start
    const handleName = (e) => {
        setClientName(e.target.value)
        setErrClientName("");
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        setErrEmail("");
    }
    const handlepassword = (e) => {
        setPassword(e.target.value)
        setErrPassword("");
    }
    const handleCpassword = (e) => {
        setCPassword(e.target.value)
        setErrCPassword("");
    }

    // email validation function
    const emailValidation = (email) => {
        return String(email).toLowerCase.match(/^\w+([-]?\w+)*@\w+([-]?\W+)*(\.\w{2,3})+$/);
    }

    // Submit button start
    const handleRegistration = (e) => {
        e.preventDefault()
        if (!clientName) {
            setErrClientName("Enter a name")
        }
        if (!email) {
            setErrEmail("Enter a email")
        }
        // else{
        //   if(!emailValidation(email)){
        //     setErrEmail("Enter a valid email");
        //   }
        // }
        if (!password) {
            setErrPassword("Enter a password")
        }
        else {
            if (password.length < 6) {
                setErrPassword("Password must be atleast 6 characters")
            }
        }
        if (!cPassword) {
            setErrCPassword("Confirm your password")
        }
        else {
            if (!cPassword == password) {
                setErrCPassword("password not matched")
            }
        }
    }

    if (clientName && email && emailValidation(email) && password && password.length >= 6 && cPassword && cPassword === password) {
        clientName("")
        email("")
        password("")
        cPassword("")
        console.log(clientName, email, password, cPassword);
    }




    return (
        <div className='w-full '>
            <div className='wid-full bg-white py-5'>
                <form className='w-[370px] mx-auto flex flex-col items-center'>
                    <img className='w-32' src={loginlogo} alt='' />
                    <div className='w=full border border-zinc-200 p-6'>
                        <h2 className='font-titleFont text-3xl font-medium mb-4'>Create account</h2>

                        <div className='flex flex-col gap-3'>

                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Your name</p>
                                <input className='w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' type='name' placeholder='First and last name' onChange={handleName} />
                                {
                                    errClientName && (
                                        <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2'><span className='italic text-red-600 text-xs font-semibold '>!</span>{errClientName}</p>
                                    )
                                }
                            </div>

                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Email</p>
                                <input className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' type='email ' onChange={handleEmail} />
                                {
                                    errEmail && (
                                        <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2'><span className='italic text-red-600 text-xs font-semibold '>!</span>{errEmail}</p>
                                    )
                                }
                            </div>

                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Password</p>
                                <input className='w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' type='password ' placeholder='At least 6 characters' onChange={handlepassword} />
                                {
                                    errPassword && (
                                        <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2'><span className='italic text-red-600 text-xs font-semibold '>!</span>{errPassword}</p>
                                    )
                                }
                            </div>

                            <div>
                                <p className='text-xs text-gray-400'>Passwords must be at least 6 characters</p>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Re-enter Password</p>
                                <input className='w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' type='password ' onChange={handleCpassword} />
                                {
                                    errCPassword && (
                                        <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2'><span className='italic text-red-600 text-xs font-semibold '>!</span>{errCPassword}</p>
                                    )
                                }
                            </div>

                            <button onClick={handleRegistration} className='w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border  border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>Continue</button>
                        </div>

                        <p className='text-[14px] test-black leading-4 mt-4'>By creating an account, you agree to the Amazon</p>
                        <p className='text-blue-600 text-[12px] hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>Conditions of Use and Privacy Notice.</p>
                    </div>
                    <p className='w-full text-[2px] text-gray-400 mt-4'>
                        <span className='w-full h-[1px] bg-zinc-100'></span>
                    </p>
                    <div>
                        <p className='text-[14px] text-black flex justify-start gap-2'>Already have an account?<span className='text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Sign in</span><span><BiSolidRightArrow className='w-2 mt-[4px] ml-[1px] group' /></span></p>
                    </div>
                </form>
            </div>
            <div className='w-full bg-gradient-to-t from-white via-white to bg-gray-50 flex flex-col items-center justify-center py-6'>
                <div className='flex flex-col gap-6 items-center justify-center'>
                    <div className='flex items-center gap-6'>
                        <p className='text-blue-600 text-xs hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>Terms and Privacy Notice</p>
                        <p className='text-blue-600 text-xs hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>Send us feedback</p>
                        <p className='text-blue-600 text-xs hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>Help</p>
                    </div>
                    <div>
                        <p className='text-xs text-gray-600'>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;