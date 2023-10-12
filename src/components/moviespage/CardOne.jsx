import React from 'react'
import Flickity from 'react-flickity-component'
import "../../styles/cardone.css";
import { FiChevronRight } from "react-icons/fi";
import { BsCheck2 } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";

import checkbox from '../../assets/images/checkbox.png'
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
    }, [props]);

    return (
        <>
            <div>
                <section className='text-[#FFF] mt-20 ml-[4.5%]'>
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
                            <div className='card font-bold'>
                                <div className='flex'>
                                    <img className='w-[20px] h-[20px]' src={checkbox} alt='' />
                                    <h3 className='flex text-white'>Watch with a free prime trial</h3>
                                </div>

                                <div className='flex justify-between'>
                                    <h3 className='text-white w-[171px] h-[28px]'>Pathan</h3>
                                    <div className='flex justify-between gap-2'>
                                        <span className='rounded-full bg-[#33373D] w-[40px] h-[40px] text-white flex justify-center items-center'><BsCheck2 /></span>
                                        <span className='rounded-full bg-[#33373D]  w-[40px] h-[40px] text-white flex justify-center items-center'><CiMenuKebab /></span>
                                    </div>
                                </div>

                                <div className='flex items-start gap-2'>
                                    <h2 className='text-[#AAAAAA]'>2023</h2>
                                    <h2 className='text-[#AAAAAA]'>2h 28min</h2>
                                    <span className='text-white bg-[#33373D] px-2'>U/A 13+</span>
                                </div>
                                <div className='text-white'>#10 in India</div>

                                <div>
                                    <p className='text-[#AAAAAA]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ducimus...</p>
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





