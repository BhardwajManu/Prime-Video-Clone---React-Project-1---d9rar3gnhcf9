import React from "react";
import "./stickyheader.css";
import logoblue from "../images/logoblue.png";
import { Container } from "@mui/material";

export const Stickyheader = () => {
  return (
    <>
      <Container>
        <div className="stickyheadermaindiv">
          <div className="bluelogodiv">
            <img src={logoblue} alt="mmtbluelogo" />
          </div>
          <div className="stickynavlinks">
            <ul className="navlinkslist">
              <li>
                <div className="sh-flightsimg"></div>
                <div>Flights</div>
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </>
  );
};
