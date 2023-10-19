import React from 'react'
import { TfiClose } from 'react-icons/tfi'

const Subscription = () => {
    return (
        <div className="container mx-auto bg-gray-100 p-6 shadow-md max-w-md mt-8 font-semibold rounded-lg">

            <div className='ml-96'>
                <span><TfiClose /></span>
            </div>

            <div className="flex items-center mb-6 justify-center">
                <h1 className="text-3xl text-black font-bold">Prime Plans</h1>
            </div>

            <div className="plans mb-6 font-bold">
                <div className="plan flex items-center p-4 rounded border border-gray-700 mb-4">
                    <h2 className="bg-blue-500 text-white py-1 px-2 rounded">30-Days Free trial*</h2>
                </div>
                <div className="plan flex items-center p-4 rounded border border-gray-700 mb-4">
                    <h2 className="text-black text-lg">₹599/month</h2>
                </div>
                <div className="plan flex items-center p-4 rounded border border-gray-700 mb-4">
                    <h2 className="text-black text-lg">₹1,499/year</h2>
                </div>
            </div>

            <div className="youth-offer flex items-center mb-4 justify-evenly">
                <p className='text-black bg-pink-400 px-3 py-1 rounded'>YOUTH OFFER</p>
                <p className='text-xl'>50% off on all Prime plans**</p>
            </div>

            <div className="note text-sm text-gray-600">
                Login to Amazon to check if you're eligible for a 30-Day Free trial of Prime Upon successful age verification.
            </div>
        </div>

    )
}

export default Subscription