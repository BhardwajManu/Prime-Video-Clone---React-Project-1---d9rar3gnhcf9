/* eslint-disable react/prop-types */
import { useContext, useState } from 'react'
import { createContext } from 'react'


const watchlistContext = createContext()
const initialData = {
    alreadyFetchedWatchlist: false,
    shows: []
}

const WatchlistContextProvider = ({ children }) => {
    const [watchlistData, setWatchlistData] = useState(initialData)



    const isFetch = () => {
        setWatchlistData((prev) => ({
            ...prev,
            alreadyFetchedWatchlist: true
        }))
    }

    const createWatchlist = (payload) => {
        // console.log("payload", payload)
        setWatchlistData((prev) => ({
            ...prev,
            shows: payload?.data?.shows,
        }))

    }


    const updateWatchlist = (payload) => {
        let shows = payload?.data?.shows;
        if (!payload?.message?.includes("add")) {
            shows = watchlistData?.shows?.filter(({ _id }) => {
                return shows?.includes(_id)
            })

        }
        setWatchlistData((prev) => ({
            ...prev,
            shows,
        }))

    }

    return (
        <watchlistContext.Provider value={{
            updateWatchlist, isFetch, createWatchlist, alreadyFetchedWatchlist: watchlistData.alreadyFetchedWatchlist,
            shows: watchlistData.shows
        }}>
            {children}
        </watchlistContext.Provider>
    )
}

export default WatchlistContextProvider

export const useWatchlistContext = () => useContext(watchlistContext)


