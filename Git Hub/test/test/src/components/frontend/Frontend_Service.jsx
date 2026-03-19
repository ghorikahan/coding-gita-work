import React from "react";
import "../frontend/frontend.css";
import src1 from "../../assests/frontend/responsive.svg";
import src2 from "../../assests/frontend/ux.svg";
import src3 from "../../assests/frontend/mobile.svg";
import src4 from "../../assests/frontend/webapp.svg";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

function Frontend_Service() {
  const [isActive, setActive] = useState("flase");
  const [isActive1, setActive1] = useState("flase");
  return (
    <div className="frontend_services">
      <div className="frontend-services-title">
        CodingGita's Front End Development Services
        <h1>
          To give you exactly what you need, an expert CodingGita front end
          developer will provide a broad range of services, all of which focus
          on four key components.
        </h1>
      </div>
      <div className="frontend-services-container">
        <div className="frontend-serivces-cards">
          <div className="frontend-serivces-img">
            <img src={src1} alt="" />
          </div>
          <div className="frontend-services-info">
            <div className="frontend-services-cardtitle">
              Responsive Website Design
            </div>
            <div className="frontend-services-description">
              This dynamic approach to web design not only enhances user
              experience across diverse devices but also streamlines the
              management of your online presence. The adaptability of responsive
              design underscores a commitment to a cohesive and user-centric
              digital interface.
            </div>
          </div>
        </div>
        <div className="frontend-serivces-cards">
          <div className="frontend-serivces-img">
            <img src={src2} alt="" />
          </div>
          <div className="frontend-services-info">
            <div className="frontend-services-cardtitle">
              UI/UX Design Services
            </div>
            <div className="frontend-services-description">
              Our development process places a strong emphasis on both User
              Interface (UI) and User Experience (UX). While UI concentrates on
              visual design, UX ensures a smooth and satisfying overall
              interaction. This dual focus is integral to creating a compelling
              and user-friendly digital experience.
            </div>
            <div className={isActive ? "close" : "services-readmore open"}>
              <ul className="services-list">
                <li>
                  UX developers specialize in creating products with a strong
                  user focus, emphasizing seamless experiences from the first
                  point of contact to the final interaction. Their expertise
                  extends to both digital and physical products, and in
                  front-end development, they ensure the functionality is not
                  only natural but also intuitive, prioritizing a user-centric
                  perspective throughout.
                </li>
                <li>
                  UI developers specialize in digital applications,
                  concentrating on user interactions with the product. Their
                  primary focus is on enhancing the look and feel of the site,
                  with special attention given to ensuring that interactive
                  elements are both intuitive and visually appealing. In a
                  competitive and fast-paced market, the significance of
                  achieving flawless UI development is crucial for attracting
                  and retaining user engagement.
                </li>
                UI and UX, while distinct, collaborate to achieve a common goal:
              delivering an end product that is not only practical and helpful
              but also a joy to use, providing a natural and great experience
              for customers. Given the majority of online consumers' reluctance
              to return to a webpage after a bad experience, wise investment in
              a front-end development team that prioritizes both UI and UX and
              understands their collaborative nature is essential for success.
              </ul>
              
            </div>
            <h1
              onClick={() => {
                setActive(!isActive);
              }}
            >
              {isActive ? "Read More" : "Read Less"}
              <span className={isActive ? "close" : "open"}>
                <FaAngleUp />
              </span>
              <span className={isActive ? "open " : "close"}>
                <FaAngleDown />
              </span>
            </h1>
          </div>
        </div>
        <div className="frontend-serivces-cards">
          <div className="frontend-serivces-img">
            <img src={src3} alt="" />
          </div>
          <div className="frontend-services-info">
            <div className="frontend-services-cardtitle">
              Web Apps with Interactive User Interfaces
            </div>
            <div className="frontend-services-description">
              Integrating interactive user interfaces can enhance the allure of
              your website, captivating visitors and encouraging prolonged
              engagement. However, it's imperative to acknowledge the potential
              risks associated with these elements.
            </div>
            <div className={isActive1 ? "close" : "services-readmore open"}>
              <ul className="services-list">
                Interactive user interfaces may include:
                <li>Animations</li>
                <li>Drop-down menus</li>
                <li>Calendar booking apps</li>
                <li>Quizzes, surveys, and calculators</li>
                <li>Embedded videos</li>
                <li>Sharing buttons</li>
                <li>Search bars</li>
                <li>Pop-ups</li>
              </ul>
            </div>
            <h1
              onClick={() => {
                setActive1(!isActive1);
              }}
            >
              {isActive1 ? "Read More" : "Read Less"}
              <span className={isActive1 ? "close" : "open"}>
                <FaAngleUp />
              </span>
              <span className={isActive1 ? "open " : "close"}>
                <FaAngleDown />
              </span>
            </h1>
          </div>
        </div>
        <div className="frontend-serivces-cards">
          <div className="frontend-serivces-img">
            <img src={src4} alt="" />
          </div>
          <div className="frontend-services-info">
            <div className="frontend-services-cardtitle">
              Mobile Applications
            </div>
            <div className="frontend-services-description">
              With 97% of the population now owning and regularly using cell
              phones, the imperative to invest in adept and cohesive mobile app
              development has never been more pronounced. A proficient front-end
              developer, cognizant of this ubiquitous trend, will craft a mobile
              app that seamlessly provides users with comprehensive access on
              the go, ensuring a user experience aligned with contemporary
              mobile usage patterns.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frontend_Service;
