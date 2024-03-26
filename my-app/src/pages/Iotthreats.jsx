import React from 'react'
import backgroundImage from "../images/cybersec2.jpg";
import '../styles/Iotthreats.css';

const Iotthreats = () => {
  return (
    <div className="iotthreats-container">
    <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    <h1> IOT Security Threats </h1>
    <br />
    <h4>
    Security threats within the Internet of Things (IoT) realm involve diverse risks tied to interconnected devices. These risks span unauthorized access to IoT gadgets, data breaches, and the compromise of sensitive information. Cybercriminals may leverage vulnerabilities in IoT devices to initiate attacks like botnets or data breaches. Weak security protocols within IoT networks can result in substantial privacy infringements and disrupt vital services, underscoring the necessity for robust IoT security strategies.
    <br /> <br />

(a)	Vulnerabilities in connected Devices:
Security threats within the Internet of Things (IoT) arise from vulnerabilities in connected devices. These weaknesses can be exploited by attackers to gain unauthorized access, compromise data integrity, or launch malicious activities. Vulnerable IoT devices are susceptible to various risks, including malware infections, unauthorized control, and data breaches. Strengthening security measures and regularly updating IoT devices are essential to mitigate these vulnerabilities and safeguard against potential cyber threats.
<br /> <br />
(b)	Risk of IoT Botnets:

One of the significant IoT security threats is the risk of IoT botnets. These malicious networks of compromised IoT devices can be remotely controlled by attackers to launch large-scale cyberattacks, such as distributed denial of service (DDoS) attacks. By leveraging the sheer volume of connected devices, IoT botnets can overwhelm targeted systems or networks, causing disruption, data theft, or financial loss, highlighting the critical need for IoT security measures.

    </h4>
    <br /> <br />
  </div>
  )
}

export default Iotthreats