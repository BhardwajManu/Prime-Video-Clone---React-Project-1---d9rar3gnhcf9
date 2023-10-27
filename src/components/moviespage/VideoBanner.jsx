import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const VideoBanner = () => {
    const [data, setData] = useState({});
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

        <div className="w-full">
            <div key={data?._id} className="w-full">
                <video className='md:h-[75vh] h-[75vh]  w-full sticky' controls>
                    <source src={data?.video_url} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default VideoBanner