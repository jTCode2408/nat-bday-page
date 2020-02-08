//main page with button routing to bday message page
import React from 'react';
import {Link, Switch} from 'react-router-dom';
import Bday from './Bday';
import styled from 'styled-components';



const Main =()=>{
    return(
        <div className = "main-div">
            <div className = "main-head">
<h1>Natalie's super secret bday page</h1>
</div>

<Link>
<button>Enter</button>
</Link>
        </div>
    )
}


export default Main;
