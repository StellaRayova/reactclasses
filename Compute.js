import React from "react";
import './ComputeServices.css';
import oracle from './oracle.jpeg';

function Compute() {
    return (
        <>
            <div className="div2" >
                <div className="bg">
                    <div className="div1card" >

                        <div>
                            <img src={oracle} height={391} width={918} />
                        </div>

                        <div className="flex1">
                            <p className="txt">Oracle Services </p>
                        </div>

                        <div className="headingss">
                        <p >Compute Services</p>
                    </div>

                    <div className="fontsz">
                        <p >Enormous IT offers a robust suite of Oracle Cloud Infrastructure (OCI) compute services, delivering exceptional performance, scalability, and flexibility to meet diverse business needs. Our compute services include:</p>
                    </div>

                        <div style={{ marginLeft: 80, marginTop: 40 }} >

                            

                        </div>


                    </div>

                </div>

                <div>
                    <div className="main-card">
                        <form className="card1">
                            <div className="body">
                                <h2 className="hea">Get in Touch</h2>
                                <label className="inp">
                                    Name<span className="star">*</span>
                                </label>
                                <input type="text" className="class" placeholder="Full Name" />
                                <label className="inp">
                                    Email<span className="star">*</span>
                                </label>
                                <input type="email" className="class" placeholder="Email" />
                                <label className="inp">
                                    Mobile Number<span className="star">*</span>
                                </label>
                                <input type="tel" className="class" placeholder="Mobile" />
                                <label className="inp">
                                    Company Name<span className="star">*</span>
                                </label>
                                <input type="text" className="class" placeholder="Company Name" />
                                <label className="inp feed">
                                    Feedback<span className="star">*</span>
                                </label>
                                <textarea
                                    className="class resp"
                                    placeholder="Please give your feedback"
                                ></textarea>
                                <button type="submit" className="inp sub">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    <div>
                        <div className='card3'>
                            <div className='c'>
                                <h2 className='head'>Our Services</h2>
                                <ul className='unorder'>
                                    <li className='list'><a href="#" className='ancher'>Oracle Services</a></li>
                                    <li className='list'><a href="#" className='ancher'>Microsoft Technology Services</a></li>
                                    <li className='list'><a href="#" className='ancher'>Big Data</a></li>
                                    <li className='list'><a href="#" className='ancher'>Business Intelligence and Data Warehousing Solutions</a></li>
                                    <li className='list'><a href="#" className='ancher'>Web Offerings and Mobile Applications</a></li>
                                    <li className='list'><a href="#" className='ancher'>Talent Pool Augmentation</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className='Us'>
                            <div className="contact-container">
                                <h2>Call us Now</h2>
                                <p>Partner with us today to ensure your business's critical IT infrastructure and applications are supported effectively.</p>
                                <a href="#" className="contact-button">
                                    +91-40-4855 3545 →
                                </a>
                            </div>
                        </div>
                    </div>







                </div>


            </div>
</>
    )
}
export default Compute;
