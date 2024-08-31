import { useState } from "react"
// import './Prac3.css';

function Prac5(){
   const[value,setValue] = useState("blue");
const navigate=useNavigate();

   function click(e)
   {
    setValue("red")
navigate('/hello')
   }

    return(
        <>
        <div>
        <p className={value == "blue" ? "blueclass" : "greenclass"}>'setValue' is assigned a value but never used</p>
        <button onClick={click}>submit</button>
        </div>
        </>
    )
}
export default Prac5;