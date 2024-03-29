import React, { useEffect, useState } from 'react'
import Flickity from 'react-flickity-component'
import "../../../styles/related.css";
import Card from '../../Card';


const flickityOptions = {
    initialIndex: 0,
    groupCells: true,
    pageDots: false,
    cellAlign: 'left'
}


const Relateddetail = () => {
    const [data, setData] = useState([]);
    const id = "";
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    `https://academics.newtonschool.co/api/v1/ott/show/${id}?`,
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
        <div className='flex flex-col gap-5'>
            <div>
                <span className=' md:ml-20 mx-9 text-[#FFFFFF] text-xl font-bold tracking-wide '>Customers also watched</span>
            </div>
            <div className='md:ml-20 mx-9'>
                <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={false} // default false
                    reloadOnUpdate // default false
                    static // default false
                >


                    {data?.map((item) => (

                        <Card key={item._id} movie={item} />
                    ))}
                </Flickity>
            </div>
        </div>
    )
}

export default Relateddetail;