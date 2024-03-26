import React from "react";
import backgroundImage from "../images/cybersec2.jpg";
import Centredtext from "../components/Centredtext";
import "../styles/Navbar.css";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <Centredtext />
      <div className="left-aligned-text">
        <h2>AAA'S OF CYBER SECURITY</h2>
        <br />
        <h3>
          {" "}
          Over the past decade, marketing has undergone a significant <br />
          transformation, driven by technological advancements and consumer{" "}
          <br />
          behavior changes. For the next five years, we have made the following{" "}
          <br />
          projections for the marketing industry.
        </h3>
      </div>
    </div>
  );
};

export default Home;
