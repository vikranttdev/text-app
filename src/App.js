import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';
import Alert from './components/Alert';


function App() {
  const [mode,setMode]=useState("light");
  const [alert,setalert]=useState(null);

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type: type   
    })
    setTimeout(() => {
      setalert(null);
      
    },1500);
  }

    const toggleMode=()=>{
    if(mode==="light"){
    setMode("dark");
    document.body.style.backgroundColor="#042743";
    showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert(" Light Mode has been enabled","success");
    }
  }
  return (
    <>
<Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} aboutUs="About TextUtils" />
<Alert alert={alert}/>

<div className='container my-2'>
 <TextForm showAlert={showAlert} mode={mode} heading="Enter the Text Below to Analyze"/>
 <AboutUs mode={mode}/>
</div>

    </>
  );
}

export default App;

