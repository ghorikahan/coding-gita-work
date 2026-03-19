import React from "react";
import src from "../assests/Group 2.png";
import mail from "../assests/mail.svg";
import phone from "../assests/phone.svg";
import location from "../assests/location.svg";
import "../stylesheet/contact.css";
import But from "./Chakra_Drawer.jsx";

function ContactUs() {
  return (
    <>
      <div className="contact">
        <div className="contact-title">
          Get in touch
          <p>We are here for you! How can we help?</p>
        </div>
        <div className="contact-body">
          <div className="contact-image">
            <img src={src} alt="" />
          </div>
          <div className="contact-form">
            <label htmlFor="name">First name *</label>
            <input type="text" name="name" required="required" />
            <label htmlFor="email">Email *</label>
            <input type="email" name="email" required="required" />
            <label htmlFor="msg">Massage here *</label>
            <textarea type="text" name="msg" required="true" />
            <button className="butto">Submit</button>
          </div>
        </div>
        <div className="contact-talk">
          <p>Sounds promising? Elevate your business.</p><But />
        </div>
        <div className="contact-details">
          <div className="contact-cards">
            <div>
              <img src={mail} alt="" />
            </div>
            <h1>Email</h1>
            <p> cto@codinggita.com</p>
          </div>
          <div className="contact-cards">
            <div>
              <img src={phone} alt="" />
            </div>
            <h1>Phone</h1>
            <p> +91 - 9157646873</p>
          </div>
          <div className="contact-cards">
            <div>
              <img src={location} alt="" />
            </div>
            <h1>Office</h1>
            <p>Ahmedabad,</p>
            <p> Gujarat, India</p>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default ContactUs;
