/* eslint-disable react/prop-types */
import React from 'react'
import Flickity from 'react-flickity-component'
import "../../styles/cardone.css";
import { FiChevronRight } from "react-icons/fi";
import { useEffect } from 'react';
import Card from '../Card';
import useFetch from '../../Hooks/useFetch';
import { Link } from 'react-router-dom';

const flickityOptions = {
    initialIndex: 0,
    groupCells: true,
    pageDots: false,
    resize: false,
}


const CardOne = (props) => {
    const { data, loading, error, get } = useFetch([]);

    useEffect(() => {
        get(`/ott/show?filter={"type":"${props.title}"}&limit=20`)

    }, []);
    // console.log("c1", data)


    return (
        <>
            <div>
                <section className='text-[#FFF] mt-14 ml-[4.5%] cursor-default'>
                    <h2 className='flex  pb-4 text-xl'>
                        <div>
                            <span className='font-bold text-[#1A98FF]'>Prime</span>
                            <span className='font-bold ml-3'>{props.title}</span>
                        </div>
                        <div className='flex items-center justify-center'>
                            <Link to="/moremovies"> <span className='ml-8 font-medium'>See more </span></Link>
                            <span className='ml-1 mt-1'><FiChevronRight /></span>
                        </div>
                    </h2>
                </section>
            </div>
            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
            >


                {data?.data?.map((item) => (

                    <Card key={item._id} movie={item} />
                ))}

            </Flickity>
        </>
    )
}
export default CardOne





