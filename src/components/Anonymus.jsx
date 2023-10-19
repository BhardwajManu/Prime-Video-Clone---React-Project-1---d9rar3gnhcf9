import React from 'react';
import Anonymous from '../assets/images/anonymous..jpg'
import { FaSquareFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Anonymus = () => {
    return (
        <div className="h-screen w-screen relative">
            <div className="min-h-screen w-screen bg-cover" style={{ backgroundImage: `linear-gradient( to right, #000 10%, transparent 80% ),url(${Anonymous})` }}></div>

            <div className="md:p-10 p-4 md:absolute md:w-1/2 top-0 left-0 flex flex-col items-center justify-center md:mt-36 mt-16">
                <h1 className="font-bold text-white font-mono text-4xl md:text-5xl lg:text-6xl mb-4">Drop By Again Soon</h1>
                <p className="text-xl md:text-2xl text-[#AAAAAA]">For more info, Follow</p>

                <div className="flex gap-10 mt-8">
                    <Link to='https://www.facebook.com/PrimeVideoIN/'><span className="text-white text-2xl "><FaSquareFacebook /></span></Link>
                    <Link to='https://www.instagram.com/primevideoin/'><span className="text-white text-2xl"><GrInstagram /></span></Link>
                    <Link to='https://twitter.com/PrimeVideoIN?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><span className="text-white text-2xl"><BsTwitter /></span></Link>
                </div>
            </div>
        </div>
    );
}

export default Anonymus;