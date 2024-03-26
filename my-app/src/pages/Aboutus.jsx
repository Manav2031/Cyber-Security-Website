import React from 'react'
import backgroundImage from "../images/cybersec2.jpg";
import '../styles/Aboutus.css';

const Aboutus = () => {
  return (
    <div className="aboutus-container">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    </div>
  )
}

export default Aboutus