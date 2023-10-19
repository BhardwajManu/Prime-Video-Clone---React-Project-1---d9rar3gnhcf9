/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsCheck2 } from "react-icons/bs";
import { TfiVideoClapper } from "react-icons/tfi";
import { IoMdAdd } from "react-icons/io";
import checkbox from '../assets/images/checkbox.png'
import useFetch from '../Hooks/useFetch';
import { useWatchlistContext } from '../Context/WatchlistContext';
import { useAuthContext } from '../Context/AuthContext';

const Card = ({ movie }) => {
    const { authenticated } = useAuthContext()

    const { data, patch } = useFetch([])
    const { data: { watchlist }, get } = useFetch([])

    const { isAddedToWatchlist, updateWatchlist, alreadyFetchedWatchlist, isFetch, isAdded } = useWatchlistContext()


    useEffect(() => {
        if (alreadyFetchedWatchlist) {
            get("/ott/watchlist/like")
            isFetch()
        }

        isAdded(movie._id)
    }, [])
    console.log("watchlist", data, watchlist)

    useEffect(() => {
        if (data) {
            updateWatchlist(data)
        }
    }, [data])

    useEffect(() => {
        if (watchlist) {
            updateWatchlist(watchlist)
        }
    }, [watchlist])






    console.log(data)

    const toggleSelection = () => {
        setIsSelected(!isSelected);
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
                                        {isAddedToWatchlist ? <BsCheck2 /> : <IoMdAdd />}
                                    </span>
                                    : <Link to="/signinpage"><span className='cursor-pointer rounded-full bg-[#33373D] w-[40px] h-[40px] text-white flex justify-center movies-center items-center'
                                        onClick={toggleSelection}>
                                        {isAddedToWatchlist ? <BsCheck2 /> : <IoMdAdd />}
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