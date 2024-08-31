import { useState } from "react";


function Usestate() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [color, setColor] = useState("")

    const [count, setCount] = useState(0)
 


function Name(e){
    setName(e.target.value);
}

function Email(e){
    setEmail(e.target.value)
}

function Color(e){
    setColor(e.target.value)
}

function handleAdd() {
    setCount(count + 1); 
}

function handleminus(){
    setCount(count - 1);                

}



    return(
        <>
        <div>
            <button onClick={handleminus}>-</button> {count} <button onClick={handleAdd}>+</button>
           <br></br>
            <input type="text" placeholder="Enter your Name"  value={name} onChange={Name} />

            <input type="text" placeholder="Enter your Email" value={email} onChange={Email} />
         
            <input type="text" placeholder="Enter your Color" onChange={Color} />

          

            <div style={{ color: color }}>
                    {name} {email}
                </div>
         
            </div>     
            

</>
    
    )

}
export default Usestate;