import React from 'react';
import '../TMsfiles/Mstech.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bw1 from '../TMsfiles/MSimages/bwmainimg.jpeg';
import msea from '../TMsfiles/MSimages/mseaf.jpeg';
import mcap from '../TMsfiles/MSimages/mcapf.jpeg';
import mpsi from '../TMsfiles/MSimages/mpsif.jpeg';
import mbis from '../TMsfiles/MSimages/mbisf.jpeg';

export default function Msmain() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div>
      <div>
        <div>
          <div className="bodyp">
            <div>
              <div className="image-containerpr">
                <img src={bw1} className="img-fluid imgp" alt="Oracle Services" />
                <div className="overlaypm"></div>
                <div className="txtpm">
                  <h2 className="text-xl text-lg-center text-xl-left text-center fntwtpm">Microsoft Technology Services</h2>
                  <p className="Hp text-lg-center text-xl-left text-center fntwtpm1">Innovate. Integrate. Inspire.</p>
                  <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-outline-light w-auto">Schedule a Free Consultation!</button>
                  </div>
                </div>
              </div>
            </div>


            <div className="fontspm ">
              <div className="paraspm " style={{ marginTop: '25px' }}> At Enormous IT, we offer a wide range of Microsoft technology consulting services designed to drive excellence and deliver exponential business value. Our expertise focuses on four key areas: Microsoft Enterprise Architecture Services We help you assess your Microsoft architecture, integrate applications, and leverage new development techniques to optimize your Microsoft environment.</div>
            </div>



            <div className="headingspm cenrpm">
              <p>Our Services</p>
            </div>


            <div className="headingspm cenrpm">
              <p>Microsoft Enterprise Architecture Services</p>
            </div>
            <div className="content-rowpm ">
              <img className="sideimgpm" src={msea} alt="atmnys" />
              <div className="cardspm">
                <div className="fontspm ">
                  <div>
                    <p className='martp'>We help you assess your Microsoft architecture, integrate applications, and leverage new development techniques to optimize your Microsoft environment. Our services include:</p>
                    <h4><li>Architecture Assessments.</li></h4>
                    <h4><li>SOA Strategy and Architecture.</li></h4>
                    <div className='ppp'>
                      <a className="btn-linkp prebg" href="https://www.enormousit.com/services/mircrosoft-services/" target="_blank" rel="noopener noreferrer">Learn More{">>"}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Microsoft Custom Application Development */}

            <div className="headingspm cenrpm">
              <p>Microsoft Custom Application Development</p>
            </div>

            <div className="content-rowpm ">
              <div className="cardspm">
                <div className="fontspm">

                  <p>Enormous IT offers comprehensive Microsoft business intelligence (BI) services, including strategy, software services, tools, and frameworks. We enable your organization to be more responsive to market changes by implementing a proven end-to-end information delivery framework. Our BI solutions include:</p>                         <h4><li>Application Assessment.</li></h4>
                  <h4><li>Custom Application Development.</li></h4>
                  <h4><li>Application Transformation and Modernization.</li></h4>
                  <a className="btn-linkp ppp prebg" href="https://www.enormousit.com/services/mircrosoft-services/" target="_blank" rel="noopener noreferrer">Learn More{">>>"}</a>
                </div>
              </div>
              <img className="sideimgpm" src={mpsi} alt="Oracle Real Application Clusters (RAC)" />
            </div>




            <div className="headingspm cenrpm">
              <p>Microsoft Product Solutions</p>
            </div>

            <div className="content-rowpm ">
              <img className="sideimgpm" src={mcap} alt="advd" />
              <div className="cardspm">
                <div className="fontspm ">

                  <p>We specialize in a wide range of Microsoft products, including SharePoint, BizTalk, and SQL Server. Our services cover the full project lifecycle, from recommendation and design to implementation, using the Enormous Unified Method Framework (UMF) to ensure a holistic approach. Our Microsoft Product Solution includes:</p>
                  <h4><li>SharePoint Applications.</li></h4>
                  <h4><li>SharePoint Jumpstart.</li></h4>
                  <h4><li>BizTalk Integration / SOA Solutions.</li></h4>
                  <h4><li>SQL Server and SQL BI Solutions.</li></h4>
                  <a className="btn-linkp ppp prebg" href="https://www.enormousit.com/services/mircrosoft-services/" target="_blank" rel="noopener noreferrer">Learn More{">>>"}</a>
                </div>
              </div>
            </div>

            <div className="headingspm cenrpm">
              <p>Microsoft Business Intelligence</p>
            </div>


            <div className="content-rowpm ">
              <div className="cardspm">
                <div className="fontspm">

                  <p>Enormous IT offers comprehensive Microsoft business intelligence (BI) services, including strategy, software services, tools, and frameworks. We enable your organization to be more responsive to market changes by implementing a proven end-to-end information delivery framework. Our BI solutions include:</p>
                  <h4><li>Data Source Layer.</li></h4>
                  <h4><li>Enterprise Data Warehouse Layer.</li></h4>
                  <h4><li>Data Access Layer.</li></h4>
                  <h4><li>Reporting Layer.</li></h4>
                  <a className="btn-linkp ppp prebg" href="https://www.enormousit.com/services/mircrosoft-services/" target="_blank" rel="noopener noreferrer">Learn More{">>>"}</a>
                </div>
              </div>
              <img className="sideimgpm" src={mbis} alt="Oracle Real Application Clusters (RAC)" />
            </div>


            <div className="fontspm">
              <p className="paraspm"> By leveraging Enormous IT's comprehensive Microsoft Technology Services, organizations can achieve digital transformation, operational excellence, and sustained competitive advantage in today's dynamic business environment. Our commitment to delivering innovative, scalable, and efficient BI solutions ensures that your organization can harness the power of data to drive informed decision-making, enhance operational efficiency, and foster a culture of continuous improvement and innovation. Trust Enormous IT to be your partner in achieving business intelligence excellence and unlocking the full potential of your data.</p>
            </div>


          </div>
        </div>


        <div className="fontspm">
          <p className="paraspm">Partner with Enormous IT for Microsoft Services and discover how we can help you.<a className='preag' href="" target="_blank" rel="noopener noreferrer"> Contact us</a> to learn more.</p>
        </div>
      </div>
      <button onClick={scrollToTop} className="btnpm btn-primary up-arrow"><i className="fas fa-arrow-up">{'^'}</i></button>
    </div>

  )
}