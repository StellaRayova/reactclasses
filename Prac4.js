import { useEffect, useState } from "react";

 
 function Prac4(){
const[value,setValue]=useState("something");
useEffect(() =>{
    setValue("anything")
},[]) 

    return(
        <>
        
        <p>Usestate {value} </p>
        









        
        </>
    )
 }
 export default Prac4;