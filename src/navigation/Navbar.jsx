import React from 'react';
import './Navbar.css'

function Navbar(props) {
  return (
    <header>
      <div className="navbar">
        <div className="logo">NASA PICTURE OF THE DAY</div>
        <div>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Servies</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}


export default Navbar
