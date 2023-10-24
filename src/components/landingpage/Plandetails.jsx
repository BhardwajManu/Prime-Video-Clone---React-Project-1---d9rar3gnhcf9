
import React, { useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import "../../styles/plandetail.css";

const PlanDetails = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }

    return (
        <>
            <div className="mt-2.5 mb-2.5 ml-16">
                <span
                    onClick={toggleModal}
                    className=" text-lg font-semibold underline hover:no-underline py-1 px-2 cursor-pointer">
                    ⓘ Plan details
                </span>
            </div>

            {modal && (
                <div className="modal-overlay">
                    <div className="modal-plan">
                        <div className="modal-container-plan-detail">
                            <TfiClose
                                onClick={toggleModal}
                                className="cross-button ml-auto"
                            />
                            <p className='font-semibold text-3xl pb-5'>Enjoy all Prime benefits</p>
                            <p>Watch Prime Video on multiple devices in 4K UHD (2160p) quality (ad-free)</p>
                            <p>Get unlimited FREE Same-Day/One-Day free delivery on Amazon purchases</p>
                            <p>Enjoy ad-free music on Prime Music and many more benefits</p>
                            <button
                                onClick={toggleModal}
                                className="close-button">
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

