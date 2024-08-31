import { useState } from "react";

function Class5(){
    // const [srno, setSrno] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [designation, setDesignation] = useState("");
    const [employer, setEmployer] = useState(""); 
    const [value, setValue] = useState([]);
    const[count, setCount]= useState(1);

    function Name(e) {
        setName(e.target.value);
    }

    function Last(e) {
        setLastname(e.target.value);
    }

    function Designation(e) {
        setDesignation(e.target.value);
    }

function Employer(e)  {
    setEmployer(e.target.value);
}

function handleClick() {
    const newValue={srno:count,name,lastname,designation,employer}
setValue(value=>[...value,newValue]);

// setSrno("");
setName("");
setLastname("");
setDesignation("");
setEmployer("");
setCount(count+1);

   console.log(value);
  
}

    // const enabled = name && lastname && designation && employer
    return(
        <>
        {/* <input type="number" value={srno}   placeholder="Sr No" onChange={Srno} /> */}
        <input type="text" value={name} placeholder="name" onChange={Name}/>
        <input type="text" value={lastname} placeholder="Lastname" onChange={Last}/>
        <input type="text" value={designation} placeholder="Designation" onChange={Designation}/>
        <input type="text" value={employer} placeholder="Employer" onChange={Employer}/>
        {/* <button onClick={handleClick} disabled={!enabled}>Add</button> */}
        <button onClick={handleClick} disabled={!name||!lastname||!designation||!employer}>Add</button> 
<table border={1} > 
<tr>
    
    <th>srno</th>
    <th>name</th>
    <th>lastname</th>
    <th>designation</th>
    <th>employer</th>
   
    </tr>

        {value.map((el)=>(
            <tr >
            <td>{el.srno}</td>
            <td>{el.name}</td>
            <td>{el.lastname}</td>
            <td>{el.designation}</td>
            <td>{el.employer}</td>
            
            </tr>

        ))}

    </table>


        
        </>
    )
}
export default Class5;