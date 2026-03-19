import React from "react";
import "../frontend/frontend.css";
import frontend_illustra from "../../assests/frontend_home.svg";
import { Button } from "@chakra-ui/react";

function Frontend_Landing() {
  return (
    <div className="frontend-home">
      <div className="frontend-home-detail">
        <div className="frontend-home-title">Front-End Development</div>
        <div className="frontend-home-info">
          At CodingGita, we specialize in crafting top-tier web applications
          tailored for both corporate clients and startups. Our expertise lies
          in harnessing cutting-edge technology stacks to develop sleek,
          responsive interfaces enriched with advanced UI components, dynamic
          animations, and compelling data visualizations. Our commitment is to
          deliver a seamless user experience, ensuring that your applications
          not only meet but exceed user expectations. Trust us to bring
          modernity and efficiency to your web presence.
        </div>
        {/* <div style={{ padding: "2vh" }}>
          <Button>Our Work</Button>
        </div> */}
      </div>
      <div className="frontend-home-img">
        <img src={frontend_illustra} alt="" />
      </div>
    </div>
  );
}

export default Frontend_Landing;
