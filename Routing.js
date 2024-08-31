import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Class3task from "./Class3task";
import Class5task from "./Class5task";
import Clrtask from "./Clrtask";


const Routing=()=>{

return(
        <>
<Router>
    <Routes>
        <Route path='' element={<Class3task />} />
        <Route path='/hello' element={<Class5task />} />
        <Route path='/bye' element={<Clrtask />} />
        {/* <Route path='/hi' element={<Class1 />} />
        <Route path='/oh' element={<Class4 />} /> */}
    </Routes>
</Router>
        </>
    )
}
export default Routing;