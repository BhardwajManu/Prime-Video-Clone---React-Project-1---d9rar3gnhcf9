import React, { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch';
import Card from "../Card"
import { Link } from 'react-router-dom';
import { useWatchlistContext } from '../../Context/WatchlistContext';


const WatchList = () => {
    const { alreadyFetchedWatchlist, createWatchlist, isFetch, shows } = useWatchlistContext()
    const { data, get } = useFetch([])

    useEffect(() => {
        if (!alreadyFetchedWatchlist) {
            get("/ott/watchlist/like")
            isFetch()
        }
    }, [])

    useEffect(() => {
        if (data?.data?.shows) {
            createWatchlist(data)
        }

    }, [data])

    // console.log("shows", shows)

    return (
        <>
            <div className='flex flex-col gap-3 px-20 h-[75vh]'>
                <div>
                    <h1 className='text-5xl text-[#FFFFFF] py-4 font-bold change-button '>Watchlist</h1>
                </div>

                <div className='flex justify-between '>
                    <div className='flex gap-3'>
                        <Link to="/watchlist"> <button className='text-2xl bg-[#FFFFFF33] py-[12px] px-[21px] text-[#FFFFFF] rounded-lg font-medium hover:bg-white hover:text-black'>All</button></Link>
                        <Link to="/watchlist"><button className='text-2xl hidden sm:block bg-[#FFFFFF33] py-[12px] px-[21px] text-[#FFFFFF] rounded-lg font-medium hover:bg-white hover:text-black'>Movies</button></Link>
                        <Link to="/moremovies/Tv Shows"><button className='text-2xl hidden sm:block bg-[#FFFFFF33] py-[12px] px-[21px] text-[#FFFFFF] rounded-lg font-medium hover:bg-white hover:text-black'>TV shows</button></Link>
                    </div>
                </div>

                {shows.length === 0 ? ( // Check if the watchlist is empty
                    <div className="text-[#FFFFFF] text-2xl text-center mt-8">
                        Your watchlist is empty. Add some shows or movies to get started!
                    </div>
                ) : (
                    <div className="grid gap-2 md:gap-4 py-10 pb-36 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        {shows.map((movie) => (
                            <Card key={movie._id} movie={movie} />
                        ))}
                    </div>
                )}

            </div>
        </>
    )
}

export default WatchList