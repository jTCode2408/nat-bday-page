import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Bday from './components/Bday';
import Main from './components/Main';

const Router =()=>{
return(
    <div>

        
        <Switch>

       
<Route path ='/components/Bday'>
    <Bday/>

</Route>
<Route exact path = '/components/Main'>
    <Main/>

</Route>
</Switch>

    </div>

);
}

export default Router;