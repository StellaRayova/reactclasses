import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Maptask from './Tasks/Maptask';
// import Routing1 from './Tasks/Routing1';
// import Class12 from './Tasks/Class12';
// import Routing1 from './Tasks/Routing1';
import ResumeForm from './Tasks/Resumeform';
// import Proptask2 from './Tasks/Proptask2';



const root = ReactDOM.createRoot(document.getElementById('root'));
// const data = 'Hello this is Parent' ;

// const tmp = {
//   name :"Stella" ,
//   designation : "SE"
// }

// const fun = {
//   "menu": {
//       "id": "file",
//       "value": "File",
//       "popup": {
//         "menuitem": [
//           {"value": "New", "onclick": "CreateNewDoc()"},
//           {"value": "Open", "onclick": "OpenDoc()"},
//           {"value": "Close", "onclick": "CloseDoc()"}
//         ]
//       }
//     }}


root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Homepage /> */}
    {/* <Task2/> */}
    {/* <Class1task /> */}
  {/* <Maptask  /> */}
{/* <Propstask value={data} employer={tmp} f={fun} /> */}
{/* <Proptask2 /> */}
{/* <Class12 /> */}
{/* <Routing1 /> */}
<ResumeForm />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
