import React, { useState } from 'react'
import { useAuthContext } from '../../Context/AuthContext'
import { headerlistTag } from '../../styles/tailwindClasses'
import { FiChevronDown } from "react-icons/fi";
import { Link } from 'react-router-dom'


const Mystuff = () => {
    const { authenticated } = useAuthContext()
    const [isMyStuffHovered, setIsMyStuffHovered] = useState(false);


    const handleMyStuffHover = () => {
        setIsMyStuffHovered(!isMyStuffHovered);
    };


    return (
        <div>
            {authenticated ?
                <div
                    className='parent-homelist'
                    onMouseEnter={handleMyStuffHover}
                    onMouseLeave={handleMyStuffHover}
                >
                    <Link to="/watchlist"
                        className="hover:bg-[#191E25] hover:text-white px-2 py-2 flex"
                        style={{ whiteSpace: 'nowrap' }}>
                        My Stuff
                        <span className={`mt-2 transform ${isMyStuffHovered ? 'rotate-180' : ''}`}><FiChevronDown /></span>
                    </Link>
                    <div
                        className={`z-50 absolute mt-[38px] w-auto top-0 rounded-sm bg-[#191E25] py-2 ${isMyStuffHovered ? 'block' : 'hidden'}`}>
                        <ul className='home-list'>
                            <li><Link to="/watchlist" className={`${headerlistTag}`}>All</Link></li>
                            <li><Link to="/watchlist" className={`${headerlistTag}`}>Watchlist</Link></li>
                            <li><Link to="/rent" className={`${headerlistTag}`}>Rental</Link></li>
                        </ul>
                    </div>
                </div>
                : <div>
                    <Link to="/signinpage"
                        className="hover:bg-[#191E25] hover:text-white px-2 py-2 flex"
                        style={{ whiteSpace: 'nowrap' }}>Try for free<span
                            className='mt-2'></span>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Mystuff