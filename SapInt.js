import React, { useEffect, useState } from 'react';
import '../Sap/SapInt.css';
import sap5 from '../Sap/Sapimages/sap5.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import s9 from '../Sap/Sapimages/s9.jpeg';
import s10 from '../Sap/Sapimages/s10.jpeg';
import ContactUsPopup from '../Popup';
const Sap5Integartion = () => {
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
                                <img src={sap} style={{ width: "100%" }} />
                            </div> */}

                            {/* <div >
                                <div >
                                    <img src={sap5} className="img-fluid imgaj" alt='Loading'/>

                                    <div className="txt6aj">
                                        <h2 >SAP Integration Services</h2>
                                        <p >Integrate to Innovate.</p>
                                        <div >
                                            <button type="button" className="btnaj btn-outline-light w-auto">Schedule a Free Consultation</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div className="image-container">
                                <img src={sap5} className="img-fluid" alt="Technology" />
                                <div className="overlay"></div>
                                <div className="txt" style={{ textAlign: 'left' }}>
                                    <h2 className='text-xl text-lg text-left'>SAP Integration Services</h2>
                                    <p className='Hp text-lg text-xl-left '>Integrate to Innovate.</p>

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


                            <p className='T10aj '>
                                Utilizing SAP Analytics Cloud and other BI tools, we provide data-driven insights, customized dashboards, and predictive analytics to support informed decision-making and proactive business strategies
                            </p>
                            <div >
                                <p className='T101aj text-center'>
                                    Seamless Integration
                                </p>
                            </div>

                            <div className="row ">
                                <div className="col ">


                                    <div className='flex8aj'>
                                        <div className=" mb-4 ">
                                            <div className='card14aj cb2aj padaj T10aj'>
                                                <h4 className=" text-center "><strong>Unified IT Environment </strong></h4>
                                                <p >
                                                    Integrating SAP with other enterprise systems to create a cohesive and unified IT environment. This ensures smooth data flow and enhances overall operational efficiency.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 ">
                                            <div className='card14aj cb2aj padaj T10aj'>
                                                <h4 className=" text-center "><strong>Interoperability</strong></h4>
                                                <p >
                                                    Ensuring interoperability between SAP and various third-party applications, enabling seamless communication and data exchange.
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex8aj'>
                                        <div className=" mb-4 ">
                                            <div className='card14aj cb2aj padaj T10aj'>
                                                <h4 className=" text-center "><strong>Custom Integration Solutions</strong></h4>
                                                <p >
                                                    Developing interactive visualizations that allow users to explore data dynamically and gain deeper insights into their business.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 ">
                                            <div className='card14aj cb2aj padaj T10aj'>
                                                <h4 className=" text-center "><strong>	Middleware Implementation </strong></h4>
                                                <p >
                                                    Utilizing middleware solutions to facilitate integration, ensuring that different systems can communicate and share data effectively.
                                                </p>

                                            </div>
                                        </div>

                                    </div>







                                    {/* <div className=" mb-4 flex4">
                                        <div className='card4aj cb2aj pad T10aj'>
                                            <h4 className=" text-center "><strong>	Integration Testing </strong></h4>
                                            <p >
                                                Conducting thorough integration testing to identify and resolve any issues, ensuring smooth operation and reliability of integrated systems.
                                            </p>

                                        </div>
                                    </div> */}




                                    <div className='d-flex justify-content center'>
                                        <img src={s9} className=" img6aj   " alt='Loading'/>
                                    </div>










                                    <div >
                                        <p className='T101aj text-center'>
                                            API Management
                                        </p>
                                    </div>
                                    <div className='flex8aj'>
                                        <div className=" mb-4 ">
                                            <div className='card14aj cb2aj padaj T10aj'>
                                                <h4 className=" text-center "><strong>API Development</strong></h4>
                                                <p >
                                                    Developing and managing APIs to enable efficient data exchange between SAP and non-SAP systems. This allows different applications to interact and share information seamlessly.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 ">
                                            <div className='card14aj cb2aj padaj T10aj'>
                                                <h4 className=" text-center "><strong>Security and Compliance</strong></h4>
                                                <p >
                                                    Implementing robust security measures to protect API endpoints and ensure data integrity and compliance with industry standards.
                                                </p>

                                            </div>
                                        </div>

                                    </div>




                                    <div className='flex8aj'>

                                        <div className=" mb-4 ">
                                            <div className='card14aj cb2aj padaj T10aj'>
                                                <h4 className=" text-center "><strong>API Gateway</strong></h4>
                                                <p >
                                                    Using API gateways to manage, monitor, and secure API traffic, ensuring reliable and scalable API performance.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 flex4aj">
                                            <div className='card14aj cb2aj padaj T10aj'>
                                                <h4 className=" text-center "><strong>	Documentation and Support </strong></h4>
                                                <p >
                                                    Providing comprehensive documentation and support for APIs to facilitate easy integration and use by developers.
                                                </p>

                                            </div>
                                        </div>

                                    </div>



                                    <div >
                                        <p className='T101aj text-center'>
                                            Process Automation
                                        </p>
                                    </div>


                                    <div className='flex8aj'>
                                        <div className=" mb-4 ">
                                            <div className='card14aj cb2aj padaj T10aj'>
                                                <h4 className=" text-center "><strong>Workflow Automation</strong></h4>
                                                <p >
                                                    Automating business processes to enhance operational efficiency and reduce manual efforts. This includes streamlining workflows, automating repetitive tasks, and improving process consistency.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 flex4aj">
                                            <div className='card14aj cb2aj padaj T10aj'>
                                                <h4 className=" text-center "><strong>Robotic Process Automation (RPA)g</strong></h4>
                                                <p >
                                                    Implementing RPA to automate routine and repetitive tasks, freeing up employees to focus on higher-value activities.
                                                </p>

                                            </div>
                                        </div>
                                    </div>





                                    <div className='flex8aj'>
                                        <div className=" mb-4 ">
                                            <div className='card14aj cb2aj padaj T10aj'>
                                                <h4 className=" text-center "><strong>	Intelligent Automation</strong></h4>
                                                <p >
                                                    Leveraging AI and machine learning to create intelligent automation solutions that can adapt to changing business needs and improve decision-making.
                                                </p>

                                            </div>
                                        </div>
                                        <div className=" mb-4 ">
                                            <div className='card14aj cb2aj padaj T10aj'>
                                                <h4 className=" text-center "><strong>End-to-End Process Integration</strong></h4>
                                                <p >
                                                    Ensuring end-to-end integration of business processes across different systems, enabling seamless operations and improved productivity.
                                                </p>

                                            </div>
                                        </div>

                                    </div>



                                    {/* <div className=" mb-4 flex4aj">
                                        <div className='card4aj cb2aj padaj T10aj'>
                                            <h4 className=" text-center "><strong>Continuous Improvement</strong></h4>
                                            <p >
                                                Regularly reviewing and optimizing automated processes to ensure they continue to meet business needs and deliver maximum value.
                                            </p>

                                        </div>
                                    </div> */}


                                    <div className='style5aj' >
                                        <div>
                                            <img src={s10} className=" image5aj  " alt='Loading' />
                                        </div>
                                        <div className=' T45aj  '>

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

export default Sap5Integartion;
