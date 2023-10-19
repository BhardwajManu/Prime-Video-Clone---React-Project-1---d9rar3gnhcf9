import React, { useState } from 'react';
import '../../styles/viewplandetails.css'
import { TfiClose } from 'react-icons/tfi'
const PlanDetails = () => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (
        <>
            <button onClick={toggleModal} className="btn-modal text-white">
                Open
            </button>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content bg-[#252E39]  flex flex-col">
                        <span className='ml-auto'><TfiClose className='text-white' /></span>
                        <div className='flex flex-col gap-3 text-white max-w-md text-xl p-5'>
                            <p>Enjoy all Prime benefits</p>
                            <p>Watch Prime Video on multiple devices in 4K UHD (2160p) quality (ad-free)</p>
                            <p>Get unlimited FREE Same-Day/One-Day free delivery on Amazon purchases</p>
                            <p>Enjoy ad-free music on Prime Music and many more benefits</p>
                        </div>
                        <div className='mb-5'>
                            <button onClick={toggleModal} className=' text-[#FFFFFF] font-[17px] ml-72 py-3 px-5 bg-[#425265] rounded'>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default PlanDetails;