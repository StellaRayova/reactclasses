import React from "react";
import './Saas.css';
import workingpic from './workingpic.jpg' ;
import Baremetal from './Baremetal.jpg';

function Saas() {
    return (
        <div>
            <div >
                <div>
                    {/* <img src={workingpic} width={1600} height={700}/> */}
                    <div className="body"> 
                <div>
                    {/* <img className="img img-fluid" src={workingpic} /> */}
                    <div >
                        <div className="image-container">
                            <img src={workingpic} className="img-fluid" alt="Oracle Services" style={{width:"100%"}} />
                            <div className="overlay"></div>
                            <div className="txt">
                                <h2 className='text-xl text-lg-center text-xl-left text-center'>Oracle Services</h2>
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
                    <p >Oracle Cloud Applications (SaaS) </p>
                </div>
                <div className="fontsz">
                    <p >Enormous IT offers a comprehensive suite of Oracle Cloud Applications (SaaS) to streamline and enhance various business functions. Our offerings include advanced solutions for enterprise resource planning, human capital management, supply chain management, enterprise performance management, customer experience, and more. Here’s a detailed overview of each subtopic:</p>
                </div>
                <div>
                    <div className="headingss">
                        <p >Oracle Fusion Cloud ERP</p>
                    </div>
                    <div className="m">
                    <img className="sideimg" style={{ borderRadius: 10 }} src={Baremetal} />
                    <div className="contr">
                        <div className="fontsz">
                            <div>
                                <li>
                                    <span> Financial Management:  </span>
                                    <span> Enormous IT’s Oracle Fusion Cloud ERP provides robust financial management capabilities, including general ledger, accounts payable and receivable, asset management, and cash management. It helps streamline financial operations and ensure compliance with regulatory requirements. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Procurement:   </span>
                                    <span> Automate and optimize procurement processes with features such as supplier management, purchase requisitions, purchase orders, and contract management. Gain better visibility and control over spending. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Project Management:   </span>
                                    <span>  Manage projects efficiently with integrated project planning, budgeting, resource allocation, and project tracking tools. Enhance collaboration and ensure projects are completed on time and within budget.</span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Risk Management:   </span>
                                    <span>  Identify, assess, and mitigate risks with advanced risk management tools. Implement controls and monitor compliance to minimize potential threats. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Advanced Financial Controls:   </span>
                                    <span> Strengthen financial controls with automated processes that detect anomalies and enforce policies. Ensure the integrity and accuracy of financial data.</span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Intelligent Process Automation:   </span>
                                    <span> Leverage AI and machine learning to automate routine tasks and optimize business processes. Enhance productivity and reduce operational costs.</span>
                                </li>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>


                <div>
                    <div className="headingss">
                        <p>Oracle Fusion Cloud HCM</p>
                    </div>

                    <div className="contr">
                        <div className="fontsz">
                            <div>
                                <li>
                                    <span >	Core HR: </span>
                                    <span>Manage employee data, organizational structures, and HR processes with a comprehensive Core HR solution. Ensure data accuracy and compliance with regulatory requirements.</span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >		Talent Management:    </span>
                                    <span> Attract, develop, and retain top talent with features such as recruiting, performance management, learning, and career development. Enhance employee engagement and drive business success. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Workforce Management:   </span>
                                    <span>  Optimize workforce scheduling, time and attendance tracking, and labor cost management. Improve workforce productivity and operational efficiency.</span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >Payroll:  </span>
                                    <span> Simplify payroll processing with automated calculations, tax compliance, and reporting. Ensure timely and accurate payroll management. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Digital Assistant:   </span>
                                    <span>  Enhance employee experience with an AI-powered digital assistant that provides quick access to HR information and services. Improve self-service capabilities and reduce administrative workload. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Workforce Health and Safety:    </span>
                                    <span>  Monitor and manage workforce health and safety incidents, compliance, and reporting. Ensure a safe and healthy work environment.</span>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="headingss">
                        <p >Oracle Fusion Cloud SCM</p>
                    </div>
                    <div className="contr">
                        <div className="fontsz">
                            <div>
                                <li>
                                    <span >	Product Lifecycle Management:   </span>
                                    <span>Manage the entire product lifecycle from ideation to retirement with integrated PLM tools. Enhance product development, collaboration, and innovation.</span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >		Procurement:   </span>
                                    <span> Streamline procurement processes with supplier management, purchase requisitions, orders, and contract management. Ensure efficient and cost-effective procurement operations.</span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Order Management:     </span>
                                    <span> Optimize order-to-cash processes with integrated order management solutions. Improve order accuracy, fulfillment, and customer satisfaction.</span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >Manufacturing:  </span>
                                    <span> Enhance manufacturing operations with features such as production planning, execution, quality management, and shop floor control. Ensure efficient and cost-effective manufacturing processes.</span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Logistics:  </span>
                                    <span>Manage logistics operations, including transportation, warehousing, and inventory management. Improve visibility and control over the supply chain. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Demand Management:  </span>
                                    <span>Predict and respond to market demand with advanced demand planning and forecasting tools. Ensure optimal inventory levels and customer satisfaction.</span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	IoT-Enabled Asset Monitoring:  </span>
                                    <span>Leverage IoT technology to monitor and manage assets in real-time. Improve asset utilization, maintenance, and reliability. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Blockchain-Enabled Traceability:  </span>
                                    <span>Ensure product authenticity and traceability with blockchain technology. Enhance supply chain transparency and security.</span>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="headingss">
                        <p >Oracle Fusion Cloud EPM</p>
                    </div>
                    <div className="contr">
                        <div className="fontsz">
                            <div>
                                <li>
                                    <span >	Planning:   </span>
                                    <span>Improve financial and operational planning with advanced modeling, scenario analysis, and forecasting tools. Align planning processes with strategic goals. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >		Budgeting:  </span>
                                    <span> Streamline budgeting processes with collaborative budgeting, automated workflows, and real-time updates. Ensure accurate and efficient budget management. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Financial Consolidation:  </span>
                                    <span>Simplify financial consolidation with automated data collection, consolidation, and reporting. Ensure accurate and timely financial statements.</span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Narrative Reporting: </span>
                                    <span>  Enhance reporting with integrated narrative reporting tools that combine financial data with qualitative insights. Improve decision-making and stakeholder communication. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Predictive Planning:   </span>
                                    <span>  Leverage AI and machine learning for predictive planning and forecasting. Enhance accuracy and agility in planning processes. </span>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="headingss">
                        <p >Oracle Cloud Infrastructure Service Gateway</p>
                    </div>
                    <div className="contr">
                        <div className="fontsz">
                            <div>
                                <li>
                                    <span >	Private Access to Oracle Services:   </span>
                                    <span>Enormous IT’s Oracle Cloud Infrastructure Service Gateway allows private access to Oracle services within your VCN, without requiring traffic to traverse the public internet, enhancing security and performance. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Seamless Integration: </span>
                                    <span> Integrates seamlessly with other OCI services, enabling private connectivity to resources such as Object Storage, Autonomous Database, and Oracle Cloud Applications </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Improved Security:     </span>
                                    <span> By keeping traffic within OCI’s private network, Service Gateway reduces exposure to internet-based threats and enhances data security. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >Use Cases:  </span>
                                    <span> Suitable for secure access to OCI services, compliance with regulatory requirements, and optimizing performance for cloud-based applications. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Technical Specifications:  </span>
                                    <span> Supports multiple OCI regions and availability domains, provides high throughput and low latency, and integrates with VCN security and routing policies. </span>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="fontsz">
                        <p>Enormous IT is dedicated to providing these comprehensive OCI networking services to ensure your cloud infrastructure is secure, high-performing, and reliable, meeting the connectivity needs of a wide range of applications and workloads.</p>
                    </div>
                </div>
            </div>




        </div>
    )
}
export default Saas;
