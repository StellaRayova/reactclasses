import React from "react";
import './EnorServices.css';
import database from './database.png';
import cloud from './cloud.png';
import oracle from './oracle.jpeg';

function Enorservices() {
    return (
        <>
            <div className="div2" >
                <div style={{ backgroundColor: "#f5f5f5" }}>
                    <div className="div1card" >

                        <div>
                            <img src={oracle} height={391} width={918} />
                        </div>

                        <div className="flex1">
                            <p className="txt">Oracle Services </p>
                        </div>

                        <div>
                            <p className="para" >
                                With extensive experience in Oracle project execution spanning many years, Enormous IT excels in blending deep business insights with advanced technology expertise. Our dedicated team of skilled consultants has garnered numerous awards and industry accolades for delivering innovative and scalable Oracle solutions.</p>
                            <p className="para">   Driving Business Growth:
                                At Enormous IT, we are committed to helping organizations drive growth, improve ROI, and mitigate risks. Our tailored Oracle solutions are designed to unlock your organization's full potential, empowering you to achieve sustainable success in a competitive landscape.  </p>
                        </div>

                        <div style={{ marginLeft: 80, marginTop: 40 }} >
                            <div className="display flex">

                                <div className="card display">
                                    <div>
                                        <img className="img display" src={database} />
                                    </div>
                                    <div className="fontsize">
                                        <p>Oracle Application Services</p>
                                    </div>
                                </div>


                                <div className="card display">
                                    <div>
                                        <img className="img display" src="https://instedia.com/images/technologies/angular.svg" />
                                    </div>
                                    <div className="fontsize">
                                        <p>Oracle DBA & Remote DBA Services</p>
                                    </div>
                                </div>
                            </div>

                            <div className="display flex">

                                <div className="card display">
                                    <div>
                                        <img className="img display" src="	https://instedia.com/images/technologies/react.svg" />
                                    </div>
                                    <div className="fontsize">
                                        <p>ORACLE APPS DBA Services</p>
                                    </div>
                                </div>

                                <div className="card display">
                                    <div>
                                        <img className="img display" src="	https://instedia.com/images/technologies/react.svg" />
                                    </div>
                                    <div className="fontsize">
                                        <p>Fusion Middleware</p>
                                    </div>
                                </div>
                            </div>

                            <div className="display flex">

                                <div className="card display">
                                    <div>
                                        <img className="img display" src={database} />
                                    </div>
                                    <div className="fontsize">
                                        <p>EXADATA Adminstration</p>
                                    </div>
                                </div>


                                <div className="card display">
                                    <div>
                                        <img className="img display" src={cloud} />
                                    </div>
                                    <div className="fontsize">
                                        <p>DBAS(Database on Cloud)</p>
                                    </div>
                                </div>

                            </div>


                            <div className="display flex">


                                <div className="card display">
                                    <div>
                                        <img className="img display" src="	https://instedia.com/images/technologies/javascript.svg" />
                                    </div>
                                    <div className="fontsize">
                                        <p>Oracle Cloud ERP</p>
                                    </div>
                                </div>


                                <div className="card display">
                                    <div>
                                        <img className="img display" src="https://instedia.com/images/technologies/vuejs.svg" />
                                    </div>
                                    <div className="fontsize">
                                        <p>Oracle HCM Cloud</p>
                                    </div>
                                </div>
                            </div>

                            <div className="display flex">

                                <div className="card display">
                                    <div>
                                        <img className="img display" src="https://instedia.com/images/technologies/wordpress.svg" />
                                    </div>
                                    <div className="fontsize">
                                        <p>Oracle EPM Cloud</p>
                                    </div>
                                </div>






                                <div className="card display">
                                    <div>
                                        <img className="img display" src="	https://instedia.com/images/technologies/mysql.svg" />
                                    </div>
                                    <div className="fontsize">
                                        <p>Oracle SCM Cloud</p>
                                    </div>
                                </div>
                            </div>

                            <div className="display flex">


                                <div className="card display">
                                    <div>
                                        <img className="img display" src="https://instedia.com/images/technologies/mongodb.svg" />
                                    </div>
                                    <div className="fontsize">
                                        <p>Oracle E-Business Suite (EBS)</p>
                                    </div>
                                </div>


                                <div className="card display">
                                    <div>
                                        <img className="img display" src="	https://apexapps.oracle.com/pls/apex/r/dbpm/133/files/static/v511/oracle_o_logo.png" />
                                    </div>
                                    <div className="fontsize">
                                        <p>Oracle APEX</p>
                                    </div>
                                </div>
                            </div>

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
export default Enorservices;