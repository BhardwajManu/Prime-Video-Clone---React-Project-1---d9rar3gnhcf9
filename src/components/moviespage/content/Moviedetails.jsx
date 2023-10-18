import { useEffect, useState } from 'react';

const Moviedetails = () => {

    const [data, setData] = useState([]);
    const id = "";
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
            {data?.map((item) => (
                <div key={item._id}
                    className='flex flex-col gap-5 ml-20 text-[#FFFFFF] text-lg font-semibold tracking-wide mt-20'>
                    <div className='font-extrabold'><span>More info</span></div>

                    <div className='flex flex-col gap-2'>
                        <span className='font-extrabold'>Type</span>
                        <span className='text-[#AAAAAA]'>{item.type}</span>
                    </div>
                    <div className='flex flex-col gap-2' >
                        <span className='font-extrabold'>Audio languages</span>
                        <span className='text-[#AAAAAA]'>ಕನ್ನಡ, हिन्दी, മലയാളം, తెలుగు, தமிழ்</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='font-extrabold'>Subtitles</span>
                        <span className='text-[#AAAAAA]'>{item.title}</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='font-extrabold'>Directors</span>
                        <span className='underline underline-offset-1'>{item.director}</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='font-extrabold'>Producers</span>
                        <span className='underline underline-offset-1'>Kalanithi Maran</span>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <span className='font-extrabold'>Starring</span>
                        <span className='underline underline-offset-1 flex gap-3'>{item.cast[0]}<span>{item.cast[1]},</span> <span>{item.cast[2]}</span></span>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <span className='font-extrabold'>Studio</span>
                        <span className='text-[#AAAAAA]'>Sun Pictures</span>
                    </div>

                    <div className='text-[#AAAAAA] mt-5'>By clicking play, you agree to our<span className='text-[#FFFFFF] ml-1 un underline underline-offset-1'>Terms of Use.</span></div>

                    <hr className='border-1.5 border-solid  mr-5 md:mr-20 mt-7'></hr>

                    <div className='flex flex-col gap-2 mt-7'>
                        <span className='font-extrabold text-xl'>Feedback</span>
                        <span className='underline underline-offset-1'>Send us feedback</span>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <span className='font-extrabold'>Support</span>
                        <span className='underline underline-offset-1'>Get Help</span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Moviedetails;