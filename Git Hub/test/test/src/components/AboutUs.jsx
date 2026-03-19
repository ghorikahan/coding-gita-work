import React from 'react'
import "../stylesheet/aboutUs.css"
import vision from "../assests/ourvision.svg"
import mission from "../assests/ourmission.svg"
import neel from "../assests/neel.svg"
import linkedin from "../assests/linkedin.svg"
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="aboutus">
        <div className="aboutus-title">
          About Us
          <p> Pioneering Full Stack Education for Future Creators – Transforming Aspirations into Expertise at CodingGita</p>
        </div>
        <div className="aboutus-obj">
          <div className="aboutus-info">
            <h1>Our Vision</h1>
            <p>Our vision at CodingGita is to be at the forefront of technology education globally, shaping a future where the divide between academic theory and industry practice is seamlessly bridged, we aspire to cultivate a community where the brightest minds from both academia and the tech industry collaborate to create a curriculum that continuously evolves and Stays ahead Of market trends. Through this collaborative synergy, we aim to nurture professionals who are not only industry-ready but are also equipped to drive innovation and excellence in the technology sector.</p>
          </div>
          <div className="aboutus-img">
            <img src={vision} alt="" />
          </div>
        </div>
        <div className="aboutus-obj obj2">
          <div className="aboutus-img">
            <img src={mission} alt="" />
          </div>
          <div className="aboutus-info">
            <h1>Our Mission</h1>
            <p>At CodingGita. our mission is to forge a unique educational pathway that bridges the gap between dynamic industry practices and profound academic research. We are dedicated to designing a curriculum that not only aligns with the latest technological advancements but also addresses the real-world needs of the tech industry. By bringing together industry leaders and experts. we aim to provide an enriched learning experience that empowers our participants with cutting-edge skills and insights, making them highly valued in the technology sector.</p>
          </div>          
        </div>
        
<div className="aboutus-ceo">
  <h1>Pioneer Behind CodingGita</h1>
  <div className="aboutus-ceo-details">
    <div className="ceo-image">
      <img src={neel} alt="" />
    </div>
    <div className="ceo-info">
      <div className="ceo-name">
        Patel Neel Maheshkumar
        <p>Founder and Chief Instructor, CodingGita</p>
      </div>
      <p>Neel, a graduate in Computer Science and Engineering, has worked with several reputed organizations, including Capgemini, Penthara Technologies, and LPU for the B. Tech. CSE (Software Product Engineering) Program in partnership with Kalvium. He has contributed significantly in roles focusing on full-stack development and technical mentorship.</p>
      <p>Neel is an exceptional technical instructor with a proven track record of delivering numerous sessions on full-stack web development, covering both frontend and backend aspects. Over the last three years, he has successfully taught more than 350 students, providing comprehensive sessions on both front-end and back-end technologies. His dedication and expertise have significantly contributed to helping these students secure development positions in startups and MNCs.</p>
      <Link
        to="https://www.linkedin.com/in/patel-neel-mahesh/"
        target="_blank"
      >
        <img src={linkedin} alt="" />
      </Link>
    </div>
  </div>
</div>


    </div>
  )
}

export default AboutUs
