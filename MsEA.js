import React from 'react';
import '../TMsfiles/MsEA.css';

import measd1 from '../TMsfiles/MSimages/measdmain.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import measpic from '../TMsfiles/MSimages/measpic.jpeg';
import measpic1 from '../TMsfiles/MSimages/measdpic1.jpeg';
import measpic2 from '../TMsfiles/MSimages/measdpic2.jpeg';

const MsArch = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <div className=' bodyop' >
            <div>
                <div>
                    <div>
                        <div className="cardpr2">
                            <div className="div1cardpr2">
                                <div className="image-containerpr2 position-relative">
                                    <img src={measd1} className="img-fluidpr2" alt="Technology" />
                                    <div className="overlaypr2 position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                                        <div className="txtpr1 text-center gf">
                                            <h2 className="text-center efpr2">Microsoft Enterprise Architecture Services</h2>
                                            <p className="Hp text-center">Simplified. Secured. Superior.</p>
                                            <div className="d-flex justify-content-center">
                                                <button type="button" className="btnpr2 btn-outline-lightpr2 w-auto">schedule a free consultation</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="T3pr2 T4pr2 ">
                                <p>Enormous IT's Microsoft Enterprise Architecture Services empower organizations to optimize their IT landscapes for agility, scalability, and innovation. Through meticulous architecture assessments and strategic insights, we help businesses align their Microsoft environments with overarching business goals. Our expertise extends to designing robust Service-Oriented Architecture (SOA) frameworks and cloud-native solutions, enabling seamless integration across applications and enhancing operational efficiency. By leveraging our services, businesses gain a comprehensive understanding of their IT architecture's current state and future potential, driving sustainable growth and competitive advantage.</p>
                            </div>
                            <div className='T4pr2'>
                                <p className='T2pr2 text-center'>
                                    Architecture Assessments
                                </p>
                            </div>



                            <div className="row  "  >
                                <div className=" abpr2">

                                    <div className=" mb-4 flex4pr2">
                                        <div className='card4pr cb2pm T3pr2 '>

                                            <h4 className=" text-center  "><strong>Holistic Approach</strong></h4>
                                            <p className='text-center'>
                                                Conduct comprehensive evaluations that encompass business processes, system architectures, data flows, and application landscapes
                                            </p>

                                        </div>
                                    </div>

                                    <div className=" mb-4 flex4pr2">
                                        <div className='card4pr cb2pm  T3pr2'>
                                            <h4 className=" text-center "><strong>Benchmarking and Best Practices</strong></h4>
                                            <p >
                                                Compare current architectures against industry benchmarks and best practices to identify gaps and improvement opportunities.
                                            </p>

                                        </div>
                                    </div>


                                    <div className=" mb-4 flex4pr2">
                                        <div className='card4pr cb2pm  T3pr2'>
                                            <h4 className=" text-center "><strong>Scalability and Performance Testing</strong></h4>
                                            <p >
                                                Perform scalability and performance testing to validate architecture designs and ensure they meet anticipated workload demands.
                                            </p>

                                        </div>
                                    </div>

                                    <div className=" mb-4 flex4pr2">
                                        <div className='card4pr cb2pm  T3pr2'>
                                            <h4 className=" text-center "><strong>Security and Compliance Audits</strong></h4>
                                            <p >
                                                Conduct security audits to assess vulnerabilities, compliance with regulatory standards and recommend enhancements
                                            </p>

                                        </div>
                                    </div>

                                    <div style={{ hight: '20%', width: '25%' }} className='appr2'>
                                        <img src={measpic1} className='measpicp1pr2' alt="Technology" />
                                        <img src={measpic2} className='measpicp2pr2' alt="Technology" />
                                    </div>

                                    <div className='T4pr2'>
                                        <p className='T2pr2 text-center'>
                                            SOA Strategy and Architecture
                                        </p>
                                    </div>
                                    <div className=" mb-4 flex4pr2">
                                        <div className='card4pr cb2pm pad T3pr2'>
                                            <h4 className=" text-center "><strong>Enterprise-wide Integration</strong></h4>
                                            <p >
                                                Develop robust SOA strategies that align with enterprise goals and facilitate seamless integration of diverse applications and services.
                                            </p>

                                        </div>
                                    </div>

                                    <div className=" mb-4 flex4pr2">
                                        <div className='card4pr cb2pm pad T3pr2'>
                                            <h4 className=" text-center "><strong>API Economy Enablement</strong></h4>
                                            <p >
                                                Design API-driven architectures to enable business agility, ecosystem expansion, and integration with third-party services.
                                            </p>

                                        </div>
                                    </div>

                                    <div className=" mb-4 flex4pr2">
                                        <div className='card4pr cb2pm pad T3pr2'>
                                            <h4 className=" text-center "><strong>Microservices Architecture </strong></h4>
                                            <p >
                                                Implement microservices architecture patterns for modular application development, scalability, and rapid deployment.
                                            </p>

                                        </div>
                                    </div>

                                    <div className=" mb-4 flex4pr2">
                                        <div className='card4pr cb2pm pad T3pr2'>
                                            <h4 className=" text-center "><strong>Cloud-native Architectures</strong></h4>
                                            <p >
                                                Architect cloud-native solutions leveraging Microsoft Azure services for elasticity, cost efficiency, and global scalability.
                                            </p>

                                        </div>
                                    </div>



                                    <div className='T4pr2'>
                                        <p className='T2pr2 text-center'>
                                            Benefits
                                        </p>
                                    </div>

                                    <div className=" mb-4 flex4pr2">
                                        <div className='card4pr cb2pm pad T3pr2'>
                                            <h4 className=" text-center "><strong>Strategic Alignment</strong></h4>
                                            <p >
                                                Develop robust SOA strategies that align with enterprise goals and facilitate seamless integration of diverse applications and services.
                                            </p>

                                        </div>
                                    </div>

                                    <div className=" mb-4 flex4pr2">
                                        <div className='card4pr cb2pm pad T3pr2'>
                                            <h4 className=" text-center "><strong>Flexibility and Agility</strong></h4>
                                            <p >
                                                Design API-driven architectures to enable business agility, ecosystem expansion, and integration with third-party services.
                                            </p>

                                        </div>
                                    </div>

                                    <div className=" mb-4 flex4pr2">
                                        <div className='card4pr cb2pm pad T3pr2'>
                                            <h4 className=" text-center "><strong>Cost Optimization</strong></h4>
                                            <p >
                                                Implement microservices architecture patterns for modular application development, scalability, and rapid deployment.
                                            </p>

                                        </div>
                                    </div>

                                    <div className=" mb-4 flex4pr2">
                                        <div className='card4pr cb2pm pad T3pr2'>
                                            <h4 className=" text-center "><strong>Compliance and Security</strong></h4>
                                            <p >
                                                Architect cloud-native solutions leveraging Microsoft Azure services for elasticity, cost efficiency, and global scalability.
                                            </p>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div >
                            <img src={measpic} className="measpicppr2" alt="Technology" />
                        </div>
                        <div className='T4pr2 '>
                            <p className='T2pr2 text-center '>
                                Why Enormous?
                            </p>
                        </div>


                        <div style={{ marginLeft: '10%' }} /* className=" mb-4 flex4" */>
                            <div className='  T5pr2' >

                                <p >
                                    <b >Extensive Expertise:</b>
                                    We bring deep knowledge and experience in enterprise architecture, ensuring comprehensive and effective solutions.
                                </p>

                            </div>
                        </div>

                        <div style={{ marginLeft: '10%' }} /* className=" mb-4 flex4" */>
                            <div className='  T5pr2' >

                                <p > <b>Broad Vision:</b>
                                    Our approach encompasses every aspect of enterprise architecture, from business processes to application landscapes.
                                </p>

                            </div>
                        </div>

                        <div style={{ marginLeft: '10%' }}/* className=" mb-4 flex4" */>
                            <div className='  T5pr2' >

                                <p > <b>Commitment to Innovation:</b>
                                    We continually adopt and integrate the latest technologies and methodologies to provide cutting-edge solutions.
                                </p>

                            </div>
                        </div>

                        <div style={{ marginLeft: '10%' }}/* className=" mb-4 flex4" */>
                            <div className='  T5pr2'>

                                <p > <b>Quality Assurance:</b>
                                    Our focus on quality ensures that our services meet the highest standards and deliver maximum value.
                                </p>

                            </div>
                        </div>

                        <div style={{ marginLeft: '10%' }} >
                            <div className='   T5pr2'>

                                <p > <b>Client Satisfaction:</b>
                                    We prioritize understanding and addressing the unique needs of our clients, fostering long-term partnerships.
                                </p>


                            </div>
                        </div>

                        <div className=" T3pr2">
                            <p >By choosing Enormous, you are partnering with a leader in enterprise architecture services. Our expertise and commitment to excellence ensure that your organization's architecture is future-proof, secure, and capable of meeting the ever-evolving demands of the digital landscape. With Enormous,
                                you gain a partner who is dedicated to propelling your business to new heights through innovative and reliable architectural solutions.</p>
                        </div>

                    </div>


                </div>
            </div>

            <button onClick={scrollToTop} className="btnpr2 btn-primary up-arrow"><i className="fas fa-arrow-up">{'^'}</i></button>

        </div>
    );
};

export default MsArch;