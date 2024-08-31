import React from 'react';
import './Routing.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import EnavBar from './EnavBar';
import Home from './Navcom/Home';
import Aboutus from './Navcom/Aboutus';
import Services from './Navcom/Services';
import Industry from './Navcom/Industry';
import Contact from './Navcom/Contact';
 import Footer from './Footer';

import Ai from './Ai';
import Technologies from './Technologies';
// import Infrastructure from './Infrastucture';
import MainInfra from './Maininfra';
import Infrastructure from './Infrastucture';
import Iaasinfra from './Iaasinfra';
import Disaster from './Disaster';
import Hqainfra from './Hqainfra';
import Zerodata from './Databackup';
import Databackup from './Databinfra';
import Rimsinfra from './Rimsinfra';
import Mdsinfra from './Mdsinfra';
import Rn from './Talentpool';
import Rao from './Webofferings';
import KBigdata from './KBigdata';
import NNNav from './NNNav';
import SapMain from './Sap/Sapmainpage';
import Sap1Erp from './Sap/SapErp';
import Sap2 from './Sap/SapHana';
import Sap3Cloud from './Sap/SapCloud';
import Sap4ABI from './Sap/SapABI';
import Sap5Integartion from './Sap/SapInt';
import Sap6Training from './Sap/SapTaining';
import Bidw from './BIDW';
import Msmain from './TMsfiles/Mstechmain';
import MSproduct from './TMsfiles/MSproduct';
import Msbi from './TMsfiles/MsBussInt';
import OracleCloudmain from './Oraclecloudapp/Oraclecloudmain';
import OracleCloudERP from './Oraclecloudapp/ERPo';
import OracleCloudHCM from './Oraclecloudapp/Hcmo';
import OracleCloudScm from './Oraclecloudapp/Scmo';
import OracleCloudEPm from './Oraclecloudapp/Epmo';
import OracleCloudEbs from './Oraclecloudapp/Ebso';
import OracleCloudCx from './Oraclecloudapp/CXo';
import OracleManagedServices from './OracleManagedServices/OrManagedMain';
import OracleDatabaseManagement from './OracleManagedServices/MDatabaseManagement';
import OracleAppsDBAServicespage from './OracleManagedServices/OAppsDBA';
import OracleDBAremote from './OracleManagedServices/OdbaRemote';
import Additionalorcleservicesmain from './AddOrServices/Addosmain';
import Performancetuning from './OracleManagedServices/Performancetuning';
import Exadata from './AddOrServices/ExaData';
import Fusionmiddleware from './AddOrServices/FussionMiddleware';
import OracleIntegration from './AddOrServices/OracleIntegration';
import DatabaseonCloud from './AddOrServices/DatabaseCloud';
import MsArch from './TMsfiles/MsEA';
import Installation from './OracleManagedServices/InstallationUpdation';
import SupportServices from './OracleManagedServices/SupportServices';
import DataMigration from './OracleManagedServices/DataMigration';
import MSCustApp from './TMsfiles/Mscad';

// import Mts from './Mstechmain';
// import Bbigdata from './SBigdata';
// import Infrastructure from './Navcom/Infrastucture';

export default function Routing() {
  return (
    <div>

      <Router>
        {/* <EnavBar /> */}
        <NNNav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/" element={<Services />} />
          {/* <Route path="/technologies" element={<Technologies />} /> */}
          {/* <Route path="/infrastucture" element={<Infrastructure />} /> */}
          <Route path="/infrastructure" element={<MainInfra />}/>
          <Route path="/industry-vericles" element={<Industry />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/artifitial-intelligence" element={<Ai />} />
          <Route path='/technologies' element={<Technologies />} />


          {/* About us */}
          <Route path='our-vision' element={<Aboutus />}/>

          {/* Infrastucture */}
          <Route path='/iaas-the-cloud-on-demand' element={<Iaasinfra />} />
          <Route path='/disaster-recovery-on-demand' element={<Disaster />} />
          <Route path='/high-availability-solution' element={<Hqainfra />}/>
          <Route path='/zero-data-loss' element={<Zerodata />}/>
          <Route path='/data-backup' element={<Databackup />} />
          <Route path='/remote-infrastucture-monitoring-services' element={<Rimsinfra />} />
          <Route path='/managed-dedicated-server' element={<Mdsinfra />} />
          <Route path='/virtual-private-network' element={<Infrastructure />}/>  

          {/* Services */}
          {/*oracle Cloud */}
          <Route path='/oracle-cloud-applications' element={<OracleCloudmain />} />
          <Route path='/oracle-fusion-cloud-erp' element={<OracleCloudERP />} />
          <Route path='/oracle-fusion-cloud-hcm' element={<OracleCloudHCM />} />
          <Route path='/oracle-fusion-cloud-scm' element={<OracleCloudScm />} />
          <Route path='/oracle-fusion-cloud-epm' element={<OracleCloudEPm />} />
          <Route path='/oracle-e-business-suite' element={<OracleCloudEbs />} />
          <Route path='/oracle-fusion-cloud-cx' element={<OracleCloudCx />} />

          {/* oracle managed */}
          <Route path='/oracle-managed-services' element={<OracleManagedServices />} />
          <Route path='/oracle-database-management' element={<OracleDatabaseManagement />} />
          <Route path='/oracle-apps-dba-services' element={<OracleAppsDBAServicespage />} />
          <Route path='/oracle-dba-remote-dba-services' element={<OracleDBAremote />} />
          <Route path='/installation-and-upgradation' element={<Installation />} />
          <Route path='/performance-tuning-and-optimization' element={<Performancetuning />} />
          <Route path='/database-support-services' element={<SupportServices />} />
          <Route path='/data-migration' element={<DataMigration />} />

          {/* oracle additional */}
          <Route path='/additional-oracle-services' element={<Additionalorcleservicesmain />} />
          <Route path='/exadata-adminstration' element={<Exadata />} />
          <Route path='/fusion-middleware' element={<Fusionmiddleware />} />
          <Route path='/oracle-integration' element={<OracleIntegration />} />
          <Route path='/bdas-database-on-cloud' element={<DatabaseonCloud />} />



          <Route path='/big-data' element={<KBigdata />}/>
          <Route path='/business-intelligence-and-data-warehusing-solutions' element={<Bidw />} />
          <Route path='/talent-as-a-service' element={<Rn />}/>
          <Route path='/web-offerings-and-mobile-applications' element={<Rao />}/>

          {/* Sap pages */}
          <Route path='/sap-technology-services' element={<SapMain />} />
          {/* Sap subpages */}
          <Route path='/sap-erp-implementation-and-management' element={<Sap1Erp/>} />
          <Route path='/sap-s4hana-migration' element={<Sap2 />} />
          <Route path='/sap-cloud-solutions' element={<Sap3Cloud />} />
          <Route path='/sap-analytics-and-business-intelligence' element={<Sap4ABI />} />
          <Route path='/sap-integration-services' element={<Sap5Integartion />} />
          <Route path='/sap-training-support' element={<Sap6Training />} />

          <Route path='/microsoft-technology-services' element={<Msmain />} />
          <Route path='/microsoft-product-solutions' element={<MSproduct />} />
          <Route path='/microsoft-business-intelligence' element={<Msbi />} />
          <Route path='/microsoft-enterprise-architecture-services' element={<MsArch />} />
          <Route path='/microsoft-custom-application-development' element={<MSCustApp/> } />
          
        </Routes>
        {/* <Footer /> */}
        <Footer />
      </Router>
    </div>
  )
}
