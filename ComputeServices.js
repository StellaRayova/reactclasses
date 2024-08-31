import React from "react";
import './ComputeServices.css';
import Compute from './Compute.jpg';
import { Link } from "react-router-dom";

function ComputeServices() {
    return (
        <div >
            <div className="bg">
                <div className="body">
                    {/* <img className="img img-fluid" src={workingpic} /> */}
                    <div>
                        <div>
                            {/* <img className="img img-fluid" src={workingpic} /> */}
                            <div >
                                <div className="image-container">
                                    <img src={Compute} className="img-fluid" alt="Compute Services" style={{ width: "100%" }} />
                                    <div className="overlay"></div>
                                    <div className="txt">
                                        <h2 className='text-xl text-lg-center text-xl-left text-center'>Compute Services</h2>
                                        <p className='Hp text-lg-center text-xl-left text-center'>Simplified. Secured. Superior.</p>
                                        <div className="d-flex justify-content-center">
                                            <button type="button" className="btn btn-outline-light w-auto">Reach Out Now!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="headingss">
                    <p >Compute Services</p>
                </div>

<div className="mars">

                <div className="fontsz">
                    <p className="paras">Enormous IT offers a robust suite of Oracle Cloud Infrastructure (OCI) compute services, delivering exceptional performance, scalability, and flexibility to meet diverse business needs. Our compute services include:</p>
                </div>

                <div >
                    <div className="headingss">
                        <p >Oracle Bare Metal Servers</p>
                    </div>

                    <div className="cardsss">
                        <div className="fontsz">

                            <div>
                                <li>
                                    <span>High Performance:</span>
                                    <span>  Our Oracle Bare Metal Servers provide high-performance physical servers without a hypervisor, ensuring direct access to hardware resources for exceptional performance. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >Customizable Configurations: </span>
                                    <span> Choose from a variety of configurations, including different CPU, memory, and storage capacities, to match specific workload requirements. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >Dedicated Resources:  </span>
                                    <span>  Each bare metal server is dedicated to a single tenant, ensuring no shared resources, which leads to consistent and predictable performance. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >Use Cases:  </span>
                                    <span>  Ideal for high-performance computing (HPC), large databases, real-time data processing, enterprise applications, and workloads requiring low latency and high throughput. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Technical Specifications:  </span>
                                    <span>  Latest Intel and AMD processors, configurable memory sizes, and high-performance local NVMe storage for low-latency, high-throughput applications. </span>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="headingss">
                        <p>Oracle Virtual Machines</p>
                    </div>
                    <div className="cardsss">
                        <div className="fontsz">
                            <div>
                                <li>
                                    <span >Flexible Virtual Servers: </span>
                                    <span>Our Oracle Virtual Machines (VMs) offer flexible, scalable, and secure virtual computing environments with a range of VM shapes, including general-purpose, compute-optimized, and memory-optimized configurations. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >Scalability: </span>
                                    <span> Easily scale VMs up or down based on changing workload demands, providing the ability to efficiently manage resource utilization and costs. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >Security and Isolation:  </span>
                                    <span>  Each bare metal server is dedicated to a single tenant, ensuring no shared resources, which leads to consistent and predictable performance. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >Use Cases:  </span>
                                    <span>  Suitable for a wide variety of applications, including web servers, application servers, development and testing environments, and enterprise applications. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Technical Specifications:  </span>
                                    <span>  Options for different processor types (Intel, AMD, ARM-based), configurable memory and storage options, and deployment in multiple regions for geographic redundancy. </span>
                                </li>
                            </div>

                        </div>
                    </div>
                </div>

                <div>
                    <div className="headingss">
                        <p >Oracle Autonomous VM Clusters</p>
                    </div>
                    <div className="cardsss">
                        <div className="fontsz">
                            <div>
                                <li>
                                    <span >Automated Management:  </span>
                                    <span>Enormous IT’s Oracle Autonomous VM Clusters automatically handle routine management tasks such as patching, scaling, and tuning, reducing administrative overhead and allowing IT teams to focus on strategic initiatives. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	High Availability:  </span>
                                    <span> These clusters provide built-in high availability and fault tolerance, ensuring that applications remain operational even in the event of hardware failures. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Scalable and Flexible:   </span>
                                    <span>  Dynamically scale compute and storage resources independently, allowing for flexible resource management based on workload requirements. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >Use Cases:  </span>
                                    <span>  Ideal for running mission-critical applications, databases, and containerized workloads that require automated management, high availability, and scalability. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Technical Specifications:  </span>
                                    <span>  Automated scaling, continuous tuning and optimization, comprehensive monitoring and diagnostics tools. </span>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="headingss">
                        <p >GPU Instances</p>
                    </div>
                    <div className="cardsss">
                        <div className="fontsz">
                            <div>
                                <li>
                                    <span >High-Performance GPUs:   </span>
                                    <span>Enormous IT’s GPU Instances are equipped with high-performance NVIDIA GPUs, providing the necessary computational power for demanding tasks such as AI, machine learning, deep learning, and scientific simulations. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >		Optimized for Compute-Intensive Tasks:   </span>
                                    <span> These instances are optimized for workloads that require significant parallel processing power, such as training machine learning models, running complex simulations, and rendering graphics. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >		Flexible Configurations:  </span>
                                    <span> Choose from different GPU configurations, including options for multiple GPUs per instance, to match the specific requirements of your workloads. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >Use Cases:  </span>
                                    <span>  Suitable for AI and machine learning training and inference, scientific research, financial modelling, big data analytics, and video rendering. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Technical Specifications:  </span>
                                    <span>  High-performance NVIDIA GPUs, configurable memory and storage options, and high-bandwidth networking capabilities. </span>
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className="fontsz">
                        <p>Enormous IT is committed to providing these comprehensive OCI compute services to meet your business needs, ensuring high performance, scalability, and security for a wide range of applications and workloads.</p>
                    </div>

                </div>


</div>
            </div>















        </div>
    )
}
export default ComputeServices;

