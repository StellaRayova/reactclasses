
import React from 'react';
import './Footer.css';
import EnormousLogo from './images/EnlogoBg.png';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div >
        <div className="f1 f">
          <h2 className="h2">START GROWING WITH ENORMOUS</h2>
          <Link to="/contactus"><button className="b1">Get in Touch</button></Link>
        </div>
        <div className="f2">
          <div className="f">
            <Link to="/home"> <p><img src={EnormousLogo} className="logo" alt="Logo" /></p></Link>
            <p className="p">For quick enquiry,</p>
            <p className="p">Call us on 0404855345</p>
            <p className="h6 p" style={{ marginLeft: "60px" }}>(or)</p>
            <p className="p">Write to us on</p>
            <p className="p">info@enormousit.com</p>
          </div>

          <div className="f">
            <p className="h5 ">Site Map</p>
            <Link to="/home" className='Linkd'><p className="p">Home</p></Link>
            <Link to="/aboutus" className='Linkd'><p className="p">About us</p></Link>
            <Link to="/services" className='Linkd'><p className="p">Services</p></Link>
            <Link to="/technologies" className='Linkd'><p className="p">Technologies</p></Link>
            <Link to="/infrastucture" className='Linkd'> <p className='p'>Infrastructure</p> </Link>
            <Link to="/industry-vericles" className='Linkd'><p className="p">Industry Verticals</p></Link>
            <Link to="/contactus" className='Linkd'> <p className="p">Contact Us</p></Link>
          </div>

          <div className="f">
            <p className="h5 " >Links</p>
            <p className="p">
              <a href="/Terms & Conditions.pdf" target="_blank" rel="noopener noreferrer" className='Linkd'>
                Terms & Conditions
              </a>
            </p>
          </div>
        </div>
        <hr />
        <p>&copy; {new Date().getFullYear()} Enormous IT Pvt. Ltd. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
