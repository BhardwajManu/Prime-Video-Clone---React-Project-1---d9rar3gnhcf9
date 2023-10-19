import React, { useState, useEffect } from 'react'
import loginlogo from '../../assets/images/login.png'
import { BiSolidRightArrow } from "react-icons/bi";
import { Link } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { useAuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';





const initialData = {
    email: "",
    password: ""
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const SignIn = () => {

    const [errors, setErrors] = useState(initialData)
    const [formData, setFormData] = useState(initialData)
    const { data, post } = useFetch(null)
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
        await post("/user/login", { ...formData, appType: "ott" })
        // console.log("login", data)
    }

    useEffect(() => {
        if (data?.data) {
            signUser(data?.data)
        }
    }, [data])

    useEffect(() => {
        if (authenticated) {
            navigate("/")
        }

    }, [authenticated])


    return (
        <div className='w-full'>
            <div className='w-full min-h-screen bg-white py-5 '>
                <form onSubmit={handleSubmit} className='w-[350px] mx-auto flex flex-col items-center '>
                    <img className='w-32' src={loginlogo} alt='' />
                    <div className='w-full border border-zinc-200 p-6  rounded-lg'>
                        <h2 className='font-titleFont text-2xl sm:text-3xl font-medium mb-4'>Sign in</h2>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-xs sm:text-sm font-medium'>Email or mobile phone number</p>
                                <input
                                    className={`w-full py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 ${errors.email ? "border-red-600" : ""}`}
                                    type='email'
                                    name='email'
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
                                <p className='text-xs sm:text-sm font-medium'>Password</p>
                                <input
                                    className={`w-full py-1 border border-zinc-400 px-2 text-base rounded-md outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 ${errors.password ? "border-red-600" : ""}`}
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
                            <button
                                type='submit'
                                className='w-full py-1.5 text-sm font-normal rounded-lg bg-[#F7CA00] hover:bg-gradient-to-b border  border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>
                                Continue</button>
                        </div>
                        <p className='text-xs sm:text-sm text-black leading-4 mt-4'>By continuing, you agree to the Amazon <Link to="/learnmore"><span className='text-blue-600 hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>Conditions of Use and Privacy Notice.</span></Link></p>
                        <p className='text-xs sm:text-sm text-gray-600 mt-4 cursor-pointer flex items-center gap-1 group'><BiSolidRightArrow /><Link to="/help"><span className='text-xs sm:text-sm text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1'>Need help</span></Link></p>
                    </div>
                    <p className='w-full text-xs sm:text-sm text-gray-400 mt-4 flex items-center'>
                        <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
                        <span className='w-1/3 text-center'>New to Amazon?</span>
                        <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
                    </p>
                    <Link to="/signuppage">
                        <button className='w-full py-1 sm:py-1 px-4 mt-4   font-normal rounded-md  hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>
                            Create your Amazon account
                        </button>
                    </Link>
                </form>
                <div className='w-full mt-4 bg-gradient-to-t from-white via-white to bg-gray-100 flex flex-col items-center justify-center py-10'>
                    <div className='flex flex-col gap-6 items-center'>
                        <div className='flex items-center gap-6'>
                            <Link to="/learnmore"> <p className='text-blue-600 hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>Terms and Privacy Notice</p></Link>
                            <Link to="/signinpage"> <p className='text-blue-600 hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>Send us feedback</p></Link>
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
export default SignIn





