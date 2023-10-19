import React from 'react'
import { useEffect } from 'react';
import Card from '../components/Card';
import useFetch from '../Hooks/useFetch';





const MoreMovies = () => {
    const { data, get } = useFetch([]);

    useEffect(() => {
        get(`/ott/show?limit=300`)

    }, []);


    return (
        <>
            <div className='text-white font-bold text-4xl mt-5 px-14'>
                <span className='font-bold ml-3'>Continue watching</span>
            </div>

            <div className='grid gap-2 md:gap-4 py-10 px-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                {
                    data?.data?.map((item) => (

                        <Card key={item._id} movie={item} />
                    ))
                }
            </div>


        </>
    )
}
export default MoreMovies;