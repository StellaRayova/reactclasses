

import React, { useEffect, useState } from 'react';
import '../Sap/SapABI.css';
import sap4 from '../Sap/Sapimages/sap4.jpeg';
import s7 from '../Sap/Sapimages/s7.jpeg';
import s8 from '../Sap/Sapimages/s8.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUsPopup from '../Popup';

const Sap4ABI = () => {
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
                        <div  >
                            {/* <div>
                                <img src={sap} style={{width:"100%"}}/>
                            </div> */}

                            {/* <div >
                                <div >
                                    <img src={sap4} className="img-fluid imgaj" alt="Technology" />
                                   
                                    <div className="txt5aj">
                                        <h2 >SAP Analytics and Business Intelligence</h2>
                                        <p >Data-Driven Decisions for Success.</p>
                                        <div >
                                            <button type="button" className="btnaj btn-outline-light w-auto">Schedule a Free Consultation</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div className="image-container">
                                <img src={sap4} className="img-fluid" alt="Technology" />
                                <div className="overlay"></div>
                                <div className="txt" style={{ textAlign: 'left' }}>
                                    <h2 className='text-xl text-lg text-left'>SAP Analytics and Business Intelligence</h2>
                                    <p className='Hp text-lg text-xl-left '>Data-Driven Decisions for Success.</p>

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

                      
                            <p className='T9aj '>
                                Utilizing SAP Analytics Cloud and other BI tools, we provide data-driven insights, customized dashboards, and predictive analytics to support informed decision-making and proactive business strategies
                            </p>




                            <div >
                                <p className='T91aj text-center'>
                                    Data-Driven Insights
                                </p>
                            </div>

                            <div className="row ">
                                <div className="col ">
                                    <div className='flex8aj'>
                                        <div className=" mb-4 ">
                                            <div className='card13aj  cb2aj  padaj  T9aj'>
                                                <h4 className=" text-center "><strong>Real-Time Analytics </strong></h4>
                                                <p >
                                                    Utilizing SAP Analytics Cloud and other BI tools to provide real-time insights into business performance. This enables timely and informed decision-making based on the most current data.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 ">
                                            <div className='card13aj  cb2aj  padaj  T9aj'>
                                                <h4 className=" text-center "><strong>Data Integration</strong></h4>
                                                <p >
                                                    Integrating data from various sources, including SAP and non-SAP systems, to create a unified view of business operations. This ensures comprehensive and accurate analysis.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex8aj'>
                                        <div className=" mb-4 ">
                                            <div className='card13aj  cb2aj  padaj  T9aj'>
                                                <h4 className=" text-center "><strong>Advanced Analytics</strong></h4>
                                                <p >
                                                    Employing advanced analytics techniques, such as machine learning and artificial intelligence, to uncover hidden patterns and trends within the data.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 ">
                                            <div className='card13aj  cb2aj  padaj  T9aj'>
                                                <h4 className=" text-center "><strong>Interactive Visualizations</strong></h4>
                                                <p >
                                                    Developing interactive visualizations that allow users to explore data dynamically and gain deeper insights into their business.
                                                </p>

                                            </div>
                                        </div>

                                    </div>





                                    <div className='d-flex justify-content center'>
                                        <img src={s7} className=" img5aj   " alt='Loading'/>
                                    </div>













                                    <div >
                                        <p className='T91aj text-center'>
                                            Custom Dashboards
                                        </p>
                                    </div>


                                    <div className='flex8aj'>
                                        <div className=" mb-4 ">
                                            <div className='card13aj  cb2aj  padaj  T9aj'>
                                                <h4 className=" text-center "><strong>	Tailored Dashboards</strong></h4>
                                                <p >
                                                    Creating customized dashboards that are tailored to specific business needs and user roles. This ensures that relevant metrics and KPIs are easily accessible.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 ">
                                            <div className='card13aj  cb2aj  padaj  T9aj'>
                                                <h4 className=" text-center "><strong>User-Friendly Interfaces</strong></h4>
                                                <p >
                                                    Designing user-friendly interfaces that make it easy for users to navigate and interact with the dashboards, enhancing user experience and productivity.
                                                </p>

                                            </div>
                                        </div>

                                    </div>

                                    <div className='flex8aj'>
                                        <div className=" mb-4 ">
                                            <div className='card13aj  cb2aj  padaj  T9aj'>
                                                <h4 className=" text-center "><strong>Integration</strong></h4>
                                                <p >
                                                    Integrating SAP Business ByDesign with other enterprise systems to create a unified IT environment, ensuring seamless data flow and operational efficiency.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 ">
                                            <div className='card13aj  cb2aj  padaj  T9aj'>
                                                <h4 className=" text-center "><strong>Real-Time Monitoring </strong></h4>
                                                <p >
                                                    Enabling real-time monitoring of key business metrics, allowing for quick identification of issues and opportunities.
                                                </p>

                                            </div>
                                        </div>

                                    </div>
                                    <div className=" mb-4 flex4aj">
                                        <div className='card13aj cb2aj  padaj  T9aj'>
                                            <h4 className=" text-center "><strong>Automated Reporting</strong></h4>
                                            <p >
                                                Automating the generation of reports, reducing the time and effort required to produce regular updates on business performance.
                                            </p>

                                        </div>
                                    </div>

                                    <div >
                                        <p className='T91aj text-center'>
                                            Predictive Analytics
                                        </p>
                                    </div>



                                    <div className='flex8aj'>
                                        <div className=" mb-4 ">
                                            <div className='card13aj  cb2aj  padaj  T9aj'>
                                                <h4 className=" text-center "><strong>	Trend Analysis</strong></h4>
                                                <p >
                                                    Implementing predictive analytics to analyze historical data and identify trends that can inform future strategies. This helps anticipate market changes and customer behavior.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 ">
                                            <div className='card13aj  cb2aj  padaj  T9aj'>
                                                <h4 className=" text-center "><strong>	Proactive Decision-Making</strong></h4>
                                                <p >
                                                    Using predictive models to make proactive business decisions, such as optimizing inventory levels, improving customer targeting, and enhancing operational efficiency.
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex8aj'>
                                        <div className=" mb-4 ">
                                            <div className='card13aj  cb2aj  padaj  T9aj'>
                                                <h4 className=" text-center "><strong>Risk Management</strong></h4>
                                                <p >
                                                    Applying predictive analytics to assess and mitigate risks by forecasting potential challenges and identifying preventive measures.
                                                </p>

                                            </div>
                                        </div>
                                        <div className=" mb-4 flex4">
                                            <div className='card13aj  cb2aj  padaj  T9aj'>
                                                <h4 className=" text-center "><strong>Scenario Planning</strong></h4>
                                                <p >
                                                    Enabling scenario planning by simulating different business scenarios and evaluating their potential impact, helping to make more resilient and flexible plans.
                                                </p>

                                            </div>
                                        </div>
                                    </div>





                                    <div className='style4aj' >
                                        <div>
                                            <img src={s8} className=" image4aj  " alt='Loading'/>
                                        </div>
                                        <div className=' T44aj  '>

                                            <p>Enormous IT leverages its expertise in SAP Analytics and Business Intelligence to provide clients with real-time insights, customized dashboards, and predictive analytics. These capabilities enable data-driven decision-making, enhanced visibility into business performance, and proactive management of future trends and risks.</p>

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

export default Sap4ABI;