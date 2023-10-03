import Flickity from 'react-flickity-component'
import rockyrani from '../assets/images/rokyrani.jpeg';
import Sapta from '../assets/images/saptaEllo.jpeg';
import Transformar from '../assets/images/transformers.jpeg';
import Luckyman from '../assets/images/luckyman.jpeg';
import Jailer from '../assets/images/jailer.jpeg';
import Neeyat from '../assets/images/neeyat.jpeg';
import Aadipurush from '../assets/images/adipurush.jpeg';
import Meg2 from '../assets/images/meg2.jpeg';
import Satyaprem from '../assets/images/satyaprem.jpeg';
import Royalblue from '../assets/images/royalblue.jpeg';
import Spiderman from '../assets/images/spiderman.jpeg';
import Spy from '../assets/images/spy.jpeg';
import "../styles/banner.css";
import { PiPlusBold } from "react-icons/pi";
import rokyranilogo from '../assets/images/rokyraniLogo.png'
import saptalogo from '../assets/images/saptaLogo.png'
import meglogo from '../assets/images/megLogo.png'
import luckymanlogo from '../assets/images/luckymanLogo.png'
import checkbox from '../assets/images/checkbox.png'
import { useEffect, useState } from 'react';



const flickityOptions = {
    // initialIndex: 0, autoPlay: true
}

const images = [
    { smallImg: saptalogo, bigImg: Sapta },
    { smallImg: meglogo, bigImg: Meg2 },
    { smallImg: luckymanlogo, bigImg: Luckyman },
    // {smallImg:"",bigImg:''},
    // {smallImg:"",bigImg:''},
    // {smallImg:"",bigImg:''},
    // {smallImg:"",bigImg:''},
    // {smallImg:"",bigImg:''},
    // {smallImg:"",bigImg:''},
    // {smallImg:"",bigImg:''},
    // {smallImg:"",bigImg:''},
    // {smallImg:"",bigImg:''},

]

var myHeaders = new Headers();
myHeaders.append("projectId", "knjxpr9vh9wr");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,

};


