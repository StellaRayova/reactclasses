import React, { useState } from 'react';
import Propschild from './Propschild';

const Propstask = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <>
    <div>
      <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input type="text" placeholder="Enter age" value={age} onChange={(e) => setAge(e.target.value)}
      />
      
      <Propschild name={name} age={age} />
    </div>


</>
  );
};

export default Propstask;



// import { useState  } from "react"
// import Child from "./Child"


// function Class6(){



//     const[name,setName] =useState("");
//     const[place,setPlace]=useState("");
//     const[gender,setGender]=useState("");
//     const[value,setValue] =useState([]);

    
    
//         function Name(e){
//             setName(e.target.value)
//           }
        
//           function Place(e){
//             setPlace(e.target.value)
//           }
        
//           function Gender(e){
//             setGender(e.target.value)
//           }
        
//          function handleclick(){
//         const newValue={name,place,gender};
//          setValue(value=>[...value,newValue]);

 
//             setName("");
//             setPlace("");
//             setGender("");

//         }
//     return(
//         <>
//         <input type="text" placeholder="Enter your name" onChange={Name} value={name} />
//         <input type="text" placeholder="Enter your place" onChange={Place} value={place}/>
//         <input type="text" placeholder="Enter your gender" onChange={Gender} value={gender}/>
//         <button onClick={handleclick}>Submit</button>

//         <Child Hello={value}/>
//        </>
//     )

// }
// export default Class6;







