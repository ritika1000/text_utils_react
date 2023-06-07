import Navbar from './component/Navbar';
import TextBox from './component/TextBox';
import './App.css';
import About from './component/About';
import React, { useState } from 'react';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route ,
  //Link 
} from "react-router-dom";
 

function App() {
  const [mode , setmode] = useState('light');
  const[alert,setAlert]=useState('null');
  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode=()=>{
    if( mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is enabled","success");
    
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled","success");
     
    }
  }
  return (
    <>
    <Router><Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
    <Alert alert={alert}/>
      <div className='container my-3'>
      <Routes>
      <Route exact path="/about" element={<About />}></Route>	
     <Route exact path="/" element=
          {<TextBox title="Enter text to Anaylse" mode={mode} togglemode={togglemode} showAlert={showAlert}/>
          }     >     </Route>
        </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
