import React from 'react'
import backgroundImage from "../images/cybersec2.jpg";
import '../styles/Contacts.css';

const Contacts = () => {
  return (
    <div className="contacts-container">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    </div>
  )
}

export default Contacts