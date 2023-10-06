// import React from 'react'
// import Flickity from 'react-flickity-component'
// import "../styles/cardone.css";
// import { FiChevronRight } from "react-icons/fi";

// import { useEffect, useState } from 'react';

// const flickityOptions = {
//     initialIndex: 0,
//     groupCells: true,
//     pageDots: false,
//     resize: false,
// }
// const movies = [
//     { type: "web series" },
//     { type: "video song" },
//     { type: "tv show" },
//     { type: "short film" },
//     { type: "movie" },
// ]
// var myHeaders = new Headers();
// myHeaders.append("projectId", "knjxpr9vh9wr");

// var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
// };
// const CardOne = (props) => {
//     const [movieData, setMovieData] = useState([]);

//     useEffect(() => {
//         fetch("https://academics.newtonschool.co/api/v1/ott/show?limit=100", requestOptions)
//             .then(response => response.json())
//             .then(result => {
//                 console.log(result.movieData)
//                 setMovieData(result.movieData)
//             })
//             .catch(error => console.log('error', error));
//     }, [])
//     return (
//         <>
//             <div>
//                 <section className='text-[#FFF] mt-14 ml-[4.5%]'>
//                     <h2 className='flex  pb-4 text-xl'>
//                         <div>
//                             <span className='font-bold text-[#1A98FF]'>Prime</span>
//                             <span className='font-bold ml-3'>{props.title}</span>
//                         </div>
//                         <div className='flex items-center justify-center'>
//                             <span className='ml-8 font-medium'>See more </span>
//                             <span className='ml-1 mt-1'><FiChevronRight /></span>
//                         </div>
//                     </h2>
//                 </section>
//             </div>
//             <Flickity
//                 className={'carousel'} // default ''
//                 elementType={'div'} // default 'div'
//                 options={flickityOptions} // takes flickity options {}
//                 disableImagesLoaded={false} // default false
//                 reloadOnUpdate // default false
//                 static // default false
//             >
//                 {movieData?.map((item, i) => (
//                     <div key={item._id} className='ml-[1.6%]'>
//                         <img className='rounded-lg h-[145px] w-[259px]' src={movies[i].type} alt='' />
//                     </div>
//                 ))}
//             </Flickity>
//         </>
//     )
// }
// export default CardOne
import React, { useEffect, useState } from 'react';
import Flickity from 'react-flickity-component';
import "../styles/cardone.css";
import { FiChevronRight } from "react-icons/fi";
import { Api } from '../utils/Api';

const flickityOptions = {
    initialIndex: 0,
    groupCells: true,
    pageDots: false,
    resize: false,
};




const CardOne = (props) => {
    const [movieData, setMovieData] = useState([]);
    console.log("movieData", movieData.data)


    const movei = async () => {
        const albumsSongs = await Api("https://academics.newtonschool.co/api/v1/ott/show?limit=100");
        console.log(albumsSongs);
        setMovieData(albumsSongs)
    };
    useEffect(() => {
        movei()
    }, [])
    // Filter the movies based on the selected type

    import React, { useState, useEffect } from "react";
    import { Link } from "react-router-dom";
    import "react-responsive-carousel/lib/styles/carousel.min.css";
    import { Carousel } from "react-responsive-carousel";
    import "./PotraitCarousel.css";

    function PotraitCarousel() {
        const [data, setData] = useState([]);
        const filterType = "movie";
        useEffect(() => {
            async function fetchData() {
                try {
                    const response = await fetch(
                        `https://academics.newtonschool.co/api/v1/ott/show?filter={"type": "${filterType}"}&limit=10`,
                        {
                            method: "GET",
                            headers: {
                                projectID: "paln91dx5ibq",
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
                <div className="potraittitle">
                    <h4>Potrait Carousel movie</h4>

                    <Link to="/Moredatapotrait">
                        <button className="potrait-icon-button">
                            <img className="potrait-icon" src="images/download.png" />
                        </button>
                    </Link>
                </div>

                <Carousel
                    className="portraitcarousel"
                    showArrows={true} // Show navigation arrows
                    showStatus={false} // Hide status indicator
                    showThumbs={false} // Hide thumbnail images
                    infiniteLoop={true} // Enable infinite loop
                    centerMode={true} // Center the current slide
                    centerSlidePercentage={11.1} // Show three items at a time
                    emulateTouch={false}
                >
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <div className="potraitsimg" key={index}>
                                <a>
                                    <img
                                        src={item.thumbnail}
                                        alt={`Image ${index}`}
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                </a>
                            </div>
                        ))
                    ) : (
                        <h2 style={{ color: "white" }}>Loading....</h2>
                    )}
                </Carousel>
            </>
        );
    }

    export default PotraitCarousel;
    return (
        <>
            <div>
                <section className='text-[#FFF] mt-14 ml-[4.5%]'>
                    <h2 className='flex  pb-4 text-xl'>
                        <div>
                            <span className='font-bold text-[#1A98FF]'>Prime</span>
                            <span className='font-bold ml-3'>{props.title} Drama movies</span>
                        </div>
                        <div className='flex items-center justify-center'>
                            <span className='ml-8 font-medium'>See more</span>
                            <span className='ml-1 mt-1'><FiChevronRight /></span>
                        </div>
                    </h2>
                </section>
            </div>
            {/* {movieData.map((item) => {
                console.log("mamta", item)
            })} */}
            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
            >
                {/* {movieData.data.map((item, i) => {

                    console.log(item, "item")
                    return ( */}
                {/* <div key={item._id} className='ml-[1.6%]'>
                            <img className='rounded-lg h-[145px] w-[259px]' src={movies[i].type} alt='' />

                        </div>
                    ) */}
                {/* 
                })} */}
            </Flickity>
        </>
    );
};

export default CardOne;
