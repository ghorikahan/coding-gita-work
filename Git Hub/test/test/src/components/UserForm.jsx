import React from "react";
import img from "../assests/chat.svg";
import { Button } from "@chakra-ui/react";
import "../stylesheet/form.css";

function UserForm() {
  return (
    <>
      <div className="letchat">
        <div className="form-title">
          <div className="title">Let’s build something great together</div>
          <img src={img} alt="" />
        </div>
        <div className="form">
          <div className="item1">
            <label htmlFor="first-name">First Name</label>
            <input type="text" />
          </div>
          <div className="item2">
            <label htmlFor="first-name">Last Name</label>
            <input type="text" />
          </div>
          <div className="item3">
            <label htmlFor="first-name">Company name (optional)</label>
            <input type="text" />
          </div>
          <div className="item4">
            <label htmlFor="first-name">Work email</label>
            <input type="text" />
          </div>
          <div className="item5">
            <label htmlFor="first-name">Phone number</label>
            <input type="text" />
          </div>
          <div className="item6">
            <label htmlFor="first-name">
              Tell us about your project (optional)
            </label>
            <input type="text" />
          </div>
          <div className="item7">
            <Button  size={['sm']}>Send</Button>
          </div>
          <div className="item8">
            By sending this form I confirm that I have read and accept the
            Privacy Policy.
          </div>
        </div>
      </div>
    </>
  );
}

export default UserForm;
