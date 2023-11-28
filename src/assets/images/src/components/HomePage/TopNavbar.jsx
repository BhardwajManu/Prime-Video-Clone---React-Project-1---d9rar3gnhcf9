import React from "react";
import logowhite from "../images/logowhite.png";
import { Link } from "react-router-dom";
import "./topnavbar.css";
import { BsChevronDown } from "react-icons/bs";

const TopNavbar = () => {
  return (
    <>
      <div className="topnavbarmaindiv">
        <div className="mmtwhitelogo">
          <Link to="/">
            <img className="whitelogoimage" src={logowhite} alt="logo" />
          </Link>
        </div>
        <div className="middlenavdiv">
          <div className="superoffers">
            <div className="superofferlogo">%</div>
            <div className="superofferdescription">
              <h3>super offers</h3>
              <p>Explore great deals & offers</p>
            </div>
          </div>

          <div className="mybiz">
            <div className="mybizlogo"></div>
            <div className="mybizdescription">
              <h3>Introducing myBiz</h3>
              <p>Business Travel Solution</p>
            </div>
          </div>

          <div className="mytrips">
            <div className="mytripslogo"></div>
            <div className="mytripsdescription">
              <h3>My Trips</h3>
              <p>Manage your bookings</p>
            </div>
          </div>

          <div className="rightnavdiv">
            <div className="loginorcreateaccnt">
              <div className="loginlogo"></div>
              <div>Login or Create Account</div>
              <div className="logindownlogo">
                <BsChevronDown />
              </div>
            </div>

            <div className="languageselector">
              <div className="flaglogo"></div>
              <div>IN|ENG|INR</div>
              <div className="languageselectordownarror">
                <BsChevronDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
