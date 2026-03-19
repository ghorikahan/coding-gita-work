import React from "react";
import "./back-landing.css";
import { Button } from "@chakra-ui/react";
import Btn from "../Chakra_Drawer";
import one from "../../assests/1.svg";
import two from "../../assests/2.svg";
import three from "../../assests/3.svg";
import four from "../../assests/4.svg";
import time from "../../assests/time.svg";
import agile from "../../assests/agile.svg";

function Backend_Stages() {
  return (
    <div className="backend-stages">
      <div className="backend-stages-info">
        <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
          Project Stages and Flow
        </h1>
        <p style={{ color: "azure", marginBottom: "3vh" }}>
          Depending on your current project stage Diffco can work-out and
          suggest the most effective plan to archive your goals, launch or
          release a new version that your users will love.
        </p>
        <Btn/>
      </div>
      <div className="backend-stages-cards">
        <div className="stage-card">
          <div style={{ display: "flex" }}>
            <img src={one} style={{ width: "2.5vh" }} alt="1" />
            <h1
              style={{
                fontSize: "26px",
                fontWeight: "bold",
                marginLeft: "3vh",
              }}
            >
              Discovery
            </h1>
          </div>
          <p style={{ color: "azure", fontSize: "16px" }}>
            Ensure your project’s success with careful planning. We start each
            development process with a four-step discovery stage, in which our
            team collaborates with you to align functionality, performance, and
            design. We work with you on strategy, prioritize your business needs
            and goals, and define your budget and deadlines before we get to
            work.
          </p>
        </div>
        <div className="stage-card">
          <div style={{ display: "flex" }}>
            <img src={two} style={{ width: "3.5vh" }} alt="1" />
            <h1
              style={{
                fontSize: "26px",
                fontWeight: "bold",
                marginLeft: "3vh",
              }}
            >
              Design
            </h1>
          </div>
          <p style={{ color: "azure", fontSize: "16px" }}>
            After developing a clear plan of action for your project, our
            product design process begins. Using a collection of industry-proven
            techniques and tools, we work to optimize your application’s
            usability, success, and efficiency, without compromising on
            scalability.
          </p>
        </div>
        <div className="stage-card">
          <div style={{ display: "flex" }}>
            <img src={three} style={{ width: "3.5vh" }} alt="1" />
            <h1
              style={{
                fontSize: "26px",
                fontWeight: "bold",
                marginLeft: "3vh",
              }}
            >
              Development
            </h1>
          </div>
          <p style={{ color: "azure", fontSize: "16px" }}>
            We collaborate with you on the multiple stages of your backend
            development project, with a product that evolves across multiple
            releases, including an MVP (minimum viable product) for rapid
            release. We use Agile methodology, focused on short sprints, and run
            the development stage in parallel with mock-ups, wireframes, and
            documentation.
          </p>
        </div>
        <div className="stage-card">
          <div style={{ display: "flex" }}>
            <img src={four} style={{ width: "3.5vh" }} alt="1" />
            <h1
              style={{
                fontSize: "26px",
                fontWeight: "bold",
                marginLeft: "3vh",
              }}
            >
              Support and Maintenance
            </h1>
          </div>
          <p style={{ color: "azure", fontSize: "16px" }}>
            Following the release of the MVP, our team will engage in ongoing
            sprints to rapidly develop improved releases with additional
            functionality and features, which includes updating third-party
            backend components to the latest versions and implementing security
            updates. We support and maintain your backend system on your behalf,
            so you can focus on growing your business.
          </p>
        </div>
      </div>
      <div className="backend-format">
        <h1
          style={{ fontSize: "36px", fontWeight: "bold", paddingBottom: "5vh" }}
        >
          Development formats and billing
        </h1>
        <div className="format">
          <div className="format-detail" style={{ paddingRight: "5vh" }}>
            <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
              Time & Materials
            </h1>
            <p
              style={{ color: "azure", marginBottom: "3vh", fontSize: "14px" }}
            >
              Creating an exceptional and user-friendly backend environment
              demands agile and flexible ideation, coupled with the ability to
              pivot and adapt to changing needs. Our time and materials approach
              ensures that you won't overpay for unnecessary risk contingencies.
            </p>
            <Btn/>
            {/* <Button style={{ marginright: "5px" }}>Let's Chat</Button> */}
          </div>
          <img src={agile} style={{ width: "50%", padding: " 0 5vh" }} alt="" />
        </div>
        <div className="format format2">
          <img src={time} style={{ width: "40%", padding: "5vh " }} alt="" />
          <div className="format-detail" style={{ paddingLeft: "5vh" }}>
            <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>Agile</h1>
            <p
              style={{ color: "azure", marginBottom: "3vh", fontSize: "14px" }}
            >
              We believe in Agile development. Agile backend development
              involves the use of a series of short sprints, which allow for
              quick and transparent progress in your project. We apply our
              nimble and responsive ideologies to each backend project,
              incorporating your feedback along the way, and adjusting
              priorities as needed. Rather than relying on the restrictive
              linear waterfall approach, Agile ensures we can provide a highly
              flexible service resulting in a custom backend solution which
              earns your approval at every stage.
            </p>
            <Btn/>
            {/* <Button style={{ marginright: "5px" }}>Let's Chat</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend_Stages;
