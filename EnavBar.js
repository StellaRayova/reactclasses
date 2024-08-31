import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './EnavBar.css';
import Enormouslogo from './images/En.png';

export default function EnavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className='df'>
        <Link to="/home" className="title">
          <img src={Enormouslogo} alt="Loading" className='Enlogo' />
        </Link>
        <div className="menu" onClick={handleToggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className={showMenu ? "open" : ""}>
        <li className="dropdown"><NavLink to="/home" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/aboutus" activeClassName="active">About Us</NavLink></li>

        <li className="dropdown">
          <NavLink to="/services" activeClassName="active">Services</NavLink>
          <div className="dropdown-content s-wid">
            <div className="nested-dropdown">
              <Link to="/oracle-service-1">Oracle Cloud Applications</Link>
              <Link to="/oracle-service-2">Oracle Managed Services</Link>
              <Link to="/oracle-service-3">Additional Oracle Services</Link>
            </div>
          </div>
          <div className="dropdown-content s-wid">
            <Link to="/oracle-services">Oracle Services</Link>
            <Link to="/microsoft-technology-services">Microsoft Technology Services</Link>
            <Link to="/big-data">Big Data</Link>
            <Link to="/bi-dw-solutions">Business Intelligence and Data Warehousing Solutions</Link>
            <Link to="/web-offerings-and-mobile-applications">Web Offerings and Mobile Applications</Link>
            <Link to="/talent-as-a-service">Talent As A Service (TaaS)</Link>
            <Link to="/artifitial-intelligence">Artifitial Intelligence</Link>
            <Link to='/sap-technology-services'>SAP Technology Services</Link>
          </div>
        </li>

        <li className="dropdown">
          <NavLink to="/technologies" activeClassName="active">Technologies</NavLink>
          {/* <div className="dropdown-content t-wid">
            <Link to="/oracle">Oracle</Link>
            <Link to="/microsoft">Microsoft</Link>
            <Link to="/sap-technologies">SAP Technologies</Link>
            <Link to="/open-source-technologies">Open Source Technologies</Link>
          </div> */}
        </li>

        <li className="dropdown">
          <NavLink to="/infrastructure" activeClassName="active">Infrastructure</NavLink>
          <div className="dropdown-content infa-wid">
            <Link to="/iaas-the-cloud-on-demand">IAAS-The Cloud on Demand</Link>
            <Link to="/disaster-recovery-on-demanad">Disaster Recovery on Demand</Link>
            <Link to="/high-availability-solution">High Availability Solution</Link>
            <Link to="/zero-data-loss">Zero Data Loss</Link>
            <Link to="/data-backup">Data Backup</Link>
            <Link to="/remote-infrastucture-monitoring-services">RIMS-Remote Infrastructure Monitoring Services</Link>
            <Link to="/managed-dedicated-server">Managed Dedicated Server</Link>
            <Link to="/virtual-private-network">VPS</Link>
          </div>
        </li>

        <li><NavLink to="/contactus" activeClassName="active">Contact Us</NavLink></li>
      </ul>
    </nav>
  );
}


