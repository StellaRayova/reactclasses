
import React, { useEffect, useState } from 'react';
import '../Sap/SapCloud.css';
import sap3 from '../Sap/Sapimages/sap3.jpeg';
import s5 from '../Sap/Sapimages/s5.jpeg';
import s6 from '../Sap/Sapimages/s6.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUsPopup from '../Popup';

const Sap3Cloud = () => {
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
                           

                            {/* <div >
                                <div>
                                    <img src={sap3} className="img-fluid imgaj" alt="Technology" />
                               
                                    <div className="txt4aj">
                                        <h2 >SAP S/4HANA Migration</h2>
                                        <p>Empower Your Business with Cloud Agility.</p>
                                        <div >
                                            <button type="button" className="btnaj btn-outline-light w-auto">Schedule a Free Consultation</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div className="image-container">
                                <img src={sap3} className="img-fluid" alt="Technology" />
                                <div className="overlay"></div>
                                <div className="txt" style={{ textAlign: 'left' }}>
                                    <h2 className='text-xl text-lg text-left'>SAP Cloud Solutions</h2>
                                    <p className='Hp text-lg text-xl-left '>Empower Your Business with Cloud Agility.</p>

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
                            <p className='T8aj '>
                                We deliver scalable and flexible cloud solutions that streamline business processes and foster innovation.
                            </p>
                            <div >
                                <p className='T81aj text-center'>
                                    SAP Cloud Platform
                                </p>
                            </div>


                            <div className="row ">
                                <div className="col ">

                                    <div className='flex83aj '>
                                        <div className=" mb-4">
                                            <div className='card12aj  cb2aj  padaj  T8aj'>
                                                <h4 className=" text-center "><strong>	Application Development </strong></h4>
                                                <p >
                                                    Utilizing the SAP Cloud Platform to build, extend, and integrate innovative applications tailored to your business needs. This includes designing and developing custom applications that seamlessly integrate with your existing systems.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4">
                                            <div className='card12aj  cb2aj  padaj  T8aj'>
                                                <h4 className=" text-center "><strong>Integration Services</strong></h4>
                                                <p >
                                                    Offering comprehensive integration services to connect SAP Cloud Platform with other cloud services and on-premises systems, ensuring a cohesive IT environment and enhanced data flow.
                                                </p>

                                            </div>
                                        </div>

                                    </div>

                                    <div className='flex83aj '>
                                        <div className=" mb-4">
                                            <div className='card12aj  cb2aj  padaj  T8aj'>
                                                <h4 className=" text-center "><strong>DevOps and Continuous Deployment</strong></h4>
                                                <p >
                                                    Implementing DevOps practices to ensure continuous integration and deployment (CI/CD) for applications. This accelerates development cycles, improves quality, and reduces time-to-market.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4">
                                            <div className='card12aj  cb2aj  padaj  T8aj'>
                                                <h4 className=" text-center "><strong>	Security and Compliance</strong></h4>
                                                <p >
                                                    Implementing robust security measures and ensuring compliance with industry standards and regulations to protect data and applications against threats.
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                    {/* 

                                    <div className=" mb-4 flex4aj ">
                                        <div className='card4aj cb2aj  padaj  T8aj'>
                                            <h4 className=" text-center "><strong>Migration Services</strong></h4>
                                            <p >
                                                Facilitating smooth migration of existing applications and data to SAP Cloud Platform, minimizing downtime and ensuring data integrity.
                                            </p>

                                        </div>
                                    </div> */}



                                    <div >
                                        <p className='T81aj text-center'>
                                            SAP Business ByDesign
                                        </p>
                                    </div>
                                    <div className='flex83aj '>
                                        <div className=" mb-4 ">
                                            <div className='card12aj  cb2aj  padaj  T8aj'>
                                                <h4 className=" text-center "><strong>Implementation</strong></h4>
                                                <p >
                                                    Providing end-to-end implementation of SAP Business ByDesign to streamline business processes in the cloud. Customizing the solution to fit specific business needs, ensuring optimal performance and user satisfaction.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4">
                                            <div className='card12aj  cb2aj  padaj  T8aj'>
                                                <h4 className=" text-center "><strong>Customization</strong></h4>
                                                <p >
                                                    Tailoring SAP Business ByDesign to align with unique business processes by configuring workflows, business rules, and user interfaces to enhance efficiency and productivity.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex83aj '>
                                        <div className=" mb-4 ">
                                            <div className='card12aj  cb2aj  padaj  T8aj'>
                                                <h4 className=" text-center "><strong>Integration</strong></h4>
                                                <p >
                                                    Integrating SAP Business ByDesign with other enterprise systems to create a unified IT environment, ensuring seamless data flow and operational efficiency.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4">
                                            <div className='card12aj  cb2aj  padaj  T8aj'>
                                                <h4 className=" text-center "><strong>Training and Support</strong></h4>
                                                <p >
                                                    Offering comprehensive training and ongoing support to ensure teams are proficient in using SAP Business ByDesign, with a dedicated support team available for technical or functional queries.
                                                </p>

                                            </div>
                                        </div>
                                    </div>


                                    {/* <div className=" mb-4 flex4aj ">
                                        <div className='card4aj cb2aj  padaj  T8aj'>
                                            <h4 className=" text-center "><strong>Continuous Improvement</strong></h4>
                                            <p >
                                                Regularly reviewing and optimizing SAP Business ByDesign implementation to ensure it continues to meet evolving business needs, identifying and implementing improvements.
                                            </p>

                                        </div>
                                    </div> */}

                                    <div className='d-flex justify-content center'>
                                        <img src={s5} className=" img4aj   "  alt='Loading'/>
                                    </div>














                                    <div >
                                        <p className='T81aj text-center'>
                                            Scalability and Flexibility
                                        </p>
                                    </div>

                                    <div className='flex83aj '>
                                        <div className=" mb-4">
                                            <div className='card12aj  cb2aj  padaj  T8aj'>
                                                <h4 className=" text-center "><strong>Elastic Scalability </strong></h4>
                                                <p >
                                                    Designing SAP cloud solutions for elastic scalability, allowing cloud infrastructure to seamlessly scale to accommodate increased demand without compromising performance as the business grows.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4">
                                            <div className='card12aj  cb2aj  padaj  T8aj'>
                                                <h4 className=" text-center "><strong>Adaptability</strong></h4>
                                                <p >
                                                    Ensuring SAP cloud solutions are highly adaptable to evolving business needs, configuring the cloud environment to support new functionalities and processes as requirements change.
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex83aj '>
                                        <div className=" mb-4">
                                            <div className='card12aj  cb2aj  padaj  T8aj'>
                                                <h4 className=" text-center "><strong>Performance Optimization</strong></h4>
                                                <p >
                                                    Continuously monitoring and optimizing the performance of SAP cloud solutions using advanced analytics and monitoring tools to ensure optimal system performance and responsiveness.
                                                </p>

                                            </div>
                                        </div>
                                        <div className=" mb-4">
                                            <div className='card12aj  cb2aj  padaj  T8aj'>
                                                <h4 className=" text-center "><strong>Cost Management</strong></h4>
                                                <p >
                                                    Implementing cost management strategies to optimize cloud expenditure, ensuring payment only for the resources used while leveraging the cost-efficiency of the cloud.
                                                </p>

                                            </div>
                                        </div>

                                    </div>


                                    {/* <div className=" mb-4 flex4aj ">
                                        <div className='card4aj cb2aj  padaj  T8aj'>
                                            <h4 className=" text-center "><strong>Disaster Recovery and Business Continuity </strong></h4>
                                            <p >
                                                Providing robust disaster recovery and business continuity solutions to ensure critical business operations continue uninterrupted in the event of a disruption, with minimal data loss and downtime.
                                            </p>

                                        </div>
                                    </div> */}







                                    <div className='style3aj' >
                                        <div>
                                            <img src={s6} className=" image3aj  " alt='Loading' />
                                        </div>
                                        <div className=' T43aj  '>

                                            <p>Enormous IT leverages its expertise in SAP Cloud Solutions to help clients build, integrate, and manage innovative applications, streamline business processes in the cloud, and ensure that cloud solutions are scalable and adaptable to evolving business needs.</p>

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

export default Sap3Cloud;