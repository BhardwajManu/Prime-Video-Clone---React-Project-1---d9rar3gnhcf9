import React from 'react'

const CategoryList = () => {

    return (
        <div className='bg-[#191E25] mx-auto max-w-5xl '>
            <div className="flex justify-between gap-10 px-16 py-5 w-[65rem] ">
                <div className="flex flex-col gap-4">
                    <h1 className="text-white text-2xl font-medium">Featured <span className='ml-1'>collections</span></h1>

                    <ul className="flex justify-between gap-3 tracking-[1px] font-semibold text-[#AAA]">

                        <div className='flex flex-col gap-5 '>
                            <li className='hover:bg-white hover:rounded-lg py-2 px-3 hover:text-black'>Hindi</li>
                            <li className='hover:bg-white hover:rounded-lg py-2 px-3 hover:text-black'>English</li>
                            <li className='hover:bg-white hover:rounded-lg py-2 px-3 hover:text-black'>Telugu</li>
                            <li className='hover:bg-white hover:rounded-lg py-2 px-3 hover:text-black'>Tamil</li>
                            <li className='hover:bg-white hover:rounded-lg py-2 px-3 hover:text-black'>Malayalam</li>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <li className='hover:bg-white hover:rounded-lg py-2 px-3 hover:text-black'>Kannada</li>
                            <li className='hover:bg-white hover:rounded-lg py-2 px-3 hover:text-black'>Marathi</li>
                            <li className='hover:bg-white hover:rounded-lg py-2 px-3 hover:text-black'>Punjabi</li>
                            <li className='hover:bg-white hover:rounded-lg py-2 px-3 hover:text-black'>Gujarati</li>
                            <li className='hover:bg-white hover:rounded-lg py-2 px-3 hover:text-black'>Bengali</li>
                        </div>
                    </ul>
                </div>


                <div className="flex flex-col gap-6">
                    <h1 className="text-white text-2xl font-medium">Genres</h1>
                    <ul className="flex justify-between gap-20 tracking-[1px] font-semibold text-[#AAA]">
                        <div className='flex flex-col gap-4 '>
                            <li className='hover:bg-white hover:rounded-lg py-2 px-3 hover:text-black'>Action and adventure</li>
                            <li className='hover:bg-white hover:rounded-lg py-2 px-3 hover:text-black'>Anime</li>
                            <li className='hover:bg-white hover:rounded-lg py-2 px-3 hover:text-black'>Comedy</li>
                            <li className='hover:bg-white hover:rounded-lg py-2 px-3 hover:text-black'>Documentary</li>
                            <li className='hover:bg-white hover:rounded-lg py-2 px-3 hover:text-black'>Drama</li>
                            <li className='hover:bg-white hover:rounded-lg py-2 px-3 hover:text-black'>Fantasy</li>
                        </div>
                        <div className='flex flex-col gap-4 '>
                            <li className='hover:bg-white hover:rounded-lg py-2 px-3 hover:text-black'>Horror</li>
                            <li className='hover:bg-white hover:rounded-lg py-2 px-3 hover:text-black'>International</li>
                            <li className='hover:bg-white hover:rounded-lg py-2 px-3 hover:text-black'>Kids</li>
                            <li className='hover:bg-white hover:rounded-lg py-2 px-3 hover:text-black'>Music videos and concerts</li>
                            <li className='hover:bg-white hover:rounded-lg py-2 px-3 hover:text-black'>Mystery and thrillers</li>
                            <li className='hover:bg-white hover:rounded-lg py-2 px-3 hover:text-black'>Romance</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CategoryList;