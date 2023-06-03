import './App.css';
import Alert from './components/Alert';
import NavBar from './components/NavBar';
import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[Mode, setMode] = useState('light');
  
  const  toggleMode =()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#040930';
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")

    }
  }
  const[alert, setAlert] = useState(null);
  const showAlert =(message, type) => {
    setAlert({
      msg: message,
      Type: type
    })
    setTimeout(() =>{
        setAlert(null);
    }, 1500);
  }
  return (
    <>
   <Router> 
    <NavBar title="TextUtils" about="About" mode={Mode} toggleMode={toggleMode}/>
    <Alert alert={alert}></Alert>
    <div className="container my-3">
    <Routes>
          <Route path="/about" element= {<About/>}>
          </Route>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" 
          mode ={Mode}/>}>
          </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
