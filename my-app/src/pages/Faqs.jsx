import React from 'react'
import backgroundImage from "../images/cybersec2.jpg";
import '../styles/Faqs.css';

const Faqs = () => {
  return (
    <div className="faqs-container">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="center-aligned-text">
        <h1> Frequently Asked Questions (FAQ'S) </h1>
        <br /> <br />
        <h4> Q1. What is a firewall, and how does it protect against cyber threats? </h4>
        <br />
        <h4> A firewall is a network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It acts as a barrier between a trusted internal network and untrusted external networks (such as the internet), filtering out potentially malicious traffic and preventing unauthorized access to sensitive data. </h4>
        <br /> <br />
        <h4> Q2. What is a VPN, and why is it important for cybersecurity? </h4>
        <br />
        <h4> A VPN (Virtual Private Network) is a technology that creates a secure, encrypted connection over a less secure network, such as the internet. It allows users to securely access private networks and resources from remote locations, protecting their data from interception and ensuring privacy, especially when using public Wi-Fi networks or accessing sensitive information online. </h4>
        <br /> <br />
        <h4> Q3. What are the key differences between antivirus and anti-malware software? </h4>
        <br />
        <h4> Antivirus software primarily focuses on detecting and removing traditional types of malware, such as viruses, worms, and Trojans, from devices. Anti-malware software, on the other hand, offers broader protection by detecting and removing various types of malicious software, including newer threats like ransomware, spyware, and adware. </h4>
        <br /> <br />
        <h4> Q4.What is social engineering, and how can individuals guard against it? </h4>
        <br />
        <h4> Social engineering is a technique used by cyber attackers to manipulate individuals into divulging confidential information, performing actions, or providing access to sensitive systems. To guard against social engineering attacks, individuals should be cautious of unsolicited communications, verify the identity of individuals or organizations requesting information, and avoid sharing personal or sensitive information online. </h4>
        <br /> <br />
        <h4> Q5.What is multi-factor authentication (MFA), and why is it recommended for enhancing security? </h4>
        <br />
        <h4> Multi-factor authentication (MFA) is a security mechanism that requires users to provide multiple forms of verification (such as passwords, biometrics, or one-time codes) to access accounts or systems. It adds an extra layer of security beyond passwords, making it more difficult for unauthorized individuals to gain access, even if they have obtained the user's password through phishing or other means. </h4>
        <br /> <br />
        <h4> Q6.What is ransomware, and how can individuals and organizations protect themselves against it? </h4>
        <br />
        <h4> Ransomware is a type of malware that encrypts files or locks computer systems, with cybercriminals demanding a ransom payment in exchange for restoring access. To protect against ransomware, individuals and organizations should regularly back up important data, use reputable antivirus software, keep software and security patches up to date, and educate users about the risks of clicking on suspicious links or email attachments. </h4>
        <br /> <br />
        <h4> Q7. What is encryption and how does it contribute to cybersecurity? </h4>
        <br />
        <h4> Encryption is the process of converting plain text or data into a coded form (cipher text) that can only be deciphered with the appropriate key. It contributes to cybersecurity by ensuring that data transmitted over networks or stored on devices remains confidential and secure, even if intercepted by unauthorized parties. </h4>
        <br /> <br />
        <h4> Q8.What should I do if I become a victim of a cyber attack? </h4>
        <br />
        <h4> If you become a victim of a cyber attack, it's essential to act quickly. Disconnect compromised devices from the internet to prevent further damage, report the incident to the appropriate authorities or your organization's IT department, change passwords for compromised accounts, restore data from backups if possible, and consider seeking professional assistance to investigate the incident and mitigate future risks. </h4>
        <br /> <br />
      </div>
    </div>
  )
}

export default Faqs