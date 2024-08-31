import { useEffect, useState } from "react";
import "./Reactcls1.css";

function Usestate() {
    const [value, setValue] = useState("Something");
useEffect(() =>{
            setValue("newValue");
        },[])
    return (
        <>
            <div>
                <p>Usestate {value}</p>
            </div>


        </>
    )

}
export default Usestate;