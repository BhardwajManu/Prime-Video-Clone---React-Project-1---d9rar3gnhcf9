
import React, { useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import "../../styles/subscription.css";

const Subscription = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
        if (modal) {
            document.body.classList.remove('active-modal');
        } else {
            document.body.classList.add('active-modal');
        }
    };

    return (
        <>
            <button
                onClick={toggleModal}
                className="rounded py-3 px-5 text-lg font-semibold hover:bg-[#00a0d6] bg-[#0f79af] w-full md:w-72 mt-6 leading-tight"
            >
                Prime Video Mobile Edition at ₹599/year
            </button>

            {modal && (
                <div className="modal-container">
                    <div className="modal-2">
                        <div className="modal-header">
                            <span onClick={toggleModal} className='cross-button'>
                                <TfiClose />
                            </span>
                        </div>
                        <div className="modal-content">
                            <div className="flex items-center justify-center">
                                <h1 className="text-3xl text-white font-bold">Prime Plans</h1>
                            </div>

                            <div className="plans mb-6 font-bold">
                                <div className="plan flex items-center p-4 rounded border border-gray-100 mb-4">
                                    <h2 className="bg-blue-500 text-white py-1 px-2 rounded">30-Days Free trial*</h2>
                                </div>
                                <div className="plan flex items-center p-4 rounded border border-gray-100 mb-4">
                                    <h2 className="text-white text-lg">₹599/month</h2>
                                </div>
                                <div className="plan flex items-center p-4 rounded border border-gray-100 mb-4">
                                    <h2 className="text-white text-lg">₹1,499/year</h2>
                                </div>
                            </div>

                            <div className="youth-offer flex items-center mb-4 justify-evenly">
                                <p className="text-white bg-pink-400 px-3 py-1 rounded">YOUTH OFFER</p>
                                <p className="text-xl text-white">50% off on all Prime plans**</p>
                            </div>

                            <div className="note text-sm text-white">
                                Login to Amazon to check if you're eligible for a 30-Day Free trial of Prime upon successful age verification.
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Subscription;
