import React, { useEffect, useState } from 'react';
import '../TMsfiles/MsBussInt.css';
import business from '../TMsfiles/MSimages/business.jpeg';

import excel from '../TMsfiles/MSimages/excel.jpeg';
import powerbi from '../TMsfiles/MSimages/powebi.jpeg';
import tableau from '../TMsfiles/MSimages/tablequ.jpeg';
import etl from '../TMsfiles/MSimages/etl.jpeg';
import data from '../TMsfiles/MSimages/data.jpeg';

import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUsPopup from '../Popup';

const Msbi = () => {
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
        <div className='yybg' >
            <div ></div>
            <div ></div>
                <div  >
                    <div  >
                        <div >
                            {/* <div >
                                <img src={business} className="img-fluid" style={{ width: "100%" }} alt="Technology" />
                                <div className="yyoverlay" ></div>
                                <div className="secondOverlay"></div>
                                <div className="yytext">
                                    <p className='text-xl text-lg-center text-xl-left text-center'>Microsoft Business Intelligence</p>
                                    <h2 className='yyHp text-lg-center text-xl-left text-center'>Illuminate Your Insights, Empower Your Decisions.</h2>
                                    <div className="d-flex justify-content-center">
                                        <button type="button" className="btn btn-outline-light w-auto">Schedule a Free Consultation</button>
                                    </div>
                                </div>
                            </div> */}

                            <div className="image-container">
                    <img src={business} className="img-fluid" alt="Technology" />
                    <div className="overlay"></div>
                    <div className="txt">
                        <h2 className='text-xl text-lg-center text-xl-left text-center'>Microsoft Business Intelligence</h2>
                        <p className='Hp text-lg-center text-xl-left text-center'>Illuminate Your Insights, Empower Your Decisions.</p>
                        <div className="d-flex justify-content-center">
                            {!isPopupOpen && (
                                <div>
                                    <button className="btn btn-outline-light w-auto"  style={{fontSize:'22px'}} onClick={openPopup}>Schedule a Free Consultation!</button>
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

                        <div className="yyT3 yyT4" style={{marginLeft:"50px", marginRight:"42px", textAlign:"justify"}}>
                            Enormous IT's Microsoft Business Intelligence services empower organizations to harness data as a strategic asset for informed decision-making and operational excellence. From data integration and warehousing to advanced analytics and self-service BI tools, we provide comprehensive solutions that enable organizations to uncover actionable insights and drive business performance. By establishing robust data governance frameworks and leveraging Microsoft's cutting-edge BI technologies, we help businesses reduce complexity, optimize processes, and accelerate time-to-insight. Our focus on delivering scalable, secure, and innovative BI solutions ensures that organizations stay ahead in a competitive market landscape, equipped with the intelligence needed to make impactful business decisions

                        </div>

                        <div className='yyT4'>
                            <p className='yyT2 text-center' style={{fontFamily:"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}}>
                                Data Source Layer
                            </p>
                        </div>

                        <div className="yyimagestyling my-4">
                                <img src={etl} className="img-fluid" style={{ width: "25%", margin: "5px 10px" , borderRadius:"5px"}} alt="Mobile Applications" />
                                
                                <img src={data} className="img-fluid" style={{ width: "25%",  margin: "5px 10px", borderRadius:"5px" }} alt="Mobile Applications" />
                        </div>


                        <div className="row " style={{ margin: "0px" }}>
                            <div className="col ">
                                <div className=" mb-4 yyflex4">
                                    <div className='yycard4 yycb2 pad yyT3'>
                                        <h4 className=" text-center "><strong style={{fontSize:"22px"}}>Data Integration Strategies</strong></h4>
                                        <p className=" text-center ">
                                            Implement Extract, Transform, Load (ETL) processes to consolidate data from disparate sources into a unified data repository for analysis.
                                        </p>

                                    </div>
                                </div>

                                <div className=" mb-4 yyflex4">
                                    <div className='yycard4 yycb2 pad yyT3'>
                                        <h4 className=" text-center "><strong style={{fontSize:"22px"}}>Data Quality Management</strong></h4>
                                        <p className=" text-center ">Enforce data quality standards, perform data profiling, and establish data cleansing routines to maintain accurate and reliable data for BI initiatives.</p>

                                    </div>
                                </div>


                                <div className=" mb-4 yyflex4">
                                    <div className='yycard4 yycb2 pad yyT3'>
                                        <h4 className=" text-center "><strong style={{fontSize:"22px"}}>Data Virtualization</strong></h4>
                                        <p className=" text-center ">Implement data virtualization techniques to provide real-time access to data across distributed systems and operational databases.</p>

                                    </div>
                                </div>

                                <div className='yyT4'>
                                    <p className='yyT2 text-center' style={{fontFamily:"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}}>
                                        Enterprise Data warehouse Layer
                                    </p>
                                </div>


                                <div className=" mb-4 yyflex4">
                                    <div className='yycard4 yycb2 pad yyT3'>
                                        <h4 className=" text-center "><strong style={{fontSize:"22px"}}>Scalable Data Warehousing</strong></h4>
                                        <p className=" text-center ">Design scalable data warehouse architectures using Microsoft SQL Server for centralized data storage, management, and analytics.</p>

                                    </div>
                                </div>

                                <div className=" mb-4 yyflex4">
                                    <div className='yycard4 yycb2 pad yyT3'>
                                        <h4 className=" text-center "><strong style={{fontSize:"22px"}}>Dimensional Modelling:</strong></h4>
                                        <p className=" text-center ">Develop dimensional models (star schema, snowflake schema) to optimize data retrieval, aggregation, and query performance for BI reporting and analysis.</p>

                                    </div>
                                </div>


                                <div className='yyT4'>
                                    <p className='yyT2 text-center' style={{fontFamily:"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}}>
                                        Data Access Layer
                                    </p>
                                </div>

                                <div className="yyimagestyling my-4">
                                <img src={powerbi} className="img-fluid" style={{ width: "25%", margin: "5px 10px" , borderRadius:"5px"}} alt="Mobile Applications" />
                                <img src={excel} className="img-fluid" style={{ width: "25%", margin: "5px 10px" , borderRadius:"5px"}} alt="Mobile Applications" />
                                <img src={tableau} className="img-fluid" style={{ width: "25%",  margin: "5px 10px", borderRadius:"5px" }} alt="Mobile Applications" />
                                </div> 


                                <div className=" mb-4 yyflex4">
                                    <div className='yycard4 yycb2 pad yyT3'>
                                        <h4 className=" text-center "><strong style={{fontSize:"22px"}}>Self-Service BI Tools</strong></h4>
                                        <p className=" text-center ">Empower business users with self-service BI tools such as Power BI and Excel for ad-hoc querying, data visualization, and report generation.</p>

                                    </div>
                                </div>

                                <div className=" mb-4 yyflex4">
                                    <div className='yycard4 yycb2 pad yyT3'>
                                        <h4 className=" text-center "><strong style={{fontSize:"22px"}}>Advanced Analytics</strong></h4>
                                        <p className=" text-center ">Implement advanced analytics capabilities, including predictive modelling, machine learning algorithms, and statistical analysis for actionable insights.</p>

                                    </div>
                                </div>


                                <div className='yyT4'>
                                    <p className='yyT2 text-center' style={{fontFamily:"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}}>
                                        Data Governance
                                    </p>
                                </div>


                                <div className=" mb-4 yyflex4">
                                    <div className='yycard4 yycb2 pad yyT3'>
                                        <h4 className=" text-center "><strong style={{fontSize:"22px"}}>Metadata Management</strong></h4>
                                        <p className=" text-center ">Establish metadata repositories to catalog data definitions, lineage, and relationships, ensuring consistency and accuracy in BI reporting.</p>

                                    </div>
                                </div>

                                <div className=" mb-4 yyflex4">
                                    <div className='yycard4 yycb2 pad yyT3'>
                                        <h4 className=" text-center "><strong style={{fontSize:"22px"}}>Governance Frameworks:</strong></h4>
                                        <p className=" text-center ">Implement governance frameworks to enforce data security, access controls, and compliance with regulatory requirements (e.g., GDPR, CCPA).</p>

                                    </div>
                                </div>

                                <div className='yyT4'>
                                    <p className='yyT2 text-center' style={{fontFamily:"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}}>
                                        Systems and Infrastructure
                                    </p>
                                </div>

                                <div className=" mb-4 yyflex4">
                                    <div className='yycard4 yycb2 pad yyT3'>
                                        <h4 className=" text-center "><strong style={{fontSize:"22px"}}>Cloud-based BI Solutions</strong></h4>
                                        <p className=" text-center ">Deploy Microsoft Azure-based BI solutions for cloud data warehousing, analytics, and AI-driven insights to support scalable, cost-effective BI </p>

                                    </div>
                                </div>

                                <div className=" mb-4 yyflex4">
                                    <div className='yycard4 yycb2 pad yyT3'>
                                        <h4 className=" text-center "><strong style={{fontSize:"22px"}}>Performance Optimization</strong></h4>
                                        <p className=" text-center ">Optimize BI infrastructure, database tuning, and query optimization to enhance performance, scalability, and responsiveness of BI applications.</p>

                                    </div>
                                </div>

                                <div className='yyT4'>
                                    <p className='yyT2 text-center' style={{fontFamily:"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}}>
                                        Benefits
                                    </p>
                                </div>


                                <div className=" mb-4 yyflex4">
                                    <div className='yycard4 yycb2 pad yyT3'>
                                        <h4 className=" text-center "><strong style={{fontSize:"22px"}}>Actionable Insights:</strong></h4>
                                        <p className=" text-center ">Deliver timely and accurate insights to stakeholders for informed decision-making and strategic planning.</p>

                                    </div>
                                </div>

                                <div className=" mb-4 yyflex4">
                                    <div className='yycard4 yycb2 pad yyT3'>
                                        <h4 className=" text-center "><strong style={{fontSize:"22px"}}>Operational Efficiency</strong></h4>
                                        <p className=" text-center ">Streamline BI processes, reduce time-to-insight, and enable faster data-driven actions with automated reporting and analytics.</p>

                                    </div>
                                </div>

                                <div className=" mb-4 yyflex4">
                                    <div className='yycard4 yycb2 pad yyT3'>
                                        <h4 className=" text-center "><strong style={{fontSize:"22px"}}>Business Alignment:</strong></h4>
                                        <p className=" text-center ">Align BI strategies with organizational goals, driving innovation, customer-centricity, and competitive advantage.</p>

                                    </div>
                                </div>
                                <div className=" mb-4 yyflex4">
                                    <div className='yycard4 yycb2 pad yyT3'>
                                        <h4 className=" text-center "><strong style={{fontSize:"22px"}}>Continuous Improvement</strong></h4>
                                        <p >Foster a culture of data-driven decision-making, innovation, and continuous improvement through advanced BI capabilities and insights.</p>
                                    </div>
                                </div>
                                <div className='yyT4'>
                                    <p className='yyT2 text-center' style={{fontFamily:"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"}}>
                                        Why Enormous?
                                    </p>
                                </div>
                                <div className="yyT3 yyT4" style={{marginLeft:"40px", marginRight:"40px", textAlign:"justify"}}>
                                    <ul>
                                        <li>
                                    <p><b>Deep Microsoft Expertise:</b> Enormous IT has extensive experience and proficiency in implementing Microsoft Business Intelligence solutions, ensuring optimal utilization of tools like SQL Server, Power BI, and Azure.</p>
                                    </li>
                                    <li><p><b>Holistic Approach:</b> We provide end-to-end BI solutions, from data integration and warehousing to advanced analytics and data governance, ensuring comprehensive support for your BI initiatives.</p></li>

                                    
                                    <li><p><b>Scalable and Flexible Solutions:</b> Our solutions are designed to scale with your business needs, providing flexibility and robustness to handle increasing data volumes and complexity.</p></li>
                                    <li><p><b>Proven Success:</b> Enormous IT has a track record of successful BI projects, delivering measurable results and significant improvements in decision-making and operational efficiency.</p></li>
                                    <li><p><b>Innovative and Future-Ready:</b> We leverage the latest Microsoft technologies and best practices to ensure your BI solutions are innovative, future-ready, and capable of driving sustained competitive advantage.</p></li>
                                    </ul>
                                </div>
                                <div className="yyT3 yyT4" style={{marginLeft:"40px", marginRight:"40px", textAlign:"justify"}}>
                                    By leveraging Enormous IT's comprehensive Microsoft Technology Services, organizations can achieve digital transformation, operational excellence, and sustained competitive advantage in today's dynamic business environment. Our commitment to delivering innovative, scalable, and efficient BI solutions ensures that your organization can harness the power of data to drive informed decision-making, enhance operational efficiency, and foster a culture of continuous improvement and innovation. Trust Enormous IT to be your partner in achieving business intelligence excellence and unlocking the full potential of your data.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
};

export default Msbi;