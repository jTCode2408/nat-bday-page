//main page with button routing to bday message page
import React from 'react';
import {Link, Switch} from 'react-router-dom';
import Bday from './Bday';

const Main =()=>{
    return(
        <div>
<h1>Natalie's super secret bday page</h1>

<Link>
<button>Enter</button>
</Link>
        </div>
    )
}


export default Main;
