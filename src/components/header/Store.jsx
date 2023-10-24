import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { headerlistTag } from '../../styles/tailwindClasses'
import { FiChevronDown } from "react-icons/fi";




const Store = () => {
    const [isStoreHovered, setIsStoreHovered] = useState(false);

    const handleStoreHover = () => {
        setIsStoreHovered(!isStoreHovered);
    };


    return (
        <div>
            <div
                className='parent-homelist'
                onMouseEnter={handleStoreHover}
                onMouseLeave={handleStoreHover}
            >
                <Link to="/anonymous"
                    className="hover:bg-[#191E25] hover:text-white px-4 py-2 flex items-center">
                    <span style={{ whiteSpace: 'nowrap' }}>Store</span>
                    <span className={`mt-2 transform ${isStoreHovered ? 'rotate-180' : ''}`}><FiChevronDown /></span>
                </Link>
                <div className={`z-50 absolute mt-[38px] w-auto top-0 rounded-sm bg-[#191E25] py-2 ${isStoreHovered ? 'block' : 'hidden'}`}>
                    <ul className='home-list'>
                        <li><Link to="/anonymous" className={`${headerlistTag}`}>All</Link></li>
                        <li><Link to="/rent" className={`${headerlistTag}`}>Rent</Link></li>
                        <li><Link to="/anonymous" className={`${headerlistTag}`}>Channels</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Store