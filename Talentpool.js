
import React, { useEffect, useState } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import './Talentpool.css';
import fncycle1 from './images/circletalent.jpeg';
import team12 from './images/TalentTeam12.jpeg';
import teammeet from './images/Talent2nd.jpeg'
import ContactUsPopup from './Popup';
export default function Rn() {
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


        <div>
            <div >
                <div >
                    <div >
                   
                            {/* <img src={team12} className="img-fluid imgR" alt="Technology" />
                            <div className="img-overlay">
                                <div className="txt1R">
                                    <p className='hedR'>Talent As a Service</p>
                                    <p className='HpR text-lg-center text-xl-left'>The Right Talent, Right Now.</p>
                                    <div className="d-flex justify-content-center">
                                        <button type="button" className="btn btn-outline-light w-auto">Reach Out Now!</button>
                                    </div>

                                </div>
                            </div> */}
                      
                            <div className="div1card">
                    <div className="image-container">
                        <img src={team12} className="img-fluid" alt="Technology" />
                        <div className="overlay"></div>
                        <div className="txt" style={{ textAlign: 'left' }}>
                            <h2 className='text-xl text-lg text-left'>Talent As a Service</h2>
                            <p className='Hp text-lg text-xl-left '>The Right Talent, Right Now.</p>
                                                     
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
                    <div>
                    </div>


                    <div>
                        <p className="paraR cenhR para1R">TaaS</p>
                        <p className=' pszR pszR1 marlfrfR ' style={{marginBottom:'20px'}}>
                            Enormous IT specializes in providing tailored staff augmentation solutions designed to meet the evolving needs of modern businesses. In today’s competitive landscape, having access to skilled IT professionals is crucial for maintaining and enhancing your application environments. Our staff augmentation services offer flexible options to help you bridge skill gaps, manage fluctuating project demands, and accelerate time-to-market while minimizing overhead costs.
                        </p>
                    </div>
                    <div>
                        <div className='martop0R'>
                            <p className='paraR cenhR para1R'>Our Approach</p>
                            <p className=' pszR pszR1 marlfrfR   cenhR marbtm10R'>At Enormous IT, we understand that each project is unique. That’s why we offer a range of engagement models to suit your specific requirements.</p>
                        </div>

                        <div>
                            <div className='displayR imgdivR marlfrfR'>
                                <div className='card3R  clrwitR'>
                                    <div>
                                        <p className='card1R  font600R'>Time & Material Basis</p>
                                        <p className='pszR pszR1 '  >Flexible staffing on an as-needed basis, where our professionals work under your direction for the duration of the project.</p>
                                    </div>
                                </div>
                                <div className='card3R  clrwitR ' >
                                    <div>
                                        <p className='card1R  font600R '>Talent As a Servicen with SLA</p>
                                        <p className='pszR pszR1 marlfrfR' >Managed services with defined Service Level Agreements (SLAs) to ensure performance and delivery.</p>
                                    </div>
                                </div>
                            </div>

                      


<div className='displayR imgdivR marlfrfR'>
                                <div className='card3R  clrwitR '>
                                    <div>
                                        <p className='card1R  font600R'>Fixed Price Rotation Basis</p>
                                        <p className='pszR pszR1'>Budget-friendly staffing for fixed-duration projects, rotating resources as needed.</p>
                                    </div>
                                </div>
                                <div className='card3R  clrwitR'>
                                    <div>
                                        <p className='card1R  font600R text-centerR'>Statement of Work (SOW) Basis</p>
                                        <p className='pszR pszR1 '>Fixed-price contracts with specific deliverables and timelines
                                        Technology Expertise</p>
                                    </div>
                                </div>
                            </div>

                            <div className='displayR imgdivR'>
                                <div>
                                    <p className="paraR cenhR   para1R">Technology Expertise</p>
                                    <p className=' pszR pszR1'>Our team is proficient in a wide array of technologies, including:</p>
                                </div>
                            </div>

                            <div className='displayR imgdivR marlfrfR'>
                                <div className='card3R  clrwitR'>
                                    <div>
                                        <p className='card1R  font600R paddR'>Major Databases</p>
                                        <p className='pszR pszR1'>Oracle, Microsoft SQL Server, IBM DB2, and third-party databases.</p>
                                    </div>
                                </div>
                                <div className='card3R  clrwitR'>
                                    <div>
                                        <p className='card1R  font600R paddR '>Enterprise Applications</p>
                                        <p className='pszR pszR1'>ERP systems like SAP and Oracle ERP.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='displayR imgdivR marlfrfR'>
                                <div className='card3R  clrwitR'>
                                    <div>
                                        <p className='card1R  font600R paddR '>Legacy Systems</p>
                                        <p className='pszR pszR1'>Mainframe applications and transaction processing.</p>
                                    </div>
                                </div>
                                <div className='card3R  clrwitR'>
                                    <div>
                                        <p className='card1R  font600R paddR' >Web Technologies</p>
                                        <p className='pszR pszR1'>Front-end and back-end development (HTML5, CSS3, JavaScript, and frameworks like Angular and React).</p>
                                    </div>
                                </div>
                            </div>

                            <div className='displayR imgdivR marlfrfR'>
                                <div className='card3R  clrwitR' >
                                    <div>
                                        <p className='card1R  font600R paddR'>Middleware and Integration</p>
                                        <p className='pszR pszR1'>SOA architectures, middleware platforms, and integration tools.</p>
                                    </div>
                                </div>
                                <div className='card3R  clrwitR'>
                                    <div>
                                        <p className='card1R  font600R paddR'>Operating Systems</p>
                                        <p className='pszR pszR1'>Windows, Linux, Unix, and virtualization technologies.</p>
                                    </div>
                                </div>

                            </div>
                            
                            <div className="cenhR "> 
                                <img src={teammeet}  alt="Technology"    className='brdsR'/>
                                </div>

                            <div className='displayR imgdivR'>
                                <div>
                                    <p className="paraR cenhR para1R">Roles We Staff</p>
                                    <p className='marlfrfR pszR pszR1'>Enormous IT excels in providing skilled professionals across a diverse range of roles, ensuring our clients have access to the expertise they need to thrive. Our services include, but are not limited to:</p>
                                </div>
                            </div>
                            <div className='clrwitR pszR pszR1 paddR'>

                                <div className='drowR ' >
                                    <div className='crdwR'>
                                        <p className='margin12R'>Project Managers</p>
                                    </div>
                                    <div className='crdwR'>
                                        <p className='margin12R'> Business Analysts</p>
                                    </div>
                                    <div className='crdwR'>
                                        <p className='margin12R'>Programmer Analysts</p>
                                    </div>
                                    <div className='crdwR'>
                                        <p className='margin12R'>Database Administrators</p>
                                    </div>
                                </div>

                                <div className='drowR'>
                                    <div className='crdwR'>
                                        <p className='margin12R'>Web Developers</p>
                                    </div>
                                    <div className='crdwR'>
                                        <p className='margin12R'>Quality Assurance Testers</p>
                                    </div>
                                    <div className='crdwR'>
                                        <p className='margin12R' >ERP and CRM Consultants</p>
                                    </div>
                                    <div className='crdwR'>
                                        <p className='margin12R'>Technical Writers , etc.</p>
                                    </div>
                                </div>
                            </div>
                            <p className=" cenhR para1R mar28">Our Recruiting Model</p>

                            <p className='marlfrfR pszR pszR1 marlow0R '>
                                At Enormous IT, we adhere to a meticulous six-phase recruiting model designed to ensure we source, screen, and place the best candidates tailored to your specific needs.
                            </p>
                            <div className='marlfrfR pszR pszR1'> 
                                <ol>
                                    <div className='marb10R ' >
                                        <li>
                                            <span className='font600R marb10R' style={{marginTop:'20px'}}>Needs Assessment:</span>

                                            We begin by thoroughly understanding your project requirements and staffing needs, enabling us to align our search strategy effectively.
                                        </li>
                                    </div>
                                    <div className='marb10R'>
                                        <li>
                                            <span className='font600R marb10R'>Candidate Sourcing:</span>
                                            Leveraging our extensive network and utilizing top job portals, we meticulously identify and attract top talent in your industry.
                                        </li>
                                    </div>
                                    <div className='marb10R'>
                                        <li>
                                            <span className='font600R'>Screening and Selection:</span>
                                            Our rigorous screening process includes technical assessments and cultural fit evaluations, ensuring candidates meet your criteria and expectations.
                                        </li>
                                    </div>
                                    <div className='marb10R'>
                                        <li>
                                            <span className='font600R '>Client Interview:</span>
                                            We facilitate seamless interviews between you and our shortlisted candidates, providing detailed insights and support throughout the process.
                                        </li>
                                    </div>
                                    <div className='marb10R'>
                                        <li>
                                            <span className='font600R'>Placement:</span>
                                            Upon selection, we manage the onboarding and integration of the chosen candidate into your team, ensuring a smooth transition.
                                        </li>
                                    </div>
                                    <li className='marb10'>
                                        <span className='font600R'>Support and Feedback:</span>
                                        Post-placement, we continue to provide ongoing support to both you and the candidate, monitoring performance and ensuring satisfaction to maintain a successful partnership.
                                    </li>
                                </ol>
                            </div>

                            <div className='fnimgR cenhR marb10 marlfrfRR'>
                                <img src={fncycle1} alt="Recruiting Cycle" className='fnimgcrlR paddR ' />
                            </div>

                            <p className='marlfrfR pszR  '>
                                This structured approach guarantees that we not only meet but exceed your staffing requirements, delivering exceptional talent that enhances your organizational capabilities and drives growth.
                            </p>

                            <p className="paraR cenhR para1R">Benefits of Choosing Enormous IT</p>

                            <div className='marlfrfR pszR pszR1' >
                                <div className='marb10R'>
                                    <li><span className='font600R lineR'>Rapid Deployment:</span> Quick response times to deploy skilled professionals within 24 hours.</li>
                                </div>
                                <div className='marb10R'>
                                    <li> <span  className='font600R lineR'> Industry Expertise:</span> Years of experience across diverse industries, ensuring domain-specific knowledge.</li>
                                </div>
                                <div className='marb10R'>
                                    <li><span className='font600R lineR'>Scalability:</span> From startups to Fortune 100 companies, we scale our services to meet your needs.</li>
                                </div>
                                <div className='marb10R'>

                                    <li><span className='font600R lineR'>Client-Centered Approach:</span> Building lasting partnerships based on mutual success and satisfaction.</li>
                                </div>
                            </div>
                            <p className='marlfrfR pszR pszR1'>Partner with Enormous IT for reliable, scalable, and cost-effective talent pool augmentation solutions that empower your business to achieve its goals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

