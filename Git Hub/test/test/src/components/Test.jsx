import React from "react";
import "../stylesheet/test.css";
import linkedin from "../assests/linkedin.svg";
import { Avatar } from "@chakra-ui/react";

const cardData = [
  {
    name: "Rushik patel",
    username: "@rushikpatel",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, omnis blanditiis nisi enim vel illum illo ipsum!",
    avatarSrc: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Rushik patel",
    username: "@rushikpatel",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, omnis blanditiis nisi enim vel illum illo ipsum, deleniti hic fugit earum ratione voluptate dolores. Sint eius voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, omnis blanditiis nisi enim vel illum illo ipsum, deleniti hic fugit earum ratione voluptate dolores. Sint eius voluptate temporibus repudiandae amet! temporibus repudiandae amet!",
    avatarSrc: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Rushik patel",
    username: "@rushikpatel",
    testimonial:
      "Corrupti, omnis blanditiis nisi enim vel illum illo ipsum, deleniti hic fugit earum ratione voluptate dolores. Sint eius voluptate temporibus repudiandae amet!",
    avatarSrc: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Rushik patel",
    username: "@rushikpatel",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur Sint eius voluptate temporibus repudiandae amet! temporibus repudiandae amet!",
    avatarSrc: "https://bit.ly/kent-c-dodds",
  },
  // Add more card data objects as needed
];
const cardData2 = [
  {
    name: "Rushik patel",
    username: "@rushikpatel",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, omnis blanditiis nisi enim vel illum illo ipsum, deleniti hic fugit earum ratione voluptate dolores. Sint eius voluptate temporibus repudiandae amet!",
    avatarSrc: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Rushik patel",
    username: "@rushikpatel",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, omnis blanditiis nisi enim vel illum illo ipsum, deleniti hic fugit earum ratione voluptate dolores. Sint eius voluptate temporibus repudiandae amet!l",
    avatarSrc: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Rushik patel",
    username: "@rushikpatel",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, omnis blanditiis nisi enim vel illum illo ipsum!",
    avatarSrc: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Rushik patel",
    username: "@rushikpatel",
    testimonial:
      "fugit earum ratione voluptate dolores. Sint eius voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, omnis blanditiis nisi enim vel illum illo ipsum, deleniti hic fugit earum ratione voluptate dolores. Sint eius voluptate temporibus repudiandae amet! temporibus repudiandae amet!",
    avatarSrc: "https://bit.ly/kent-c-dodds",
  },
  // Add more card data objects as needed
];
const cardData3 = [
  {
    name: "Rushik patel",
    username: "@rushikpatel",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, omnis blanditiis nisi enim vel illum illo ipsum, deleniti hic fugit earum ratione voluptate dolores. Sint eius voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, omnis blanditiis nisi enim vel illum illo ipsum, deleniti hic fugit earum ratione voluptate dolores. Sint eius voluptate temporibus repudiandae amet! temporibus repudiandae amet!",
    avatarSrc: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Rushik patel",
    username: "@rushikpatel",
    testimonial:
      "Corrupti, omnis blanditiis nisi enim vel illum illo ipsum, deleniti hic fugit earum ratione voluptate dolores. Sint eius voluptate temporibus repudiandae amet!",
    avatarSrc: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Rushik patel",
    username: "@rushikpatel",
    testimonial: "Lorem ipsum dolor sit amet consectetur ",
    avatarSrc: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Rushik patel",
    username: "@rushikpatel",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, omnis blanditiis nisi enim vel illum illo ipsum, deleniti hic fugit earum ratione voluptate dolores. Sint eius voluptate temporibus repudiandae amet!",
    avatarSrc: "https://bit.ly/kent-c-dodds",
  },
  // Add more card data objects as needed
];

function Test() {
  return (
    <div className="test">
      <h1>Success stories of our clients</h1>
      <div className="forFlexRow">
        <div className="feed1">
          {cardData.map((card, index) => (
            <div
              className="card"
              style={{
                padding: "2vh",
                borderRadius: "3vh",
              }}
              key={index}
            >
              <div className="card-name">
                <Avatar name={card.name} src={card.avatarSrc} />
                <div className="name">
                  <p>{card.name}</p>
                  <p style={{ color: "grey", fontSize: "2vh" }}>
                    {card.username}
                  </p>
                </div>
              </div>
              <div className="card-testimonial">
                <p>{card.testimonial}</p>
              </div>
              <div className="card-social">
                <img src={linkedin} alt="" style={{}} />
              </div>
            </div>
          ))}
        </div>
        <div className="feed2">
          {cardData2.map((card, index) => (
            <div
              className="card"
              style={{
                padding: "2vh",
                borderRadius: "3vh",
              }}
              key={index}
            >
              <div className="card-name">
                <Avatar name={card.name} src={card.avatarSrc} />
                <div className="name">
                  <p>{card.name}</p>
                  <p style={{ color: "grey", fontSize: "2vh" }}>
                    {card.username}
                  </p>
                </div>
              </div>
              <div className="card-testimonial">
                <p>{card.testimonial}</p>
              </div>
              <div className="card-social">
                <img src={linkedin} alt="" style={{}} />
              </div>
            </div>
          ))}
        </div>
        <div className="feed3">
          {cardData3.map((card, index) => (
            <div
              className="card"
              style={{
                padding: "2vh",
                borderRadius: "3vh",
              }}
              key={index}
            >
              <div className="card-name">
                <Avatar name={card.name} src={card.avatarSrc} />
                <div className="name">
                  <p>{card.name}</p>
                  <p style={{ color: "grey", fontSize: "2vh" }}>
                    {card.username}
                  </p>
                </div>
              </div>
              <div className="card-testimonial">
                <p>{card.testimonial}</p>
              </div>
              <div className="card-social">
                <img src={linkedin} alt="" style={{}} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Test;
