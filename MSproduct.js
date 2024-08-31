import React, { useEffect, useState } from 'react';
import '../TMsfiles/MSproduct.css';
import sha from '../TMsfiles/MSimages/sha.jpeg';
import sql from '../TMsfiles/MSimages/sql.jpeg';
import product from '../TMsfiles/MSimages/product.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUsPopup from '../Popup';

const MSproduct = () => {
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
        <div className='ybg' >
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                {/* <div>
                                    <img src={product} className="img-fluid" style={{ width: "100%" }} alt='Loading'/>
                                    <div className="yoverlay"></div>
                                    <div className="ytext">
                                        <p style={{fontFamily:"Franklin Gothic Medium"}}>Microsoft Product Services</p>
                                        <h4 className='Hp text-lg-center text-xl-left text-center'> Where Innovation Meets Impact.</h4>
                                        <div className="d-flex justify-content-center">
                                            <button type="button" className="btn btn-outline-light w-auto buttonSize">Schedule a Free Consultation</button>
                                        </div>
                                    </div>
                                </div> */}

                                <div className="image-container">
                                    <img src={product} className="img-fluid" alt="Technology" />
                                    <div className="overlay"></div>
                                    <div className="txt">
                                        <h2 className='text-xl text-lg-center text-xl-left text-center'>Microsoft Product Services</h2>
                                        <p className='Hp text-lg-center text-xl-left text-center'> Where Innovation Meets Impact.</p>
                                        <div className="d-flex justify-content-center">
                                            {!isPopupOpen && (
                                                <div>
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

                            <div className="yT3 ending" style={{ fontFamily: "wittgenstein", paddingLeft: "42px", paddingRight: "42px" , fontSize:'22px' }}>
                                Enormous IT excels in delivering robust Microsoft Product Solutions designed to streamline operations, enhance collaboration, and drive innovation across enterprises. Our comprehensive services span SharePoint applications, BizTalk integration, SQL BI solutions, and Azure cloud integrations, providing tailored solutions that meet specific business objectives and ensure scalable growth.
                            </div>




                            <div className='yT4'>
                                <p className='yT2 text-center' style={{ fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                                    SharePoint Applications
                                </p>
                            </div>


                            <div className="row ">
                                <div className="col ">
                                    <div className=" mb-4 flex4">
                                        <div className='ycard4 ycb2  yT3' style={{ padding: "10px" }}>
                                            <h4 className="  sph4 text-center " style={{ fontFamily: "wittgenstein" }}><strong>Business Collaboration Portals</strong></h4>
                                            <p className=" text-center " style={{ fontFamily: "wittgenstein", fontSize:'22px' }}>
                                                Develop SharePoint portals that facilitate seamless collaboration, document management, workflow automation, and project tracking.
                                            </p>

                                        </div>
                                    </div>

                                    <div className=" mb-4 flex4">
                                        <div className='ycard4 ycb2 yT3'>
                                            <h4 className=" sph4 text-center " style={{ fontFamily: "wittgenstein" }}><strong>Intranet and Extranet Solutions</strong></h4>
                                            <p className=" text-center " style={{ fontFamily: "wittgenstein", fontSize:'22px' }}>Implement customized intranet and extranet solutions with personalized content, social networking features, and enterprise search capabilities.</p>

                                        </div>
                                    </div>


                                    <div className=" mb-4 flex4">
                                        <div className='ycard4 ycb2 yT3'>
                                            <h4 className=" sph4 text-center " style={{ fontFamily: "wittgenstein" }}><strong>Content Management Systems</strong></h4>
                                            <p className=" text-center " style={{ fontFamily: "wittgenstein", fontSize:'22px' }}>Deploy scalable content management systems (CMS) on SharePoint for centralized document storage, version control, and compliance management.</p>

                                        </div>
                                    </div>



                                    <div className='yT4'>
                                        <p className='yT2 text-center' style={{ fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                                            SharePoint Jumpstart
                                        </p>
                                    </div>

                                    <div className="yimagestyling my-4">
                                        <img src={sha} className="" style={{ width: "25%", margin: "5px 10px", borderRadius: "5px" }} alt="Mobile Applications" />

                                    </div>



                                    <div className=" mb-4 flex4">
                                        <div className='ycard4 ycb2 yT3'>
                                            <h4 className=" sph4 text-center " style={{ fontFamily: "wittgenstein" }}><strong>Rapid Deployment Framework</strong></h4>
                                            <p className=" text-center " style={{ fontFamily: "wittgenstein", fontSize:'22px' }}>Offer fixed-scope implementation services for SharePoint, focusing on rapid deployment of essential features such as document libraries, workflows, and governance policies.</p>

                                        </div>
                                    </div>

                                    <div className=" mb-4 flex4">
                                        <div className='ycard4 ycb2 yT3'>
                                            <h4 className=" sph4 text-center " style={{ fontFamily: "wittgenstein" }}><strong>User Adoption Strategies</strong></h4>
                                            <p className=" text-center " style={{ fontFamily: "wittgenstein", fontSize:'22px' }}>Develop user training programs, adoption strategies, and change management plans to maximize SharePoint utilization and user engagement</p>

                                        </div>
                                    </div>


                                    <div className='yT4'>
                                        <p className='yT2 text-center' style={{ fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                                            BizTalk Integration / SOA Solutions
                                        </p>
                                    </div>


                                    <div className=" mb-4 flex4">
                                        <div className='ycard4 ycb2 yT3'>
                                            <h4 className=" sph4 text-center " style={{ fontFamily: "wittgenstein" }}><strong>Enterprise Integration Solutions: </strong></h4>
                                            <p className=" text-center " style={{ fontFamily: "wittgenstein", fontSize:'22px' }}>Design and deploy BizTalk Server solutions for enterprise application integration (EAI), business process automation (BPA), and message transformation across heterogeneous IT environments.</p>

                                        </div>
                                    </div>

                                    <div className=" mb-4 flex4">
                                        <div className='ycard4 ycb2 yT3'>
                                            <h4 className=" sph4 text-center " style={{ fontFamily: "wittgenstein" }}><strong>Cloud Integration Services</strong></h4>
                                            <p className=" text-center " style={{ fontFamily: "wittgenstein", fontSize:'22px' }}>: Integrate on-premises systems with cloud applications using Azure Integration Services for hybrid cloud scenarios and modernization initiatives.</p>

                                        </div>
                                    </div>


                                    <div className='yT4'>
                                        <p className='yT2 text-center' style={{ fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                                            SQL Server and SQL BI Solutions
                                        </p>
                                    </div>

                                    <div className="yimagestyling my-4">
                                        <img src={sql} className="" style={{ width: "25%", margin: "5px 10px", borderRadius: "5px" }} alt="Mobile Applications" />

                                    </div>



                                    <div className=" mb-4 flex4">
                                        <div className='ycard4 ycb2 yT3'>
                                            <h4 className=" sph4 text-center " style={{ fontFamily: "wittgenstein" }}><strong>Data Warehousing and Analytics </strong></h4>
                                            <p className=" text-center " style={{ fontFamily: "wittgenstein", fontSize:'22px' }}>Design, implement, and optimize SQL Server-based data warehousing solutions for advanced analytics, reporting, and decision support.</p>

                                        </div>
                                    </div>

                                    <div className=" mb-4 flex4">
                                        <div className='ycard4 ycb2 yT3'>
                                            <h4 className=" sph4 text-center " style={{ fontFamily: "wittgenstein" }}><strong>Business Intelligence and Reporting Services</strong></h4>
                                            <p className=" text-center " style={{ fontFamily: "wittgenstein", fontSize:'22px' }}>Develop interactive dashboards, KPI scorecards, and self-service BI solutions using SQL Server Reporting Services (SSRS) and Power BI for actionable insights.</p>

                                        </div>
                                    </div>



                                    <div className='yT4'>
                                        <p className='yT2 text-center' style={{ fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }}>
                                            Benefits
                                        </p>
                                    </div>

                                    <div className=" mb-4 flex4">
                                        <div className='ycard4 ycb2  yT3'>
                                            <h4 className=" sph4 text-center " style={{ fontFamily: "wittgenstein" }}><strong>Unified Platform Integration</strong></h4>
                                            <p className=" text-center " style={{ fontFamily: "wittgenstein", fontSize:'22px' }}>Integrate Microsoft product solutions to streamline business operations, enhance data visibility, and improve collaboration across departments.</p>

                                        </div>
                                    </div>

                                    <div className=" mb-4 flex4">
                                        <div className='ycard4 ycb2 yT3'>
                                            <h4 className=" sph4 text-center " style={{ fontFamily: "wittgenstein" }}><strong>Scalability and Elasticity</strong></h4>
                                            <p className=" text-center " style={{ fontFamily: "wittgenstein", fontSize:'22px' }}>Scale solutions dynamically to handle increasing data volumes, user concurrency, and business growth without compromising performance.</p>

                                        </div>
                                    </div>

                                    <div className=" mb-4 flex4">
                                        <div className='ycard4 ycb2 yT3'>
                                            <h4 className=" sph4 text-center " style={{ fontFamily: "wittgenstein" }}><strong>Data Governance and Compliance</strong></h4>
                                            <p className=" text-center " style={{ fontFamily: "wittgenstein" , fontSize:'22px'}}>Ensure data integrity, regulatory compliance, and security with robust governance frameworks, encryption standards, and access controls.</p>

                                        </div>
                                    </div>


                                    <div className=" mb-4 flex4">
                                        <div className='ycard4 ycb2 yT3'>
                                            <h4 className=" sph4 text-center " style={{ fontFamily: "wittgenstein" }}><strong>Innovation and Competitiveness</strong></h4>
                                            <p className=" text-center " style={{ fontFamily: "wittgenstein", fontSize:'22px' }}>Innovate faster, respond to market changes, and gain competitive advantage with agile, scalable, and cost-effective Microsoft product deployments.</p>
                                        </div>
                                    </div>


                                    <div className='yT4'>
                                        <p className='yT2 text-center' style={{ fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", paddingTop: "0px" }}>
                                            Why Enormous?
                                        </p>
                                    </div>



                                    <div className="yT3 yT4 ending" style={{ fontFamily: "wittgenstein", paddingLeft: "42px", paddingRight: "42px", paddingTop: "0px", fontSize:'22px' }}>
                                        <ul>
                                            <li><p><b>Expertise in Microsoft Technologies:</b> Enormous IT specializes in Microsoft technologies, offering deep expertise in SharePoint, BizTalk, SQL Server, and Azure Integration Services.</p></li>
                                            <li><p><b>Comprehensive Solutions:</b> From SharePoint portals and intranet solutions to BizTalk integration and SQL BI, Enormous IT provides end-to-end solutions tailored to meet diverse business needs.</p></li>
                                            <li><p><b>Agility and Scalability:</b> We deliver agile, scalable solutions that adapt to changing business requirements, ensuring optimal performance and efficiency as your organization grows.</p></li>
                                            <li><p><b>Proven Success:</b> With a proven track record of successful implementations across industries, Enormous IT ensures reliable, high-performance Microsoft product deployments that drive innovation and competitiveness.</p></li>
                                            <li><p><b>Data Governance and Security:</b> We prioritize data integrity, regulatory compliance, and security with robust governance frameworks, encryption standards, and access controls.</p></li>
                                        </ul>
                                    </div>

                                    <div className="yT3 yT4 " style={{ fontFamily: "wittgenstein", paddingLeft: "42px", paddingRight: "42px" , fontSize:'22px'}}>
                                        By leveraging Enormous IT's comprehensive Microsoft Technology Services, organizations can achieve digital transformation, operational excellence, and sustained competitive advantage in today's dynamic business environment. Our commitment to delivering innovative, scalable, and efficient BI solutions ensures that your organization can harness the power of data to drive informed decision-making, enhance operational efficiency, and foster a culture of continuous improvement and innovation. Trust Enormous IT to be your partner in achieving business intelligence excellence and unlocking the full potential of your data.
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

export default MSproduct;