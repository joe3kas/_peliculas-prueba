import React from 'react'
import logo from "../Images/logo.png"
import '../../App.css';

export default function Navbar() {
  return (
    <div className="container1-fluid">
   <div className="container">
     <div className="navbar navbar-expand-sm navbar-light">
    <img className="logo" src={logo} alt="logo" />
      <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Emilia Clarke <span className="sr-only"></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Sing Out</a>
        </li>
      </ul>
    </div>
      <nav className="navbar navbar-expand-lg">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="d-flex justify-content-around collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav navbar-nav ms-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Popular Movies</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Top Rated</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Upcoming</a>
        </li>
      </ul>
    </div>
  </nav>
   </div>
  </div>
  )
}

   