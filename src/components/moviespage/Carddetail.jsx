import React, { useEffect, useState } from "react";
import { LuDot } from "react-icons/lu";
import { PiPlusBold } from "react-icons/pi";
import { MdCelebration } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { FiShare2 } from "react-icons/fi";
import checkbox from "../../assets/images/checkbox.png";
import Tabsforcontent from "./content/Tabsforcontent";
import { Link, useParams } from "react-router-dom";
import {
  imbdTags,
  uaXray,
  movieIconBtn,
  movieIcons,
} from "../../styles/tailwindClasses";
import useFetch from "../../Hooks/useFetch";

const Carddetail = () => {
  const { data, get } = useFetch([]);
  const { id } = useParams();

  useEffect(() => {
    get(`/ott/show/${id}`);
  }, [id]);

  return (
    <>
      <div key={data?.data._id} className="relative">
        <div
          className="hidden md:block min-h-screen w-screen bg-no-repeat bg-cover bg-right-top"
          style={{
            backgroundImage: `linear-gradient( to right, #000 40%, transparent 78% ),
                    url(${data?.data.thumbnail})`,
          }}
        ></div>
        <div
          className="aspect-video md:hidden bg-no-repeat bg-cover w-screen"
          style={{
            backgroundImage: `linear-gradient( to top, #000 10%, transparent 78% ),
                    url(${data?.data.thumbnail})`,
          }}
        ></div>

        <div
          className="cursor-default flex flex-col gap-6 justify-start items-start mx-9  md:ml-20 md:mt-24 mt-14
                h-max relative pb-10 md:absolute  md:w-1/2 top-0 left-0"
        >
          <h1 className="text-[#FFFFFF] text-4xl md:text-5xl font-extrabold tracking-wide max-w-lg leading-normal">
            {data?.data.title}
          </h1>
          <span className="text-[#FFFFFF] hidden sm:block text-xl mt-5 font-bold max-w-4xl">
            {data?.data.description}
          </span>

          <div className="text-white flex gap-3 ">
            <span className={`${imbdTags}`}>IMBD 6.0</span>
            <span className={`${imbdTags}`}>2 h 58 min</span>
            <span className={`${imbdTags}`}>2023</span>

            <span className={`${uaXray} ml-2 `}>X-RAY</span>
            <span className={`${uaXray}`}>HDR</span>
            <span className={`${uaXray}`}>UHD</span>
            <span className={`${uaXray}`}>U/A 13+</span>
          </div>

          <div className="flex text-[#FFFFFF] text-xl underline font-semibold">
            {data?.keywords?.map((keyword, index) => (
              <React.Fragment key={index}>
                <span>{keyword}</span>
                {index !== data?.keywords.length - 1 && (
                  <span className="text-[#999999] flex justify-center items-center">
                    <LuDot />
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex  font-semibold">
            <div className="flex">
              <img className="w-[23px] h-[23px] my-1" src={checkbox} alt="" />
              <h3 className="flex text-[#FFFFFF] text-lg ml-2">
                Watch with a free prime trial
              </h3>
            </div>
          </div>

          <div className="flex gap-3">
            <Link to={`/videoplay/${data?.data._id}`}>
              <button
                className="bg-[#FFFFFF] text-[#00050D] text-lg sm:text-xl py-1 px-[15px] 
                        rounded-lg text-left opacity-[1] mr-6 font-semibold min-h-[62px] cursor-pointer"
              >
                Watch Video
              </button>
            </Link>
            <div className="flex gap-3">
              <button className={`${movieIconBtn}`}>
                <TfiVideoClapper className={`${movieIcons}`} />
              </button>

              <button className={`${movieIconBtn} `}>
                <MdCelebration className={`${movieIcons}`} />
              </button>
              <button className={`${movieIconBtn} `}>
                <FiShare2 className={`${movieIcons}`} />
              </button>
            </div>
          </div>
          <span className="text-[#AAAAAA] text-lg font-semibold">
            Rentals include 30 days to start watching this video and 48 hours to
            finish once started.
          </span>
        </div>
      </div>
      <Tabsforcontent />
    </>
  );
};
export default Carddetail;
