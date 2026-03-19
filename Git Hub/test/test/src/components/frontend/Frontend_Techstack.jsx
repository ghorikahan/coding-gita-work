import React from "react";
import "../frontend/frontend.css";
import react from "../../assests/techstack/react.svg";
import angular from "../../assests/techstack/angular.svg";
import vue from "../../assests/techstack/vue.svg";
import Electron from "../../assests/techstack/nextjs.svg";
import illustra from "../../assests/illustra1.svg";

const cardData = [
  {
    src: react,
    title: "React",
    detail:
      "Helps create interactive UIs that adjust flawlessly when the data changes.",
  },
  {
    src: angular,
    title: "Angular",
    detail:
      "Provides a simple and convenient framework for creating user interfaces.",
  },
  {
    src: vue,
    title: "Vue",
    detail:
      "Helps create interactive UIs that adjust flawlessly when the data changes.",
  },
  {
    src: Electron,
    title: "NextJS",
    detail:
      "Next.js is a React framework that simplifies and accelerates the development of server-rendered and statically generated web applications",
  },
];
function Frontend_Techstack() {
  return (
    <>
      <div className="frontend-techstack">
        <div className="frontend-techstack-title">
          Technology Used in Front-end Development
          <h1>
            In our front-end development services at codingGita, we leverage
            advanced technologies to create flawless client-facing programming.
          </h1>
          <p>We’re currently leveraging all the latest tech, including:</p>
        </div>
        <div className="frontend-techstack-wraper">
          <div className="frontend-techstack-cards">
            {cardData.map((data, index) => (
              <div className="techstack-cards" key={index}>
                <div className="techstack-img">
                  <img src={data.src} alt="" />
                </div>
                <div className="techstack-title">{data.title}</div>
                <div className="techstack-description">{data.detail}</div>
              </div>
            ))}
          </div>
          <div className="fronend-techstack-div1">
            These technologies are essential in seamless front-end development.
            Their importance cannot be overstated.
          </div>
        </div>

        <div className="frontend-teckstack-div2">
          <img
            src={illustra}
            style={{ width: "25%", marginRight: "5vh" }}
            alt=""
          />
          <h2 style={{ width: "60%" }}>
            Though back-end development will do your heavy lifting, it will
            matter little if your front-end solution is not top-notch. Our
            developers at Diffco understand this dynamic, and our teams work
            hard to ensure your site or web service stands out in a crowded
            market.
          </h2>
        </div>
      </div>
    </>
  );
}

export default Frontend_Techstack;
