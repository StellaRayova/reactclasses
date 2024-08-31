
import { useState } from "react";
import Child1 from "./Child1";
import "./Propstask2.css";

function Proptask2() {
    const [data, setData] = useState([]);

    const handleGetData = (childData) => {
        setData((prevData) => [...prevData, childData]);
    };

    return (
        <div>
            <Proptask2child
            
            
            
            
            sendBack={handleGetData} />

            
                {data.map((item, index) => (
                    <div className="card" key={index}> 
                        <p>Name:{item.name}</p>
                        <p>Place: {item.place}</p>
                        <p>Gender: {item.gender}</p>
                    </div>
                ))}
            </div>
    );
}

export default Proptask2;