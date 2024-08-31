
 
//     const Props =(props)=>{
//         const data= "Hello this is child"


//     return(
// <>
// {data}<br></br>
// {props.value}<br></br>
// {props.employer.name}<br></br>
// {props.employer.designation}



// </>

//     )
// }
// export default Props;

// import { useState } from "react"
// import Child from "./Child";


// const Props =(props)=>{
//     const [data,setData]=useState();
//     function Data(e){
//         setData(e)
//     }
//     return(
//         <>
//         <Child sendBack={Data}/>
//         {data}<br></br>
//         {props.value}<br></br>
//         {props.employer.name}<br></br>
//         {props.employer.designation}<br></br>
//         </>
//     )
// }
// export default Props;


const Props =(props)=>{
    const fun= {
        "menu": {
            "id": "file",
            "value": "File",
            "popup": {
              "menuitem": [
                {"value": "New", "onclick": "CreateNewDoc()"},
                {"value": "Open", "onclick": "OpenDoc()"},
                {"value": "Close", "onclick": "CloseDoc()"}
              ]
            }
          }}  






          

          return(
            <>
{fun.menu.popup.map((e)=>(
    <>
    {fun.menu.popup.menuitem[0].value}
    {fun.me}
    </>
))}





            {props?.f?.menu?.id}
            {/* {props.fun1.menu.menuitem[0].onclick} */}
         

            </>


          )

        }
        export default Props;
        







