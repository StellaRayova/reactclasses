import React from "react";
import './Managedorclservices.css';
// import mainpg from './mainpg.jpg';
import managedorcl from './managedorcl.jpg';
// import { Link } from "react-router-dom";


function Manageorclservices() {
    return (
            <div className="bg">
                <div className="body">
                    {/* <img className="img img-fluid" src={workingpic} /> */}
                    <div >
                        <div className="image-container">
                            <img src={managedorcl} className="img-fluid" alt="Oracle Managed services" style={{ width: "100%" }} />
                            <div className="overlay"></div>
                            <div className="txt">
                                <h2 className='text-xl text-lg-center text-xl-left text-center'>Oracle Managed services</h2>
                                <p className='Hp text-lg-center text-xl-left text-center'>Streamline. Secure. Succeed.</p>
                                <div className="d-flex justify-content-center">
                                    <button type="button" className="btn btn-outline-light w-auto">Reach Out Now!</button>
                                </div>
                            </div>
                        </div>
                    </div>               
                </div>
               
                <div>
                            <p className="headingss">Oracle Managed Services</p>
                        </div>

                        <div className="mars" >
                            <div className="omscard cb2">
                                <div className="fontsz">
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <span className="fontsz"><strong>Database Management</strong> </span>
                                    </div>
                                    <div className="d">
                                        <div >
                                            <li>
                                                <span>Oracle Autonomous Database Management, Oracle Real Application Clusters (RAC), Advanced Data Guard Management, Database Migration Services, Performance Tuning and Optimization.  </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >Oracle DBA and Remote DBA Services:  </span>
                                                <span>  Comprehensive database administration and support, including migration services. </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >Oracle Apps DBA Services:   </span>
                                                <span>  Comprehensive database administration and support, including migration services. </span>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                                {/* <Link to="/managedorcl">Learn More</Link> */}
                            </div>

                            <div  >
                                <div className="flexingsss gapss">
                                    <div className="omscard1 cb2">
                                        <div className="fontsz">
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <span className="fontsz"><strong>Application Management </strong></span>
                                            </div>
                                            <div className="display">
                                                <span>Patch Management, Custom Development and Integration, Application Performance Monitoring (APM), Oracle Application Express (APEX), Oracle Forms and Reports Modernization.  </span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="omscard1 cb2">
                                        <div className="fontsz">
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <span className="fontsz"><strong>Cloud Management</strong> </span>
                                            </div>
                                            <div className="display">
                                                <span className="d">Oracle Cloud Cost Management, Oracle Cloud Compliance Reporting, Oracle Cloud Infrastructure Governance, Automated Provisioning and Orchestration, Disaster Recovery Services.  </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <div className="flexingsss gapss" >
                                    <div className="omscard1 cb2">
                                        <div className="fontsz">
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <span className="fontsz"><strong>Infrastructure Management</strong> </span>
                                            </div>
                                            <div className="display">
                                                <span>Oracle Cloud Infrastructure Resource Manager, Oracle Cloud Infrastructure Monitoring and Analytics, Oracle Infrastructure Automation, Proactive Monitoring and Alerts. </span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="omscard1 cb2">
                                        <div className="fontsz">
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <span className="fontsz"><strong>Security Management</strong> </span>
                                            </div>
                                            <div className="display">
                                                <span>Oracle Cloud Guard, Oracle Security Zones, Identity and Access Management (IAM), Threat Detection and Response, Advanced Encryption Services.  </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>

               
               
               </div>
               
               
                </div>
    )}
                export default Manageorclservices;