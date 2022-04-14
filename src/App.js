import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from "react";
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  //Switch,
  Route,
  Routes,
  //Link
} from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light') // mode can either be dark or light, default is light

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout( () => {
      setAlert(null);
    }, 1500);
  }
  
  //document.body.style.backgroundColor='#0f5398'

  const toggleMode = () => {
    if (mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor='#f8f9fa';
      showAlert('Light Mode has been Enabled', 'success');
      //document.title ='TextUtils - Light Mode';
      // setInterval (() => {
      //   document.title ='TextUtils is Amazing';
      // },2000)
      // setInterval (() => {
      //   document.title ='TextUtils - Light Mode';
      // },1500)
    }

    else{
      setMode('dark');
      document.body.style.backgroundColor='#163664';
      showAlert('Dark Mode has been Enabled', 'success');
      //document.title ='TextUtils - Dark Mode';
      // setInterval (() => {
      //   document.title ='TextUtils is Amazing';
      // },2000)
      // setInterval (() => {
      //   document.title ='TextUtils - Dark Mode';
      // },1500)
    }
  }
  
  return (
    <>
      <Router>
          <Navbar title="TextUtils" aboutText="About US" mode={mode} toggleMode = {toggleMode}/>
          <Alert alert={alert}/>
          <div className='container my-4'>
             <Routes>
                <Route exact path="/about"  element={<About/>}>
                </Route>
                <Route exact path="/" element={<Textform heading="Enter the text to Manipulate" mode={mode} showAlert={showAlert}/>}>
                </Route>
            </Routes>
          </div>
      </Router>
   </>
  );
}
export default App;
