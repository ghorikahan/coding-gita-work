import React from "react";
import "./back-landing.css";
import backend_illustra from "../../assests/backend_home.svg";
import { Button } from "@chakra-ui/react";
function Back_Landing() {
  return (
    <div className="backend-home">
      <div className="backend-home-detail">
        <div className="backend-home-title">Back-end development</div>
        <div className="backend-home-info">
          Dedicated to excellence, our backend development team specializes in
          crafting tailored solutions that prioritize security, scalability, and
          innovation to meet the distinct needs of each client. Utilizing
          cutting-edge technology and guided by intuitive design principles
          rooted in robust and sophisticated architecture, we empower companies
          to unlock the transformative capabilities of the digital realm.
          Elevate your brand and set it apart through CodingGita's backend
          development services.
        </div>
        {/* <div style={{ padding: "1vh" }}>
          <Button>Our Work</Button>
        </div> */}
      </div>
      <div className="backend-home-img">
        <img src={backend_illustra} alt="" />
      </div>
    </div>
  );
}

export default Back_Landing;
