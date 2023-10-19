import React, { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch';
import Card from "../Card"
import { Link } from 'react-router-dom';


const WatchList = () => {
    const { data, get, patch } = useFetch([])

    useEffect(() => {
        get("/ott/watchlist/like")

    }, [])

    console.log(data)

    return (
        <>
            <div className='flex flex-col gap-3 px-20 h-screen'>
                <div>
                    <h1 className='text-[3vw] text-[#FFFFFF] py-4 font-bold '>Watchlist</h1>
                </div>

                <div className='flex justify-between '>
                    <div className='flex gap-3'>
                        <Link to="/watchlist"> <button className='text-[1.3vw] bg-[#FFFFFF33] py-[12px] px-[21px] text-[#FFFFFF] rounded-lg font-medium hover:bg-white hover:text-black'>All</button></Link>
                        <Link to="/watchlist"><button className='text-[1.3vw] bg-[#FFFFFF33] py-[12px] px-[21px] text-[#FFFFFF] rounded-lg font-medium hover:bg-white hover:text-black'>Movies</button></Link>
                        <Link to="/watchlist"><button className='text-[1.3vw] bg-[#FFFFFF33] py-[12px] px-[21px] text-[#FFFFFF] rounded-lg font-medium hover:bg-white hover:text-black'>TV shows</button></Link>
                    </div>

                    <Link to="/moremovies"> <button className='text-[1.3vw] flex justify-center items-center bg-[#FFFFFF33] py-[12px] px-[21px] text-[#FFFFFF] rounded-lg font-medium hover:bg-white hover:text-black'>Most recent addition <span className='mt-1 ml-1 font-bold'></span></button></Link>
                </div>
                <div className='grid gap-2 md:gap-4 py-10 pb-36 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                    {
                        data?.data?.shows?.map((movie) => (
                            <Card key={movie._id} movie={movie} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default WatchList