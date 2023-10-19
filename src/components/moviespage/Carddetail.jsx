import React, { useEffect, useState } from 'react'
import { LuDot } from "react-icons/lu";
import { PiPlusBold } from "react-icons/pi";
import { MdCelebration } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { FiShare2 } from "react-icons/fi";
import checkbox from '../../assets/images/checkbox.png'
import Tabsforcontent from './content/Tabsforcontent';
import { Link, useParams } from 'react-router-dom';


const Carddetail = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    `https://academics.newtonschool.co/api/v1/ott/show/${id}`,
                    {
                        method: "GET",
                        headers: {
                            projectID: "knjxpr9vh9wr",
                        },
                    }
                );
                const json = await response.json();
                console.log(json, "here");
                setData(json.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, [id]);



    return (
        <>

            <div key={data?._id} className='h-screen relative'>
                <div className='hidden md:block min-h-screen w-screen bg-no-repeat bg-cover bg-right-top'
                    style={{ backgroundImage: `linear-gradient( to right, #000 40%, transparent 78% ),url(${data?.thumbnail})` }}></div>

                <div className='cursor-default flex flex-col gap-6 justify-start items-start ml-20 mt-24 h-max relative pb-10 md:absolute  md:w-1/2 top-0 left-0'>
                    <h1 className='text-[#FFFFFF] text-5xl font-extrabold tracking-wide max-w-lg leading-normal'>{data?.title}</h1>
                    <span className='text-[#FFFFFF] hidden sm:block text-xl mt-5 font-bold max-w-4xl'>{data?.description}</span>

                    <div className='text-white flex gap-3 '>
                        <span className='text-[#999999] text-xl font-semibold '>IMBD 6.0</span>
                        <span className='text-[#999999] text-xl font-semibold'>2 h 58 min</span>
                        <span className='text-[#999999] text-xl font-semibold'>2023</span>

                        <span className='text-white bg-[#33373D] text-sm sm:text-base px-[7px] py[3px] ml-2 font-bold'>X-RAY</span>
                        <span className='text-white bg-[#33373D] text-sm sm:text-base px-[7px] py[3px]  font-bold'>HDR</span>
                        <span className='text-white bg-[#33373D] text-sm sm:text-base px-[7px] py[3px]  font-bold'>UHD</span>
                        <span className='text-white bg-[#33373D] text-sm sm:text-base px-[7px] py[3px]  font-bold'>U/A 13+</span>
                    </div>

                    <div className='flex text-[#FFFFFF] text-xl underline font-semibold'>
                        {data?.keywords?.map((keyword, index) => (
                            <React.Fragment key={index}>
                                <span>{keyword}</span>
                                {index !== data?.keywords.length - 1 && (
                                    <span className='text-[#999999] flex justify-center items-center'><LuDot /></span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>



                    <div className='flex  font-semibold'>
                        <div className='flex'>
                            <img className='w-[23px] h-[23px] my-1' src={checkbox} alt='' />
                            <h3 className='flex text-[#FFFFFF] text-lg ml-2'>Watch with a free prime trial</h3>
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <Link to="/"> <button className='bg-[#FFFFFF] text-[#00050D] text-lg sm:text-xl py-1 px-[15px] rounded-lg text-left opacity-[1] mr-6 font-semibold min-h-[62px] cursor-pointer'>
                            Watch with Prime<br /> Start your 30-day free trial
                        </button></Link>
                        <div className='flex gap-3'>
                            <button className='bg-[#FFFFFF33] w-[61px] h-[61px] rounded-[50%] flex items-center justify-center'>
                                <TfiVideoClapper className='cursor-pointer h-[33px] w-[33px] text-white' />
                            </button>
                            <button className='bg-[#FFFFFF33] w-[61px] h-[61px] rounded-[50%] flex items-center justify-center'>
                                <PiPlusBold className='cursor-pointer h-[33px] w-[33px] text-white' />
                            </button>
                            <button className='bg-[#FFFFFF33] w-[61px] h-[61px] rounded-[50%] flex items-center justify-center'>
                                <MdCelebration className='cursor-pointer h-[33px] w-[33px] text-white' />
                            </button>
                            <button className='bg-[#FFFFFF33] w-[61px] h-[61px] rounded-[50%] flex items-center justify-center'>
                                <FiShare2 className='cursor-pointer h-[33px] w-[33px] text-white' />
                            </button>
                        </div>
                    </div>
                    <span className='text-[#AAAAAA] text-lg font-semibold'>Rentals include 30 days to start watching this video and 48 hours to finish once started.</span>
                </div>
            </div>

            <Tabsforcontent />

        </>
    )
}
export default Carddetail;