import React from "react";
import { filters } from "../../styles/tailwindClasses";

const Filters = () => {
  return (
    <>
      <div className="py-10">
        <div className="flex justify-between gap-5 ">
          <div className="flex gap-6">
            <button className="text-white text-3xl font-bold">
              Search Result<span className="mt-1 ml-1 font-bold"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
