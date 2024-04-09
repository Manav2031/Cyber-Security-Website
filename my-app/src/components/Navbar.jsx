import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <Link to="/"> <a className="navbar-brand" href="/"> SECURECYPHER </a> </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to="/"> <a className="nav-link" aria-current="page" href="/"> Home </a> </Link>
              </li>
              <li className="nav-item">
                <Link to="/types"> <a className="nav-link" href="/types"> Types of Cyber Security </a> </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Cyber Threats
                </a>
                <ul className="dropdown-menu">
                  <li> <Link to="/malwarethreats"> <a className="dropdown-item" href="/malwarethreats"> Malware Threats </a> </Link> </li>
                  <li> <Link to="/phishingattacks"> <a className="dropdown-item" href="/phishingattacks"> Phishing and Social Engineering Attacks </a> </Link> </li>
                  <li> <Link to="/dosattacks"> <a className="dropdown-item" href="/dosattacks"> Denial of Services (DOS) & <br /> Distributed Denial of Services (DDoS) Attacks </a> </Link> </li>
                  <li> <Link to="/zerothreats"> <a className="dropdown-item" href="/zerothreats"> Zero Day Exploits & Advanced Persistent Threats (APT) </a> </Link> </li>
                  <li> <Link to="/iotthreats"> <a className="dropdown-item" href="/iotthreats"> IOT Security Threats </a> </Link> </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Latest Trends
                </a>
                <ul className="dropdown-menu">
                  <li> <Link to="/zerotrust"> <a className="dropdown-item" href="/zerotrust"> Zero Trust Architecture </a> </Link> </li>
                  <li> <Link to="/aiml"> <a className="dropdown-item" href="/aiml"> AI & ML in Cybersecurity </a> </Link> </li>
                  <li> <Link to="/edr"> <a className="dropdown-item" href="/edr"> Extended Detection & Response </a> </Link> </li>
                  <li> <Link to="/ransomware"> <a className="dropdown-item" href="/ransomware"> Ransomware Protection Measures </a> </Link> </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Solutions
                </a>
                <ul className="dropdown-menu">
                  <li> <Link to="/networksolutions"> <a className="dropdown-item" href="/networksolutions"> Network Security Solutions </a> </Link> </li>
                  <li> <Link to="/endpointsolutions"> <a className="dropdown-item" href="/endpointsolutions"> End Point Security Solutions </a> </Link> </li>
                  <li> <Link to="/cloudsolutions"> <a className="dropdown-item" href="/cloudsolutions"> Cloud Security Solutions </a> </Link> </li>
                  <li> <Link to="/iamsolutions"> <a className="dropdown-item" href="/iamsolutions"> Identity & Access <br /> Management (IAM) Solutions </a> </Link> </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/faqs"> <a className="nav-link" href="/faqs"> FAQ'S </a> </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacts"> <a className="nav-link" href="/contacts"> Contacts </a> </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
