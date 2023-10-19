import React, { useEffect } from 'react'
import Filters from "../components/myStuff/Filters"
import useFetch from '../Hooks/useFetch';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../components/Card';

const Search = () => {
    const { data, loading, error, get } = useFetch([]);
    const { query } = useParams()
    useEffect(() => {
        get(`/ott/show?search={"title" : "${query}"}&limit=10`)
    }, []);
    console.log(data)


    return (
        <div className='px-20'>
            <Filters />
            <div>
                <h1 className='text-[1.3vw] font-bold text-white  py-6'>Result for "{query}".</h1>
            </div>
            <div>
                <h1 className='text-[1.3vw] font-bold text-white  pt-6'>More videos</h1>
            </div>
            <div className='grid gap-2 md:gap-4 py-10  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                {
                    data?.data?.map((movie) => (
                        <Card key={movie._id} movie={movie} />

                    ))
                }
            </div>
        </div>
    )
}

export default Search