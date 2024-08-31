import React, { useEffect, useState } from "react";
import './Technologies.css';

import Techimg from './images/technologiesff.jpeg';
import oracle from './images/ora.png';
import microsoft from './images/ms.png';
import sap from './images/sap.png';
import opensource from './images/opensource.png';
import ContactUsPopup from "./Popup";

export default function Technologies() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [submitMessage, setSubmitMessage] = useState(null);

    const openPopup = () => {
        setIsPopupOpen(true);
        setSubmitMessage(null); // Reset submit message on popup open
    };

    const closePopup = (message) => {
        setIsPopupOpen(false);
        setSubmitMessage(message); // Set the submit message in Forp
        console.log("Submitted message:", message); // Log the submitted message
    };

    useEffect(() => {
        if (submitMessage) {
            const timer = setTimeout(() => {
                setSubmitMessage(null);
            }, 5000); // Remove message after 5 seconds
            return () => clearTimeout(timer);
        }
    }, [submitMessage]);

    const isSuccessMessage = submitMessage && !submitMessage.includes('Failed');
    console.log("Is success message:", isSuccessMessage); // Log the success message check
    return (
        <div className="container-fluid technologies-container p-0">
            <div className="div1card">
                <div className="image-container">
                    <img src={Techimg} className="img-fluid" alt="Technology" />
                    <div className="overlay"></div>
                    <div className="txt" style={{ textAlign: 'left' }}>
                        <h2 className='text-xl text-lg text-left'>Technologies</h2>
                        <p className='Hp text-lg text-xl-left'>Innovate. Empower. Transform</p>                       
                            {/* <button type="button" className="btn btn-outline-light w-auto">Reach Out Now!</button> */}
                            <div className="d-flex justify-content-left">
                                {!isPopupOpen && (
                                    <div>
                                        <button className="btn btn-outline-light w-auto" onClick={openPopup}>Schedule a Free Consultation!</button>
                                        {submitMessage && (
                                            <div className={`submit-message ${isSuccessMessage ? 'success' : 'error'}`}>
                                                {submitMessage}
                                            </div>
                                        )}
                                    </div>
                                )}
                                <ContactUsPopup isOpen={isPopupOpen} onClose={closePopup} />
                            </div>                     
                    </div>
                </div>


            </div>

            <div className="content-section">
                <img className="img-fluid orc mb-3" src={oracle} alt="Oracle" />
                <p className="pt2">Enormous IT has extensive experience in Oracle project execution, blending business insight with technology expertise to deliver innovative and scalable Oracle solutions. Our skilled consultants, backed by awards and industry recognition, provide cost-effective application implementations, upgrades, support, and integration strategies. Using a phased approach, we streamline Oracle implementations, simplify infrastructure management, and help drive growth, improve ROI, and lower risks.</p>
            </div>

            <div className="dba-services">
                <p className="pt">DBA Services</p>
                <ul className="li1">
                    <li className="ullikk">Proactive Monitoring</li>
                    <li className="ullikk">Table Space, File, and Space Management</li>
                    <li className="ullikk">Miscellaneous Database Administration</li>
                    <li className="ullikk">Performance Tuning</li>
                    <li className="ullikk">Backup and Recovery</li>
                    <li className="ullikk">Installation, Patches, Upgrades, Migrations</li>
                    <li className="ullikk">High Availability Solutions (RAC & DataGuard)</li>
                </ul>
            </div>

            <hr className="hr" />

            <div className="content-section">
                <img className="img-fluid msimg mb-3" src={microsoft} alt="Microsoft" />
                <p className="pt2">Enormous IT offers a comprehensive range of Microsoft consulting services to support your business, from strategic IT planning to technology deployment and optimization. Our team of Microsoft consultants and developers provides secure, cost-effective solutions to streamline your business operations and increase profitability.</p>
            </div>

            <div className="dba-services">
                <p className="pt">Services:</p>
                <ul className="li1">
                    <li className="ullikk">Strategic IT and Business Planning</li>
                    <li className="ullikk">Technology Deployment and Optimization</li>
                    <li className="ullikk">Offshore and Onshore Consulting</li>
                    <li className="ullikk">Real-time Consulting Services</li>
                    <li className="ullikk">Application Development and Integration</li>
                    <li className="ullikk">Risk Mitigation and ROI Improvement</li>
                </ul>
            </div>

            <hr className="hr" />

            <div className="content-section">
                <img className="img-fluid sapimg mb-3" src={sap} alt="SAP" />
                <p className="pt2">SAP solutions from Enormous IT help businesses lower costs, improve efficiency, and gain a competitive edge. We offer SAP implementation, support, upgrades, and enhancements to achieve comprehensive process excellence across all business lines.</p>
            </div>

            <div className="dba-services">
                <p className="pt">Benefits:</p>
                <ul className="li1">
                    <li className="ullikk">Enhanced Visibility and Decision-Making</li>
                    <li className="ullikk">Improved Efficiency in Mission-Critical Processes</li>
                    <li className="ullikk">Increased Flexibility for Innovation and Expansion</li>
                    <li className="ullikk">Long-Term Competitive Edge</li>
                </ul>
            </div>

            <hr className="hr" />

            <div className="content-section">
                <img className="img-fluid openimg mb-3" src={opensource} alt="Open Source" />
                <p className="pt2">Enormous IT provides high-quality IT consulting, technology implementation, and application outsourcing services using popular open-source frameworks like Yii, Struts, Hibernate, CodeIgniter, JSP, Zend, jQuery, Ajax, and Node.js.</p>
            </div>

            <div className="dba-services">
                <p className="pt">Open Source Software:</p>
                <ul className="li1">
                    <li className="ullikk"><strong>Enterprise:</strong> OpenERP, Openbravo, SugarCRM, vtiger, OrangeHRM, OTRS, osTicket</li>
                    <li className="ullikk"><strong>Education:</strong> OpenSIS, Moodle</li>
                    <li className="ullikk"><strong>Library:</strong> Koha</li>
                    <li className="ullikk"><strong>Job Posting:</strong> Jobberbase</li>
                    <li className="ullikk"><strong>CMS:</strong> Liferay, WordPress, Drupal, Joomla</li>
                </ul>
            </div>
            <hr className="hr" />
        </div>
    )
}
