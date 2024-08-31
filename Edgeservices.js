import React from "react";
import './Edgeservices.css';
import Edge1 from './Edge1.jpg';


function Edgeservices() {
    return (
        <div className="bg">
            <div className="body"> 
                <div>
                    {/* <img className="img img-fluid" src={workingpic} /> */}
                    <div >
                        <div className="image-container">
                            <img src={Edge1} className="img-fluid" alt="Oracle Edge Services" style={{width:"100%"}} />
                            <div className="overlay"></div>
                            <div className="txt">
                                <h2 className='text-xl text-lg-center text-xl-left text-center'>Oracle Edge Services</h2>
                                <p className='Hp text-lg-center text-xl-left text-center'> Secure, Agile, and Always On.</p>
                                <div className="d-flex justify-content-center">
                                    <button type="button" className="btn btn-outline-light w-auto">Reach Out Now!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="flex1">
                    <p className="txt">Oracle Services </p>
                </div> */}
<div className="mars">

            <div className="headingss">
                <p >Edge Services </p>
            </div>
            <div className="fontsz">
                <p className="paras">Enormous IT offers a comprehensive suite of Oracle Cloud Infrastructure (OCI) edge services, designed to enhance the performance, security, and reliability of your applications by leveraging the power of edge computing and network optimization. Our edge services include:</p>
            </div>

            <div>
                <div className="headingss">
                    <p >Oracle DNS</p>
                </div>
                    <div className="cardsst">
                        <div className="fontsz">
                            <div>
                                <li>
                                    <span>	<strong>	Scalable DNS Service: </strong></span>
                                    <span>  Enormous IT’s Oracle DNS is a scalable, globally distributed Domain Name System (DNS) service that translates domain names into IP addresses, ensuring reliable and efficient access to your web applications. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	High Availability:  </span>
                                    <span> Provides redundant, geographically distributed DNS servers for high availability and resilience against outages. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >		Fast and Secure:   </span>
                                    <span>  Features advanced DNS security mechanisms, such as DNSSEC, to protect against DNS spoofing and ensure the integrity of your DNS responses. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >Use Cases:  </span>
                                    <span> Ideal for web hosting, enterprise applications, and any internet-facing services that require reliable domain resolution. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Technical Specifications:  </span>
                                    <span> Supports DNSSEC, Anycast routing, and advanced traffic management features such as geo-routing and failover. </span>
                                </li>
                            </div>
                        </div>
                    </div>
            </div>


            <div>
                <div className="headingss">
                    <p>Oracle Content Delivery Network (CDN)</p>
                </div>
                    <div className="cardsst">
                        <div className="fontsz">
                            <div>
                                <li>
                                    <span >	Accelerates Web Content Delivery:  </span>
                                    <span>Enormous IT’s Oracle CDN enhances the performance and availability of your web applications by caching and delivering content from edge locations closer to your users. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >		Global Reach:   </span>
                                    <span> Utilizes a global network of edge servers to ensure fast content delivery and low latency for users worldwide. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >		Advanced Caching:   </span>
                                    <span>  Provides advanced caching capabilities, configurable cache rules, and real-time cache purging for optimal performance. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >Use Cases:  </span>
                                    <span> Suitable for web applications, media streaming, e-commerce platforms, and any service that requires fast, reliable content delivery. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Technical Specifications:  </span>
                                    <span> Supports HTTPS delivery, large file optimization, and detailed analytics for monitoring performance and usage. </span>
                                </li>
                            </div>
                        </div>
                    </div>
            </div>

            <div>
                <div className="headingss">
                    <p >Oracle Traffic Director</p>
                </div>
                    <div className="cardsst">
                        <div className="fontsz">
                            <div>
                                <li>
                                    <span >	Advanced Traffic Management:    </span>
                                    <span>Enormous IT’s Oracle Archive Storage provides a highly cost-effective solution for long-term data retention, with lower storage costs compared to standard object storage. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Intelligent Routing:   </span>
                                    <span> Features intelligent routing algorithms, such as round-robin, least connections, and weighted load balancing, to optimize traffic distribution.</span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >		Health Monitoring:    </span>
                                    <span> Continuously monitors the health of backend servers and routes traffic away from unhealthy instances to maintain service availability.</span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >Use Cases:  </span>
                                    <span> Ideal for mission-critical applications, high-traffic websites, and services requiring high availability and load balancing. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Technical Specifications:  </span>
                                    <span> Supports SSL offloading, session persistence, and integration with other OCI services for seamless traffic management. </span>
                                </li>
                            </div>
                        </div>
                    </div>
            </div>


            <div>
                <div className="headingss">
                    <p >Oracle Web Application Firewall (WAF)</p>
                </div>
                    <div className="cardsst">
                        <div className="fontsz">
                            <div>
                                <li>
                                    <span >	Protects Applications from Web Exploits:   </span>
                                    <span>Enormous IT’s Oracle Web Application Firewall (WAF) protects your web applications from common web exploits and attacks, such as SQL injection, cross-site scripting (XSS), and DDoS attacks. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >		Advanced Threat Protection:  </span>
                                    <span> Utilizes advanced threat detection and mitigation techniques to block malicious traffic and ensure application security. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >		Customizable Rules:  </span>
                                    <span> Allows you to create custom security rules and policies tailored to your specific application needs. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >Use Cases:  </span>
                                    <span>  Suitable for any web application or API that requires robust protection against web-based threats. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Technical Specifications:  </span>
                                    <span> Supports OWASP Top 10 protection, real-time monitoring, and integration with Oracle CDN and Load Balancing for comprehensive security. </span>
                                </li>
                            </div>
                        </div>
                    </div>
            </div>

            <div>
                <div className="headingss">
                    <p >Oracle Edge Services Security</p>
                </div>
                    <div className="cardsst">
                        <div className="fontsz">
                            <div>
                                <li>
                                    <span >	Protects from DDoS Attacks and Other Threats:   </span>
                                    <span>Enormous IT’s Oracle Edge Services Security provides comprehensive protection against distributed denial-of-service (DDoS) attacks and other edge threats, ensuring the availability and security of your applications. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >		Global Threat Intelligence:  </span>
                                    <span>Leverages global threat intelligence to detect and mitigate emerging threats in real-time.</span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Scalable Protection:     </span>
                                    <span> Offers scalable protection that can handle large-scale DDoS attacks and high volumes of malicious traffic. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >Use Cases:  </span>
                                    <span> Ideal for protecting web applications, APIs, and any internet-facing services from DDoS attacks and other edge threats.</span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Technical Specifications:  </span>
                                    <span> Supports always-on protection, traffic analysis, and integration with other OCI security services for a layered defense strategy. </span>
                                </li>
                            </div>
                        </div>
                    </div>
            </div>









</div>



        </div>
    )
}
export default Edgeservices;

