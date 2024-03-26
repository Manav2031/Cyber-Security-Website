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
        <h2> AAA OF SECURITY (Authentication, Authorization, and Accounting) </h2>
        <br /> <br />
        <h3>
        AAA, which stands for Authentication, Authorization, and Accounting, is the foundation of strong security systems in many computing environments. 
        <br /> <br />
Authentication ensures that users or entities attempting to access systems or resources are who they claim to be. It guarantees that only authorized users or devices obtain access, generally using passwords, biometrics, or security tokens. Effective authentication techniques guard against unwanted access and protect sensitive data from compromise. 
<br /> <br />
Authorization specifies what authenticated users can perform within a system or network. It defines access permissions and privileges according to established rules or policies. Authorization methods enforce limits, ensuring that users only interact with resources that they have permission to access. Authorization helps to avoid illegal activity and data breaches by restricting user privileges. 
<br /> <br />
Accounting entails tracking and recording user behaviors.
<br /> <br />
        </h3>
      </div>
    </div>
  );
};

export default Home;
