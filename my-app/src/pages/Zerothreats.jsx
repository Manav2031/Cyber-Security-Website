import React from 'react'
import backgroundImage from "../images/cybersec2.jpg";
import '../styles/Zerothreats.css';

const Zerothreats = () => {
  return (
    <div className="zerothreats-container">
    <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    <h1> ZERO DAY EXPLOITS & ADVANCED PERSISTENT THREATS (APT) </h1>
    <br />
    <h4>
    Zero-day exploits and Advanced Persistent Threats (APTs) are serious cybersecurity concerns. Zero-day exploits target vulnerabilities unknown to software vendors, leaving systems vulnerable. APTs are sophisticated and stealthy attacks, often carried out by well-funded and persistent threat actors. Their goal is to infiltrate networks, stay undetected for long periods, and steal data or disrupt operations. Defending against these threats requires proactive measures and ongoing monitoring to reduce the risk of cyber breaches.
    <br /> <br />
(a)	IOT Security threats:

IoT Security threats encompass vulnerabilities within interconnected devices, posing risks of unauthorized access, data breaches, and system manipulation. Zero-day exploits target these vulnerabilities, exploiting unknown weaknesses in IoT systems. Advanced Persistent Threats (APTs) leverage sophisticated tactics to infiltrate and persist within IoT networks, aiming to steal data or disrupt operations covertly. These threats highlight the critical need for robust security measures to protect IoT ecosystems from exploitation and compromise.
<br /> <br />
(b)	APT Actors & Tactics:

Advanced Persistent Threats (APTs) involve skilled adversaries employing stealthy tactics to infiltrate networks and remain undetected for extended periods. These threat actors, often well-funded and organized, conduct sophisticated attacks, utilizing techniques like social engineering, spear phishing, and malware to breach defenses. Their objective is to access sensitive data, establish persistence, and execute long-term espionage or sabotage operations, posing significant challenges to cybersecurity.
<br /> <br/>
(c)	Zero Day Vulnerabilities:

Zero-day vulnerabilities are flaws in software that are unknown to the vendor and for which no patch or fix is available. Attackers exploit these vulnerabilities before developers become aware of them, leaving systems unprotected. This poses a serious risk as there is no defense against such attacks until a patch is developed and deployed.

    </h4>
    <br /> <br />
  </div>
  )
}

export default Zerothreats