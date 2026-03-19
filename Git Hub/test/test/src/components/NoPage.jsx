import React from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheet/under.css";

const NoPage = () => {
  const navigate = useNavigate();
  return (
    <div className="under-construction">
      <div className="under-construction-middle">
        <div>
          <h1>Page not found</h1>
        </div>
        {/* <img src={src} alt="" /> */}
        <button className="butto" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NoPage;
