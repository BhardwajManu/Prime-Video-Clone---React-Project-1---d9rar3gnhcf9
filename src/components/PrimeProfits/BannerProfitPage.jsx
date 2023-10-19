import Flickity from 'react-flickity-component'
import primeprofit1 from '../../assets/images/BenefitBigImage1.jpeg';
import primeprofit2 from '../../assets/images/benefitBigimg2.jpeg';
import primeprofit3 from '../../assets/images/benefitBigImg3.jpeg';
import primeprofit4 from '../../assets/images/BenefitbigImg4.jpeg';
import primeprofit5 from '../../assets/images/BenefitBigImg5.jpeg';
import "../../styles/bannerProfit.css";
import primelogo1 from '../../assets/images/login.png'
import primelogo2 from '../../assets/images/primeBenefitLogo1.png'
import primelogo3 from '../../assets/images/primeBenefitLogo2.png'
import primelogo4 from '../../assets/images/primeBenefitLogo3.png'
import primelogo5 from '../../assets/images/primeBenefitLogo4.png'
import { useEffect, useState } from 'react';
import CardsProfit from './CardsProfit';
import { Link } from 'react-router-dom';


const flickityOptions = {
    initialIndex: 0, autoPlay: true, cellAlign: 'center', fade: true, lazyLoad: true
}
const images = [
    { smallImg: primelogo1, bigImg: primeprofit1 },
    { smallImg: primelogo2, bigImg: primeprofit2 },
    { smallImg: primelogo3, bigImg: primeprofit3 },
    { smallImg: primelogo4, bigImg: primeprofit4 },
    { smallImg: primelogo5, bigImg: primeprofit5 },
]
var myHeaders = new Headers();
myHeaders.append("projectId", "knjxpr9vh9wr");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,

};

export default function BannerProfitPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://academics.newtonschool.co/api/v1/ott/show?limit=5", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result.data)
                setData(result.data)
            })
            .catch(error => console.log('error', error));
    }, [])

    return (
        <>

            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
            >
                {data.map((item, i) => (
                    <div key={item._id} className='w-[94vw] m-auto  relative overflow-hidden '>
                        <div className='absolute inset-0 gradientToRight'></div>
                        <img className='aspect-[16/9] md:aspect-[18/6] lg:w-[91vw] w-full  m-auto block cursor-pointer object-cover object-top leading-7 rounded-lg' src={images[i].bigImg} />
                        <section className='w-full lg:w-[40%] h-full absolute left-1 top-3 border-5 border-solid border-red md:pl-12 px-2 flex flex-col justify-around'>
                            <div>
                                <a>
                                    <div className=' w-[50%]'>
                                        <img className='object-contain object-bottom w-full aspect-square' src={images[i].smallImg} alt='' />
                                    </div>
                                </a>
                            </div>

                            <div className=' lg:flex gap-0.5 hidden my-10 mx-10'>
                                <Link to="https://www.amazon.in/events/greatindianfestival?ref_=atv_me_pri_c_eiVJLU_zMbofx_1_1"> <button className='bg-[#FFFFFF] text-[#00050D] w-[155.48px] h-[62px] text-[1.3vw]  px-[21px] mb-14
                            rounded-lg text-left opacity-[1]  font-semibold  min-h-[62px] cursor-pointer'>More details</button></Link>
                            </div>

                        </section>
                    </div>
                ))}

            </Flickity>
            <CardsProfit />

        </>
    )
}
