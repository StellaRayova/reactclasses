import React, { useEffect, useState } from 'react';
import './Ai.css';
import ContactUsPopup from './Popup';
import bii from './images/AIhands.jpeg';
import { Link } from 'react-router-dom';

const Ai = () => {
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
        <div style={{ background: '#E3E3E4' }}>
            <div className="Ai-card">
                <div className="image-container">
                    <img src={bii} className="img-fluid" alt="Technology" />
                    <div className="overlay"></div>
                    <div className="txt" style={{ textAlign: 'left' }}>
                        <h2 className='text-xl text-xl-left text-left'>Artificial Intelligence</h2>
                        <p className='Hp text-xl-left text-left'>Pioneering Tomorrow's Solutions Today</p>
                        {/* <div>
                            <div className={`background-content ${isPopupOpen ? 'blur' : ''}`}>
                                <button type="button" className="btn btn-outline-light w-auto" onClick={openPopup}>Schedule a Free Consultation!</button>
                            </div>
                            <ContactUsPopup isOpen={isPopupOpen} onClose={closePopup} />
                        </div> */}
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
                <div className="text-center mt-4">
                    <p className="ap">Our team of seasoned AI consultants and highly-skilled engineers brings deep expertise, having been core developers in leading AI projects. Enormous IT excels in utilizing cutting-edge AI technologies to deliver customized solutions that meet your business needs.</p>
                </div>

                <div className="ai-container mt-4 pa20 row">
                    <div className="col-md-12">
                        <h1 className="section-title ta">AI Services</h1>
                        {['Custom AI Solutions', 'Machine Learning', 'Natural Language Processing (NLP)', 'Computer Vision', 'Big Data Analytics', 'Recommendation Systems'].map((service, index) => (
                            <div className='d-flex justify-content-center' key={index}>
                                <div className="ai-services mb-4 p-4 cb2">
                                    <h3 className='cc k3cardhead'>{service}</h3>
                                    <ul>
                                        <li className='ullikk'><strong>Custom AI Model Development:</strong> Tailored AI models to meet specific business needs.</li>
                                        <li className='ullikk'><strong>AI-Driven Automation:</strong> Implementing AI to automate processes and increase efficiency.</li>
                                        <li className='ullikk'><strong>System Integration:</strong> Integrating AI solutions into existing systems for enhanced performance.</li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-4 pa20">
                    <h3 className="hh3">Advanced AI Algorithms</h3>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <div className="card3 ai-card p-3 cb1">
                                <strong>Deep Learning:</strong>
                                <p>Utilizing neural networks for complex problem-solving.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card3 ai-card p-3 cb1">
                                <strong>Reinforcement Learning:</strong>
                                <p>Implementing algorithms that learn through interactions.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card3 ai-card p-3 cb1">
                                <strong>AI for IoT:</strong>
                                <p>Integrating AI with IoT devices for smarter solutions.</p>
                            </div>
                        </div>
                    </div>

                    <h3 className="hh3 at">AI Consulting Services</h3>
                    <div className="row">
                        <div className="col-md-4 mb-3 ">
                            <div className="card3 ai-card p-3 cb">
                                <strong>Strategic AI Planning:</strong>
                                <p>Developing AI strategies aligned with business goals.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 ">
                            <div className="card3 ai-card p-3 cb">
                                <strong>AI Implementation Roadmaps:</strong>
                                <p>Guiding businesses through AI adoption and deployment.</p>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 ">
                            <div className="card3 ai-card p-3 cb">
                                <strong>AI Training and Support:</strong>
                                <p>Educating teams on AI technologies and best practices.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="why-choose mt-4 pd40">
                    <h2 className='h2f pd40'>Why Choose Enormous?</h2>
                    <div className='pd40 '>
                        <ul>
                            <li className='ullikk'><strong>Proven Expertise:</strong> Extensive experience in AI and machine learning.</li>
                            <li className='ullikk'><strong>Customized Solutions:</strong> Tailored AI applications to fit unique business requirements.</li>
                            <li className='ullikk'><strong>Scalability:</strong> AI solutions designed to scale with your business growth.</li>
                            <li className='ullikk'><strong>End-to-End Support:</strong> Comprehensive services from consulting to implementation and support.</li>
                            <li className='ullikk'><strong>Commitment to Innovation:</strong> Dedicated to exploring and utilizing the latest AI advancements.</li>
                        </ul>

                        <p className='ai-card wpp' >By leveraging these comprehensive AI services, Enormous IT empowers businesses to harness the full potential of artificial intelligence, driving innovation and achieving strategic objectives.</p>
                        <p className='ai-card wpp' >Partner with Enormous IT to elevate your business with AI.
                            <Link to='/contactus' className='tdn'> Contact us</Link> today for more information!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ai;
