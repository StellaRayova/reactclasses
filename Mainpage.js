import React from "react";
import './mainpage.css';
// import mainpg from './mainpg.jpg';
import oraclemainpage from './oraclemainpage.jpg';
import { Link } from "react-router-dom";


function Mainpage() {
    return (
        <div >
            <div className="bg ">
                <div className="body">
                    {/* <img className="img img-fluid" src={workingpic} /> */}
                    <div >
                        <div className="image-container">
                            <img src={oraclemainpage} className="img-fluid" alt="Oracle Cloud Services" style={{ width: "100%" }} />
                            <div className="overlay"></div>
                            <div className="txtst">
                                <h2 className='text-xl text-lg-center text-xl-left text-center'>Oracle Cloud Services</h2>
                                <p className='Hp text-lg-center text-xl-left text-center'>Transform and Thrive</p>
                                <div className="d-flex justify-content-center">
                                    <button type="button" className="btn btn-outline-light w-auto">Reach Out Now!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mars">
                    <div>
                        <p className="paras" >
                            With extensive experience in Oracle project execution spanning many years, Enormous IT excels in blending deep business insights with advanced technology expertise. Our dedicated team of skilled consultants has garnered numerous awards and industry accolades for delivering innovative and scalable Oracle solutions.</p>
                        <p className="paras" style={{ marginTop: 0 }}>   Driving Business Growth:
                            At Enormous IT, we are committed to helping organizations drive growth, improve ROI, and mitigate risks. Our tailored Oracle solutions are designed to unlock your organization's full potential, empowering you to achieve sustainable success in a competitive landscape.  </p>
                    </div>

                    <div >
                        <p className="headingss">Oracle Cloud Services</p>
                    </div>

                        <div className="flexing gapss">
                            <div className="titlecard cb2" >
                                <p >Oracle Cloud Infrastructure (OCI)</p>
                            </div>
                            <div className="titlecard cb2">
                                <p >Oracle Cloud Applications (SaaS)</p>
                            </div>
                        </div>

                    <div className="headingss">
                        <p  >Oracle Cloud Infrastructure (OCI)</p>
                    </div>

                    <div>
                        <div className="flexing" style={{ gap: 50 }}>
                            <div className="cms cb2">
                                <div className="fontsz">
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <p className="fontsz"><strong>Compute Services</strong> </p>
                                    </div>
                                    <div className="d">
                                        <div>
                                            <li>
                                                <span >Oracle Bare Metal Servers:</span>
                                                <span>  Provide high-performance physical servers without a hypervisor. </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >Oracle Virtual Machines: </span>
                                                <span>  Flexible virtual servers for various workloads. </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >Oracle Autonomous VM Clusters: </span>
                                                <span>  Automatically managed clusters of virtual machines. </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >GPU Instances: </span>
                                                <span>  High-performance GPU instances for AI, machine learning, and compute-intensive tasks. </span>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                                {/* <Link to='/'>Learn more</Link> */}
                            </div>


                            <div className="cms cb2" >
                                <div className="fontsz">
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <p className="fontsz"><strong>Storage Services</strong> </p>
                                    </div>
                                    <div className="d">
                                        <div>
                                            <li>
                                                <span >Oracle Block Volumes:</span>
                                                <span>  High-performance block storage  </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >Oracle Object Storage: </span>
                                                <span>  Scalable object storage. </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >Oracle Archive Storage:</span>
                                                <span>  Cost-effective storage for long-term data retention. </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >Oracle Cloud Infrastructure Data Transfer Service:</span>
                                                <span>  Facilitates large data transfers to OCI. </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >Oracle Cloud Infrastructure Storage Gateway: </span>
                                                <span>  Connects on-premises applications with OCI storage. </span>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                                                                {/* <Link to='/hh'>Learn more</Link> */}

                            </div>
                        </div>



                        <div className="flexing" style={{ gap: 50, marginTop: 30 }}>
                            <div className="cms cb2">
                                <div className="fontsz">
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <p className="fontsz"><strong>Networking Services</strong> </p>
                                    </div>
                                    <div className="d">
                                        <div>
                                            <li>
                                                <span >Oracle Virtual Cloud Network (VCN): </span>
                                                <span>  High-performance block storage.  </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >Oracle FastConnect: </span>
                                                <span>  Scalable object storage. </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >Oracle Load Balancing: </span>
                                                <span> Cost-effective storage for long-term data retention. </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >Oracle Network Visualizer: </span>
                                                <span>  Facilitates large data transfers to OCI. </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >Oracle Cloud Infrastructure Service Gateway: </span>
                                                <span>  Private access to Oracle services without traversing the internet. </span>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                                                                {/* <Link to='/hh'>Learn more</Link> */}
                            </div>

                            <div className="cms cb2">
                                <div className="fontsz">
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <p className="fontsz"><strong>Edge Services</strong> </p>
                                    </div>
                                    <div className="d">
                                        <div>
                                            <li>
                                                <span >Oracle DNS:</span>
                                                <span>  Scalable DNS service.  </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >Oracle Content Delivery Network (CDN): </span>
                                                <span>  Accelerates web content delivery. </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >Oracle Traffic Director: </span>
                                                <span>  Advanced traffic management. </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >Oracle Web Application Firewall (WAF): </span>
                                                <span>  Protects applications from web exploits. </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >Oracle Edge Services Security:  </span>
                                                <span>  Protects from DDoS attacks and other threats. </span>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                                 {/* <Link to='/hh'>Learn more</Link> */}
                            </div>
                        </div>



                        <div className="flexing" style={{ gap: 50, marginTop: 30 }}>
                            <div className="cms cb2">
                                <div className="fontsz">
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <p className="fontsz"><strong>Containers and Kubernetes</strong> </p>
                                    </div>
                                    <div className="d">
                                        <div>
                                            <li>
                                                <span >Oracle Container Engine for Kubernetes (OKE): </span>
                                                <span>  Managed Kubernetes service.  </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >Oracle Functions:  </span>
                                                <span>  Serverless platform for deploying microservices. </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >Oracle Verrazzano:  </span>
                                                <span> Enterprise container management platform. </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >Oracle Cloud Infrastructure Registry:  </span>
                                                <span>  Managed Docker container registry. </span>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                                     {/* <Link to='/hh'>Learn more</Link> */}
                            </div>

                            <div className="cms cb2">
                                <div className="fontsz">
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <p className="fontsz"><strong>Additional Services</strong> </p>
                                    </div>
                                    <div className="d">
                                        <div>
                                            <li>
                                                <span >Oracle Autonomous Linux: </span>
                                                <span>  Self-managing Linux distribution.  </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >Oracle Cloud Infrastructure Data Science:  </span>
                                                <span>  Tools for building, training, and deploying machine learning models. </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >Oracle Cloud Observability and Management Platform: </span>
                                                <span>  Integrated suite for monitoring, managing, and operating applications. </span>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <span >Oracle Cloud Infrastructure Marketplace:  </span>
                                                <span>  Platform for discovering and deploying applications and services. </span>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                              {/* <Link to='/hh'>Learn more</Link> */}
                            </div>
                        </div>
                    </div>

                   


                    <div>
                        <div className="headingss">
                            <p >Oracle Cloud Applications (SaaS)</p>
                        </div>


                        <div>
                            <div>
                                <div className="flexing" style={{ gap: 50, marginTop: 30 }}>
                                    <div className="Saascard cb2">
                                        <div className="fontsz">
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <span className="fontsz"><strong>Oracle Fusion Cloud ERP</strong> </span>
                                            </div>
                                            <div>
                                                <span className="display">Financial Management, Procurement, Project Management, Risk Management, Advanced Financial Controls, Intelligent Process Automation.  </span>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="Saascard cb2">
                                        <div className="fontsz">
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <span className="fontsz"><strong>Oracle Fusion Cloud HCM </strong></span>
                                            </div>
                                            <div>
                                                <span className="display">Core HR, Talent Management, Workforce Management, Payroll, Digital Assistant, Workforce Health and Safety.  </span>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>



                            <div>

                                <div className="flexing" style={{ gap: 50, marginTop: 30 }}>
                                    <div className="Saascard cb2">
                                        <div className="fontsz">
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <span className="fontsz"><strong>Oracle Fusion Cloud SCM </strong> </span>
                                            </div>
                                            <div className="display">
                                                <span >Product Lifecycle Management, Procurement, Order Management, Manufacturing, Logistics, Demand Management, IoT-Enabled Asset Monitoring, Blockchain-Enabled Traceability.  </span>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="Saascard cb2">
                                        <div className="fontsz">
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <span className="fontsz"><strong>Oracle Fusion Cloud EPM </strong></span>
                                            </div>
                                            <div className="display">
                                                <span >Planning, Budgeting, Financial Consolidation, Narrative Reporting, Predictive Planning.  </span>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>



                            <div>

                                <div className="flexing" style={{  gap: 50, marginTop: 30 }}>
                                    <div className="Saascard cb2">
                                        <div className="fontsz">
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <span className="fontsz"><strong>Oracle Fusion Cloud CX </strong></span>
                                            </div>
                                            <div className="display">
                                                <span>Sales, Service, Marketing, Commerce, Unified Customer Data Platform, AI-Powered Sales Forecasting.  </span>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="Saascard cb2">
                                        <div className="fontsz">
                                            <div style={{ display: "flex", justifyContent: "center" }}>
                                                <span className="fontsz"><strong>Oracle E-Business Suite (EBS) </strong></span>
                                            </div>
                                            <div className="display">
                                                <span>Comprehensive suite of integrated business applications for ERP, HCM, SCM, and other enterprise functions.  </span>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>





            </div >

        </div>
    )
}
export default Mainpage;