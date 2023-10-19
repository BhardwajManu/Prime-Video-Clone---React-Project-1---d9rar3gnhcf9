import Flickity from 'react-flickity-component';
import rockyrani from '../../assets/images/rokyrani.jpeg';
import Sapta from '../../assets/images/saptaEllo.jpeg';
import Transformar from '../../assets/images/transformers.jpeg';
import Luckyman from '../../assets/images/luckyman.jpeg';
import Jailer from '../../assets/images/jailer.jpeg';
import Neeyat from '../../assets/images/neeyat.jpeg';
import Aadipurush from '../../assets/images/adipurush.jpeg';
import Meg2 from '../../assets/images/meg2.jpeg';
import Satyaprem from '../../assets/images/satyaprem.jpeg';
import kgf from '../../assets/images/kgf.jpeg';
import Spiderman from '../../assets/images/spiderman.jpeg';
import Spy from '../../assets/images/spy.jpeg';
import "../../styles/banner.css";
import { TfiVideoClapper } from "react-icons/tfi";
import rokyranilogo from '../../assets/images/rokyraniLogo.png'
import checkbox from '../../assets/images/checkbox.png'
import saptalogo from '../../assets/images/saptaLogo.png'
import meglogo from '../../assets/images/megLogo.png'
import luckymanlogo from '../../assets/images/luckymanLogo.png'
import transformerlogo from '../../assets/images/tFormerLogo.png'
import jailerLogo from '../../assets/images/jailerLogo.png'
import neeyatlogo from '../../assets/images/neeyatLogo.png'
import adipurushlogo from '../../assets/images/adipurushLogo.png'
import kgflogo from '../../assets/images/kgfLogo.png'
import spidermanlogo from '../../assets/images/spidermanLogo.png'
import spylogo from '../../assets/images/spyLogo.png'
import Satyapremlogo from '../../assets/images/satyapremLogo.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CardOne from './CardOne';



const flickityOptions = {
    initialIndex: 0, autoPlay: true, cellAlign: 'center', fade: true, lazyLoad: true
}

const images = [
    { smallImg: rokyranilogo, bigImg: rockyrani },
    { smallImg: saptalogo, bigImg: Sapta },
    { smallImg: meglogo, bigImg: Meg2 },
    { smallImg: transformerlogo, bigImg: Transformar },
    { smallImg: jailerLogo, bigImg: Jailer },
    { smallImg: luckymanlogo, bigImg: Luckyman },
    { smallImg: neeyatlogo, bigImg: Neeyat },
    { smallImg: adipurushlogo, bigImg: Aadipurush },
    { smallImg: Satyapremlogo, bigImg: Satyaprem },
    { smallImg: kgflogo, bigImg: kgf },
    { smallImg: spidermanlogo, bigImg: Spiderman },
    { smallImg: spylogo, bigImg: Spy },
]

var myHeaders = new Headers();
myHeaders.append("projectId", "knjxpr9vh9wr");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,

};

export default function Banner() {
    const [usedata, setUsedata] = useState([]);

    useEffect(() => {
        fetch("https://academics.newtonschool.co/api/v1/ott/show?limit=12", requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result.data)
                setUsedata(result.data)
            })
            .catch(error => console.log('error', error));
    }, [])

    return (
        <>
            <div>
                <h1 className='text-[#FFFFFF] text-[2.5vw] px-[72px]  mb-3
                 font-bold tracking-wide  flex justify-start cursor-default'>Movies</h1>
            </div>
            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
            >
                {usedata.map((item, i) => (

                    <div key={item._id} className='w-[93vw] m-auto  relative overflow-hidden'>
                        <div className='absolute inset-0 gradientToRight'></div>
                        <img className='aspect-[16/9] md:aspect-[18/6] lg:w-[91.2vw] w-full m-auto block cursor-pointer object-cover object-top leading-7 rounded-lg' src={images[i].bigImg} />
                        <section className='w-full lg:w-[40%] h-full absolute left-1 top-3 border-5 border-solid border-red md:pl-12 px-2 flex flex-col justify-around'>
                            <div>
                                {
                                    i == 0 &&
                                    <span className='text-[#FFFFFF] hidden text-2xl mb-[1.3vw]  cursor-default font-bold pt-[2vw] lg:flex justify-start leading-7'>
                                        #1 in India
                                    </span>
                                }
                                <a>
                                    <div className=' w-[40%]'>
                                        <Link to="/moviedetails"><img className='object-contain object-bottom w-full aspect-square' src={images[i].smallImg} alt='rokyranilogo' /></Link>
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
                                    <Link to="/moviedetails"> <button className='bg-[#FFFFFF] text-[#00050D] w-[155.48px] h-[62px] text-xl py-2 px-[21px]
                            rounded-lg text-left opacity-[1] mr-6 font-semibold  min-h-[62px] cursor-pointer'>More details</button></Link>
                                    <Link to="/moviedetails"> <button className='bg-[#FFFFFF33] w-[61px] h-[61px] rounded-[50%] flex items-center justify-center'>
                                        <TfiVideoClapper className='cursor-pointer h-[33px] w-[33px] text-white' />
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                ))
                }

            </Flickity >
            <CardOne title='movie' />
            <CardOne title='short film' />
            <CardOne title='tv show' />
            <CardOne title='web series' />
            <CardOne title='video song' />

        </>
    )
}
