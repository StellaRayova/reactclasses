import React, { useEffect, useState } from 'react';
import './Sapmainpage.css';
import sap from '../Sap/Sapimages/Sapmainwomen.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import ContactUsPopup from '../Popup';

const SapMain = () => {
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
        <div className='bgaj' >
            <div >
                <div >
                    <div >
                        <div >
                            <div >
                                <div className="image-container">
                                    <img src={sap} className="img-fluid" alt="Technology" />
                                    <div className="overlay"></div>
                                    <div className="txt" style={{ textAlign: 'left' }}>
                                        <h2 className='text-xl text-lg text-left'>SAP Technology Services</h2>
                                        <p className='Hp text-lg text-xl-left '>Transform Your Business with Smart Solutions</p>

                                        <div className="d-flex justify-content-center">
                                            {!isPopupOpen && (
                                                <div className='d-flex justify-content-left'>
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
                                {/* <div className="image-container">
                                    <img src={sap} className="img-fluid" alt="Technology" />
                                    <div className="overlay"></div>
                                    <div className="txt" style={{ textAlign: 'left' }}>
                                        <h2 className='text-xl text-xl-left text-left'>SAP Technology Services</h2>
                                        <p className='Hp text-xl-left text-left'>Transform Your Business with Smart Solutions</p>
                                        <div>
                                            <button type="button" className="btn btn-outline-light w-auto">Schedule a Free Consultation!</button>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div>
                                    <img src={sap} className="img-fluid imgaj" alt='Loading'/>
                             
                                    <div >
                                        <div className='txt1aj'>
                                            <h2 >SAP Technology Services</h2>
                                            <p >Simplified. Secured. Superior.</p>
                                            <div >
                                                <button type="button" className="btnaj btn-outline-light w-auto">Schedule a Free Consultation</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div>
                                    <p className='T5aj'>
                                        At Enormous IT, we offer a robust suite of SAP technologies designed to optimize and transform your business operations. Our expertise in SAP solutions ensures that we can support your enterprise's digital transformation journey effectively and efficiently. Here’s how we can help.
                                    </p>
                                </div>

                                <div className="row ">
                                    <div className="col ">
                                        <div className=" mb-4 flex4aj">
                                            <div className='card10aj cb2aj  padaj  T5aj '>
                                                <h4 className=" text-center "><strong>SAP ERP Implementation and Management</strong></h4>
                                                <p >
                                                    We manage the entire lifecycle of SAP ERP implementation, ensuring seamless integration, customization, and ongoing support to optimize your business processes.
                                                </p>
                                                <div >
                                                    <ul >
                                                        <li>Comprehensive Implementation</li>
                                                        <li>Customization and Configuration</li>
                                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                                            <li>Ongoing Support </li>
                                                            <Link to='/sap-erp-implementation-and-management' style={{ textDecoration: "none", color: "white", paddingLeft: "900px" }}>Learn more{'>>'}</Link>

                                                        </div>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="mb-4 flex4aj">
                                            <div className='card10aj cb2aj  padaj  T5aj'>
                                                <h4 className=" text-center"><strong>SAP S/4HANA Migration</strong></h4>
                                                <p> Facilitating a smooth transition to SAP S/4HANA, we ensure secure data management and performance optimization to harness the advanced capabilities of this next-generation business suite.</p>
                                                <div >
                                                    <ul>
                                                        <li>Smooth Transition</li>
                                                        <li>Data Management</li>
                                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                                            <li>Performance Optimization</li>

                                                            <Link to='/sap-s4hana-migration' style={{ textDecoration: "none", color: "white", paddingLeft: "810px" }}>Learn more{'>>'}</Link>
                                                        </div>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" mb-4 flex4aj">
                                            <div className="card10aj cb2aj  padaj  T5aj">
                                                <h4 className=" text-center"><strong>SAP Cloud Solutions</strong></h4>
                                                <p>
                                                    We deliver scalable and flexible cloud solutions that streamline business processes and foster innovation.
                                                </p>
                                                <div >
                                                    <ul >
                                                        <li>SAP Cloud Platform</li>
                                                        <li>SAP Business ByDesign</li>


                                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                                            <li>Scalability and Flexibility </li>
                                                            <Link to='/sap-cloud-solutions' style={{ textDecoration: "none", color: "white", paddingLeft: "810px" }} >Learn more{'>>'}</Link>
                                                        </div>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" mb-4 flex4aj">

                                            <div className="card10aj cb2aj  padaj  T5aj">
                                                <h4 className=" text-center"><strong>SAP Analytics and Business Intelligence</strong></h4>
                                                <p>
                                                    Utilizing SAP Analytics Cloud and other BI tools, we provide data-driven insights, customized dashboards, and predictive analytics to support informed decision-making and proactive business strategies
                                                </p>
                                                <div >
                                                    <ul >
                                                        <li>Data-Driven Insights</li>
                                                        <li>Custom Dashboards</li>
                                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                                            <li>Predictive Analytics</li>
                                                            <Link to='/sap-analytics-and-business-intelligence' style={{ textDecoration: "none", color: "white", paddingLeft: "850px" }} >Learn more{'>>'}</Link>

                                                        </div>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=" mb-4 flex4aj">
                                            <div className="card10aj cb2aj  padaj  T5aj">
                                                <h4 className="text-center"><strong>AP Integration Services</strong></h4>
                                                <p>
                                                    Our integration services ensure seamless data exchange and process automation by effectively managing APIs and integrating SAP with other enterprise systems.
                                                </p>

                                                <div>
                                                    <ul >
                                                        <li>Seamless Integration</li>
                                                        <li>API Management</li>


                                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                                            <li>Process Automation</li>
                                                            <Link to='/sap-integration-services' style={{ textDecoration: "none", color: "white", paddingLeft: "850px" }}>Learn more{'>>'}</Link>
                                                        </div>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>

                                        <div className=" mb-4 flex4aj">
                                            <div className="card10aj cb2aj  padaj  T5aj">
                                                <h4 className="text-center"><strong>SAP Training and Support</strong></h4>
                                                <p>
                                                    Committed to maximizing the value of your SAP investment, we offer expert training programs, round-the-clock support, and strategic consulting to ensure your team is proficient and your systems are running smoothly.
                                                </p>
                                                <div>
                                                    <ul >
                                                        <li>Seamless Integration</li>
                                                        <li>API Management</li>
                                                       
                                                        <div  style={{ display: "flex", flexDirection: "row" }}>
                                                        <li>Process Automation</li>
                                                            <Link to="/sap-training-support" style={{ textDecoration: "none", color: "white", paddingLeft: "850px" }}>Learn more{'>>'}</Link>
                                                        </div>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="T5aj ">
                                            <p >Enormous IT is committed to empowering your business with the latest SAP technologies. Our dedicated team of SAP experts ensures that you receive the best solutions tailored to your specific needs, driving innovation and growth in your organization.</p>
                                        </div>

                                        <div className="T5aj ">
                                            <p >For more information about our SAP technologies and how they can benefit your business, please contact us.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SapMain;
