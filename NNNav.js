import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './EnavBar.css';
import Enormouslogo from './images/En.png';

export default function EnavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };


  const scrollToVision = () => {
    const visionSection = document.getElementById('vision');
    if (visionSection) {
      visionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToMission = () => {
    const visionSection = document.getElementById('mission');
    if (visionSection) {
      visionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToOurTeam = () => {
    const visionSection = document.getElementById('Our Team');
    if (visionSection) {
      visionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToGlobalpresence = () => {
    const visionSection = document.getElementById('Global Presence');
    if (visionSection) {
      visionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <Link to="/home" className="title">
        <img src={Enormouslogo} alt="Loading" className='Enlogo' />
      </Link>
      <div className="menu" onClick={handleToggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      
      <ul className={showMenu ? "open" : ""}>
        <li className="dropdown"><NavLink to="/home" activeClassName="active">Home</NavLink></li>
        
        <li className="dropdown">
          <NavLink to="/aboutus" activeClassName="active">About Us</NavLink>
          <div className="dropdown-content">
          
          <Link to="/our-vision" onClick={scrollToVision}>Our Vision</Link>
            <Link to="/our-team" onClick={scrollToMission}>Our Mission</Link>
            <Link to="/our-mission" onClick={scrollToOurTeam}>Our Team</Link>
            <Link to="/our-team" onClick={scrollToGlobalpresence}>Global Presence</Link>
          </div>
        </li>

        <li className="dropdown">
          <NavLink to="/services" activeClassName="active">Services</NavLink>
          <div className="dropdown-content s-wid">
            <div className="nested-dropdown">
              <Link to="/oracle-services">Oracle Services</Link>
              <div className="nested-dropdown-content raonested-dropdown-content">
                <Link to="/oracle-cloud-applications">Oracle Cloud Applications</Link>
                <Link to="/oracle-managed-services">Oracle Managed Services</Link>
                <Link to="/additional-oracle-services">Additional Oracle Services</Link>
              </div>
            </div>
            <div className="nested-dropdown">
              <Link to="/microsoft-technology-services">Microsoft Technology Services</Link>
              <div className="nested-dropdown-content raonested-dropdown-content">
                <Link to="/microsoft-custom-application-development">Microsoft Custom Application Development</Link>
                <Link to="/microsoft-enterprise-architecture-services">Microsoft Enterprise Architecture Services</Link>
                <Link to="/microsoft-business-intelligence">Microsoft Business Intelligence</Link>
                <Link to="/microsoft-product-solutions">Microsoft Product Solutions</Link>
              </div>
            </div>
            <div className="nested-dropdown">
              <Link to="/sap-technology-services">SAP Technology Services</Link>
              <div className="nested-dropdown-content raonested-dropdown-content">
                <Link to="/sap-erp-implementation-and-management">SAP ERP Implementation and Management</Link>
                <Link to="/sap-s4hana-migration">SAP S/4HANA Migration</Link>
                <Link to="/sap-cloud-solutions">SAP Cloud Solutions</Link>
                <Link to="/sap-analytics-and-business-intelligence">SAP Analytics and Business Intelligence</Link>
                <Link to="/sap-integration-services">SAP Integration Services</Link>
                <Link to="/sap-training-support">SAP Training and Support</Link>
              </div>
            </div>
            <Link to="/big-data">Big Data</Link>
            <Link to="/business-intelligence-and-data-warehusing-solutions">Business Intelligence and Data Warehousing Solutions</Link>
            <Link to="/web-offerings-and-mobile-applications">Web Offerings and Mobile Applications</Link>
            <Link to="/talent-as-a-service">Talent As A Service (TaaS)</Link>
            <Link to="/artifitial-intelligence">Artificial Intelligence</Link>
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
            <Link to="/disaster-recovery-on-demand">Disaster Recovery on Demand</Link>
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