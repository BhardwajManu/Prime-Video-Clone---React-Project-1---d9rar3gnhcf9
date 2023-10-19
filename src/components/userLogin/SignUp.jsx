import React, { useEffect, useState } from 'react'
import loginlogo from '../../assets/images/login.png'
import { BiSolidRightArrow } from "react-icons/bi";
import useFetch from '../../Hooks/useFetch';
import { useAuthContext } from '../../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const initialData = {
    name: "",
    email: "",
    password: "",
    cPassword: "",

}
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const SignUp = () => {

    const [errors, setErrors] = useState(initialData)
    const [formData, setFormData] = useState(initialData)
    const { data, post } = useFetch({})
    const { signUser, authenticated } = useAuthContext()
    const navigate = useNavigate()



    const getErrors = (name, value) => {
        let errorMessage = "";
        if (!value) {
            errorMessage = `Enter ${name}`
        } else if (name === "email" && !validateEmail(value)) {
            errorMessage = "Enter a valid email"
        } else if (name === "password" && value.length < 6) {
            errorMessage = "Password must be atleast 6 characters"
        } else if (name === 'cPassword' && formData.password != value) {
            errorMessage = "password not matched"
        }
        return errorMessage;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value

        }))
        setErrors(prev => ({
            ...prev,
            [name]: getErrors(name, value)

        }))
    }


    const handleOnBlur = (e) => {
        const { name, value } = e.target;
        setErrors(prev => ({
            ...prev,
            [name]: getErrors(name, value)

        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (Object.values(errors).join("") || Object.values(formData).some(val => val === "")) {
            console.log(Object.values(errors).join(""))
            return
        }
        console.log(formData)
        await post("/user/signup", { ...formData, appType: "ott" })
        // console.log("sign", data)
    }
    useEffect(() => {
        if (data.data) {
            signUser(data.data)
        }
    }, [data])

    useEffect(() => {
        if (authenticated) {
            navigate("/")
        }

    }, [authenticated])



    return (
        <div className='w-full '>
            <div className='wid-full bg-white py-5'>
                <form onSubmit={handleSubmit} className='w-[370px] mx-auto flex flex-col items-center'>
                    <img className='w-32' src={loginlogo} alt='' />
                    <div className='w=full border border-zinc-200 p-6 rounded-lg'>
                        <h2 className='font-titleFont text-3xl font-medium mb-4'>Create account</h2>

                        <div className='flex flex-col gap-3 '>

                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Your name</p>
                                <input className={`w-full py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 ${errors.name ? "border-red-600" : ""}`}
                                    type='text'
                                    name="name"
                                    value={formData.name}
                                    placeholder='First and last name'
                                    onChange={handleChange}
                                    onBlur={handleOnBlur}
                                />
                                {
                                    errors.name && (
                                        <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2'>
                                            <span className='italic text-red-600 text-xs font-semibold '>!</span>
                                            {errors.name}
                                        </p>
                                    )
                                }
                            </div>

                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Email</p>
                                <input className={`w-full py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 ${errors.email ? "border-red-600" : ""}`}

                                    type='email'
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleOnBlur}
                                />
                                {
                                    errors.email && (
                                        <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2'>
                                            <span className='italic text-red-600 text-xs font-semibold '>!</span>
                                            {errors.email}
                                        </p>
                                    )
                                }
                            </div>

                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Password</p>
                                <input className={`w-full py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 ${errors.password ? "border-red-600" : ""}`}

                                    type='password'
                                    name='password'
                                    value={formData.password}
                                    placeholder='At least 6 characters'
                                    onChange={handleChange}
                                    onBlur={handleOnBlur}
                                />
                                {
                                    errors.password && (
                                        <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2'>
                                            <span className='italic text-red-600 text-xs font-semibold '>!</span>
                                            {errors.password}
                                        </p>
                                    )
                                }
                            </div>



                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Re-enter Password</p>
                                <input className={`w-full py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 ${errors.cPassword ? "border-red-600" : ""}`}

                                    type='password'
                                    name='cPassword'
                                    value={formData.cPassword}
                                    onChange={handleChange}
                                    onBlur={handleOnBlur}
                                />
                                {
                                    errors.cPassword && (
                                        <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2'>
                                            <span className='italic text-red-600 text-xs font-semibold '>!</span>
                                            {errors.cPassword}
                                        </p>
                                    )
                                }
                            </div>

                            <button className='w-full py-1.5 text-sm font-normal rounded-lg bg-[#F7CA00] hover:bg-gradient-to-b border  border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>Continue</button>
                        </div>

                        <p className='text-[14px] test-black leading-4 mt-4'>By creating an account, you agree to the Amazon</p>
                        <Link to="/learnmore"><p className='text-blue-600 text-[12px] hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>Conditions of Use and Privacy Notice.</p></Link>
                    </div>
                    <p className='w-full text-[2px] text-gray-400 mt-4'>
                        <span className='w-full h-[1px] bg-zinc-100'></span>
                    </p>
                    <div>
                        <p className='text-[14px] text-black flex justify-start gap-2'>Already have an account?
                            <Link to="/signinpage"
                                className='text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100'>Sign in
                            </Link>
                            <span><BiSolidRightArrow className='w-2 mt-[4px] ml-[1px] group' /></span>
                        </p>
                    </div>
                </form>
            </div>
            <div className='w-full bg-gradient-to-t from-white via-white to bg-gray-50 flex flex-col items-center justify-center py-6'>
                <div className='flex flex-col gap-6 items-center justify-center'>
                    <div className='flex items-center gap-6'>
                        <Link to="/learnmore"> <p className='text-blue-600 text-xs hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>Terms and Privacy Notice</p></Link>
                        <Link to="/signinpage"><p className='text-blue-600 text-xs hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>Send us feedback</p></Link>
                        <Link to="/help"> <p className='text-blue-600 text-xs hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>Help</p></Link>
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