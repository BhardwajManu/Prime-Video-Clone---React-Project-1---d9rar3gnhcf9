import React, { useEffect, useRef, useState } from 'react'
import Moviedetails from './Moviedetails';
import Relateddetail from './Relateddetail';

const Tabsforcontent = () => {


    // Initialize the state with 'related' selected
    const [selectedButton, setSelectedButton] = useState('related');
    const detailsRef = useRef(null);


    const handleScroll = () => {
        if (detailsRef.current.getBoundingClientRect().top <= 80) {
            detailsRef.current.style.backgroundColor = "#33373D";

            // console.log(detailsRef.current)

        } else {
            detailsRef.current.style.backgroundColor = "";

        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    // Content to be displayed based on the selected button
    const content = selectedButton === 'related' ? (
        <Relateddetail />
    ) : (
        <Moviedetails />
    );

    const handleClick = (e) => {
        // e.scrollTo(0, 60);
        // console.log(e.clientX, e.clientY, window.innerHeight);
        // window.scrollTo(0, e.clientY)
        setSelectedButton("details")
    }


    return (
        <>

            <a href='#detail' id='detail' className='relative z-50' >
                <div ref={detailsRef} className=' mx-auto sticky top-16 max-w-5xl h-12 px-2 sm:px-6 lg:px-8  rounded-lg flex justify-center items-center text-xl font-semibold'>

                    {/* Buttons for selecting related and details */}
                    <button
                        onClick={() => setSelectedButton('related')}
                        className={`relative button ${selectedButton === 'related' ? 'selected' : ''}`}
                    >
                        <div className={`px-4 h-12 pt-2 relative hover:bg-[rgb(0,5,13)] tracking-wide ${selectedButton === 'related' ? "text-white" : "text-gray-400 hover:text-white"}`}>Related</div>
                        <div className={`absolute bottom-0 h-[2px] w-full ${selectedButton === 'related' ? ' bg-white' : ""}`} ></div>
                    </button>
                    <button
                        onClick={handleClick}
                        className={`relative button ${selectedButton === 'details' ? 'selected' : ''}`}
                    >
                        <div className={`px-4 h-12 pt-2 relative hover:bg-[rgb(0,5,13)] tracking-wide ${selectedButton === 'details' ? "text-white" : "text-gray-400 hover:text-white"}`}>Details</div>
                        <div className={`absolute bottom-0 h-[2px] w-full ${selectedButton === 'details' ? ' bg-white' : ""}`} ></div>
                    </button>
                    <div className='absolute rounded-lg bg-[#33373D]'>

                    </div>
                </div>

                {/* Display content based on the selected button */}
            </a>
            {content}

        </>
    );
};

export default Tabsforcontent;


