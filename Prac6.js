import { useState } from "react";

function Prac6() {
const[count,setCount]=useState(0);
const navigate=useNavigate();


    function click(){
        setCount(count+1);
    }

    function click1(){
        setCount(count-1);
    }

    return(
<>

<div>
<button onClick={click}>+</button>{count}<button onClick={click1}>-</button>
</div>

</>


    )
}
export default Prac6;