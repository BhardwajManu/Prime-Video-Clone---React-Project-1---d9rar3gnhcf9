import React from 'react'
import shippingCard1 from '../../assets/images/shippingCard.jpeg'
import shippingCard2 from '../../assets/images/shippingCard1.jpeg'
import shippingCard3 from '../../assets/images/shippingCard2.jpeg'
import amazonPay from '../../assets/images/AmazonPay1.jpeg'
import amazonPay1 from '../../assets/images/AmazonPay2.jpeg'
import amazonPay2 from '../../assets/images/AmazonPay3.jpeg'
import amazonPay3 from '../../assets/images/AmazonPay4.jpeg'
import primemusic1 from '../../assets/images/AmazonMusic.jpeg'
import primemusic2 from '../../assets/images/AmazonMusic1.jpeg'
import primemusic3 from '../../assets/images/AmazonMusic2.jpeg'
import primemusic4 from '../../assets/images/AmazonMusic3.jpeg'
import primebooks1 from '../../assets/images/AmazonBooks1.jpeg'
import primebooks2 from '../../assets/images/PrimeBooks2.jpeg'
import primebooks3 from '../../assets/images/primeBooks3.jpeg'
import primebooks4 from '../../assets/images/primeBooks4.jpeg'
import primevideo1 from '../../assets/images/videoBenefit1.jpeg'
import primevideo2 from '../../assets/images/videoBenefit2.jpeg'
import primevideo3 from '../../assets/images/videoBenefit3.jpeg'
import primevideo4 from '../../assets/images/videoBenefit4.jpeg'

const CardsProfit = () => {
    // Define an array of card data with titles and image sources
    const cardData = [
        {
            title: 'Prime Shipping benefits',
            images: [shippingCard1, shippingCard2, shippingCard3],
        },
        {
            title: 'Amazon Pay ICICI card benefits',
            images: [amazonPay, amazonPay1, amazonPay2, amazonPay3],
        },
        {
            title: 'Prime Music benefits',
            images: [primemusic1, primemusic2, primemusic3, primemusic4],
        },
        {
            title: 'Prime Reading benefits',
            images: [primebooks1, primebooks2, primebooks3, primebooks4],
        },
        {
            title: 'Prime Video benefits',
            images: [primevideo1, primevideo2, primevideo3, primevideo4],
        },
    ];

    return (
        <>
            {cardData.map((card, index) => (
                <section key={index} className='text-[#FFF] mt-14 ml-[4.5%]'>
                    <h2 className='pb-4 text-xl font-bold'>{card.title}</h2>
                    <div className='flex'>
                        {card.images.map((image, imgIndex) => (
                            <img key={imgIndex}
                                className='mr-6 object-cover rounded-lg h-[145px] w-[259px]'
                                src={image}
                                alt=''
                            />
                        ))}
                    </div>
                </section>
            ))}
        </>
    );
};

export default CardsProfit;

