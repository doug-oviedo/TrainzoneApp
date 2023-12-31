import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';
import Navbar from "./Components/Navbar";

function App() {
  const [Form, setForm] = useState('login');

  const toggleForm = (formName) => {
    setForm(formName);
  }

  return (
    
    <div className="App">
      <header>
        <React.Fragment>
        <Navbar />
      </React.Fragment>
      </header>
      <h1> WELCOME TO TRAINZONE</h1>
      {
        Form === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
