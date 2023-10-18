// import React, { useState } from 'react'data
// import loginlogo from '../../assets/images/login.png'
// import { BiSolidRightArrow } from "react-icons/bi";
// import { Link } from 'react-router-dom';



// const SignIn = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Perform form submission logic here, such as sending data to the server or handling it as needed
//         console.log("Email: ", email);
//         console.log("Password: ", password);
//     };


//     return (
//         <div className='w-full '>
//             <div className='w-full h-screen bg-white py-5'>
//                 <form className='w-[350px] mx-auto flex flex-col items-center' onSubmit={handleSubmit}>
//                     <img className='w-32' src={loginlogo} alt='' />
//                     <div className='w=full border border-zinc-200 p-6'>
//                         <h2 className='font-titleFont text-3xl font-medium mb-4'>Sign in</h2>
//                         <div className='flex flex-col gap-3'>
//                             <div className='flex flex-col gap-2'>
//                                 <p className='text-sm font-medium'>Email or mobile phone number</p>
//                                 <input className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100'
//                                     type='email'
//                                     value={email}
//                                     onChange={handleEmailChange} />
//                             </div>
//                             <div className='flex flex-col gap-2'>
//                                 <p className='text-sm font-medium'>Password</p>
//                                 <input className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100'
//                                     type='password '
//                                     value={password}
//                                     onChange={handlePasswordChange} />
//                             </div>
//                             <button type="submit" className='w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border  border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>Continue</button>
//                         </div>
//                         <p className='text-[14px] test-black leading-4 mt-4'>By continuing, you agree to the Amazon <span className='text-blue-600 hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>Conditions of Use and Privacy Notice.</span></p>
//                         <p className='text-sx text-gray-600 mt-4 cursor-pointer flex items-center gap-1 group'><BiSolidRightArrow /><span className='text-[14px] text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1'>Need help?</span></p>
//                     </div>
//                     <p className='w-full text-xs text-gray-400 mt-4 flex items-center'>
//                         <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
//                         <span className='w-1/3 text-center'>New to Amazon?</span>
//                         <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
//                     </p>
//                     <Link to="/signuppage"><button className='w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-white to-white hover:bg-gradient-to-b border  border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>Create your Amazon account</button></Link>
//                 </form>
//                 <div className='w-full mt-4 bg-gradient-to-t from-white via-white to bg-gray-50 flex flex-col items-center justify-center py-10'>
//                     <div className='flex flex-col gap-6 items-center justify-center'>
//                         <div className='flex items-center gap-6'>
//                             <p className='text-blue-600 hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>Terms and Privacy Notice</p>
//                             <p className='text-blue-600 hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>Send us feedback</p>
//                             <p className='text-blue-600 hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>Help</p>
//                         </div>
//                         <div>
//                             <p className='text-xs text-gray-600'>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default SignIn;


import React, { useEffect, useState } from 'react'
import loginlogo from '../../assets/images/login.png'
import { BiSolidRightArrow } from "react-icons/bi";
import useFetch from '../../Hooks/useFetch';
import { useAuthContext } from '../../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

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
        <div className='w-full min-h-screen'>
            <div className='wid-full bg-white py-5'>
                <form onSubmit={handleSubmit} className='w-[370px] mx-auto flex flex-col items-center'>
                    <img className='w-32' src={loginlogo} alt='' />
                    <div className='w=full border border-zinc-200 p-6'>
                        <h2 className='font-titleFont text-3xl font-medium mb-4'>Create account</h2>

                        <div className='flex flex-col gap-3'>


                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Email</p>
                                <input className={`w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 ${errors.email ? "border-red-600" : ""}`}

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
                                <input className={`w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 ${errors.password ? "border-red-600" : ""}`}

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

                            <button className='w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border  border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>Continue</button>
                        </div>

                        <p className='text-[14px] test-black leading-4 mt-4'>By creating an account, you agree to the Amazon</p>
                        <p className='text-blue-600 text-[12px] hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>Conditions of Use and Privacy Notice.</p>
                    </div>
                    <p className='w-full text-[2px] text-gray-400 mt-4'>
                        <span className='w-full h-[1px] bg-zinc-100'></span>
                    </p>
                    <div>


                        <Link to="/signuppage"><button className='px-2 w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t from-white to-white hover:bg-gradient-to-b border  border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>Create your Amazon account</button></Link>

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

export default SignIn;