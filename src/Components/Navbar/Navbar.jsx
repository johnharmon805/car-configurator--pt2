import React from "react";
import './Navbar.css';

function Navbar(){
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav-bar">
        <img id="logo" src="/Assets/grlogo.png"></img>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/car-configurator--pt2">Exterior</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/car-configurator--pt2/interior">Interior</a>
            </li>
            <button id="navbarbtn">Order Your Super Cooper</button>
          </ul>
        </div>
      </nav>
    );
}
export default Navbar;