import React, { useEffect, useState } from 'react';
import '../Sap/SapTaining.css';
import sap6 from '../Sap/Sapimages/sap6.jpeg';
import s11 from '../Sap/Sapimages/s11.jpeg';
import s12 from '../Sap/Sapimages/s12.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUsPopup from '../Popup';

const Sap6Training = () => {
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
                            {/* <div >

                                <img src={sap6} className="img-fluid imgaj" alt='Loading' />
                              
                                <div className="txt7aj">
                                    <h2 >SAP Training and Support</h2>
                                    <p >Implement Excel.</p>
                                    <div >
                                        <button type="button" className="btnaj btn-outline-light w-auto">Schedule a Free Consultation</button>
                                    </div>
                                </div>

                            </div> */}

                            <div className="image-container">
                                <img src={sap6} className="img-fluid" alt="Technology" />
                                <div className="overlay"></div>
                                <div className="txt" style={{ textAlign: 'left' }}>
                                    <h2 className='text-xl text-lg text-left'>SAP Training and Support</h2>
                                    <p className='Hp text-lg text-xl-left '>Implement Excel.</p>

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

                            <p className='T11aj '>
                                Committed to maximizing the value of your SAP investment, we offer expert training programs, round-the-clock support, and strategic consulting to ensure your team is proficient and your systems are running smoothly.
                            </p>
                            <div >
                                <p className='T111aj text-center'>
                                    Expert Training
                                </p>
                            </div>

                            <div className="row ">
                                <div className="col ">


                                    <div className='flex86aj'>
                                        <div className=" mb-4 ">
                                            <div className='card15aj cb2aj  padaj   T11aj'>
                                                <h4 className=" text-center "><strong>Comprehensive Programs</strong></h4>
                                                <p >
                                                    Offering tailored training programs designed to equip your team with in-depth knowledge and practical skills in SAP technologies. Training covers a wide range of SAP modules and functionalities, ensuring proficiency in using SAP solutions effectively.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 ">
                                            <div className='card15aj cb2aj  padaj   T11aj'>
                                                <h4 className=" text-center "><strong>Hands-On Learning</strong></h4>
                                                <p >
                                                    Providing hands-on learning experiences through workshops, simulations, and real-world scenarios to enhance practical understanding and application of SAP systems.
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex86aj'>
                                        <div className=" mb-4 ">
                                            <div className='card15aj cb2aj  padaj   T11aj'>
                                                <h4 className=" text-center "><strong>	Customized Training Plans</strong></h4>
                                                <p >
                                                    Developing customized training plans based on your organization's specific needs and business processes, ensuring relevance and maximum learning impact.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 ">
                                            <div className='card15aj cb2aj  padaj   T11aj'>
                                                <h4 className=" text-center "><strong>Certification Preparation</strong></h4>
                                                <p >
                                                    Preparing individuals for SAP certification exams through focused training sessions and exam preparation resources, validating their expertise in SAP technologies.
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                    <div className=" mb-4 flex86aj d-flex justify-content-center">
                                        <div className='card15aj  cb2aj  padaj   T11aj'>
                                            <h4 className=" text-center "><strong>	Continuous Learning</strong></h4>
                                            <p >
                                                Supporting ongoing professional development with advanced training modules and updates on latest SAP features and enhancements.
                                            </p>

                                        </div>
                                    </div>

                                    <div >
                                        <p className='T111aj text-center'>
                                            24/7 Support
                                        </p>
                                    </div>
                                    <div className='flex86aj'>
                                        <div className=" mb-4 ">
                                            <div className='card15aj cb2aj  padaj   T11aj'>
                                                <h4 className=" text-center "><strong>	Immediate Assistance</strong></h4>
                                                <p >
                                                    Providing round-the-clock support services to address any SAP-related issues or emergencies promptly. This ensures minimal disruption to your business operations and quick resolution of technical challenges.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4   ">
                                            <div className='card15aj  cb2aj  padaj   T11aj'>
                                                <h4 className=" text-center "><strong>	Dedicated Support Team</strong></h4>
                                                <p >
                                                    Assigning a dedicated team of SAP experts who are available 24/7 to provide technical assistance, troubleshooting, and guidance on SAP system usage and functionality.
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex86aj'>
                                        <div className=" mb-4">
                                            <div className='card15aj cb2aj  padaj   T11aj'>
                                                <h4 className=" text-center "><strong>Remote Support Capabilities</strong></h4>
                                                <p >
                                                    Offering remote support options, including phone, email, and chat support, to cater to diverse business needs and ensure timely resolution of issues from any location.
                                                </p>

                                            </div>
                                        </div>

                                        <div >
                                            <div className='card15aj cb2aj  padaj   T11aj'>
                                                <h4 className=" text-center "><strong>Incident Management</strong></h4>
                                                <p >
                                                    Implementing structured incident management processes to prioritize and resolve critical issues efficiently, maintaining high system availability and performance.
                                                </p>

                                            </div>
                                        </div>
                                    </div>



                                    <div className='d-flex justify-content center'>
                                        <img src={s11} className=" img7aj   " alt='Loading' />
                                    </div>









                                    <div >
                                        <p className='T111aj text-center'>
                                            Consulting Services
                                        </p>
                                    </div>

                                    <div className='flex86aj'>
                                        <div className=" mb-4 ">
                                            <div className='card15aj cb2aj  padaj   T11aj'>
                                                <h4 className=" text-center "><strong>Strategic Guidance</strong></h4>
                                                <p >
                                                    Offering expert consulting services to help organizations maximize the value of their SAP investment. This includes strategic planning, roadmap development, and implementation guidance tailored to business objectives.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 ">
                                            <div className='card15aj cb2aj  padaj   T11aj'>
                                                <h4 className=" text-center "><strong>Process Optimization</strong></h4>
                                                <p >
                                                    Assessing current business processes and recommending optimizations to leverage SAP technologies effectively, streamline operations, and achieve operational excellence.
                                                </p>

                                            </div>
                                        </div>
                                    </div>





                                    <div className='flex86aj'>

                                        <div className=" mb-4 ">
                                            <div className='card15aj cb2aj  padaj   T11aj'>
                                                <h4 className=" text-center "><strong>	Customization and Integration</strong></h4>
                                                <p >
                                                    Providing expertise in customizing SAP solutions and integrating them with existing IT infrastructure to enhance functionality, scalability, and business agility.
                                                </p>

                                            </div>
                                        </div>


                                        <div className=" mb-4 ">
                                            <div className='card15aj cb2aj  padaj   T11aj'>
                                                <h4 className=" text-center "><strong>	Change Management</strong></h4>
                                                <p >
                                                    Developing change management strategies and conducting organizational readiness assessments to ensure smooth SAP implementations and user adoption.
                                                </p>

                                            </div>
                                        </div>

                                    </div>
                                    <div className=" mb-4  d-flex justify-content-center">
                                        <div className='card15aj  cb2aj  padaj   T11aj'>
                                            <h4 className=" text-center "><strong>Performance Monitoring</strong></h4>
                                            <p >
                                                Implementing performance monitoring frameworks and analytics to measure and optimize SAP system performance, ensuring alignment with business goals.
                                            </p>

                                        </div>
                                    </div>


                                    <div className='style6aj' >
                                        <div>
                                            <img src={s12} className=" image6aj  " alt='Loading' />
                                        </div>
                                        <div className=' T46aj  '>

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

export default Sap6Training;