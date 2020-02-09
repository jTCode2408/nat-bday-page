import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Bday from './components/Bday';
import {BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import droLay from './images/droLay.JPG'
import './App.css'
const StyledMainDiv = styled.div`
border:2px solid rgb(83, 2, 2);
background: url(${droLay});
box-sizing:border-box;
border-radius:5px;
margin:5px;
display: grid;
grid-teplate-columns:repeat(auto-fit,minimax(300px,1fr))
place-items: center;
text-align: center;
height:66vw;
`

const StyledButton = styled.button`
border-radius:10px;
display: inline-block;
font-size: 1.8rem;
padding: 2rem 2rem;
border: 0;
cursor: pointer;
background: 
    radial-gradient(140.21% 237.58% at 78.43% 139.84%,
    rgba(67, 8, 65,1) 0%,
    rgba(114, 2, 110, 0.75) 100%);
box-shadow:
    0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25),          
    0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);

&:hover {
    background: 
        rgba(247, 251, 13, 1) 0%
}

`
function App() {
  return (
    <Router>
    <StyledMainDiv>
   <div className = "main-head">
     <h1>Natalie's super secret bday page</h1>
    </div>
 
    <Link to = '/bday'>
     <StyledButton>Enter</StyledButton>
     </Link>
       
  
     <Route exact path ='/bday' component ={Bday}></Route>
      
     </StyledMainDiv>
    </Router>


  );
}

export default App;
