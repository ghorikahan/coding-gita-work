import React from "react";
import "../../components/frontend/frontend.css";
import src1 from "../../assests/frontend/responsive.svg";

function Frontend_Outsourcing() {
  const carddata = [
    {
      no: "1",
      title: "Enjoy a simpler process.",
      description:
        "codinggita is here to answer any questions you may have - and complete any project tasks.",
    },
    {
      no: "2",
      title: "Experience higher quality results.",
      description:
        "Our expert web development team brings innovative solutions using the latest technologies.",
    },
    {
      no: "3",
      title: "Save time and energy.",
      description:
        "Leave the heavy lifting to your outsourced front-end development team.",
    },
    {
      no: "4",
      title: "Cut costs.",
      description:
        "By hiring a front-end development company, you do not need to invest time and energy (and money!) in hiring, training, and providing salaries and benefits for new employees.",
    },
    {
      no: "5",
      title: "Allow for scalability.",
      description:
        "You can enjoy working with a larger team during the development phase and then transition to paying for a smaller team for maintenance, all while not having to hire or fire a single employee.",
    },
  ];
  return (
    <div className="frontend-outsourcing">
      <div className="frontend-outsourcing-img">
        <div className="frontend-outsourcing-title">
          <p>Why Outsourcing</p> <p>May Be the Best Solution</p>
        </div>
        <div className="frontend-outsourcing-info">
          <p>
            When it comes to frontend development, outsourcing often makes more
            sense than seeking, hiring, training, and maintaining in-house
            teams, even though you can always opt to hire your own developers.
          </p>
          <p>
            Working with experienced, professional front-end development teams
            like the ones here at codinggita can bring added benefits as well.
          </p>
        </div>
      </div>
      <div className="frontend-outsourcing-feed">
        {carddata.map((data, index) => (
          <div className="frontend-outsourcing-cards">
            <div className="frontend-outsourcing-no">
              <span>{data.no}</span>
            </div>
            <div className="frontend-services-info frontend-outsourcing-info ">
              <div className="frontend-services-cardtitle">{data.title}</div>
              <div className="frontend-services-description">
                {data.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Frontend_Outsourcing;
