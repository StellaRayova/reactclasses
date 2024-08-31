import { useEffect, useState } from "react";
import "./Class1task.css"

function Usestate() {
   const [value , setValue] = useState("blue");
   const [valueY] = useState("Sky");

        // useEffect(()=>{
        //     setValue("green");
        // },[])
       return (
        <>
           <div>
            <p className={value == 'red'?'redClass':"blueClass"}>Usestate  {value} </p>
            <h2 style={{ color: value }}>ABOUT US</h2>
                <h1>We revamp your skills for succeeding further.</h1>
                <p>We have facilitated internships but now we want to have a big room for spreading our ideas <br />and knowledge to more people.
                    Also we facilitate to access the course anywhere in the world.</p>
                <span style={{ color: value }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
                
                <h3 className={value == 'red' ? 'redClass' : "blueclass"}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </h3>

               <span className={valueY == 'yellow' ? 'Yellow' : "Sky"}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</span>
           </div>
        </>
    )
}
export default Usestate;