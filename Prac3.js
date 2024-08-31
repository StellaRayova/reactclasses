import { useState } from "react";
import './Prac3.css';

function Prac3(){
const[value,setValue] = useState("blue");
const[clr,setClr] = useState("green");
const[clr1,setClr1] =useState("yellow");

    return(
        <>
<h1 className={value =="blue" ? "redclass" : "greenclass"}>
'setClr' is assigned a value but never used 
    </h1> {value}      
    
    <h2 className={clr == "green" ? "greenclass" : "blueclass"}>
    'setClr' is assigned a value but never used
    </h2>{clr}

<h3 className={clr1 == "yellow" ? "yellowclass" : "blueclass"}>
'setClr' is assigned a value but never used
</h3> {clr1}


     </>
    )
}
export default Prac3;