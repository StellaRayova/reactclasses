import React from "react";
import './Oracleservices.css';
import oracle from './oracle.jpeg';

function Oracleservices() {
    return (
        <div>
            <div style={{ backgroundColor: "#f5f5f5" }}>
                <div className="div1card" >


                    <div>
                        <img src={oracle} height={391} width={918} />
                    </div>

                    <div className="flex1">
                        <p className="txt">Oracle Services </p>
                    </div>

                    <div>
                        <p className="para" >
                            With extensive experience in Oracle project execution spanning many years, Enormous IT excels in blending deep business insights with advanced technology expertise. Our dedicated team of skilled consultants has garnered numerous awards and industry accolades for delivering innovative and scalable Oracle solutions.</p>
                        <p className="para">   Driving Business Growth:
                            At Enormous IT, we are committed to helping organizations drive growth, improve ROI, and mitigate risks. Our tailored Oracle solutions are designed to unlock your organization's full potential, empowering you to achieve sustainable success in a competitive landscape.  </p>
                    </div>

                    <div>
                        <h2>Oracle Cloud Services</h2>
                    </div>

                    <div>
                        <div style={{ flexDirection: "row", display: "flex", gap: 50 }}>
                            <div className="titlecard" >
                                <h2>Oracle Cloud Infrastructure (OCI)</h2>
                            </div>
                            <div className="titlecard">
                                <h2>Oracle Cloud Applications (SaaS)</h2>
                            </div>
                        </div>
                    </div>

                    <div className="fonttitle">
                        <h3>Oracle Cloud Infrastructure (OCI)</h3>
                    </div>

                    <div>
                        <div className="c ">

                            <div className="fontsize">
                                <p className="fonttitle">Compute Services: </p>
                                <p className="fonttitle">Oracle Bare Metal Servers: </p>
                                <span>Provide high-performance physical servers without a hypervisor.</span>
                                    Oracle Virtual Machines: Flexible virtual servers for various workloads.
                                    Oracle Autonomous VM Clusters: Automatically managed clusters of virtual machines.
                                    <p>GPU Instances: High-performance GPU instances for AI, machine learning, and compute-intensive tasks. </p>
                            </div>
                        </div>

                        <div className="c ">

                            <div className="fontsize">
                                <p>Storage Services:
                                    <li>Oracle Block Volumes: High-performance block storage.</li>
                                    <li>Oracle Object Storage: Scalable object storage.</li>
                                    <li>Oracle Archive Storage: Cost-effective storage for long-term data retention.</li>
                                    <li>Oracle Cloud Infrastructure Data Transfer Service: Facilitates large data transfers to OCI.</li>
                                    <li>Oracle Cloud Infrastructure Storage Gateway: Connects on-premises applications with OCI storage.</li>

                                </p>
                            </div>
                        </div>



                        <div className="c ">

                            <div className="fontsize">
                                <p>Networking Services:
                                    <li>Oracle Virtual Cloud Network (VCN): Secure, isolated virtual networks.</li>
                                    <li>Oracle FastConnect: Dedicated connectivity to OCI.</li>
                                    <li>Oracle Load Balancing: Distributes incoming traffic across compute instances</li>
                                    <li>Oracle Network Visualizer: Tool for visualizing and managing network resources.</li>
                                    <li>Oracle Cloud Infrastructure Service Gateway: Private access to Oracle services without traversing the internet.</li>

                                </p>
                            </div>
                        </div>


                        <div className="c ">

                            <div className="fontsize">
                                <p>Edge Services:
                                    <li>Oracle DNS: Scalable DNS service.</li>
                                    <li>Oracle Content Delivery Network (CDN): Accelerates web content delivery.</li>
                                    <li>Oracle Load Balancing: Distributes incoming traffic across compute instances</li>
                                    <li>Oracle Traffic Director: Advanced traffic management.</li>
                                    <li>Oracle Web Application Firewall (WAF): Protects applications from web exploits.</li>
                                    <li>Oracle Edge Services Security: Protects from DDoS attacks and other threats.</li>

                                </p>
                            </div>
                        </div>


                        <div className="c ">

                            <div className="fontsize">
                                <p>Containers and Kubernetes:
                                    <li>Oracle Container Engine for Kubernetes (OKE): Managed Kubernetes service.</li>
                                    <li>Oracle Functions: Serverless platform for deploying microservices.</li>
                                    <li>Oracle Verrazzano: Enterprise container management platform.</li>
                                    <li>Oracle Cloud Infrastructure Registry: Managed Docker container registry.</li>

                                </p>
                            </div>
                        </div>


                        <div className="c ">

                            <div className="fontsize">
                                <p>Additional Services:
                                    <li>Oracle Autonomous Linux: Self-managing Linux distribution.</li>
                                    <li>Oracle Cloud Infrastructure Data Science: Tools for building, training, and deploying machine learning models.</li>
                                    <li>Oracle Cloud Observability and Management Platform: Integrated suite for monitoring, managing, and operating applications.</li>
                                    <li>Oracle Cloud Infrastructure Marketplace: Platform for discovering and deploying applications and services.</li>
                                    <li>Oracle Cloud Infrastructure Resource Manager: Infrastructure-as-code service for automating resource management.</li>
                                </p>
                            </div>
                        </div>


                        <div>
                            <h3>Oracle Cloud Applications (SaaS)</h3>
                        </div>


                        <div className="Saascard ">
                            <div className="fontsize">
                                <p>Oracle Fusion Cloud ERP:
                                    <li>Financial Management, Procurement, Project Management, Risk Management, Advanced Financial Controls, Intelligent Process Automation.</li>
                                </p>
                            </div>
                        </div>


                        <div className="Saascard ">
                            <div className="fontsize">
                                <p>Oracle Fusion Cloud HCM:
                                    <li>Core HR, Talent Management, Workforce Management, Payroll, Digital Assistant, Workforce Health and Safety.</li>
                                </p>
                            </div>
                        </div>


                        <div className="Saascard ">
                            <div className="fontsize">
                                <p>Oracle Fusion Cloud SCM:
                                    <li>Product Lifecycle Management, Procurement, Order Management, Manufacturing, Logistics, Demand Management, IoT-Enabled Asset Monitoring, Blockchain-Enabled Traceability.</li>
                                </p>
                            </div>
                        </div>


                        <div className="Saascard ">
                            <div className="fontsize">
                                <p>Oracle Fusion Cloud EPM:
                                    <li>Planning, Budgeting, Financial Consolidation, Narrative Reporting, Predictive Planning.</li>
                                </p>
                            </div>
                        </div>


                        <div className="Saascard ">
                            <div className="fontsize">
                                <p>Oracle Fusion Cloud CX:
                                    <li>Sales, Service, Marketing, Commerce, Unified Customer Data Platform, AI-Powered Sales Forecasting.</li>
                                </p>
                            </div>
                        </div>


                        <div className="Saascard ">
                            <div className="fontsize">
                                <p>Oracle E-Business Suite (EBS):
                                    <li>Comprehensive suite of integrated business applications for ERP, HCM, SCM, and other enterprise functions.</li>
                                </p>
                            </div>
                        </div>





                    </div>


                </div>
            </div>


        </div>

    )
}
export default Oracleservices;