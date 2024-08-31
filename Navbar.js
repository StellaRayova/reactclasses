import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Enormous</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hello">About Us</Link>
        </li>
        <li>
          <Link to="/bye">Contact us</Link>
        </li>
        {/* <li>
          <Link to="/hi">Help</Link>
          
        </li>
        <li>
          <Link to="/hey">Services</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;