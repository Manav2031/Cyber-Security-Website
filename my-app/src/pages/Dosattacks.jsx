import React from 'react'
import backgroundImage from "../images/cybersec2.jpg";
import '../styles/Dosattacks.css'

const Dosattacks = () => {
  return (
    <div className="dosattacks-container">
    <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
    <h1> Denial of Services (DOS) & Distributed Denial of Services (DDoS) Attacks </h1>
    <br />
    <h4>
    Cyber threats like Denial of Service (DoS) and Distributed Denial of Service (DDoS) attacks disrupt online services by inundating servers or networks with excessive traffic. DoS attacks stem from a single source, while DDoS attacks involve multiple sources, amplifying the challenge of mitigation. The objective is to render services inaccessible to legitimate users, leading to downtime and financial repercussions for targeted organizations.
    <br /> <br />

(a)	Volumetric attacks:

Denial of Service (DoS) and Distributed Denial of Service (DDoS) attacks are like a flood that overwhelms websites or online services. In a Volumetric attack, the flood is so big that it fills up all the available space, making it impossible for anyone else to get through. It's like trying to squeeze more people into a room than it can hold eventually, no one else can fit in, and everything stops working
<br /> <br />

(b)	Application layer attacks:

Denial of Service (DoS) and Distributed Denial of Service (DDoS) attacks can also happen in a sneaky way, targeting specific parts of a website or online service. These are called Application Layer attacks. It's like someone trying to clog up the checkout line at a store by asking complicated questions or making a lot of complaints. This makes it hard for others to get their turn, causing frustration and disruption.
<br /> <br />

(c)	Protocols Attacks:

In Protocol Attacks of Denial of Service (DoS) and Distributed Denial of Service (DDoS) assaults, attackers overwhelm network protocols, disrupting communication between devices. Similar to flooding a postal system with fake letters, attackers inundate network protocols with malicious data packets, hindering the delivery of legitimate data. This overwhelms the protocols, causing service outages and making it challenging for users to access online resources, leading to widespread disruption.

</h4>
<br /> <br />
  </div>
  )
}

export default Dosattacks