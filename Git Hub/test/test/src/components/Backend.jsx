import React from "react";
import Backend_Home from "./backend/Back_Landing.jsx";
import Backend_Approch from "./backend/Backend_Approach.jsx";
import Backend_Feedback from "./backend/Backend_Feedback.jsx";
import Backend_Stages from "./backend/Backend_Stages.jsx";

function Backend() {
  return (
    <>
      <Backend_Home/>
      <Backend_Approch/>
      <Backend_Stages/>
      <Backend_Feedback/>
    </>
  );
}

export default Backend;
