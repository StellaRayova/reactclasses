import axios from "axios";
import { useEffect, useState } from "react";

function Clrtask() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [place, setPlace] = useState("");
    const [gender, setGender] = useState("");
    const [msg, setMsg] = useState("");

    const [age1, setAge1] = useState("");
    const [place1, setPlace1]= useState("");
    const [gender1, setGender1] = useState("");
    const [name1, setName1] = useState("");
    const[data,setFakeData]=useState("")
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => setProducts(json))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    function Name(e) {
        setName(e.target.value);
        setName1("")
    }
    
    function Age(e) {
        setAge(e.target.value);
        setAge1("")
    }
    
    function Place(e) {
        setPlace(e.target.value);
        setPlace1("")
    }
    
    function Gender(e) {
        setGender(e.target.value);
        setGender1("")
    }

    function handleClick() {
        if ( name === ""){
            setName1("Please enter your name") 
       }  
           if (age === ""){
           setAge1("Please enter your age")
       
       }
           if (place === ""){
           setPlace1("Please enter your place")
       
       }
           if (gender === ""){
               setGender1("Please enter your gender")
           }

        if (name === "" || age === "" || place === "" || gender === "") {
            setMsg("");
        } else {
            setMsg("Submitted");
        }
    }

    return (
        <>
      
            <input type="text" placeholder="Enter your name" onChange={Name} />
            <p style={{ color: "red" }}>{name1}</p>
            <input type="text" placeholder="Enter your age" onChange={Age} />
            <p style={{ color: "blue" }}>{age1}</p>
            <input type="text" placeholder="Enter your place" onChange={Place} />
            <p style={{ color: "red" }}>{place1}</p>
            <input type="text" placeholder="Enter your gender" onChange={Gender} />
            <p style={{ color: "blue" }}>{gender1}</p>
            <button style={{ color: "red" }}onClick={handleClick}>Submit</button>
             <p style={{ color: "blue" }}>{msg}</p>
            <ul>
                <li style={{ color: "red" }}>{name}</li>
                <li style={{ color: "blue" }}>{age}</li>
                <li style={{ color: "red" }}>{place}</li>
                <li style={{ color: "blue" }}>{gender}</li>
            </ul>
        </>
    );
}

export default Clrtask;