// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Class3task() {
//     const [con, setCon] = useState("");
//     const [lastname, setLast] = useState("");
//     const[firstname, setFirst]= useState("");
//      const[age, setAge]= useState("");
//      const[description, setDesc]= useState("");
    
//     const [con1, setCon1] = useState("");
//     const [lastname1, setLast1] = useState("");
//     const[firstname1, setFirst1]= useState("");
//     const[age1, setAge1]= useState("");
//     const[description1, setDesc1]= useState("");
//     const[msg,setMsg]= useState(""); 
//     const[data,setFakeData]=useState("")
//     useEffect(()=>{
//         // axios.get("https://fakestoreapi.com/products").then(json=>setFakeData(json.data));
//         fetch('https://fakestoreapi.com/products').then((res) => res.json()).then(json => setFakeData(json));});
    


//     function Contact(e) {
//         setCon(e.target.value);
//         setCon1("");
//     }

//     function Last(e) {
//         setLast(e.target.value);
//         setLast1("");
//     }

//     function First(e) {
//         setFirst(e.target.value);
//         setFirst1("");
//     }

//     function Age(e) {
//         setAge(e.target.value);
//         setAge1("");
//     }

//     function Des(e) {
//         setDesc(e.target.value);
//         setDesc1("");
//     }

//     function handleClick() {
//         if (con === " ") {
//             setCon("Please Fill the mobile number field")
//         }

//          if (lastname === " ") {
//             setLast("Please Fill the last name field")
//         }

//          if (firstname === " ") {
//          setFirst("Please Fill the first name field")   
           
//               }

//          if (age === " ") {
//             setAge("Please Fill the age field")
//         }

//          if (description === " ") {
//             setDesc("Please Fill the description field")
//         }
       
//         if (con === "" || lastname === "" || firstname === "" || age === "" || description === ""){
//             setMsg("");
//         }
//         else{
//         setMsg("Form submitted successfully");
//     }
// }
//     return (
//         <>
     
// <div>
//             <input type="number" placeholder="Enter your Mobile Number" onChange={Contact} />
//             <p>{con}</p>
//             <input type="text" placeholder="Enter your Last name" onChange={Last} />
//             <p>{lastname}</p>
//             <input type="text" placeholder="Enter your First name" onChange={First} />
//             <p>{firstname}</p>
//             <input type="number" placeholder="Enter your age" onChange={Age} />
//             <p>{age}</p>
//             <input type="text" placeholder="Enter your desc" onChange={Des} />
//             <p>{description}</p>
           
//             <button onClick={handleClick}>submit</button>
//             {/* <p>{msg1}</p> */}
//             </div>

//         </>

//     )
// }
// export default Class3task;

import React, { useEffect, useState } from "react";

function Class3task() {
    const [con, setCon] = useState("");
    const [lastname, setLast] = useState("");
    const [firstname, setFirst] = useState("");
    const [age, setAge] = useState("");
    const [description, setDesc] = useState("");
    const [msg, setMsg] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => setProducts(json))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    function Contact(e) {
        setCon(e.target.value);
    }

    function Last(e) {
        setLast(e.target.value);
    }

    function First(e) {
        setFirst(e.target.value);
    }

    function Age(e) {
        setAge(e.target.value);
    }

    function Des(e) {
        setDesc(e.target.value);
    }

    function handleClick() {
        if (con === "") {
            setMsg("Please Fill the mobile number field");
        } else if (lastname === "") {
            setMsg("Please Fill the last name field");
        } else if (firstname === "") {
            setMsg("Please Fill the first name field");
        } else if (age === "") {
            setMsg("Please Fill the age field");
        } else if (description === "") {
            setMsg("Please Fill the description field");
        } else {
            setMsg("Form submitted successfully");
        }
    }

    return (
        <>
            <div>
                <input type="number" placeholder="Enter your Mobile Number" onChange={Contact} />
                <p>{con}</p>
                <input type="text" placeholder="Enter your Last name" onChange={Last} />
                <p>{lastname}</p>
                <input type="text" placeholder="Enter your First name" onChange={First} />
                <p>{firstname}</p>
                <input type="number" placeholder="Enter your age" onChange={Age} />
                <p>{age}</p>
                <input type="text" placeholder="Enter your desc" onChange={Des} />
                <p>{description}</p>
                <button onClick={handleClick}>submit</button>
                <p>{msg}</p>
            </div>

            <div>
                <h2>Product List</h2>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <strong>{product.title}</strong>: ${product.price}
                            <br />
                            <img src={product.image} alt={product.title} style={{ maxWidth: '100px' }} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Class3task;

