import React from "react";
import "../stylesheet/footer.css";
import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import linkedin from "../assests/linkedin.svg";
import github from "../assests/githubicon.svg";
import youtube from "../assests/youtube.svg";
import insta from "../assests/insta.svg";
import logo from "../assests/logo.svg";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const Footer = () => {
  const [isActive, setActive] = useState("flase");
  const [isActive1, setActive1] = useState("flase");
  const [isActive2, setActive2] = useState("flase");

  return (
    <>
      <footer>
        <div className="foot-main">
          <div className="foot-services">
            <h1
              onClick={() => {
                setActive(!isActive);
              }}
            >
              Our Services{" "}
              <span className={isActive ? " foot-up " : "foot-up active"}>
                <FaAngleUp />
              </span>
              <span className={isActive ? " foot-up active " : "foot-up "}>
                <FaAngleDown />
              </span>
            </h1>
            <ul className={isActive ? null : "active "}>
              <li>Mobile Development</li>
              <li>
                <Link to="/backend">Back-end Development</Link>
              </li>
              <li>
                <Link to="/frontend">Front-end Development</Link>
              </li>
              <li>Web Development</li>
            </ul>
          </div>
          {/* <div className="foot-cases">
            <h1
              onClick={() => {
                setActive1(!isActive1);
              }}
            >
              Cases
              <span className={isActive1 ? " foot-up " : "foot-up active"}>
                <FaAngleUp />
              </span>
              <span className={isActive1 ? " foot-up active " : "foot-up "}>
                <FaAngleDown />
              </span>
            </h1>
            <ul className={isActive1 ? null : "active "}>
              <li>Social media iOS app</li>
              <li>Android app for fast delivery services</li>
              <li>Powerful website for the enterprise SaaS</li>
              <li>ERP for a new gen real estate</li>
              <li>Computer vision for ID recognition</li>
              <li style={{ color: "#F8B000" }}>
                See more cases <Icon as={ArrowForwardIcon} />{" "}
              </li>
            </ul>
          </div> */}
          <div className="foot-company">
            <h1
              onClick={() => {
                setActive2(!isActive2);
              }}
            >
              Company
              <span className={isActive2 ? " foot-up " : "foot-up active"}>
                <FaAngleUp />
              </span>
              <span className={isActive2 ? " foot-up active" : "foot-up "}>
                <FaAngleDown />
              </span>
            </h1>
            <ul className={isActive2 ? null : "active "}>
              <li>Who we are</li>
              <li>Clients</li>
              <li>
                <Link to="/contactus">Contacts</Link>
              </li>
              <li>
                <Link to="/privacypolicy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="foot-address">
            <div className="foot-logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div>
              <p> 6,Vrundavan Nagar, </p>
              <p> Bamroli Road Area,</p>
              <p> Godhra, Gujarat 389001</p>
            </div>
            <div className="socials">
              <Link
                to="https://www.linkedin.com/company/codinggita/"
                target="_blank"
              >
                <img src={linkedin} alt="" />
              </Link>
              <Link to="https://github.com/codinggita" target="_blank">
                <img src={github} alt="" />
              </Link>
              <Link to="https://www.youtube.com/@coding_gita" target="_blank">
                <img src={youtube} alt="" />
              </Link>
              <Link to="https://www.instagram.com/codinggita/" target="_blank">
                <img src={insta} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
