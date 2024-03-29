import React from "react";
import checkbox from "../../../assets/images/checkbox.png";
import { PiPlusBold } from "react-icons/pi";
import { MdCelebration } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { FiShare2 } from "react-icons/fi";
import { LuDot } from "react-icons/lu";
import rokiBig from "../../../assets/images/contentRokibig.jpeg";
import rokiSmall from "../../../assets/images/contentRokismall.jpeg";
import Tabsforcontent from "./Tabsforcontent";
import { Link } from "react-router-dom";
import {
  imbdTags,
  uaXray,
  movieIconBtn,
  movieIcons,
  ludot,
} from "../../../styles/tailwindClasses";
import Header from "../../header/Header";

const Contentdetails = () => {
  return (
    <>
      <Header />
      <div className=" relative">
        <div
          className="hidden md:block min-h-screen w-screen bg-no-repeat bg-cover bg-right-top"
          style={{
            backgroundImage: `linear-gradient( to right, #000 40%, transparent 78% ),url(${rokiBig})`,
          }}
        ></div>
        <div
          className="aspect-video md:hidden bg-no-repeat bg-cover w-screen"
          style={{
            backgroundImage: `linear-gradient( to right, #000 5%, transparent 70% ),url(${rokiSmall})`,
          }}
        ></div>

        <div
          className=" cursor-default flex flex-col gap-4 justify-start items-start mx-9 md:ml-20 md:mt-24 mt-14 h-max relative
                 pb-10 md:absolute  md:w-1/2 top-0 left-0"
        >
          <h1 className="text-[#FFFFFF] text-4xl md:text-5xl font-extrabold tracking-wide max-w-lg leading-normal">
            Rocky Aur Rani Kii Prem Kahaani
          </h1>
          <span className="text-[#FFFFFF] hidden sm:block text-xl mt-5 font-bold max-w-4xl">
            A rollercoaster journey taking you through an epic love story in a
            new-age era, topped with hearty laughs and posing questions about
            love, family and the meaning of breaking away from generations of
            family traditions in the name of love.
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
            <span className="">Drama</span>
            <span className={`${ludot}`}>
              <LuDot />
            </span>
            <span className="">Fantasy</span>
            <span className={`${ludot}`}>
              <LuDot />
            </span>
            <span className="">Adventure</span>
            <span className={`${ludot}`}>
              <LuDot />
            </span>
            <span className="">Action</span>
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
            <Link to="/">
              <button
                className="bg-[#FFFFFF] text-[#00050D] hidden sm:block text-lg sm:text-xl py-1 px-[15px] rounded-lg text-left 
                        opacity-[1] mr-6 font-semibold min-h-[62px] cursor-pointer"
              >
                Watch with Prime
                <br /> Start your 30-day free trial
              </button>
            </Link>
            <div className="flex gap-3">
              <button className={`${movieIconBtn}`}>
                <TfiVideoClapper className={`${movieIcons}`} />
              </button>
              <button className={`${movieIconBtn}`}>
                <PiPlusBold className={`${movieIcons}`} />
              </button>
              <button className={`${movieIconBtn}`}>
                <MdCelebration className={`${movieIcons}`} />
              </button>
              <button className={`${movieIconBtn}`}>
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

export default Contentdetails;
