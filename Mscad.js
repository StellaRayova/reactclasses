import React from 'react';
import '../TMsfiles/Mscad.css';

// images
import mcadw1 from '../TMsfiles/MSimages/mcadw.jpeg';
import Mcapic1 from '../TMsfiles/MSimages/mcapic1.jpeg'
import Mcapic2 from '../TMsfiles/MSimages/mcapic2.jpeg'
import Mcapic3 from '../TMsfiles/MSimages/mcapic3.jpeg'
import Mcapic4 from '../TMsfiles/MSimages/mcapic4.jpeg'
import Mcapic5 from '../TMsfiles/MSimages/mcapic5.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';


const MSCustApp = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='bgpr3 bodypr3' >
            <div>
                <div>
                    <div>
                        <div className="cardpr3">
                            <div className="div1card">
                                <div className="image-container text-center ">
                                    <img src={mcadw1} className="img-fluidpr3" alt="Technology" />
                                    <div className="overlaypr3">
                                        <div className="txtpr3  jkppr3" >
                                            <h2 className='text-xl text-lg-center text-xl-left text-center '>Microsoft Custom Application Development</h2>
                                            <p className='Hp text-lg-center text-xl-left text-center '>Simplified. Secured. Superior.</p>
                                            <div className="d-flex justify-content-center">
                                                <button type="button" className="btnpr3 btn-outline-lightpr3 w-auto rnppr3 ">schedule a free consultation</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="T3pr3 T4pr3 text-center">
                                <p>Enormous IT specializes in Microsoft Custom Application Development, offering comprehensive services from application assessment to transformation and modernization. We conduct thorough Business Impact Analysis to evaluate existing applications, develop Legacy Modernization Roadmaps, and recommend appropriate Technology Stack Recommendations tailored to your scalability needs and growth plans.</p>
                            </div>
                            <div className='T4pr3'>
                                <p className='T2pr3 text-center'>
                                    Application Assessment
                                </p>
                            </div>
                            <div className='chppr3'>
                                <div className="row">
                                    <div className="col bbppr3">

                                        <div className="mb-4 flex4pr3 text-center">

                                            <div className='card4pkpr3 cb2pr3 T3pr3  '>

                                                <h4 className="text-center"><strong>Business Impact Analysis</strong></h4>
                                                <p>
                                                    Conduct thorough assessments to evaluate the business impact of existing applications and identify opportunities for enhancement or replacement.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-4 flex4pr3 text-center">
                                            <div className='card4pkpr3 cb2pr3 T3pr3 '>
                                                <h4 className="text-center"><strong>Legacy Modernization Roadmaps</strong></h4>
                                                <p>
                                                    Develop migration roadmaps to modernize legacy applications, enhance functionality, and improve user experience.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mb-4 flex4pr3 text-center">
                                            <div className='card4pkpr3 cb2pr3 T3pr3 '>
                                                <h4 className="text-center"><strong>Technology Stack Recommendations</strong></h4>
                                                <p>
                                                    Recommend appropriate technology stacks (e.g., .NET Core, Azure PaaS) based on application requirements, scalability needs, and future growth plans.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='T4pr3'>
                                        <p className='T2pr3 text-center'>
                                            Custom Application Development
                                        </p>
                                    </div>



                                    <div  >
                                        <div className="mb-4 flex4pr3 text-center bbppr3 ">
                                            <div className='card4pkpr3 cb2pr3  T3pr3  '>
                                                <h4 className="text-center"><strong>User-Centered Design</strong></h4>
                                                <p>
                                                    Employ user-centered design principles to create intuitive, responsive, and engaging user interfaces that enhance productivity and user satisfaction.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-4 flex4pr3 text-center bbppr3">
                                            <div className='card4pkpr3 cb2pr3  T3pr3  '>
                                                <h4 className="text-center"><strong>Agile Development Methodologies</strong></h4>
                                                <p>
                                                    Embrace Agile methodologies (e.g., Scrum, Kanban) for iterative development, rapid prototyping, and continuous stakeholder feedback.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-4 flex4pr3 text-center bbppr3">
                                            <div className='card4pkpr3 cb2pr3  T3pr3 '>
                                                <h4 className="text-center"><strong>Continuous Integration/Continuous Deployment (CI/CD)</strong></h4>
                                                <p>
                                                    Implement CI/CD pipelines to automate build, test, and deployment processes, ensuring faster time-to-market and higher software quality.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-4 flex4pr3 text-center bbppr3">
                                            <div className='card4pkpr3 cb2pr3  T3pr3  '>
                                                <h4 className="text-center"><strong>Quality Assurance and Testing</strong></h4>
                                                <p>
                                                    Conduct rigorous testing (unit, integration, regression, performance) to ensure application reliability, security, and adherence to functional requirements.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '20%',
                                            width: '35%',
                                            margin: '0 auto'
                                        }}
                                        className='kppr3'
                                    >
                                        <img
                                            src={Mcapic2}
                                           
                                            alt="Technology"
                                            style={{ flex: '1', maxWidth: '100%', height: 'auto', margin: '10px' }}
                                        />
                                        <img
                                            src={Mcapic3}
                                         
                                            alt="Technology"
                                            style={{ flex: '1', maxWidth: '100%', height: 'auto', margin: '10px' }}
                                        />
                                    </div>

                                    {/* <div style={{ hight: '20%', width: '35%' }} className='kppr3'>
                                        <img src={Mcapic2} className='Mcapicp2pr3' alt="Technology" />
                                        
                                        <img src={Mcapic3} className='Mcapicp3pr3' alt="Technology" />
                                    </div> */}
                                    <div className='T4pr3'>
                                        <p className='T2pr3 text-center'>
                                            Application Transformation and Modernization
                                        </p>
                                    </div>

                                    <div >
                                        <div className="mb-4 flex4pr3 text-center bbppr3">
                                            <div className='card4pkpr3 cb2pr3  T3pr3 '>
                                                <h4 className="text-center"><strong>Cloud Migration Strategies</strong></h4>
                                                <p>
                                                    Execute phased cloud migration strategies, leveraging Azure services for scalability, resilience, and operational efficiency.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-4 flex4pr3 text-center bbppr3">
                                            <div className='card4pkpr3 cb2pr3  T3pr3 '>
                                                <h4 className="text-center"><strong>Containerization and Microservices</strong></h4>
                                                <p>
                                                    Containerize legacy applications and refactor monolithic architectures into microservices-based solutions for agility and scalability.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-4 flex4pr3 text-center bbppr3">
                                            <div className='card4pkpr3 cb2pr3  T3pr3 '>
                                                <h4 className="text-center"><strong>DevOps Enablement</strong></h4>
                                                <p>
                                                    Foster collaboration between development and operations teams, promoting cultural change and automation for enhanced efficiency and faster delivery cycles.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-4 flex4pr3 text-center bbppr3">
                                            <div className='card4pkpr3 cb2pr3  T3pr3 '>
                                                <h4 className="text-center"><strong>Legacy System Integration</strong></h4>
                                                <p>
                                                    Integrate modern applications with legacy systems using robust middleware solutions and API gateways to ensure seamless data flow and interoperability.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className=' kppr3' style={{ hight: '20%', width: '20%' }}>
                                        <img src={Mcapic4} className='Mcapicp5pr3' alt="Technology" />
                                        <img src={Mcapic5} className='Mcapicp6pr3' alt="Technology" />

                                    </div> */}
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '20%',
                                            width: '35%',
                                            margin: '0 auto'
                                        }}
                                        className='kppr3'
                                    >
                                        <img
                                            src={Mcapic4}
                                           
                                            alt="Technology"
                                            style={{ flex: '1', maxWidth: '100%', height: 'auto', margin: '10px' }}
                                        />
                                        <img
                                            src={Mcapic5}
                                         
                                            alt="Technology"
                                            style={{ flex: '1', maxWidth: '100%', height: 'auto', margin: '10px' }}
                                        />
                                    </div>


                                    <div className='T4pr3'>
                                        <p className='T2pr3 text-center'>
                                            Benefits
                                        </p>
                                    </div>
                                    <div >
                                        <div className="mb-4 flex4pr3 text-center bbppr3">
                                            <div className='card4pkpr3 cb2pr3  T3pr3'>
                                                <h4 className="text-center"><strong>Innovation and Differentiation</strong></h4>
                                                <p>
                                                    Drive innovation through custom applications that differentiate your business in the marketplace, offering unique value propositions to customers.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-4 flex4pr3 text-center bbppr3">
                                            <div className='card4pkpr3 cb2pr3  T3pr3 '>
                                                <h4 className="text-center"><strong>Operational Efficiency</strong></h4>
                                                <p>
                                                    Streamline business processes, reduce manual efforts, and optimize resource utilization with tailored applications that meet specific operational needs.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-4 flex4pr3 text-center bbppr3">
                                            <div className='card4pkpr3 cb2pr3  T3pr3 '>
                                                <h4 className="text-center"><strong>Scalability and Performance</strong></h4>
                                                <p>
                                                    Scale applications effortlessly to accommodate growing user bases, transaction volumes, and business expansion without compromising performance.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-4 flex4pr3 text-center bbppr3">
                                            <div className='card4pkpr3 cb2pr3  T3pr3 '>
                                                <h4 className="text-center"><strong>Cost Savings</strong></h4>
                                                <p>
                                                    Lower total cost of ownership (TCO) through efficient resource management, cloud optimization, and reduced maintenance overheads of legacy systems.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-4 flex4pr3 text-center bbppr3">
                                            <div className='card4pkpr3 cb2pr3  T3pr3 '>
                                                <h4 className="text-center"><strong>User Training and Support</strong></h4>
                                                <p>
                                                    Offering ongoing training and support to your users to help them adapt to any changes and make the most of the system’s capabilities.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='Mcapic1pr3'>
                                <img src={Mcapic1} className='Mcapic1pr3' alt="Technology" />

                            </div>


                            <div className='T4pr3'>
                                <p className='T2pr3 text-center'>
                                    Why Enormous?
                                </p>
                            </div>




                            <div className="Btppr3 ">
                                <div className='card4pkpr3   T3pr3 '>
                                    <p><li><b>Expertise in Microsoft Technologies:</b>
                                        Enormous IT specializes in Microsoft technologies, ensuring deep expertise and proficiency in delivering custom application solutions that leverage the latest advancements in .NET Core and Azure PaaS.
                                    </li></p>
                                </div>
                            </div>




                            <div className="Btppr3 ">
                                <div className='card4pkpr3  T3pr3  '>

                                    <p><li><b>Comprehensive Approach:</b>
                                        From application assessment and legacy modernization to cloud migration and DevOps enablement, Enormous IT offers end-to-end services that address diverse business needs and challenges.
                                    </li></p>
                                </div>
                            </div>
                            <div className="Btppr3 ">
                                <div className='card4pkpr3   T3pr3 '>

                                    <p><li><b>Agile and User-Centric Development:</b>
                                        Our Agile methodologies and user-centered design approach ensure rapid development cycles and intuitive user interfaces, maximizing productivity and user satisfaction.
                                    </li></p>
                                </div>
                            </div>
                            <div className="Btppr3 ">
                                <div className='card4pkpr3   T3pr3 '>

                                    <p><li><b>Proven Track Record:</b>
                                        With a proven track record of successful projects across various industries, Enormous IT delivers reliable, scalable, and high-performance solutions that meet and exceed client expectations.
                                    </li></p>
                                </div>
                            </div>
                            <div className=" Btppr3">
                                <div className='card4pkpr3   T3pr3'>

                                    <p><li><b>Scalability and Efficiency:</b>
                                        We enable scalability and operational efficiency through cloud-native solutions, microservices architecture, and CI/CD pipelines, supporting business growth without compromising performance.
                                    </li> </p>
                                </div>
                            </div>
                            <div className=" T3pr3 T4pr3 Atppr3">
                                <p>Partnering with Enormous IT for Microsoft Custom Application Development guarantees innovation-driven solutions that streamline operations, enhance productivity, and empower your business to achieve its goals. Our commitment to leveraging cutting-edge technologies, delivering scalable and efficient applications, and providing comprehensive support ensures that your custom applications not only meet current needs but also drive future growth and success. Trust Enormous IT to be your strategic partner in realizing your vision through tailored Microsoft custom applications that differentiate your business and deliver exceptional value to your stakeholders.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <button onClick={scrollToTop} className="btnpr3 btn-primary up-arrow"><i className="fas fa-arrow-up">^</i></button>
            {/* <button onClick={scrollToBottom} className="btn btn-primary down-arrow"><i className="fas fa-arrow-down"></i></button> */}
        </div>
    );
};

export default MSCustApp;