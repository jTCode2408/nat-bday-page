import React from 'react';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom';
import Bday from './components/Bday';
import {BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className = "main-div">
   <div className = "main-head">
     <h1>Natalie's super secret bday page</h1>
    </div>
  
    <Link to = '/bday'>
     <button>Enter</button>
     </Link>
    
     <Route exact path ='/bday' component ={Bday}></Route>
     
    </div>
    </Router>


  );
}

export default App;
