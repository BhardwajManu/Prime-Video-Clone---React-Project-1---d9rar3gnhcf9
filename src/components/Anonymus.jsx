
import React from 'react';
import Anonymous from '../assets/images/anonymous..jpg'
import { FaSquareFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';
import amazonlogo8 from "../assets/images/amazonlogo8.png"
import { smallimg, bigimg } from '../styles/tailwindClasses'



const Anonymus = () => {
    return (
        <div className="h-screen relative">
            <div className={`${bigimg}`}
                style={{ backgroundImage: `linear-gradient( to right, #000 10%, transparent 80% ),url(${Anonymous})` }}></div>
            <div className={`${smallimg} h-[50vh] w-[100vw]`}
                style={{ backgroundImage: `linear-gradient( to top, #000 5%, transparent 70% ),url(${amazonlogo8})` }}>
            </div>

            <div className="md:p-10 p-4 md:absolute md:w-1/2 top-0 left-0 flex flex-col items-center justify-center md:mt-36 mt-16">
                <h1 className="font-bold text-white font-mono text-2xl md:text-4xl lg:text-5xl mb-4 text-center md:text-left">
                    Check Back Later
                </h1>
                <p className="text-lg md:text-xl text-[#AAAAAA] text-center md:text-left">
                    Follow for more info
                </p>

                <div className="flex gap-6 md:gap-10 mt-8 justify-center md:justify-start">
                    <Link to='https://www.facebook.com/PrimeVideoIN/' target="_blank" rel="noopener noreferrer">
                        <span className="text-white text-2xl"><FaSquareFacebook /></span>
                    </Link>
                    <Link to='https://www.instagram.com/primevideoin/' target="_blank" rel="noopener noreferrer">
                        <span className="text-white text-2xl"><GrInstagram /></span>
                    </Link>
                    <Link to='https://twitter.com/PrimeVideoIN?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target="_blank" rel="noopener noreferrer">
                        <span className="text-white text-2xl"><BsTwitter /></span>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default Anonymus;
