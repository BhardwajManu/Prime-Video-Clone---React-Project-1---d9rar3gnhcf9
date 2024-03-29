/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Suggestionlist from "./Suggestionlist";

const SearchButton = ({ closeSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => setSearchValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchValue}`);
    closeSearch(e);
  };
  const closeSearchBar = (e) => {
    console.log(e.target === e.currentTarget);
    if (e.target === e.currentTarget) {
      closeSearch(e);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isSearchBarOpen) {
        // Prevent scrolling when the search bar is closed
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSearchBarOpen]);

  return (
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.7)]"
      onClick={closeSearchBar}
    >
      <div className="relative top-11 left-0 right-0 z-[100]">
        <div className="bg-[#191E25] p-5 md:ml-24 lg:ml-64  md:max-w-[64rem] rounded-lg mt-2">
          <div className="flex flex-col sm:w-full  bg-[#33373D] rounded-lg">
            <form onSubmit={handleSubmit} className="relative">
              <HiOutlineSearch className="h-10 w-6 text-[#AAAAAA] absolute top-1/2 left-4 transform -translate-y-1/2" />
              <input
                type="text"
                onChange={handleChange}
                value={searchValue}
                placeholder="Search"
                className="w-full border-[3px] text-2xl  focus:outline-none  border-white 
                                 h-16 bg-[#33373D] rounded-lg pl-16 text-white placeholder:text-2xl font-semibold" // Apply the styles here
              />
            </form>
            <div className="w-full max-h-[400px] overflow-y-auto ">
              <Suggestionlist
                searchValue={searchValue}
                closeSearch={closeSearch}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchButton;
