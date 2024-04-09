import React from 'react'
import backgroundImage from "../images/cybersec2.jpg";
import '../styles/Ransomware.css';

const Ransomware = () => {
  return (
    <div className="ransomware-container">
    <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    <h1> Ransomware Protection Measures </h1>
    <br />
    <h4> Protecting against ransomware requires a multifaceted approach, incorporating technical, procedural, and educational measures. Here's a detailed explanation of ransomware protection measures:-
      <br /> <br />
      (a)	Regular Backups:
Perform regular backups of critical data and ensure they are stored offline or in a separate, secure environment. This allows for the restoration of data without paying ransom in case of an attack.
<br /> <br />
(b)	Update and Patch Systems:
Regularly update and patch operating systems, software, and applications to address vulnerabilities that could be exploited by ransomware. Automated patch management systems can help streamline this process.
<br /> <br />
(c)	Endpoint Protection:
Deploy and maintain robust endpoint protection solutions, including antivirus and anti-malware software. Ensure that these tools are regularly updated with the latest threat intelligence.
</h4>
<br /> <br />
<div className="container4">
<img src="https://www.ssl2buy.com/wp-content/uploads/2021/12/Role-of-Digital-Certificates-in-Preventing-Ransomware-Attacks.jpg" className="image4" />
</div>
<br /> <br />
<div className="container4">
<img src="https://online.maryville.edu/wp-content/uploads/sites/97/2022/07/MVU-MSCS-2021-Q4-Skyscraper-Supply-Chain-Attack-Preventing-Ransomware-Attacks-on-Supply-Chains-miniIg1-v3.jpg" className="image4" />
</div>
  </div>
  )
}

export default Ransomware