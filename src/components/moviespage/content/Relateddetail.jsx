import React, { useEffect, useState } from 'react'
import Flickity from 'react-flickity-component'
import "../../../styles/related.css";
import Card from '../../Card';


const flickityOptions = {
    initialIndex: 0,
    groupCells: true,
    pageDots: false,
    resize: false,

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
        <div>
            <div>
                <span className='text-[#FFFFFF] ml-16 text-xl font-bold tracking-wide '>Customers also watched</span>
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

                    <Card key={item._id} movie={item} />
                ))}
            </Flickity>
        </div>
    )
}

export default Relateddetail;