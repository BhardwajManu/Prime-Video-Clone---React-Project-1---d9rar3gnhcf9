import React from 'react'
import firstImage from '../../assets/images/firstimgbig.jpg'
import smallImage from '../../assets/images/firstimgsmall.jpg'
import secondimg from '../../assets/images/secondimgbig.jpg'
import secondimgsmall from '../../assets/images/secondimgsmall.jpg'
import thirdimgsmall from '../../assets/images/thirdimgsmall.jpg'
import thirdimgbig from '../../assets/images/thirdimgbig.jpg'



import { Link } from 'react-router-dom'
import { useAuthContext } from '../../Context/AuthContext'
import PlanDetails from './Plandetails'
import Subscription from './Subscription'
import { plansButton } from '../../styles/tailwindClasses'


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
                    <h1 className="font-medium text-[44px] mb-4">Welcome to Prime Video</h1>
                    <p className='hidden md:block  text-2xl'>Watch the latest movies, TV shows, and award-winning Amazon Originals</p>
                    <p className='md:hidden text-xl align-middle'>Watch the latest movies, TV shows, and award-winning Amazon Originals</p>
                    {authenticated ?
                        <div className='flex flex-col'>
                            <Subscription />
                            <PlanDetails />
                            <Link to="/anonymous"><button className={`${plansButton} leading-tight`}>View all plans</button></Link>
                        </div>
                        :
                        <Link to="signinpage"><button className={`${plansButton}text-[17px] mt-4`}>Sign in to join Prime</button></Link>}
                </div>
            </div>


            <div className='h-screen relative'>
                <div className="hidden md:block  min-h-screen w-screen bg-no-repeat bg-cover bg-right-top " style={{
                    backgroundImage: `linear-gradient( to right, #000 40%, transparent 58% ), 
            url(${secondimg})`
                }}>
                </div>
                <div className='aspect-video  md:hidden bg-no-repeat bg-cover  w-screen' style={{
                    backgroundImage:
                        `linear-gradient( to top, #000 0%, transparent 20% ), 
            url(${secondimgsmall})`
                }}>
                </div>
                <div className='md:p-10 p-4 md:absolute text-white  md:w-1/2 top-0 left-0'>
                    <h1 className="font-medium text-[44px] mb-4">Movie rentals on Prime Video</h1>
                    <p className='hidden md:block  text-2xl'>Early Access to new movies, before digital subscription</p>
                    <p className='md:hidden text-xl align-middle'>WEarly Access to new movies, before digital subscription</p>
                    <Link to="/rent"><button className={`${plansButton}text-[17px] mt-4`}>Rent now</button></Link>
                </div>
            </div>

            <div className='h-screen relative'>
                <div className="hidden md:block  min-h-screen w-screen bg-no-repeat bg-cover bg-left-top " style={{
                    backgroundImage: `linear-gradient( to right, #000 40%, transparent 58% ), 
            url(${thirdimgbig})`
                }}>
                </div>
                <div className='aspect-video  md:hidden bg-no-repeat bg-cover  w-screen' style={{
                    backgroundImage:
                        `linear-gradient( to top, #000 0%, transparent 20% ), 
            url(${thirdimgsmall})`
                }}>
                </div>
                <div className='md:p-10 p-4 md:absolute text-white  md:w-1/2 top-0 left-0'>
                    <h1 className="font-medium text-[44px] mb-4">Movie rentals on Prime Video</h1>
                    <p className='hidden md:block  text-2xl'>Early Access to new movies, before digital subscription</p>
                    <p className='md:hidden text-xl align-middle'>WEarly Access to new movies, before digital subscription</p>
                    <Link to="/rent"><button className={`${plansButton}text-[17px] mt-4`}>Rent now</button></Link>
                </div>
            </div>


        </>
    )
}
export default Landingpage
