import React from 'react'
import firstImage from '../../assets/images/firstimage.jpg'
import smallImage from '../../assets/images/small.jpg'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../Context/AuthContext'


const Landingpage = () => {
    const { authenticated } = useAuthContext()
    return (
        <>
            <div className='h-screen relative'>
                <div className="hidden md:block  min-h-screen w-screen bg-no-repeat bg-cover bg-right-top " style={{
                    backgroundImage: `linear-gradient( to right, #000 40%, transparent 58% ), 
            url(${firstImage})`
                }}>
                </div>
                <div className='aspect-video  md:hidden bg-no-repeat bg-cover  w-screen' style={{
                    backgroundImage:
                        `linear-gradient( to top, #000 0%, transparent 20% ), 
            url(${smallImage})`
                }}>
                </div>
                <div className='md:p-10 p-4 md:absolute text-white  md:w-1/2 top-0 left-0'>
                    <h1 className='font-medium text-[44px] mb-4'>Welcome to Prime Video</h1>
                    <p className='hidden md:block  text-2xl'>Watch the latest movies, TV shows, and award-winning Amazon Originals</p>
                    <p className='md:hidden text-xl align-middle'>Watch the latest movies, TV shows, and award-winning Amazon Originals</p>
                    {authenticated ? <div className='flex flex-col'>

                        <button className='rounded py-3 px-5 text-lg font-semibold hover:bg-[#00a0d6] bg-[#0f79af] w-full md:w-72 mt-6 leading-tight'>Prime Video Mobile Edition at ₹599/year</button>
                        <div className='mt-2.5 mb-2.5 ml-16'>
                            <span className='text-lg font-semibold underline hover:no-underline py-1 px-2 cursor-pointer'>ⓘ Plan details</span>
                        </div>
                        <button className='rounded py-3 px-5 text-lg font-semibold hover:bg-[#00a0d6] bg-[#0f79af] w-full md:w-72 mt-2 leading-tight'>View all plans</button>
                    </div>
                        :
                        <Link to="signinpage"><button className='rounded font-semibold py-3 px-5 text-[17px] hover:bg-[#00a0d6] bg-[#0f79af] w-full md:w-72 mt-4'>Sign in to join Prime</button></Link>}

                </div>
            </div>


        </>
    )
}
export default Landingpage
