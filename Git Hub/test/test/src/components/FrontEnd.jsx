import React from "react";
import Frontend_Home from "./frontend/Frontend_Landing.jsx";
import Frontend_Techstack from "./frontend/Frontend_Techstack.jsx";
import Frontend_Services from "./frontend/Frontend_Service.jsx";
import Frontend_Outsourcing from "./frontend/Frontend_Outsourcing.jsx";

const FrontEnd = () => {
  return (
    <>
      <Frontend_Home />
      <Frontend_Techstack />
      <Frontend_Services/>
      <Frontend_Outsourcing/>
    </>
  );
};

export default FrontEnd;
