import React from "react";
import "./mediacopyright.css";
import { TfiFacebook } from "react-icons/tfi";
import { BsTwitter } from "react-icons/bs";

const MediaCopyRight = () => {
  return (
    <>
      <div className="mainmediadiv">
        <div className="socialmediaicons">
          <span>
            <BsTwitter size={30} />
          </span>
          <span>
            <TfiFacebook size={30} />
          </span>
        </div>
        <div className="copyright">
          <h3>© 2023 MAKEMYTRIP PVT. LTD.</h3>
          <p>Country India USA UAE</p>
        </div>
      </div>
    </>
  );
};

export default MediaCopyRight;
