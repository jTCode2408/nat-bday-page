import React from 'react';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom';
import Bday from './components/Bday';
import Main from './components/Main';

function App() {
  return (
    <Route>

    <div className="App">
      <header className="App-header">
     <Main/>
      </header>
      <Bday/>
    </div>
    </Route>
  );
}

export default App;
