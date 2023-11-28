import React from "react";
import "./headernavbar.css";

const HeaderNavbar = () => {
  return (
    <div className="headernav">
      <div className="mainheadernav">
        <ul className="headernavlist">
          <li>
            <div className="flightimage"></div>
            <div>Flights</div>
          </li>
          <li>
            <div className="hotelimage"></div>
            <div>Hotels</div>
          </li>
          <li>
            <div className="homestaysimage"></div>
            <div>Homestays & Villas</div>
          </li>
          <li>
            <div className="holidayimage"></div>
            <div>Holiday Packages</div>
          </li>
          <li>
            <div className="trainimage"></div>
            <div>Trains</div>
          </li>
          <li>
            <div className="busesimage"></div>
            <div>Buses</div>
          </li>
          <li>
            <div className="cabsimage"></div>
            <div>Cabs</div>
          </li>
          <li>
            <div className="foreximage"></div>
            <div>Forex Card & Currency</div>
          </li>
          <li>
            <div className="travelinsuranceimage"></div>
            <div>Travel Insurance</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderNavbar;
