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
                <Link to="/aboutus"> <a className="nav-link" href="/aboutus"> About Us </a> </Link>
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
              <li className="nav-item">
                <a className="nav-link" href="#">Latest Trends</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Solutions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">FAQ'S</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
