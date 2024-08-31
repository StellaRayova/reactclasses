import { useState } from "react";
import "./Class1task.css"


function Usestate() {
    const [value, setValue] = useState("Name");
    const [text, setText] = useState("Hello")
    const [count, setCount] = useState(0)
    
    function handleChange(){
        setValue("red");
        setText("Bon appetite")
    }

function changeEvent(e){
    setValue(e.target.value);
}

function handleAdd() {
    setCount(count + 1); //Increment the count.                  
}
    return(
        <>
        {/* <p style={{color:value}}>Hey..</p> */}
        <p className={value == 'red'?'redClass':"blueClass"}>Usestate  {value} </p>


        <button onClick={handleChange}>Submit</button>
        <p>
            <input type="text" onChange={changeEvent} />
            {text} <br></br>

            <button onClick={handleAdd}>Add</button>
            <p>Count: {count}</p>
            Welcome to the world {value}
            </p>

</>

    
    )

}
export default Usestate;