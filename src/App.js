import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Bday from './components/Bday';
import {BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import droLay from './images/droLay.JPG'

const StyledMainDiv = styled.div`
border:2px solid red;
background: url(${droLay});

`

const StyledButton = styled.button`
border-radius:10px;

`
function App() {
  return (
    <Router>
    <StyledMainDiv>
   <div className = "main-head">
     <h1>Natalie's super secret bday page</h1>
    </div>
  
    <Link to = '/bday'>
     <button>Enter</button>
     </Link>
    
     <Route exact path ='/bday' component ={Bday}></Route>
     
    </StyledMainDiv>
    </Router>


  );
}

export default App;
