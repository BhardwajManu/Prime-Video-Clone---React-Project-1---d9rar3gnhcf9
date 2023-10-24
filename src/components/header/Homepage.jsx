import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiChevronDown } from "react-icons/fi";
import { headerlistTag } from '../../styles/tailwindClasses'


const Homepage = () => {
    const [isHomeHovered, setIsHomeHovered] = useState(false);

    const handleHomeHover = () => {
        setIsHomeHovered(!isHomeHovered);
    };
    return (
        <div>
            <div
                className='parent-homelist'
                onMouseEnter={handleHomeHover}
                onMouseLeave={handleHomeHover}
            >
                <div className="hover:bg-[#191E25] hover:text-white px-4 py-2 flex items-center">
                    <NavLink to="/home"
                        style={({ isActive }) => ({ color: isActive ? "white" : "#AAAAAA" })}>
                        <span>Home</span>
                    </NavLink>
                    <span className={`mt-2 transform ${isHomeHovered ? 'rotate-180' : ''}`}><FiChevronDown /></span>
                </div>
                <div className={`z-50 absolute mt-[38px] w-auto top-0 rounded-sm bg-[#191E25] py-2 ${isHomeHovered ? 'block' : 'hidden'}`}>
                    <ul className='home-list'>
                        <li><Link to="/home" className={`${headerlistTag}`} >All</Link></li>
                        <li><Link to="/banner" className={`${headerlistTag}`} >Movies</Link></li>
                        <li><Link to="/anonymous" className={`${headerlistTag}`}>TV shows</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Homepage