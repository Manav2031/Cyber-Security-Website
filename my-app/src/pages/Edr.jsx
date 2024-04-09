import React from 'react'
import backgroundImage from "../images/cybersec2.jpg";
import '../styles/Edr.css';

const Edr = () => {
  return (
    <div className="edr-container">
    <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    <h1> Extended Detection & Response </h1>
    <br />
    <h4> Extended Detection and Response (XDR) is a comprehensive cybersecurity approach designed to provide advanced threat detection, investigation, and response capabilities across multiple security layers and domains. XDR integrates data and signals from various sources to offer a more holistic and proactive security posture. Here's a detailed explanation of XDR:-
      <br /> <br />
      (a)	Definition:
XDR stands for Extended Detection and Response. It goes beyond traditional Endpoint Detection and Response (EDR) solutions by incorporating data and insights from various security tools and sources across an organization's IT infrastructure.
<br /> <br />
(b)	Integration of Security Data:
XDR aggregates and correlates data from diverse security sources, including endpoints, networks, cloud environments, email gateways, and more. This holistic approach allows for a more comprehensive analysis of security incidents.
<br /> <br />
(c)	Automated Threat Response:
XDR platforms often incorporate automated response capabilities, allowing them to take predefined actions in response to identified threats. This could include isolating compromised endpoints, blocking malicious activities, or initiating other remediation measures.
<br /> <br />
(d)	Cloud Integration:
As organizations increasingly adopt cloud services, XDR extends its coverage to include cloud environments. This ensures that security monitoring and response mechanisms are effective across on-premises and cloud infrastructures.
</h4>
<br /> <br />
<div className="container3">
<img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Extended_Detection_Response_110223_1pm_XDR%20R4?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&hei=960&qlt=100&fit=constrain" className="image3" />
</div>
<br /> <br />
<div className="container3">
<img src="https://media.licdn.com/dms/image/D4E12AQFNuFs-4glmTA/article-cover_image-shrink_600_2000/0/1698418394085?e=2147483647&v=beta&t=LET4dWNrWb4vDVeODqaZIkG2h39FjBop2YoRp7BN9p0" className="image3" />
</div>
  </div>
  )
}

export default Edr