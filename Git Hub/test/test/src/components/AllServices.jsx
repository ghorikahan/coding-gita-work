import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import B from "./Chakra_Drawer";
import "../stylesheet/services.css";
import { Link } from "react-router-dom";
import card2 from "../assests/service2.svg";
import card3 from "../assests/service3.svg";
// import card4 from "../assests/service4.svg";
import card5 from "../assests/service5.svg";
import card6 from "../assests/service6.svg";

const AllServices = () => {
  return (
    <>
      <div className="services">
        <div className="service-heading">
          <h1>Our Services</h1>
        </div>
        <div className="service-feed">
          <div className="service-card">
            <div className="card-info">
              <div className="card-title">Mobile Development</div>
              <div className="card-detail">
                Our specialization lies in the development of native and
                cross-platform mobile applications tailored for both iOS and
                Android platforms.
              </div>
              <div className="card-tech">
                <div className="tech">Swift</div>
                <div className="tech">Flutter</div>
                <div className="tech">Java</div>
                <div className="tech">Kotlin</div>
                <div className="tech">...</div>
              </div>
              <div className="card-btn">
                <B />
              </div>
            </div>
            <div className="card-img">
              <img src={card2} alt="" />
            </div>
          </div>
          <div className="service-card">
            <div className="card-info">
              <div className="card-title">Back-end Development</div>
              <div className="card-detail">
                We bring extensive expertise to the table, particularly in the
                development of high-load and intricate backend infrastructure
                for mobile and web applications, as well as enterprise services.
              </div>
              <div className="card-tech">
                <div className="tech">Node.js</div>
                <div className="tech">Go</div>
                <div className="tech">Python</div>
                <div className="tech">PHP</div>
                <div className="tech">...</div>
              </div>
              <div className="card-btn">
                <B />
                <Link to="/backend">
                  <Button size={"sm"} variant="outline">
                    Learn More{" "}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="card-img">
              <img src={card3} alt="" />
            </div>
          </div>
          <div className="service-card">
            <div className="card-info">
              <div className="card-title">Front-end Development</div>
              <div className="card-detail">
                Our experience encompasses the construction of modular,
                high-performance web applications designed for both corporate
                clients and startups. We leverage contemporary and robust
                technology stacks to ensure optimal results.
              </div>
              <div className="card-tech">
                <div className="tech">React</div>
                <div className="tech">Angular</div>
                <div className="tech">Electron</div>
                <div className="tech">Vue.js</div>
                <div className="tech">...</div>
              </div>
              <div className="card-btn">
                <B />
                <Link to="/frontend">
                  <Button size={"sm"} variant="outline">
                    Learn More{" "}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="card-img">
              <img src={card5} alt="" />
            </div>
          </div>
          <div className="service-card">
            <div className="card-info">
              <div className="card-title">Web Development</div>
              <div className="card-detail">
                Our developers excel at crafting customized web solutions that
                align with your specific requirements. These solutions are
                designed for easy management through popular Content Management
                Systems (CMS) and can seamlessly integrate with your existing
                internal systems.
              </div>
              <div className="card-tech">
                <div className="tech">Sitecore</div>
                <div className="tech">Contentfull</div>
                <div className="tech">Magenta</div>
                <div className="tech">...</div>
              </div>
              <div className="card-btn">
                <B />
              </div>
            </div>
            <div className="card-img">
              <img src={card6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AllServices;
