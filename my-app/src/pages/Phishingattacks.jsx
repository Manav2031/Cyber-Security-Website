import React from 'react'
import backgroundImage from "../images/cybersec2.jpg";
import '../styles/Phishingattacks.css';

const Phishingattacks = () => {
  return (
    <div className="phishingattacks-container">
    <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    <h1> Phishing & Social Engineering Attacks </h1>
    <br />
    <h4>
    Phishing and social engineering are deceitful methods to extract sensitive information or access systems. Phishing employs fake emails or websites to trick users into revealing credentials, while social engineering manipulates human psychology to deceive victims. Both exploit trust and vulnerability to breach cybersecurity defenses, posing grave risks to individuals and organizations.
    <br /> <br />

(a)	Email Spear & Phising :
Email spear phishing compromises cybersecurity by targeting specific individuals or organizations with highly personalized and deceptive emails. These emails appear legitimate, often impersonating trusted entities, tricking recipients into divulging sensitive information or clicking malicious links. Spear phishing preys on human trust and curiosity, bypassing traditional security measures and enabling attackers to access sensitive data, compromise systems, or initiate further cyberattacks, posing significant risks to cybersecurity.
<br /> <br />

(b)	Quid Pro Quo:
Quid pro quo in cybersecurity refers to a tactic where attackers offer incentives or assistance in exchange for sensitive information or access to systems. This deception relies on exploiting trust to trick individuals into disclosing confidential data or granting unauthorized access, compromising cybersecurity defenses.
<br /> <br />

(c)	whaling attacks:

Whaling attacks in cybersecurity aim at prominent figures or executives within enterprises. Referred to as CEO fraud or business email compromise (BEC), these assaults employ social manipulation tactics to dupe targets into sharing confidential data or executing actions like fund transfers. Leveraging the authority and trust linked with executive positions, whaling attacks sidestep security protocols, presenting substantial threats to organizations.

</h4>
<br /> <br />
  </div>
  )
}

export default Phishingattacks