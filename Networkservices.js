import React from "react";
import './Networkservices.css';
import workingpic from './workingpic.jpg';
import Baremetal from './Baremetal.jpg';


function Networkservices() {
    return (
        <div>
            <div >
                <div className="body">
                    {/* <img src={workingpic} width={1600} height={700}/> */}
                    < div >
                        <div className="image-container">
                            <img src={workingpic} className="img-fluid" alt="Oracle Services" style={{ width: "100%" }} />
                            <div className="overlay"></div>
                            <div className="txt">
                                <h2 className='text-xl text-lg-center text-xl-left text-center'>Oracle Services</h2>
                                <p className='Hp text-lg-center text-xl-left text-center'>Simplified. Secured. Superior.</p>
                                <div className="d-flex justify-content-center">
                                    <button type="button" className="btn btn-outline-light w-auto">Reach Out Now!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="headingss">
                    <p >Network Services</p>
                </div>
                <div className="fontsz">
                    <p className="paras">Enormous IT offers a comprehensive suite of Oracle Cloud Infrastructure (OCI) networking services designed to ensure secure, high-performance, and reliable connectivity for your cloud resources. Our networking services include:</p>
                </div>
                <div>
                    <div className="headingss">
                        <p >Oracle Virtual Cloud Network (VCN)</p>
                    </div>
                    <div className="m">
                        <img className="sideimg" style={{ borderRadius: 10 }} src={Baremetal} />
                        <div className="cardss">
                            <div className="fontsz">
                                <div>
                                    <li>
                                        <span>	Secure, Isolated Virtual Networks:  </span>
                                        <span>  Enormous IT’s Oracle Virtual Cloud Network (VCN) provides secure, isolated virtual networks within OCI, allowing you to manage your cloud resources in a controlled and segmented environment. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Customizable Subnets:  </span>
                                        <span> Create multiple subnets within a VCN, each with its own security and routing policies, enabling fine-grained network segmentation. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Comprehensive Security:  </span>
                                        <span>  VCN includes security lists and network security groups (NSGs) for granular traffic control, along with stateful inspection and firewall rules. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >Use Cases:  </span>
                                        <span>  Ideal for creating multi-tier architectures, isolating sensitive workloads, and establishing secure connections between different parts of your infrastructure. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Technical Specifications:  </span>
                                        <span> Supports both public and private subnets, customizable CIDR blocks, and integration with other OCI services such as Load Balancing and FastConnect. </span>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="headingss">
                        <p>Oracle FastConnect</p>
                    </div>
                    <div className="m">
                        <div className="cardss">
                            <div className="fontsz">
                                <div>
                                    <li>
                                        <span >	Dedicated Connectivity to OCI: </span>
                                        <span>Enormous IT’s Oracle FastConnect offers dedicated, private connections between your on-premises infrastructure and OCI, bypassing the public internet to provide secure and reliable network performance. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	High Bandwidth and Low Latency:   </span>
                                        <span> Delivers high-bandwidth, low-latency connections, ensuring consistent and predictable network performance for critical applications. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Multiple Connectivity Options:  </span>
                                        <span>  Choose from a range of connectivity options, including direct connections from your data center, colocation facilities, and partner networks. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >Use Cases:  </span>
                                        <span> Suitable for hybrid cloud architectures, data-intensive applications, real-time data processing, and disaster recovery solutions. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Technical Specifications:  </span>
                                        <span>  Supports connection speeds from 1 Gbps to 10 Gbps, multiple redundancy options, and integration with VCN and other OCI services. </span>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <img className="sideimg" style={{ borderRadius: 10 }} src={Baremetal} />
                    </div>
                </div>

                <div>
                    <div className="headingss">
                        <p >Oracle Load Balancing</p>
                    </div>
                    <div className="m">
                        <img className="sideimg" style={{ borderRadius: 10 }} src={Baremetal} />
                        <div className="cardss">
                            <div className="fontsz">
                                <div>
                                    <li>
                                        <span >	Distributes Incoming Traffic:   </span>
                                        <span>Enormous IT’s Oracle Load Balancing service automatically distributes incoming application traffic across multiple compute instances, ensuring high availability and reliability. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Advanced Traffic Management:   </span>
                                        <span> Supports various load balancing algorithms, including round-robin, least connections, and IP hash, to optimize traffic distribution.</span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Health Monitoring:    </span>
                                        <span> Continuously monitors the health of backend instances and automatically reroutes traffic away from unhealthy instances to maintain application availability.</span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >Use Cases:  </span>
                                        <span> Ideal for web applications, microservices architectures, and high-availability deployments. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Technical Specifications:  </span>
                                        <span>Supports both public and private load balancers, SSL termination, and integration with OCI Compute and VCN services. </span>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="headingss">
                        <p >Oracle Network Visualizer</p>
                    </div>
                    <div className="m">
                        <div className="cardss">
                            <div className="fontsz">
                                <div>
                                    <li>
                                        <span >	Visualizing and Managing Network Resources:   </span>
                                        <span>Enormous IT’s Oracle Network Visualizer provides an intuitive graphical interface for visualizing and managing your OCI network resources, making it easier to understand and optimize your network architecture. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Interactive Dashboard:  </span>
                                        <span> Offers an interactive dashboard that displays network topology, traffic flow, and resource status, helping you quickly identify and resolve issues. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Detailed Insights:   </span>
                                        <span>Provides detailed insights into network performance, utilization, and security, enabling proactive management and optimization. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >Use Cases:  </span>
                                        <span>  Ideal for network administrators, IT operations teams, and security professionals managing complex cloud environments. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Technical Specifications:  </span>
                                        <span>  Integrates with VCN, Load Balancing, FastConnect, and other OCI networking services, providing comprehensive visibility and control. </span>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <img className="sideimg" style={{ borderRadius: 10 }} src={Baremetal} />
                    </div>
                </div>

                <div>
                    <div className="headingss">
                        <p >Oracle Cloud Infrastructure Service Gateway</p>
                    </div>
                    <div className="m">
                        <img className="sideimg" style={{ borderRadius: 10 }} src={Baremetal} />
                        <div className="cardss">
                            <div className="fontsz">
                                <div>
                                    <li>
                                        <span >	Private Access to Oracle Services:   </span>
                                        <span>Enormous IT’s Oracle Cloud Infrastructure Service Gateway allows private access to Oracle services within your VCN, without requiring traffic to traverse the public internet, enhancing security and performance. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Seamless Integration: </span>
                                        <span> Integrates seamlessly with other OCI services, enabling private connectivity to resources such as Object Storage, Autonomous Database, and Oracle Cloud Applications </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Improved Security:     </span>
                                        <span> By keeping traffic within OCI’s private network, Service Gateway reduces exposure to internet-based threats and enhances data security. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >Use Cases:  </span>
                                        <span> Suitable for secure access to OCI services, compliance with regulatory requirements, and optimizing performance for cloud-based applications. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Technical Specifications:  </span>
                                        <span> Supports multiple OCI regions and availability domains, provides high throughput and low latency, and integrates with VCN security and routing policies. </span>
                                    </li>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="fontsz">
                            <p className="paras">Enormous IT is dedicated to providing these comprehensive OCI networking services to ensure your cloud infrastructure is secure, high-performing, and reliable, meeting the connectivity needs of a wide range of applications and workloads.</p>
                        </div>
                    
                </div>
            
            
            
            
            </div>
















        </div>
    )
}
export default Networkservices;
