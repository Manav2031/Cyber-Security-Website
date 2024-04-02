import React from "react";
import backgroundImage from "../images/cybersec2.jpg";
import "../styles/Solutions.css";

const Solutions = () => {
  return (
    <div className="solutions-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
    </div>
  );
};

export default Solutions;
