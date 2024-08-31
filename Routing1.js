import { BrowserRouter as Router,Routes,Route, Link } from "react-router-dom"


import Navbar from './Navbar';
import Class3task from "./Class3task";
import Class5task from "./Class5task";
import Clrtask from "./Clrtask";

const Routing1=()=>{

    return(
            <>
    <Router>
    <Navbar />
        <Routes>
            <Route path='' element={<Class3task />} />
             <Route path='/hello' element={<Class5task />} />
            <Route path='/bye' element={<Clrtask />} />
            {/* <Route path='/hi' element={<Test4 />} />
            <Route path='/hey' element={<Test5 />} />  */}
        </Routes>
    </Router>
            </>
        )
    }
    export default Routing1;