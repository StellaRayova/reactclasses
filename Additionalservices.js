import React from "react";
import './Additionalservices.css';
import workingpic from './workingpic.jpg';
import Baremetal from './Baremetal.jpg';


function Additionalservices() {
    return (
        <div>
            <div >
                <div>
                    {/* <img src={workingpic} width={1600} height={700} /> */}
                    <div className="body">
                        <div>
                            {/* <img className="img img-fluid" src={workingpic} /> */}
                            <div >
                                <div className="image-container">
                                    <img src={workingpic} className="img-fluid" alt="Oracle Services" style={{ width: "100%" }} />
                                    <div className="overlay"></div>
                                    <div className="txt">
                                        <h2 className='text-xl text-lg-center text-xl-left text-center'>Additional Oracle Services</h2>
                                        <p className='Hp text-lg-center text-xl-left text-center'>Simplified. Secured. Superior.</p>
                                        <div className="d-flex justify-content-center">
                                            <button type="button" className="btn btn-outline-light w-auto">Reach Out Now!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="headingss">
                    <p >Additional Oracle Cloud Infrastructure (OCI) Services </p>
                </div>
                <div className="fontsz">
                    <p className="paras">Enormous IT offers a range of additional Oracle Cloud Infrastructure (OCI) services to enhance your cloud environment, including advanced operating systems, data science tools, observability and management platforms, and resource management solutions. Our additional services include:</p>
                </div>
                <div>
                    <div className="headingss">
                        <p >Oracle Autonomous Linux</p>
                    </div>
                    <div className="m">
                        <img className="sideimg" style={{ borderRadius: 10 }} src={Baremetal} />
                        <div className="cdss">
                            <div className="fontsz">
                                <div>
                                    <li>
                                        <span>	Self-Managing Linux Distribution:   </span>
                                        <span> Enormous IT's Oracle Autonomous Linux is a self-managing Linux distribution that automates routine management tasks such as patching, updates, and tuning, reducing administrative overhead. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >		High Availability and Security:   </span>
                                        <span> Provides high availability and robust security features, including automated security patching and integrated monitoring. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Optimized for OCI:  </span>
                                        <span> Optimized to run seamlessly on OCI, ensuring high performance and compatibility with other OCI services. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >Use Cases:  </span>
                                        <span> Suitable for enterprise applications, development environments, and any workload requiring a secure and self-managing Linux OS. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Technical Specifications:  </span>
                                        <span> Automated OS management, integrated security and compliance features, and support for OCI Compute instances. </span>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="headingss">
                        <p>Oracle Cloud Infrastructure Data Science</p>
                    </div>
                    <div className="m">
                        <div className="cdss">
                            <div className="fontsz">
                                <div>
                                    <li>
                                        <span >	Tools for Building, Training, and Deploying Machine Learning Models:  </span>
                                        <span>Enormous IT's Oracle Cloud Infrastructure Data Science provides a comprehensive suite of tools for data scientists to build, train, and deploy machine learning models efficiently.</span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Collaborative Environment:    </span>
                                        <span>Offers a collaborative environment with shared workspaces, version control, and integrated notebooks for team-based data science projects. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Scalable Compute Resources:  </span>
                                        <span>  Provides scalable compute resources, including GPU instances, for training complex machine learning models. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >Use Cases:  </span>
                                        <span> Ideal for data science workflows, AI and machine learning model development, and predictive analytics </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Technical Specifications:  </span>
                                        <span>  Supports popular machine learning frameworks (TensorFlow, PyTorch), integrated with OCI Data Lake, and automated model deployment. </span>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <img className="sideimg" style={{ borderRadius: 10 }} src={Baremetal} />
                    </div>
                </div>

                <div>
                    <div className="headingss">
                        <p >Oracle Cloud Observability and Management Platform</p>
                    </div>
                    <div className="m">
                    <img className="sideimg" style={{ borderRadius: 10 }} src={Baremetal} />
                        <div className="cdss">
                            <div className="fontsz">
                                <div>
                                    <li>
                                        <span >	Integrated Suite for Monitoring, Managing, and Operating Applications:    </span>
                                        <span>Enormous IT's Oracle Cloud Observability and Management Platform offers an integrated suite of tools for monitoring, managing, and operating applications and infrastructure in OCI. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Comprehensive Insights:    </span>
                                        <span> Provides comprehensive insights into application performance, resource utilization, and security posture through advanced monitoring, logging, and analytics.</span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Proactive Management:    </span>
                                        <span> Enables proactive management with features such as automated remediation, anomaly detection, and predictive analytics.</span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >Use Cases:  </span>
                                        <span> Suitable for IT operations, application performance monitoring, and infrastructure management. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Technical Specifications:  </span>
                                        <span>Includes OCI Monitoring, Logging, Events, and Resource Manager, with integration capabilities for third-party monitoring tools. </span>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="headingss">
                        <p >Oracle Cloud Infrastructure Marketplace</p>
                    </div>
                    <div className="m">
                        <div className="cdss">
                            <div className="fontsz">
                                <div>
                                    <li>
                                        <span >	Platform for Discovering and Deploying Applications and Services:   </span>
                                        <span>Enormous IT's Oracle Cloud Infrastructure Marketplace is a robust platform that allows you to discover, deploy, and manage a wide range of applications and services from both Oracle and third-party providers. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >Curated Solutions:    </span>
                                        <span> Offers a curated selection of enterprise applications, developer tools, and infrastructure services designed to meet various business needs and workloads. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >Seamless Integration:    </span>
                                        <span>Provides seamless integration with OCI services, enabling easy deployment and management of marketplace solutions within your existing OCI environment.</span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >Use Cases:  </span>
                                        <span> Ideal for businesses looking to quickly deploy enterprise-grade solutions, extend functionality with third-party tools, and enhance their cloud environment with specialized services. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Technical Specifications:  </span>
                                        <span> Features a wide range of categories, including databases, security, networking, and DevOps tools, with support for both bring-your-own-license (BYOL) and pay-as-you-go pricing models. </span>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <img className="sideimg" style={{ borderRadius: 10 }} src={Baremetal} />
                    </div>
                </div>


                <div>
                    <div className="headingss">
                        <p >Oracle Cloud Infrastructure Resource Manager</p>
                    </div>
                    <div className="m">
                    <img className="sideimg" style={{ borderRadius: 10 }} src={Baremetal} />
                        <div className="cdss">
                            <div className="fontsz">
                                <div>
                                    <li>
                                        <span >	Infrastructure-as-Code Service for Automating Resource Management:   </span>
                                        <span>Enormous IT's Oracle Cloud Infrastructure Resource Manager is a powerful infrastructure-as-code (IaC) service that automates the deployment and management of OCI resources using declarative configurations. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Automated Resource Provisioning:    </span>
                                        <span> Streamlines the process of resource provisioning, configuration, and management by automating repetitive tasks and reducing manual intervention. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Version Control and Collaboration:    </span>
                                        <span>Integrates with version control systems, enabling teams to collaborate on infrastructure configurations and maintain a history of changes.</span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >Security and Compliance:   </span>
                                        <span> Ensures security and compliance by defining infrastructure as code, making it easier to enforce policies and audit changes. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Use Cases  </span>
                                        <span> Ideal for deploying and managing complex cloud environments, implementing DevOps practices, and ensuring consistent infrastructure configurations.</span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Technical Specifications:  </span>
                                        <span> Supports Terraform configurations, provides a graphical user interface for managing deployments, and includes features such as drift detection and automated rollbacks.</span>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    )
}
export default Additionalservices
