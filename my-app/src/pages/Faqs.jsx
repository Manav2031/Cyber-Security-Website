import React from 'react'
import backgroundImage from "../images/cybersec2.jpg";
import '../styles/Faqs.css';

const Faqs = () => {
  return (
    <div className="faqs-container">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    </div>
  )
}

export default Faqs