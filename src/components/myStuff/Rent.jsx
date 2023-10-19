import React from 'react'

const Rent = () => {
    return (
        <>

            <div className='w-screen h-screen text-[#00050D] flex flex-col gap-16'>

                <div className='font-bold leading-3 text-4xl py-5 px-11 ml-10 mt-16'>
                    <h1 className='text-white'>Purchases & Rentals</h1>
                </div>

                <div className='flex flex-col justify-center items-center text-2xl'>
                    <p className='text-white'>
                        You don't have any Purchases & Rentals
                    </p>
                    <p className='text-white'>
                        If videos you were expecting aren't shown, make sure you're logged into the correct Amazon account and then <span className='underline underline-offset-1 cursor-pointer'>refresh this page.</span>
                    </p>
                </div>

            </div>

        </>
    )
}
export default Rent;