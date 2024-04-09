import React from 'react'
import backgroundImage from "../images/cybersec2.jpg";
import '../styles/Types.css';

const Types = () => {
  return (
    <div className="types-container">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="center-text">
        <h1> Types of Cyber Security </h1>
        <br /> <br />
        <h4> 1. Network Security </h4>
        <br />
        <h4> It uses techniques like firewalls, intrusion detection systems (IDS), and virtual private networks (VPNs) to safeguard the integrity and confidentiality of data transferred over networks. In addition to blocking harmful activity and illegal access, network security makes ensuring that only authorized users have access to network resources. </h4>
        <br /> <br />
        <h4> 2. Physical Security </h4>
        <br />
        <h4> Physical security in the realm of cybersecurity involves protecting physical assets, facilities, and resources from unauthorized access, theft, vandalism, and damage. It encompasses measures such as access control systems, surveillance cameras, locks, fences, and security personnel. Physical security aims to safeguard people, equipment, and information by controlling physical access to buildings, data centers, and other critical infrastructure, ensuring their safety and integrity against physical threats. </h4>
        <br /> <br />
        <h4> 3. Cloud Security </h4>
        <br />
        <h4> It ensures the security of data stored in cloud environments, protecting against data breaches, ensuring compliance with regulations, and managing access controls and encryption within cloud platforms. Cloud security measures include data encryption, identity and access management (IAM), and continuous monitoring for unauthorized access or suspicious activities. </h4>
        <br /> <br />
        <h4> 4. IOT Security </h4>
        <br />
        <h4> IoT (Internet of Things) security focuses on safeguarding connected devices and networks from cyber threats. It involves securing IoT devices, such as smart appliances, wearables, and industrial sensors, from unauthorized access, data breaches, and remote manipulation. IoT security measures include device authentication, encryption, firmware updates, and network segmentation to mitigate vulnerabilities and protect against potential attacks targeting the interconnected nature of IoT ecosystems. </h4>
        <br /> <br />
      </div>
    </div>
  )
}

export default Types