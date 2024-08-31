import React from "react";
import './ComputeServices.css';
import oracle from './oracle.jpeg';
import Baremetal from './Baremetal.jpg';

function Storageservices() {
    return (
        <div>
            <div>
                {/* <img src={oracle} /> */}
                <div className="body">
                    <div>
                        {/* <img className="img img-fluid" src={workingpic} /> */}
                        <div >
                            <div className="image-container">
                                <img src={oracle} className="img-fluid" alt="Oracle Services" style={{ width: "100%" }} />
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
                </div>
            </div>

            <div className="headingss">
                <p >Storage Services</p>
            </div>
            <div className="fontsz">
                <p >Enormous IT offers a comprehensive range of Oracle Cloud Infrastructure (OCI) storage services, designed to meet the diverse needs of modern enterprises. Our storage services include:</p>
            </div>
            <div>
                <div className="headingss">
                    <p >Oracle Block Volumes</p>
                </div>
                <div className="m">
                    <img className="sideimg" style={{ borderRadius: 10 }} src={Baremetal} />
                    <div className="cardss">
                        <div className="fontsz">
                            <div>
                                <li>
                                    <span>	High-Performance Block Storage: </span>
                                    <span>  Enormous IT’s Oracle Block Volumes provide high-performance, low-latency block storage, ideal for demanding workloads such as databases, enterprise applications, and high-performance computing (HPC). </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Elastic Scalability: </span>
                                    <span> Easily scale storage capacity up or down based on your needs, ensuring optimal resource utilization and cost efficiency. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Automated Management:  </span>
                                    <span>  Features such as automated backups, cloning, and resizing help streamline storage management and ensure data availability. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >Use Cases:  </span>
                                    <span>  Suitable for mission-critical applications, transactional databases, virtual machines, and development and testing environments. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Technical Specifications:  </span>
                                    <span> Configurable performance levels with options for balanced and high-performance tiers, integration with OCI Compute services, and support for up to 32TB per volume. </span>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className="headingss">
                    <p>Oracle Object Storage</p>
                </div>
                <div className="m">
                    <div className="cardss">
                        <div className="fontsz">
                            <div>
                                <li>
                                    <span >	Scalable Object Storage: </span>
                                    <span>Our Oracle Object Storage service offers scalable, secure, and durable storage for unstructured data, such as multimedia files, backups, and big data. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	High Durability and Availability:  </span>
                                    <span> Data is automatically replicated across multiple availability domains within a region, ensuring high durability and availability. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Cost-Effective:  </span>
                                    <span>  Pay-as-you-go pricing model with no upfront costs, making it cost-effective for storing large volumes of data. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >Use Cases:  </span>
                                    <span> Ideal for storing backups, archiving data, big data analytics, media repositories, and web content. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Technical Specifications:  </span>
                                    <span>  Support for large objects up to 10TB, RESTful APIs for easy integration, and lifecycle policies for automated data management. </span>
                                </li>
                            </div>
                        </div>
                    </div>
                    <img className="sideimg" style={{ borderRadius: 10 }} src={Baremetal} />
                </div>
            </div>

            <div>
                <div className="headingss">
                    <p >Oracle Archive Storage</p>
                </div>
                <div className="m">
                    <img className="sideimg" style={{ borderRadius: 10 }} src={Baremetal} />
                    <div className="cardss">
                        <div className="fontsz">
                            <div>
                                <li>
                                    <span >	Cost-Effective Long-Term Storage:   </span>
                                    <span>Enormous IT’s Oracle Archive Storage provides a highly cost-effective solution for long-term data retention, with lower storage costs compared to standard object storage. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >		Secure and Durable:  </span>
                                    <span> Ensures high durability and security for archived data, with encryption at rest and in transit.</span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >		Easy Data Retrieval:    </span>
                                    <span> While optimized for infrequent access, data retrieval is straightforward and can be automated based on policy settings.</span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >Use Cases:  </span>
                                    <span> Suitable for compliance and regulatory archiving, backup retention, long-term digital preservation, and historical data storage. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Technical Specifications:  </span>
                                    <span> Designed for data that needs to be retained for extended periods, seamless integration with OCI Object Storage, and support for large-scale data archives. </span>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className="headingss">
                    <p >Oracle Cloud Infrastructure Data Transfer Service</p>
                </div>
                <div className="m">
                    <div className="cardss">
                        <div className="fontsz">
                            <div>
                                <li>
                                    <span >Facilitates Large Data Transfers:  </span>
                                    <span>Our Oracle Cloud Infrastructure Data Transfer Service streamlines the process of transferring large datasets to OCI, ensuring efficient and secure data migration. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Physical and Online Transfer Options: </span>
                                    <span> Choose between physical data transfer appliances for massive datasets and online transfer options for smaller datasets. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Secure Transfer:   </span>
                                    <span> Data is encrypted during transit, ensuring security and integrity. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >Use Cases:  </span>
                                    <span>  Ideal for migrating large-scale datasets, such as backups, archives, and big data sets, to OCI. </span>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span >	Technical Specifications:  </span>
                                    <span>  Support for data transfer appliances up to 150TB, online data transfer via high-speed internet, and integration with OCI storage services. </span>
                                </li>
                            </div>
                        </div>
                    </div>
                    <img className="sideimg" style={{ borderRadius: 10 }} src={Baremetal} />
                </div>

                <div>
                    <div className="headingss">
                        <p >Oracle Cloud Infrastructure Storage Gateway</p>
                    </div>
                    <div className="m">
                        <img className="sideimg" style={{ borderRadius: 10 }} src={Baremetal} />
                        <div className="cardss">
                            <div className="fontsz">
                                <div>
                                    <li>
                                        <span >Connects On-Premises Applications with OCI Storage:   </span>
                                        <span>Enormous IT’s Oracle Cloud Infrastructure Storage Gateway provides seamless connectivity between on-premises applications and OCI storage services, enabling hybrid cloud storage solutions. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Easy Integration: </span>
                                        <span> Facilitates smooth integration of on-premises applications with cloud storage, supporting standard file protocols such as NFS and SMB. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Data Caching and Tiering:    </span>
                                        <span> Includes data caching and tiering capabilities, ensuring optimal performance and cost efficiency. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >Use Cases:  </span>
                                        <span> Ideal for hybrid cloud deployments, data migration, backup and restore operations, and disaster recovery solutions. </span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span >	Technical Specifications:  </span>
                                        <span> Supports multiple protocols (NFS, SMB), local caching for frequently accessed data, and automated data tiering between on-premises and cloud storage. </span>
                                    </li>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="fontsz">
                            <p>Enormous IT is dedicated to providing these comprehensive OCI storage services to meet your business needs, ensuring high performance, scalability, and security for a wide range of applications and data storage requirements.</p>
                        </div>
                    
                </div>
               
            </div>










        </div>
    )
}
export default Storageservices;
