import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainpage from "./Mainpage";
import Edgeservices from "./Edgeservices";

const Routing = (props) => {
  return (
<Router>
    <Routes>
        <Route path='/' element={<Mainpage  />}/>
        <Route path='/hh' element={<Edgeservices />} />

    </Routes>
</Router>
  );
};

export default Routing;