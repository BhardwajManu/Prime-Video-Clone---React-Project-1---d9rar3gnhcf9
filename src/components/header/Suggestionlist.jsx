/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import { useNavigate } from 'react-router-dom';

const Suggestionlist = ({ searchValue, closeSearch }) => {
    const navigate = useNavigate()
    const { data, loading, error, get } = useFetch([]);

    useEffect(() => {
        if (searchValue.trim().length > 2) {
            get(`/ott/show?search={"title" : "${searchValue}"}&limit=10`)
        }

    }, [searchValue]);

    const handleSearch = (e, title) => {
        navigate(`/search/${title}`)
        closeSearch(e)

    }

    // console.log("searchData", data)
    return (

        <div>
            <ul>
                {
                    data?.data?.map(({ title, _id }) => (
                        <li className='text-white p-4 cursor-pointer text-left hover:bg-slate-500 rounded-lg' onClick={(e) => handleSearch(e, title)} key={_id}>
                            {title}
                        </li>

                    ))
                }
            </ul>
        </div>
    )
}

export default Suggestionlist