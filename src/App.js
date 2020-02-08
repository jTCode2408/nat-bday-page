import React from 'react';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom';
import Bday from './components/Bday';
import Main from './components/Main';
import Router from './Router';
function App() {
  return (
    <Router>
    <Route path = '/bday' component = {Bday}>
    </Route>
    <Main/>
    </Router>
  );
}

export default App;
