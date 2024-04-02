import React from 'react'
import backgroundImage from "../images/cybersec2.jpg";
import '../styles/Latesttrends.css';

const Latesttrends = () => {
  return (
    <div className="latesttrends-container">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    </div>
  )
}

export default Latesttrends