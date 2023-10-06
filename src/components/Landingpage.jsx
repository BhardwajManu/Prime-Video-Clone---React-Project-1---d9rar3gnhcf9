import React from 'react'
import firstImage from '../assets/images/firstimage.jpg'
import smallImage from '../assets/images/small.jpg'

const Landingpage = () => {
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
                    <button className='rounded  py-3 px-5 text-[17px] bg-[#0f79af] w-full md:w-72 mt-2'>Sign in to join Prime</button>
                </div>
            </div>

        </>
    )
}

export default Landingpage
