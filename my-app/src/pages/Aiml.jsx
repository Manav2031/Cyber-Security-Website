import React from 'react'
import backgroundImage from "../images/cybersec2.jpg";
import '../styles/Aiml.css';

const Aiml = () => {
  return (
    <div className="aiml-container">
    <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    <h1> AI & ML in Cybersecurity </h1>
    <br />
    <h4> Artificial Intelligence (AI) and Machine Learning (ML) play crucial roles in enhancing cybersecurity by providing advanced capabilities for threat detection, analysis, and response. Here's a detailed explanation of how AI and ML are applied in cybersecurity:-
      <br /> <br />
      (a)	Threat Detection and Prevention:
 Traditional antivirus solutions use predefined signatures to identify known threats. However, this approach may be less effective against new and evolving threats. ML algorithms analyse normal behaviour patterns and identify anomalies or deviations. This helps detect previously unseen threats or suspicious activities within a network.
<br /> <br />
(b)	Behavioural Analysis:
ML algorithms can analyse the behaviour of users, devices, and applications to establish a baseline of normal activity. Any deviations from this baseline can trigger alerts, indicating potential security threats.
<br /> <br />
(c)	Endpoint Protection:
AI-driven endpoint protection solutions leverage ML to identify and respond to threats on individual devices. They can detect and mitigate malware, ransomware, and other malicious activities in real-time.
</h4>
<br /> <br />
<div className="container2">
<img src="https://editor.analyticsvidhya.com/uploads/97744How.png" className="image2" />
</div>
<br /> <br />
<div className="container2">
<img src="https://media.licdn.com/dms/image/D4D12AQHLJvDVsxXw2Q/article-cover_image-shrink_720_1280/0/1678628739917?e=2147483647&v=beta&t=tII70mxJZ_tCml1YOBC5adpTp7QWPXcZusBDcIbAjQ8" className="image2" />
</div>
  </div>
  )
}

export default Aiml