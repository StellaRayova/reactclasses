import React from 'react';

const Propschild = (props) => {
  const { name, age } = props;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default Propschild;

// function Child(props){


//     return(
//       <>
//         <table border={6}>
//           <tr>
    
//             <th>Name</th>
//             <th>Place</th>
//             <th>Gender</th>
    
//           </tr>
//       {props.Hello.map((e,index)=>(
//         <>
//         <tr>
//           <td>{index+1}</td>
//           <td>{e.name}</td>
//           <td>{e.place}</td>
//           <td>{e.gender}</td>
//         </tr>
//         </>
//       ))}
//         </table>
    
// //     </>
// )
  
// }
// export default Child;