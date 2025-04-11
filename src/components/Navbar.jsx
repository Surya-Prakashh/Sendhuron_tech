import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Stunning Events</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#stats">Stats</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">My Profile </a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
