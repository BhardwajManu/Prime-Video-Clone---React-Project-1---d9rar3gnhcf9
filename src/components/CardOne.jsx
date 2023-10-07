import React from 'react'
import Flickity from 'react-flickity-component'
import "../styles/cardone.css";
import { FiChevronRight } from "react-icons/fi";
import checkbox from '../assets/images/checkbox.png'
import { useEffect, useState } from 'react';

const flickityOptions = {
    initialIndex: 0,
    groupCells: true,
    pageDots: false,
    resize: false,
}


const CardOne = (props) => {
    const [data, setData] = useState([]);
    // const filterType = "movie";
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    `https://academics.newtonschool.co/api/v1/ott/show?filter={"type" : "${props.title}"}&limit=20`,
                    {
                        method: "GET",
                        headers: {
                            projectID: "knjxpr9vh9wr",
                        },
                    }
                );
                const json = await response.json();
                console.log(json);
                setData(json.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div>
                <section className='text-[#FFF] mt-14 ml-[4.5%]'>
                    <h2 className='flex  pb-4 text-xl'>
                        <div>
                            <span className='font-bold text-[#1A98FF]'>Prime</span>
                            <span className='font-bold ml-3'>{props.title}</span>
                        </div>
                        <div className='flex items-center justify-center'>
                            <span className='ml-8 font-medium'>See more </span>
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

                {data?.map((item) => (
                    <div key={item._id} className='ml-[1.6%]'>
                        <div className=' parent-card'>

                            <img className='object-cover rounded-lg h-[145px] w-[259px]' src={item.thumbnail} alt='' />

                            <div className='card h-40 w-64 '>
                                <div className='text-white  flex flex-col gap-2  py-7 '>
                                    <h3 className='flex text-white text-sm md:text-base px-[7px] py-[3px] ml-3.5 font-bold'>
                                        <img className='w-[22px] h-[22px] mr-2' src={checkbox} alt='' /> Watch with a free prime trail</h3>
                                    <div>
                                        <h3 className='text-white  text-sm md:text-base px-[7px] py-[3px] ml-3.5 font-bold'>Pathan</h3>
                                        <span className='flex'><h2 className='text-white text-sm md:text-base px-[7px] py-[3px] ml-3.5 font-bold'>2023 2h 28min</h2><span className='text-white bg-[#33373D] text-sm md:text-base px-[7px] py[3px] ml-3.5 font-bold'>
                                            U/A 13+
                                        </span></span>
                                        <span className='text-white text-sm md:text-base px-[7px] py-[3px] ml-3.5 font-bold'>#10 in India</span>
                                        <span className='text-white text-sm md:text-base px-[7px] py-[3px] ml-3.5 font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et...</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                ))}

            </Flickity>
        </>
    )
}
export default CardOne





