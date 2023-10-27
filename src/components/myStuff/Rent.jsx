
// export default Rent;
import React from 'react';
import { Link } from 'react-router-dom';

const Rentals = () => {
    return (
        <>
            <div className="w-screen h-[70vh] text-[#00050D] flex flex-col mt-10 items-center">
                <div className="font-bold text-4xl md:text-5xl py-5 px-6 md:px-11">
                    <h1 className="text-white">Purchases & Rentals</h1>
                </div>

                <div className="flex flex-col items-center text-xl md:text-2xl text-center mx-5 md:mx-10 mt-8">
                    <p className="text-white mb-8">
                        You don't have any Purchases & Rentals
                    </p>
                    <p className="text-white">
                        If videos you were expecting aren't shown, make sure you're logged
                        into the correct Amazon account and then{" "}
                        <Link to='/rent' className="underline underline-offset-1 cursor-pointer">refresh this page.</Link>
                    </p>
                </div>
            </div>

        </>
    );
};

export default Rentals;