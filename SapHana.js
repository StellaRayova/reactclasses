
import React, { useEffect, useState } from 'react';
import './SapHana.css';
import sap2 from '../Sap/Sapimages/sap2.jpeg';
import s3 from '../Sap/Sapimages/s3.jpeg';
import s4 from '../Sap/Sapimages/s4.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUsPopup from '../Popup';

const Sap2 = () => {
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
                            {/* <div>
                                <img src={sap} style={{ width: "100%" }} />
                            </div> */}
                            {/* <div >
                                <div>
                                    <img src={sap2} className="img-fluid imgaj" alt="Technology" />
                          
                                    <div className="txt7aj">
                                        <h2 >SAP S/4HANA Migration</h2>
                                        <p> Future-Proof Your Operations Today.</p>
                                        <div >
                                            <button type="button" className="btnaj btn-outline-light w-auto">Schedule a Free Consultation</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            <div className="image-container">
                                <img src={sap2} className="img-fluid" alt="Technology" />
                                <div className="overlay"></div>
                                <div className="txt" style={{ textAlign: 'left' }}>
                                    <h2 className='text-xl text-lg text-left'>SAP S/4HANA Migration</h2>
                                    <p className='Hp text-lg text-xl-left '> Future-Proof Your Operations Today.</p>

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

                            <p className='T7aj '>
                                Facilitating a smooth transition to SAP S/4HANA, we ensure secure data management and performance optimization to harness the advanced capabilities of this next-generation business suite.
                            </p>
                            <div >
                                <p className='T2aj text-center'>
                                    Smooth Transition
                                </p>
                            </div>




                            <div className="row ">
                                <div className="col ">

                                    <div className='flex82aj'>
                                        <div className=" mb-4  ">
                                            <div className='card11aj  cb2aj  padaj   T7aj'>
                                                <h4 className=" text-center "><strong>	Assessment and Planning</strong></h4>
                                                <p >
                                                    Conducting a thorough assessment of your current system landscape and creating a detailed migration plan. This includes evaluating existing infrastructure, identifying potential risks, and defining a clear strategy for migration.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4">
                                            <div className='card11aj  cb2aj  padaj   T7aj'>
                                                <h4 className=" text-center "><strong>	System Conversion</strong></h4>
                                                <p >
                                                    Managing the technical aspects of converting your current SAP environment to SAP S/4HANA, including system conversion, custom code adaptation, and data conversion. This ensures a seamless transition with minimal downtime.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    {/* 
                                    <div className=" mb-4 flex4aj ">
                                        <div className='card4aj  cb2aj  padaj   T7aj'>
                                            <h4 className=" text-center "><strong>	Proof of Concept (PoC) </strong></h4>
                                            <p >
                                                Conducting a PoC to validate the migration approach, identify potential issues early, and ensure that the new system meets your business requirements.
                                            </p>

                                        </div>
                                    </div> */}
                                    <div className='flex82aj'>

                                        <div className=" mb-4 ">
                                            <div className='card11aj  cb2aj  padaj   T7aj'>
                                                <h4 className=" text-center "><strong>Change Management</strong></h4>
                                                <p >
                                                    Implementing a comprehensive change management strategy to ensure smooth adoption of the new system. This includes stakeholder engagement, communication plans, and training programs to prepare your team for the transition.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4  ">
                                            <div className='card11aj  cb2aj  padaj   T7aj'>
                                                <h4 className=" text-center "><strong>	Go-Live and Hypercare Support</strong></h4>
                                                <p >
                                                    Providing robust support during the go-live phase and immediate post-go-live period to address any issues and ensure a smooth transition to the new environment.
                                                </p>

                                            </div>
                                        </div>
                                    </div>



                                    <div >
                                        <p className='T2aj text-center'>
                                            Data Management
                                        </p>
                                    </div>
                                    <div className='flex82aj  '>
                                        <div className=" mb-4 ">
                                            <div className='card11aj   cb2aj  padaj   T7aj'>
                                                <h4 className=" text-center "><strong>Data Assessment and Cleansing</strong></h4>
                                                <p >
                                                    Conducting a thorough assessment of your data, identifying any inconsistencies or redundancies, and performing data cleansing to ensure high-quality data migration.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 ">
                                            <div className='card11aj   cb2aj  padaj   T7aj'>
                                                <h4 className=" text-center "><strong>Data Validation</strong></h4>
                                                <p >
                                                    Implementing rigorous data validation checks to ensure the accuracy and completeness of migrated data. This includes pre- and post-migration data verification to ensure data integrity.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex82aj  '>
                                        <div className=" mb-4 ">
                                            <div className='card11aj   cb2aj  padaj   T7aj'>
                                                <h4 className=" text-center "><strong>Data Archiving</strong></h4>
                                                <p >
                                                    Managing data archiving processes to ensure that historical data is properly stored and accessible, while optimizing the performance of your new system.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 ">
                                            <div className='card11aj   cb2aj  padaj   T7aj'>
                                                <h4 className=" text-center "><strong>Compliance and Security</strong></h4>
                                                <p >
                                                    Ensuring that all data migration activities comply with industry regulations and standards, and implementing robust security measures to protect sensitive data during the migration process.
                                                </p>

                                            </div>
                                        </div>
                                    </div>



                                    <div className='d-flex justify-content center'>
                                        <img src={s3} className=" img3aj  " alt='Loading' />
                                    </div>










                                    <div >
                                        <p className='T2aj text-center'>
                                            Performance Optimization
                                        </p>
                                    </div>
                                    <div className='flex82aj  '>
                                        <div className=" mb-4 ">
                                            <div className='card11aj   cb2aj  padaj   T7aj'>
                                                <h4 className=" text-center "><strong>System Tuning</strong></h4>
                                                <p >
                                                    Leveraging SAP S/4HANA’s advanced in-memory computing capabilities to optimize system performance. This includes fine-tuning system parameters and configurations to enhance speed and efficiency.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 ">
                                            <div className='card11aj   cb2aj  padaj   T7aj'>
                                                <h4 className=" text-center "><strong>Process Optimization</strong></h4>
                                                <p >
                                                    Analyzing and optimizing business processes to take full advantage of SAP S/4HANA’s advanced functionalities. This includes re-engineering processes to improve efficiency and effectiveness
                                                </p>

                                            </div>
                                        </div>

                                    </div>





                                    <div className='flex82aj  '>
                                        <div className=" mb-4 ">
                                            <div className='card11aj   cb2aj  padaj   T7aj'>
                                                <h4 className=" text-center "><strong>Custom Enhancements</strong></h4>
                                                <p >
                                                    Implementing custom enhancements and extensions to maximize the performance benefits of SAP S/4HANA. This includes developing and deploying custom applications and features that address specific business needs.
                                                </p>

                                            </div>
                                        </div>
                                        <div className=" mb-4 ">
                                            <div className='card11aj   cb2aj  padaj   T7aj'>
                                                <h4 className=" text-center "><strong>Updates and Upgrades</strong></h4>
                                                <p >
                                                    Managing updates and upgrades to keep your SAP ERP system aligned with the latest features and security enhancements. We ensure minimal disruption during these processes through careful planning and execution.
                                                </p>

                                            </div>
                                        </div>
                                    </div>



                                    <div className='flex82aj  '>
                                        <div className=" mb-4 ">
                                            <div className='card11aj   cb2aj  padaj   T7aj'>
                                                <h4 className=" text-center "><strong>Monitoring and Analytics</strong></h4>
                                                <p >
                                                    Utilizing SAP S/4HANA’s real-time analytics and monitoring tools to continuously monitor system performance and identify opportunities for further optimization. This includes setting up custom dashboards and reports to track key performance metrics.
                                                </p>

                                            </div>
                                        </div>


                                        <div className=" mb-4 ">
                                            <div className='card11aj   cb2aj  padaj   T7aj'>
                                                <h4 className=" text-center "><strong>Continuous Improvement</strong></h4>
                                                <p >
                                                    Establishing a framework for continuous performance improvement, including regular performance reviews, optimization audits, and ongoing training and support for your team.
                                                </p>

                                            </div>
                                        </div>
                                    </div>



                                    <div className='style2aj' >
                                        <div>
                                            <img src={s4} className=" image2aj  " alt='Loading' />
                                        </div>
                                        <div className=' T42aj  '>

                                            <p>By focusing on these detailed aspects, we ensure a smooth and successful migration to SAP S/4HANA, secure and efficient data management, and enhanced business performance through continuous optimization</p>

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

export default Sap2;