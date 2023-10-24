/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsCheck2 } from "react-icons/bs";
import { TfiVideoClapper } from "react-icons/tfi";
import { IoMdAdd } from "react-icons/io";
import checkbox from '../assets/images/checkbox.png'
import useFetch from '../Hooks/useFetch';
import { useWatchlistContext } from '../Context/WatchlistContext';
import { useAuthContext } from '../Context/AuthContext';
import api from '../Api';


const isAdded = (shows, id) => {
    return typeof shows != "string" && shows?.some(({ _id }) => id === _id)
}

const Card = ({ movie }) => {
    const { authenticated } = useAuthContext()
    const { updateWatchlist, alreadyFetchedWatchlist, isFetch, shows, createWatchlist } = useWatchlistContext()
    const { data, patch } = useFetch([])
    const [watchdata, setWatchData] = useState([])


    const fetchData = async () => {
        try {
            const response = await api.get("/ott/watchlist/like")
            setWatchData(response?.data)

        } catch (error) {
            console.log(error)

        }
    }


    useEffect(() => {

        if (!alreadyFetchedWatchlist) {
            fetchData()
            isFetch()
        }
    }, [])

    useEffect(() => {
        if (watchdata?.data?.shows) {
            createWatchlist(watchdata)
            // console.log("create", watchdata)
        }

    }, [watchdata])


    useEffect(() => {
        if (data?.data?.shows) {
            updateWatchlist(data)
        }
    }, [data])

    const toggleSelection = () => {
        patch("/ott/watchlist/like", { showId: movie._id })
    };

    return (
        <div key={movie._id} className='ml-[1.6%]  grandparent-card shadow-md hover:z-50'>
            <div className='parent-card group relative'>
                <Link to={`/details/${movie._id}`}>
                    <img className='object-cover object-top aspect-[3/2] rounded-lg h-[145px] w-full ' src={movie.thumbnail} alt='' />
                </Link>
                <div className='card hidden w-[130%] max-w-[300px] z-[50] group-hover:block font-bold absolute top-0 left-0 bg-black rounded-lg'>
                    <Link to={`/details/${movie._id}`}>

                        <img className='object-cover object-top aspect-[7/5]  rounded-lg h-[145px] w-full ' src={movie.thumbnail} alt='' />
                    </Link>
                    <div className='px-5 cursor-default'>
                        <div className='flex items-center gap-1 py-1'>
                            <img className='w-5 h-5' src={checkbox} alt='' />
                            <h3 className='flex text-white'>Watch with a free prime trial</h3>
                        </div>

                        <div className='flex justify-between py-2'>
                            <h3 className='text-white '>{movie.title}</h3>
                            <div className='flex justify-between gap-2'>
                                {authenticated ?
                                    <span className='cursor-pointer rounded-full bg-[#33373D] w-[40px] h-[40px] text-white flex justify-center movies-center items-center'
                                        onClick={toggleSelection}>
                                        {isAdded(shows, movie._id) ? <BsCheck2 /> : <IoMdAdd />}
                                    </span>
                                    : <Link to="/signinpage"><span className='cursor-pointer rounded-full bg-[#33373D] w-[40px] h-[40px] text-white flex justify-center movies-center items-center'
                                    >
                                        <IoMdAdd />
                                    </span></Link>
                                }
                                <Link to={`/details/${movie._id}`}>
                                    <span className='rounded-full bg-[#33373D]  w-[40px] h-[40px] text-white flex justify-center movies-center items-center'><TfiVideoClapper />
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div className='flex movies-start justify-between py-2 gap-2'>
                            <h2 className='text-[#AAA]'>2023</h2>
                            <h2 className='text-[#AAA]'>2h 28min</h2>
                            <span className='text-white bg-[#33373D] px-2 whitespace-nowrap flex items-center justify-end'>U/A 13+</span>
                        </div>

                        <div>
                            <p className='text-[#AAAAAA] py-2 '>{movie.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card