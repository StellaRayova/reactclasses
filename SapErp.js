
import React, { useEffect, useState } from 'react';
import './SapErp.css';
import sap1 from '../Sap/Sapimages/sap1.jpeg';
import s1 from '../Sap/Sapimages/s1.jpeg';
import s2 from '../Sap/Sapimages/s2.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUsPopup from '../Popup';

const Sap1Erp = () => {
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
                <div>
                    <div>
                        <div>
                            {/* <div>
                                <img src={sap} style={{ width: "100%" }} />
                            </div> */}

                            <div>
                                {/* <div >
                                    <img src={sap1} className='imgaj' alt='Loading'/>
                                    <div className='overlay'>

                                    </div>
                                    <div >
                                        <div className="txt2aj">
                                            <h2 >SAP ERP Implementation and Management</h2>
                                            <p > Optimize Your Operations Effectively.</p>
                                            <div>
                                                <button type="button" className="btnaj btn-outline-light w-auto">Schedule a Free Consultation"</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="div1card">
                                    <div className="image-container">
                                        <img src={sap1} className="img-fluid" alt="Technology" />
                                        <div className="overlay"></div>
                                        <div className="txt" style={{ textAlign: 'left' }}>
                                            <h2 className='text-xl text-lg text-left'>SAP ERP IMPLEMENTATION AND MANAGEMENT</h2>
                                            <p className='Hp text-lg text-xl-left '>Optimize Your Operations Effectively</p>

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
                                </div>

                            </div>


                            {/* <div className='flexing'>
                                <h2 className="txt">SAP ERP Implementation and Management</h2>
                            </div> */}
                            <div>
                                <p className='T6aj'>
                                    We manage the entire lifecycle of SAP ERP implementation, ensuring seamless integration, customization, and ongoing support to optimize your business processes.
                                </p>
                            </div>
                            <div >
                                <p className='T2aj text-center'>
                                    Comprehensive Implementation
                                </p>
                            </div>

                            <div className="row ">
                                <div className="col ">
                                    <div>
                                        <div className=" mb-4 flex4aj">
                                            <div className='card4aj  cb2aj  padaj T6aj'>
                                                <h4 className=" text-center "><strong>Project Planning</strong></h4>
                                                <p >
                                                    We begin with meticulous project planning, which includes defining the scope, setting a timeline, and allocating resources to ensure a clear and structured roadmap for your SAP ERP implementation. This step lays the foundation for a successful deployment.
                                                </p>

                                            </div>
                                        </div>

                                        <div className=" mb-4 flex4aj">
                                            <div className='card4aj  cb2aj padaj T6aj'>
                                                <h4 className=" text-center "><strong>System Design</strong></h4>
                                                <p >
                                                    Our experts design the architecture of your SAP ERP system to align perfectly with your business processes and objectives. This includes selecting the right modules and configuring them to meet your specific needs.
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                    <div className=" mb-4 flex4aj">
                                        <div className='card4aj cb2aj padaj T6aj'>
                                            <h4 className=" text-center "><strong>Data Migration</strong></h4>
                                            <p >
                                                We handle the transfer of your existing data to the new system, ensuring data integrity and minimal disruption. This process includes data cleansing, validation, and mapping.
                                            </p>

                                        </div>
                                    </div>

                                    <div className=" mb-4 flex4aj">
                                        <div className='card4aj cb2aj padaj T6aj'>
                                            <h4 className=" text-center "><strong>Integration</strong></h4>
                                            <p >
                                                We ensure seamless integration of SAP ERP with your existing systems and third-party applications. This creates a unified IT environment, enhancing data flow and operational efficiency.
                                            </p>

                                        </div>
                                    </div>

                                    <div className=" mb-4 flex4aj">
                                        <div className='card4aj cb2aj padaj T6aj'>
                                            <h4 className=" text-center "><strong>Testing and Quality Assurance</strong></h4>
                                            <p >
                                                Rigorous testing is conducted to identify and resolve any issues before the system goes live. This includes unit testing, integration testing, and user acceptance testing (UAT).
                                            </p>

                                        </div>
                                    </div>

                                    <div className=" mb-4 flex4aj">
                                        <div className='card4aj cb2aj padaj T6aj'>
                                            <h4 className=" text-center "><strong>Deployment and Go-Live Support: </strong></h4>
                                            <p >
                                                We manage the entire deployment process, ensuring a smooth transition to the new system. Our team provides go-live support to address any immediate post-deployment issues and ensure a successful launch.
                                            </p>

                                        </div>
                                    </div>

                                    <div >
                                        <p className='T2aj text-center'>
                                            Customization and Configuration
                                        </p>
                                    </div>


                                    <div className=" mb-4 flex4aj">
                                        <div className='card4aj cb2aj padaj T6aj'>
                                            <h4 className=" text-center "><strong>Requirement Analysis </strong></h4>
                                            <p >
                                                We work closely with your team to understand your unique business requirements and processes. This helps us identify the specific customizations needed to maximize efficiency.
                                            </p>
                                        </div>
                                    </div>



                                    <div className=" mb-4 flex4aj">
                                        <div className='card4aj cb2aj padaj T6aj'>
                                            <h4 className=" text-center "><strong>Module Customization</strong></h4>
                                            <p >
                                                Tailoring SAP modules to fit your unique business requirements. This includes configuring workflows, business rules, and user interfaces to ensure the system supports your operations effectively.
                                            </p>
                                        </div>
                                    </div>




                                    <div className=" mb-4 flex4aj">
                                        <div className='card4aj cb2aj padaj T6aj'>
                                            <h4 className=" text-center "><strong>Enhancements and Extensions</strong></h4>
                                            <p >
                                                Developing custom enhancements and extensions to SAP’s standard functionalities to address any gaps and provide additional capabilities that are specific to your business.
                                            </p>
                                        </div>
                                    </div>


                                    <div className=" mb-4 flex4aj">
                                        <div className='card4aj cb2aj padaj T6aj'>
                                            <h4 className=" text-center "><strong>	User Roles and Permissions</strong></h4>
                                            <p >
                                                Configuring user roles and permissions to ensure appropriate access controls and security within the system.
                                            </p>
                                        </div>
                                    </div>


                                    <div className=" mb-4 flex4aj">
                                        <div className='card4aj cb2aj padaj T6aj'>
                                            <h4 className=" text-center "><strong>Documentation and Training</strong></h4>
                                            <p >
                                                Providing detailed documentation and training to your team to ensure they are well-versed in the customized and configured system.
                                            </p>
                                        </div>
                                    </div>




                                    <div className='d-flex justify-content-center'>
                                        <img src={s1} className=" img2aj " alt='Loading' />
                                    </div>









                                    <div >
                                        <p className='T2aj text-center'>
                                            Ongoing Support
                                        </p>
                                    </div>



                                    <div className=" mb-4 flex4aj">
                                        <div className='card4aj  cb2aj padaj T6aj'>
                                            <h4 className=" text-center "><strong>Maintenance Services </strong></h4>
                                            <p >
                                                Offering regular maintenance services to keep your SAP ERP system updated with the latest patches, fixes, and enhancements.
                                            </p>

                                        </div>
                                    </div>

                                    <div className=" mb-4 flex4aj">
                                        <div className='card4aj  cb2aj padaj T6aj'>
                                            <h4 className=" text-center "><strong>System Monitoring </strong></h4>
                                            <p >
                                                Continuously monitoring system performance and health to proactively identify and address potential issues before they impact operations.
                                            </p>
                                        </div>
                                    </div>


                                    <div className=" mb-4 flex4aj">
                                        <div className='card4aj  cb2aj padaj T6aj'>
                                            <h4 className=" text-center "><strong>	Performance Optimization </strong></h4>
                                            <p >
                                                Regularly reviewing system performance and making necessary adjustments to ensure optimal operation. This includes tuning system parameters and optimizing configurations.
                                            </p>

                                        </div>
                                    </div>
                                    <div className=" mb-4 flex4aj">
                                        <div className='card4aj  cb2aj padaj T6aj'>
                                            <h4 className=" text-center "><strong>Updates and Upgrades</strong></h4>
                                            <p >
                                                Managing updates and upgrades to keep your SAP ERP system aligned with the latest features and security enhancements. We ensure minimal disruption during these processes through careful planning and execution.
                                            </p>

                                        </div>
                                    </div>

                                    <div className=" mb-4 flex4aj">
                                        <div className='card4aj  cb2aj padaj T6aj'>
                                            <h4 className=" text-center "><strong>	User Training and Support</strong></h4>
                                            <p >
                                                Offering ongoing training and support to your users to help them adapt to any changes and make the most of the system’s capabilities.
                                            </p>

                                        </div>
                                    </div>
                                    <div className='style1aj' >
                                        <div>
                                            <img src={s2} className=" image1aj  card-bodyaj" alt='Loading' />
                                        </div>
                                        <div className=' T41aj  '>

                                            <p>By focusing on these comprehensive, customized, and supportive services, we ensure that your SAP ERP implementation is seamless, your system is optimized for your unique needs, and you receive continuous support to keep your operations running smoothly.</p>

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

export default Sap1Erp;