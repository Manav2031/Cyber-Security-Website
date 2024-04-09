import React from 'react'
import backgroundImage from "../images/cybersec2.jpg";
import '../styles/Zerotrust.css';

const Zerotrust = () => {
  return (
    <div className="zerotrust-container">
    <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    <h1> Zero Trust Architecture </h1>
    <br />
    <h4> Zero Trust Architecture (ZTA) is a cybersecurity framework that operates on the principle of "never trust, always verify." Unlike traditional security models that assume everything inside a network is trustworthy, Zero Trust assumes that no entity, whether inside or outside the network, should be automatically trusted. Instead, it requires continuous verification of the identity and security posture of devices, users, and applications.
Key components and principles of Zero Trust Architecture:-
      <br /> <br />
      (a)	Verification and Authentication:
Every user, device, and application attempting to access resources must undergo strict identity verification and authentication. Multi-factor authentication (MFA) is often employed to add an extra layer of security.
<br /> <br />
(b) Least Privilege Access:
Users and devices are granted only the minimum level of access necessary to perform their tasks. This principle reduces the attack surface, limiting the potential impact of a security incident.
<br /> <br />
(c) Conditional Access:
Access to resources is granted based on specific conditions and contextual factors, such as the user's location, device health, and time of access. Access permissions can be dynamically adjusted based on changing conditions.
</h4>
<br /> <br />
<div className="container1">
<img src="https://assets-global.website-files.com/5fff1b18d19a56869649c806/6112da4d0599d62e5fa00e7e_ZTA%20Graphs%20(2).png" className="image1" />
</div>
<br /> <br />
<div className="container1">
<img src="https://www.networkcomputing.com/sites/default/files/zero-trust-h1-2F9KK97.jpg" className="image1" />
</div>
  </div>
  )
}

export default Zerotrust