export default function Banner() {
    const [data, setData] = useState([]);



    useEffect(() => {
        fetch("https://academics.newtonschool.co/api/v1/ott/show?limit=3", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result.data)
                setData(result.data)
            })
            .catch(error => console.log('error', error));
    }, [])




    return (
        <>
            <div>
                <h1 className='text-[#FFFFFF] text-[40px]  px-[72px] py-6 w-[1519.2px] h-[93px]
                 font-bold tracking-wide lead-[45px] flex justify-start cursor-default'>Movies   </h1>

            </div>
            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
            >
                {data.map((item) => (

                    <div key={item._id} className='w-[90vw] h-full m-auto  relative overflow-hidden '>
                        <img className='aspect-[16/9] md:aspect-[18/6] lg:w-[90vw] w-full m-auto cursor-pointer object-cover object-top leading-7 rounded-lg' src={rockyrani} />
                        <section className='w-full md:w-[40%] absolute left-1 top-3 border-5 border-solid border-red md:pl-12 px-2 flex flex-col justify-around'>
                            <div>
                                <span className='text-[#FFFFFF] hidden text-lg mb-[1.5vw]  cursor-default font-bold pt-[2vw] lg:flex justify-start leading-7'>
                                    #1 in India
                                </span>
                                <a>
                                    <div className=' w-[25%]'>
                                        <img className='aspect-square' src={rokyranilogo} alt='rokyranilogo' />
                                    </div>
                                </a>
                            </div>
                            <div >
                                <div className='flex mt-[2vw]  items-center cursor-default'>
                                    <span>
                                        <img className='w-[22px] h-[22px] mr-2 ' src={checkbox} />
                                    </span>
                                    <span className='text-white w-[247.59px] h-[25px] md:text-lg font-bold '>
                                        Watch with a free Prime trial
                                    </span>
                                    <span className='text-white bg-[#33373D] text-sm md:text-base px-[7px] py[3px] ml-3.5 font-bold'>
                                        U/A 13+
                                    </span>
                                </div>

                                <div className=' lg:flex gap-0.5 hidden mb-8 mt-4'>
                                    <button className='bg-[#FFFFFF] text-[#00050D] w-[155.48px] h-[62px] text-xl py-2 px-[21px]
                            rounded-lg text-left opacity-[1] mr-6 font-semibold  min-h-[62px] cursor-pointer'>More details</button>
                                    <button className='bg-[#FFFFFF33] w-[61px] h-[61px] rounded-[50%] flex items-center justify-center'>
                                        <PiPlusBold className='cursor-pointer h-[33px] w-[33px] text-white' />
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                ))}
                {/*
                <div>
                    <img className='h-[464px] w-[1392px] cursor-pointer object-cover object-top leading-7 rounded-lg' src={Sapta} />
                    <section className='absolute left-1 top-3 border-5 border-solid border-red pl-12'>

                        <span className='text-[#FFFFFF]  text-xl mb-6  cursor-default font-bold pt-12 flex justify-start leading-7'>
                            #7 in India
                        </span>
                        <a>
                            <div>
                                <img className='w-[238px] h-[116px]' src={saptalogo} alt='rokyranilogo' />
                            </div>
                        </a>

                        <div >
                            <div className='flex mt-16 items-center cursor-default'>
                                <span>
                                    <img className='w-[22px] h-[22px] mr-2 ' src={checkbox} />
                                </span>
                                <span className='text-white w-[247.59px] h-[25px] text-lg font-bold '>
                                    Watch with a free Prime trial
                                </span>
                                <span className='text-white bg-[#33373D]  px-[7px] py[3px] ml-3.5 font-bold'>
                                    U/A 13+
                                </span>
                            </div>
                        </div>

                        <div className='mt-4 flex gap-0.5'>
                            <button className='bg-[#FFFFFF] text-[#00050D] w-[155.48px] h-[62px] text-xl py-2 px-[21px]
                            rounded-lg text-left opacity-[1] mr-6 font-semibold  min-h-[62px] cursor-pointer'>More details</button>
                            <button className='bg-[#FFFFFF33] w-[61px] h-[61px] rounded-[50%] flex items-center justify-center'>
                                <PiPlusBold className='cursor-pointer h-[33px] w-[33px] text-white' />
                            </button>
                        </div>
                    </section>
                </div>

                <div>
                    <img className='h-[464px] w-[1392px] cursor-pointer object-cover object-top leading-7 rounded-lg' src={Transformar} />
                    <section className='absolute left-1 top-3 border-5 border-solid border-red pl-12'>

                        <span className='text-[#FFFFFF]  text-xl mb-6  cursor-default font-bold pt-12 flex justify-start leading-7'>
                            #1 in India
                        </span>
                        <a>
                            <div>
                                <img className='w-[127.59px] h-[116px]' src={rokyranilogo} alt='rokyranilogo' />
                            </div>
                        </a>

                        <div >
                            <div className='flex mt-16 items-center cursor-default'>
                                <span>
                                    <img className='w-[22px] h-[22px] mr-2 ' src={checkbox} />
                                </span>
                                <span className='text-white w-[247.59px] h-[25px] text-lg font-bold '>
                                    Watch with a free Prime trial
                                </span>
                                <span className='text-white bg-[#33373D]  px-[7px] py[3px] ml-3.5 font-bold'>
                                    U/A 13+
                                </span>
                            </div>
                        </div>

                        <div className='mt-4 flex gap-0.5'>
                            <button className='bg-[#FFFFFF] text-[#00050D] w-[155.48px] h-[62px] text-xl py-2 px-[21px]
                            rounded-lg text-left opacity-[1] mr-6 font-semibold  min-h-[62px] cursor-pointer'>More details</button>
                            <button className='bg-[#FFFFFF33] w-[61px] h-[61px] rounded-[50%] flex items-center justify-center'>
                                <PiPlusBold className='cursor-pointer h-[33px] w-[33px] text-white' />
                            </button>
                        </div>
                    </section>
                </div>

                <div>
                    <img className='h-[464px] w-[1392px] cursor-pointer object-cover object-top leading-7 rounded-lg' src={Luckyman} />
                    <section className='absolute left-1 top-3 border-5 border-solid border-red pl-12'>

                        <span className='text-[#FFFFFF]  text-xl mb-6  cursor-default font-bold pt-12 flex justify-start leading-7'>
                            #5 in India
                        </span>
                        <a>
                            <div>
                                <img className='w-[207.4px] h-[116px]' src={luckymanlogo} alt='rokyranilogo' />
                            </div>
                        </a>

                        <div >
                            <div className='flex mt-16 items-center cursor-default'>
                                <span>
                                    <img className='w-[22px] h-[22px] mr-2 ' src={checkbox} />
                                </span>
                                <span className='text-white w-[247.59px] h-[25px] text-lg font-bold '>
                                    Watch with a free Prime trial
                                </span>
                                <span className='text-white bg-[#33373D]  px-[7px] py[3px] ml-3.5 font-bold'>
                                    U
                                </span>
                            </div>
                        </div>

                        <div className='mt-4 flex gap-0.5'>
                            <button className='bg-[#FFFFFF] text-[#00050D] w-[155.48px] h-[62px] text-xl py-2 px-[21px]
                            rounded-lg text-left opacity-[1] mr-6 font-semibold  min-h-[62px] cursor-pointer'>More details</button>
                            <button className='bg-[#FFFFFF33] w-[61px] h-[61px] rounded-[50%] flex items-center justify-center'>
                                <PiPlusBold className='cursor-pointer h-[33px] w-[33px] text-white' />
                            </button>
                        </div>
                    </section>
                </div>

                <div>
                    <img className='h-[464px] w-[1392px] cursor-pointer object-cover object-top leading-7 rounded-lg' src={Jailer} />
                    <section className='absolute left-1 top-3 border-5 border-solid border-red pl-12'>

                        <span className='text-[#FFFFFF]  text-xl mb-6  cursor-default font-bold pt-12 flex justify-start leading-7'>
                            #1 in India
                        </span>
                        <a>
                            <div>
                                <img className='w-[127.59px] h-[116px]' src={rokyranilogo} alt='rokyranilogo' />
                            </div>
                        </a>

                        <div >
                            <div className='flex mt-16 items-center cursor-default'>
                                <span>
                                    <img className='w-[22px] h-[22px] mr-2 ' src={checkbox} />
                                </span>
                                <span className='text-white w-[247.59px] h-[25px] text-lg font-bold '>
                                    Watch with a free Prime trial
                                </span>
                                <span className='text-white bg-[#33373D]  px-[7px] py[3px] ml-3.5 font-bold'>
                                    U/A 13+
                                </span>
                            </div>
                        </div>

                        <div className='mt-4 flex gap-0.5'>
                            <button className='bg-[#FFFFFF] text-[#00050D] w-[155.48px] h-[62px] text-xl py-2 px-[21px]
                             rounded-lg text-left opacity-[1] mr-6 font-semibold  min-h-[62px] cursor-pointer'>More details</button>
                            <button className='bg-[#FFFFFF33] w-[61px] h-[61px] rounded-[50%] flex items-center justify-center'>
                                <PiPlusBold className='cursor-pointer h-[33px] w-[33px] text-white' />
                            </button>
                        </div>
                    </section>
                </div>

                <div>
                    <img className='h-[464px] w-[1392px] cursor-pointer object-cover object-top leading-7 rounded-lg' src={Neeyat} />
                    <section className='absolute left-1 top-3 border-5 border-solid border-red pl-12'>

                        <span className='text-[#FFFFFF]  text-xl mb-6  cursor-default font-bold pt-12 flex justify-start leading-7'>
                            #1 in India
                        </span>
                        <a>
                            <div>
                                <img className='w-[127.59px] h-[116px]' src={rokyranilogo} alt='rokyranilogo' />
                            </div>
                        </a>

                        <div >
                            <div className='flex mt-16 items-center cursor-default'>
                                <span>
                                    <img className='w-[22px] h-[22px] mr-2 ' src={checkbox} />
                                </span>
                                <span className='text-white w-[247.59px] h-[25px] text-lg font-bold '>
                                    Watch with a free Prime trial
                                </span>
                                <span className='text-white bg-[#33373D]  px-[7px] py[3px] ml-3.5 font-bold'>
                                    U/A 13+
                                </span>
                            </div>
                        </div>

                        <div className='mt-4 flex gap-0.5'>
                            <button className='bg-[#FFFFFF] text-[#00050D] w-[155.48px] h-[62px] text-xl py-2 px-[21px]
                            rounded-lg text-left opacity-[1] mr-6 font-semibold  min-h-[62px] cursor-pointer'>More details</button>
                            <button className='bg-[#FFFFFF33] w-[61px] h-[61px] rounded-[50%] flex items-center justify-center'>
                                <PiPlusBold className='cursor-pointer h-[33px] w-[33px] text-white' />
                            </button>
                        </div>
                    </section>
                </div>

                <div>
                    <img className='h-[464px] w-[1392px] cursor-pointer object-cover object-top leading-7 rounded-lg' src={Aadipurush} />
                    <section className='absolute left-1 top-3 border-5 border-solid border-red pl-12'>

                        <span className='text-[#FFFFFF]  text-xl mb-6  cursor-default font-bold pt-12 flex justify-start leading-7'>
                            #1 in India
                        </span>
                        <a>
                            <div>
                                <img className='w-[127.59px] h-[116px]' src={rokyranilogo} alt='rokyranilogo' />
                            </div>
                        </a>

                        <div >
                            <div className='flex mt-16 items-center cursor-default'>
                                <span>
                                    <img className='w-[22px] h-[22px] mr-2 ' src={checkbox} />
                                </span>
                                <span className='text-white w-[247.59px] h-[25px] text-lg font-bold '>
                                    Watch with a free Prime trial
                                </span>
                                <span className='text-white bg-[#33373D]  px-[7px] py[3px] ml-3.5 font-bold'>
                                    U/A 13+
                                </span>
                            </div>
                        </div>

                        <div className='mt-4 flex gap-0.5'>
                            <button className='bg-[#FFFFFF] text-[#00050D] w-[155.48px] h-[62px] text-xl py-2 px-[21px]
                            rounded-lg text-left opacity-[1] mr-6 font-semibold  min-h-[62px] cursor-pointer'>More details</button>
                            <button className='bg-[#FFFFFF33] w-[61px] h-[61px] rounded-[50%] flex items-center justify-center'>
                                <PiPlusBold className='cursor-pointer h-[33px] w-[33px] text-white' />
                            </button>
                        </div>
                    </section>
                </div>

                <div>
                    <img className='h-[464px] w-[1392px] cursor-pointer object-cover object-top leading-7 rounded-lg' src={Meg2} />
                    <section className='absolute left-1 top-3 border-5 border-solid border-red pl-12'>


                        <a>
                            <div className='mt-20'>
                                <img className='w-[415.2px] h-[116px]' src={meglogo} alt='rokyranilogo' />
                            </div>
                        </a>

                        <div >
                            <div className='flex mt-16 items-center cursor-default'>
                                <span>
                                    <img className='w-[22px] h-[22px] mr-2 ' src={checkbox} />
                                </span>
                                <span className='text-white text-lg font-bold '>
                                    Available to rent
                                </span>
                                <span className='text-white bg-[#33373D]  px-[7px] py[3px] ml-3.5 font-bold'>
                                    U/A 16+
                                </span>
                            </div>
                        </div>

                        <div className='mt-4 flex gap-0.5'>
                            <button className='bg-[#FFFFFF] text-[#00050D] w-[155.48px] h-[62px] text-xl py-2 px-[21px]
                            rounded-lg text-left opacity-[1] mr-6 font-semibold  min-h-[62px] cursor-pointer'>More details</button>
                            <button className='bg-[#FFFFFF33] w-[61px] h-[61px] rounded-[50%] flex items-center justify-center'>
                                <PiPlusBold className='cursor-pointer h-[33px] w-[33px] text-white' />
                            </button>
                        </div>
                    </section>
                </div>

                <div>
                    <img className='h-[464px] w-[1392px] cursor-pointer object-cover object-top leading-7 rounded-lg' src={Satyaprem} />
                    <section className='absolute left-1 top-3 border-5 border-solid border-red pl-12'>

                        <span className='text-[#FFFFFF]  text-xl mb-6  cursor-default font-bold pt-12 flex justify-start leading-7'>
                            #1 in India
                        </span>
                        <a>
                            <div>
                                <img className='w-[127.59px] h-[116px]' src={rokyranilogo} alt='rokyranilogo' />
                            </div>
                        </a>

                        <div >
                            <div className='flex mt-16 items-center cursor-default'>
                                <span>
                                    <img className='w-[22px] h-[22px] mr-2 ' src={checkbox} />
                                </span>
                                <span className='text-white w-[247.59px] h-[25px] text-lg font-bold '>
                                    Watch with a free Prime trial
                                </span>
                                <span className='text-white bg-[#33373D]  px-[7px] py[3px] ml-3.5 font-bold'>
                                    U/A 13+
                                </span>
                            </div>
                        </div>

                        <div className='mt-4 flex gap-0.5'>
                            <button className='bg-[#FFFFFF] text-[#00050D] w-[155.48px] h-[62px] text-xl py-2 px-[21px]
                            rounded-lg text-left opacity-[1] mr-6 font-semibold  min-h-[62px] cursor-pointer'>More details</button>
                            <button className='bg-[#FFFFFF33] w-[61px] h-[61px] rounded-[50%] flex items-center justify-center'>
                                <PiPlusBold className='cursor-pointer h-[33px] w-[33px] text-white' />
                            </button>
                        </div>
                    </section>
                </div>

                <div>
                    <img className='h-[464px] w-[1392px] cursor-pointer object-cover object-top leading-7 rounded-lg' src={Royalblue} />
                    <section className='absolute left-1 top-3 border-5 border-solid border-red pl-12'>

                        <span className='text-[#FFFFFF]  text-xl mb-6  cursor-default font-bold pt-12 flex justify-start leading-7'>
                            #1 in India
                        </span>
                        <a>
                            <div>
                                <img className='w-[127.59px] h-[116px]' src={rokyranilogo} alt='rokyranilogo' />
                            </div>
                        </a>

                        <div >
                            <div className='flex mt-16 items-center cursor-default'>
                                <span>
                                    <img className='w-[22px] h-[22px] mr-2 ' src={checkbox} />
                                </span>
                                <span className='text-white w-[247.59px] h-[25px] text-lg font-bold '>
                                    Watch with a free Prime trial
                                </span>
                                <span className='text-white bg-[#33373D]  px-[7px] py[3px] ml-3.5 font-bold'>
                                    U/A 13+
                                </span>
                            </div>
                        </div>

                        <div className='mt-4 flex gap-0.5'>
                            <button className='bg-[#FFFFFF] text-[#00050D] w-[155.48px] h-[62px] text-xl py-2 px-[21px]
                             rounded-lg text-left opacity-[1] mr-6 font-semibold  min-h-[62px] cursor-pointer'>More details</button>
                            <button className='bg-[#FFFFFF33] w-[61px] h-[61px] rounded-[50%] flex items-center justify-center'>
                                <PiPlusBold className='cursor-pointer h-[33px] w-[33px] text-white' />
                            </button>
                        </div>
                    </section>
                </div>

                <div>
                    <img className='h-[464px] w-[1392px] cursor-pointer object-cover object-top leading-7 rounded-lg' src={Spiderman} />
                    <section className='absolute left-1 top-3 border-5 border-solid border-red pl-12'>

                        <span className='text-[#FFFFFF]  text-xl mb-6  cursor-default font-bold pt-12 flex justify-start leading-7'>
                            #1 in India
                        </span>
                        <a>
                            <div>
                                <img className='w-[127.59px] h-[116px]' src={rokyranilogo} alt='rokyranilogo' />
                            </div>
                        </a>

                        <div >
                            <div className='flex mt-16 items-center cursor-default'>
                                <span>
                                    <img className='w-[22px] h-[22px] mr-2 ' src={checkbox} />
                                </span>
                                <span className='text-white w-[247.59px] h-[25px] text-lg font-bold '>
                                    Watch with a free Prime trial
                                </span>
                                <span className='text-white bg-[#33373D]  px-[7px] py[3px] ml-3.5 font-bold'>
                                    U/A 13+
                                </span>
                            </div>
                        </div>

                        <div className='mt-4 flex gap-0.5'>
                            <button className='bg-[#FFFFFF] text-[#00050D] w-[155.48px] h-[62px] text-xl py-2 px-[21px]
                            rounded-lg text-left opacity-[1] mr-6 font-semibold  min-h-[62px] cursor-pointer'>More details</button>
                            <button className='bg-[#FFFFFF33] w-[61px] h-[61px] rounded-[50%] flex items-center justify-center'>
                                <PiPlusBold className='cursor-pointer h-[33px] w-[33px] text-white' />
                            </button>
                        </div>
                    </section>
                </div>

                <div>
                    <img className='h-[464px] w-[1392px] cursor-pointer object-cover object-top leading-7 rounded-lg' src={Spy} />
                    <section className='absolute left-1 top-3 border-5 border-solid border-red pl-12'>

                        <span className='text-[#FFFFFF]  text-xl mb-6  cursor-default font-bold pt-12 flex justify-start leading-7'>
                            #1 in India
                        </span>
                        <a>
                            <div>
                                <img className='w-[127.59px] h-[116px]' src={rokyranilogo} alt='rokyranilogo' />
                            </div>
                        </a>

                        <div >
                            <div className='flex mt-16 items-center cursor-default'>
                                <span>
                                    <img className='w-[22px] h-[22px] mr-2 ' src={checkbox} />
                                </span>
                                <span className='text-white w-[247.59px] h-[25px] text-lg font-bold '>
                                    Watch with a free Prime trial
                                </span>
                                <span className='text-white bg-[#33373D]  px-[7px] py[3px] ml-3.5 font-bold'>
                                    U/A 13+
                                </span>
                            </div>
                        </div>

                        <div className='mt-4 flex gap-0.5'>
                            <button className='bg-[#FFFFFF] text-[#00050D] w-[155.48px] h-[62px] text-xl py-2 px-[21px]
                            rounded-lg text-left opacity-[1] mr-6 font-semibold  min-h-[62px] cursor-pointer'>More details</button>
                            <button className='bg-[#FFFFFF33] w-[61px] h-[61px] rounded-[50%] flex items-center justify-center'>
                                <PiPlusBold className='cursor-pointer h-[33px] w-[33px] text-white' />
                            </button>
                        </div>
                    </section>
                </div>
                */}
            </Flickity>
        </>
    )
}
