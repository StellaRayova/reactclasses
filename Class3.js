// import { useState } from "react";


// function Usestate(){
//     const [value, setValue] = useState(0);
// const[msg , setMsg] = useState(0)

//     function changeEvent(e) {
//         setValue(e.target.value);
//     }

//     function handleClick(){
//         if (value>10)  {
//             setMsg("adult")
//         } else {
//             setMsg("child")
//         }
//     }
//     return(
//         <>
//         <input type="number" placeholder="Enter your age" onChange={changeEvent} />
//         <p>{msg}</p>
//         <button onClick={handleClick}>Submit</button>


//         </>






//     )
// }
// export default Usestate;

// import { useState } from "react";

// function Usestate(){
//         const [value, setValue] = useState(0);

//         function changeEvent(e) {
//             setValue(e.target.value);
//         }
// const condition= 10;
// let msg="age is greater than 20" ;
// if (value>18) {
//     msg="adult"
//     } else {
//         msg="child"
//         }
//         return(
// <>
// {
//     condition>20 ? <p>adult</p> : <p>child</p>

// }

// </>

//         )
//     }
//     export default Usestate;



// import { useState } from "react";

// function Usestate(){
//         const [value, setValue] = useState(0);
// const[msg , setMsg] = useState("");
//         function changeEvent(e) {
//             setValue(e.target.value);
//         }
//         function handleClick(){
// if (value<18) {
//     setMsg("child")
//     } 

//     else if(value>18 && value<40) {
//     setMsg("adult")
// }

//     else {
//         setMsg("aged")
//         }
//     }
//         return(
// <>

// <input type="number" placeholder="Enter your age" onChange={changeEvent}/>
// <p>{msg}</p>
// <button onClick={handleClick}>submit</button>
// </>

//         )
//     }
//     export default Usestate;


// import { useState } from "react";

// function Usestate(){
//         const [value, setValue] = useState(0);
// const[msg , setMsg] = useState("");
//         function changeEvent(e) {
//             setValue(e.target.value);
//         }
//         function handleClick(){
// if (value ==" ") {
//     setMsg("Please Fill the required field")
//     } 

//     else if(value>18)
//         {
//             setMsg("child")
//         }

//     else if(value>18 && value<40) {
//     setMsg("adult")
// }

//     else {
//         setMsg("aged")
//         }
//     }
//         return(
// <>

// <input type="number" placeholder="Enter your age" onChange={changeEvent}/>
// <p>{msg}</p>
// <button onClick={handleClick}>submit</button>
// </>

//         )
//     }
//     export default Usestate;



// import React, { useState } from "react";

import { useState } from "react";

function Class3() {
    const [con, setCon] = useState("");
    const [lastname, setLast] = useState("");
    const [firstname, setFirst] = useState("");
    const [age, setAge] = useState("");
    const [description, setDesc] = useState("");
    const [msg, setMsg] = useState("");

    function Contact(e) {
        setCon(e.target.con);
    }

    function Last(e) {
        setLast(e.target.lastname);
    }

    function First(e) {
        setFirst(e.target.firstname);
    }

    function Age(e) {
        setAge(e.target.age);
    }

    function Des(e) {
        setDesc(e.target.description);
    }

    function handleClick() {
        if ( con === "") {
            setCon("Please fill in the mobile number field");
        }

        if ( lastname === "") {
            setLast("Please fill in the last name field");
        }

        if ( firstname === "") {
            setFirst("Please fill in the first name field");
        }

        if ( age === "") {
            setAge("Please fill in the age field");
        }

        if ( description === "") {
            setDesc("Please fill in the description field");
        } 
        if (con === "" || lastname === "" ||  firstname === "" ||  age === "" ||  description === "")
             setMsg("");
         else {
            setMsg("submitted");
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
                <button onClick={handleClick}>Submit</button>
                <p>{msg}</p>
            </div>
        </>
    );
}

export default Class3;



