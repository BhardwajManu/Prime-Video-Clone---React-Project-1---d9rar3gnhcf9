/* eslint-disable react/prop-types */
import { useContext, useState } from 'react'
import { createContext } from 'react'


const watchlistContext = createContext()
const initialData = {
    isAddedToWatchlist: false,
    alreadyFetchedWatchlist: false,
    shows: []
}

const WatchlistContextProvider = ({ children }) => {
    const [watchlistData, setWatchlistData] = useState(initialData)

    const isAdded = (id) => {
        const check = watchlistData.shows.some(({ _id }) => id === _id)
        setWatchlistData((prev) => ({
            ...prev,
            isAddedToWatchlist: check
        }))
    }

    const isFetch = () => {
        setWatchlistData((prev) => ({
            ...prev,
            alreadyFetchedWatchlist: true
        }))
    }

    const updateWatchlist = (payload) => {
        console.log("payload", payload)
        // setWatchlistData((prev) => ({
        //     ...prev,
        //    shows: payload.shows,
        // }))

    }

    return (
        <watchlistContext.Provider value={{
            isAdded, updateWatchlist, isFetch, isAddedToWatchlist: watchlistData.isAddedToWatchlist,
            alreadyFetchedWatchlist: watchlistData.alreadyFetchedWatchlist
        }}>
            {children}
        </watchlistContext.Provider>
    )
}

export default WatchlistContextProvider

export const useWatchlistContext = () => useContext(watchlistContext)


