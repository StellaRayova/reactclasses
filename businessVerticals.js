import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHeartbeat, FaPills, FaMoneyCheckAlt, FaIndustry, FaBuilding, FaShieldAlt, FaShoppingCart, FaTruck, FaBoxOpen, FaBroadcastTower, FaHome, FaFilm, FaGovernment, FaFlask } from 'react-icons/fa';

const businessVerticals = [
    { icon: <FaHeartbeat size={50} />, title: "Health Care" },
    { icon: <FaPills size={50} />, title: "Pharma" },
    { icon: <FaMoneyCheckAlt size={50} />, title: "Finance" },
    { icon: <FaIndustry size={50} />, title: "Manufacturing" },
    { icon: <FaBuilding size={50} />, title: "NBFC" },
    { icon: <FaShieldAlt size={50} />, title: "Insurance" },
    { icon: <FaShoppingCart size={50} />, title: "Retail" },
    { icon: <FaTruck size={50} />, title: "Logistics" },
    { icon: <FaBoxOpen size={50} />, title: "Food & Packaging" },
    { icon: <FaBroadcastTower size={50} />, title: "Telecommunication" },
    { icon: <FaHome size={50} />, title: "Real Estate" },
    { icon: <FaFilm size={50} />, title: "Media & Entertainment" },
    { icon: <FaGovernment size={50} />, title: "Public Sector" },
    { icon: <FaFlask size={50} />, title: "BioTech" },
];

const BusinessVerticals = () => {
    return (
        <div className="container text-center mt-5">
            <h2>Our Business Verticals</h2>
            <div className="row mt-4">
                {businessVerticals.map((vertical, index) => (
                    <div key={index} className="col-md-3 mb-4">
                        <div className="border rounded p-4 shadow-sm h-100 d-flex flex-column align-items-center">
                            {vertical.icon}
                            <h5 className="mt-3 text-primary font-weight-bold">{vertical.title}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const App = () => (
    <div>
        <BusinessVerticals />
    </div>
);

export default App;
