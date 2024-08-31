import { useState } from "react"

function Prac7(){
const[name,setName]=useState("");
const[empno,setEmpno]=useState("");
const[city,setCity]=useState("");
const[cont,setCont]=useState("");
const[value,setValue]=useState([]);
const [editIndex, setEditIndex] = useState(null);

function Name(e)
{
    setName(e.target.value)
}

function Empno(e){
    setEmpno(e.target.value)
}

function City(e){
    setCity(e.target.value)
}

function Cont(e){
    setCont(e.target.value)
}

function Click(){
    const newvalue={name,empno,city,cont}
    setValue(value=>[...value,newvalue])
    setName("");
    setEmpno("");
    setCity("");
    setCont("");
}



    return(
        <>
        <div>
<input type="text" placeholder="Name" value={name} onChange={Name}/> 
<input type="number" placeholder="Empno" value={empno} onChange={Empno}/> 
<input type="text" placeholder="City" value={city} onChange={City}/> 
<input type="number" placeholder="Contact No" value={cont} onChange={Cont}/> 
<button onClick={Click}>submit</button>
        </div>

        <div>
            <table border={1}>
                <tr>
                    <th>Name</th>
                    <th>Empno</th>
                    <th>City</th>
                    <th>Contact No</th>
                </tr>

                {value.map((e) =>(
                    <tr>
                    <td>{e.name}</td>
                    <td>{e.empno}</td>
                    <td>{e.city}</td>
                    <td>{e.cont}</td>
                </tr>
                ))}
                
            </table>
        </div>

        </>
    )
}
export default Prac7; 
