import React from 'react'
import firstImage from '../../assets/images/firstimgbig.jpg'
import smallImage from '../../assets/images/firstimgsmall.jpg'
import secondimg from '../../assets/images/secondimgbig.jpg'
import secondimgsmall from '../../assets/images/secondimgsmall.jpg'
import thirdimgsmall from '../../assets/images/thirdimgsmall.jpg'
import kidimgsmall from '../../assets/images/kidimgsmall.jpg'
import kidimgbig from '../../assets/images/kidimgbig.jpg'
import thirdimgbig from '../../assets/images/thirdimgbig.jpg'
import bbc from '../../assets/images/bbc.png'
import amc from '../../assets/images/amc.png'
import docubay from '../../assets/images/docubay.jpg'
import erosnow from '../../assets/images/erosnow.jpg'
import hoi from '../../assets/images/hoi.jpg'
import stingray from '../../assets/images/stingray.png'
import vjl from '../../assets/images/vjl.png'
import mubi from '../../assets/images/mubi.jpg'
import chaupal from '../../assets/images/chaupal.png'
import discovery from '../../assets/images/discovery.jpg'
import manorama from '../../assets/images/manorama.jpg'
import lionplay from '../../assets/images/lionplay.jpg'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../Context/AuthContext'
import PlanDetails from './Plandetails'
import Subscription from './Subscription'
import { plansButton, grid, smallimg, bigimg } from '../../styles/tailwindClasses'



const Landingpage = () => {
    const { authenticated } = useAuthContext()

    const images = [
        { gridImg: bbc },
        { gridImg: amc },
        { gridImg: lionplay },
        { gridImg: discovery },
        { gridImg: manorama },
        { gridImg: chaupal },
        { gridImg: vjl },
        { gridImg: stingray },
        { gridImg: hoi },
        { gridImg: docubay },
        { gridImg: mubi },
        { gridImg: erosnow }
    ];
    return (
        <>
            <div className='relative'>
                <div className={`${bigimg}`} style={{ backgroundImage: `linear-gradient( to right,#000 40%,transparent 58% ),url(${firstImage})` }}>
                </div>
                <div className={`${smallimg}`} style={{ backgroundImage: `linear-gradient( to top, #000 0%, transparent 20% ),url(${smallImage})` }}>
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


            <div className='relative'>
                <div className={`${bigimg}`} style={{ backgroundImage: `linear-gradient( to right, #000 40%, transparent 58% ),url(${secondimg})` }}>
                </div>
                <div className={`${smallimg}`} style={{ backgroundImage: `linear-gradient( to top, #000 0%, transparent 20% ),url(${secondimgsmall})` }}>
                </div>
                <div className='md:p-10 p-4 md:absolute text-white  md:w-1/2 top-16 left-0'>
                    <h1 className="font-medium text-[44px] mb-4">Movie rentals on Prime Video</h1>
                    <p className='hidden md:block  text-2xl'>Early Access to new movies, before digital subscription</p>
                    <p className='md:hidden text-xl align-middle'>WEarly Access to new movies, before digital subscription</p>
                    <Link to="/rent"><button className={`${plansButton}text-[17px] mt-4`}>Rent now</button></Link>
                </div>
            </div>


            <div className='relative'>
                <div className={`${bigimg}`} style={{ backgroundImage: `url(${thirdimgbig} )` }}>
                </div>
                <div className={`${smallimg}`} style={{ backgroundImage: `url( ${thirdimgsmall})` }}>
                </div>
                <div className='md:p-10 p-4 md:absolute text-white  md:w-1/2 top-20 right-0 '>
                    <h1 className="font-medium text-[40px] mb-4 ">Even better with Fire TV Stick</h1>
                    <p className='hidden md:block  text-xl'>The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV.Press the voice button on the remote and say the name of the title you want to watch to find it in seconds.</p>
                    <p className='md:hidden text-xl align-middle'>The biggest movies and TV shows are always better on a big screen.Simply plug in your Amazon Fire TV Stick and stream on any HDTV.Press the voice button on the remote and say the name of the title you want to watch to find it in seconds.</p>
                    <Link to="/anonymous"><button className={`${plansButton}text-[17px] mt-4`}>Get started</button></Link>
                </div>
            </div>


            <div className="bg-white flex flex-col md:flex-row md:justify-evenly">
                <div className="md:w-1/2  text-black my-9 ml-12">
                    <h1 className="text-3xl md:text-6xl font-thin sm:text-4xl  ">Your favorite channels all in one place</h1>
                    <p className="font-normal my-4 text-lg md:text-2xl">
                        With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice
                    </p>
                </div>
                <div className="sm:mx-24 mx-20 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-2 my-4">

                    {images.map((image, index) => (
                        <div className={`${grid}`} key={index}>
                            <img src={image.gridImg} alt='' />
                        </div>
                    ))}
                </div>
            </div>


            <div className='relative'>
                <div className={`${bigimg}`} style={{ backgroundImage: `linear-gradient( to right, #000 40%, transparent 58% ),url(${kidimgbig})` }}>
                </div>
                <div className={`${smallimg}`} style={{
                    backgroundImage: `linear-gradient( to top, #000 0%, transparent 20% ),url(${kidimgsmall})`
                }}>
                </div>
                <div className='md:p-10 p-4 md:absolute text-white  md:w-1/2 top-44 left-0'>
                    <h1 className="font-medium text-[40px] mb-4">Family Friendly</h1>
                    <p className='hidden md:block  text-xl'>With easy to use Parental Controls and a dedicated kids page, enjoy secure, ad-free kids entertainment.Kids can enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.</p>
                    <p className='md:hidden text-xl align-middle'>With easy to use Parental Controls and a dedicated kids page, enjoy secure, ad-free kids entertainment.Kids can enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.</p>
                    <Link to="/anonymous"><button className={`${plansButton}text-[17px] mt-4`}>Get started</button></Link>
                </div>
            </div>
        </>

    )
}
export default Landingpage
