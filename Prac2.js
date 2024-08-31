import { useState } from "react"


function Prac2(){
   const[clr,setClr] =useState("blue");
   
   
    return(
        <>
     <span style={{color:clr}} >  'setColor' is assigned a value but never used</span>   
        <br/>
<span>magical <span style={{color:clr}}>expressive</span>   native</span>
        
        </>
    )
}
export default Prac2;