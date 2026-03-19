import React from "react";
import "../stylesheet/landingpage.css";
import mainimg from "../assests/main_image.svg";
import { Button } from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <>
      <div className="main">
        <div className="main-detail">
          <div className="main-title">Design, Build & Launch Quickly</div>
          <div className="main-info">
            Ideas come to life when innovation meets practicality. As a leading
            software development company, we help you leverage the right
            technology with expert support.
          </div>
          {/* <div className="main-btn">
            <Button size={['md']} className="btn" >Our Work</Button>
          </div> */}
        </div>
        <div className="main-img">
          <img src={mainimg} alt="" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
