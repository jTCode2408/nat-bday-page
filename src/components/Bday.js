//page with actual bday message on it.
//popup message upon click?
//gif/meme?
//API ENDPOINT ***(curl -H "User-Agent: My Library (https://github.com/username/repo)" https://icanhazdadjoke.com/)
import React, {useEffect, useState} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';



const Bday = ()=>{

const [joke, setJoke] = useState()
useEffect(()=>{
    axios
    .get('https://icanhazdadjoke.com/', {headers:{
        'Accept': 'application/json'}}
    )
    .then (res=>{
        console.log(res.data)
        setJoke(res.data.joke)
    
    })
    .catch(error=>console.error(error))

}, [])


return(
    <div className = "joke-div">
        <div className = "joke-head">
        <h1>Happy Birthday Bitchass!</h1>
        </div>

        <div className = "joke-cont">
<p>{joke}</p>
</div>

    </div>
)

}


export default Bday;