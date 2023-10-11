import React, { useState } from 'react';
import Moviedetails from '../home/content/Moviedetails';



const Search = () => {
    // Initialize the state with 'related' selected
    const [selectedButton, setSelectedButton] = useState('related');

    // Content to be displayed based on the selected button
    const content = selectedButton === 'related' ? (
        <div>
            <span className='text-[#FFFFFF] ml-20 text-xl font-bold tracking-wide'>Customers also watched</span>
        </div>
    ) : (
        <Moviedetails />
    );

    return (
        <div>
            <div>
                {/* Buttons for selecting related and details */}
                <button
                    onClick={() => setSelectedButton('related')}
                    className={`button ${selectedButton === 'related' ? 'selected' : ''}`}
                >
                    <span className='text-white'> Related</span>
                </button>
                <button
                    onClick={() => setSelectedButton('details')}
                    className={`button ${selectedButton === 'details' ? 'selected' : ''}`}
                >
                    <span className='text-white'>Details</span>
                </button>
            </div>

            {/* Display content based on the selected button */}
            {content}

        </div>
    );
};

export default Search;
