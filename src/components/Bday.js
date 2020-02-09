//page with actual bday message on it.
//popup message upon click?
//gif/meme?
//API ENDPOINT ***(curl -H "User-Agent: My Library (https://github.com/username/repo)" https://icanhazdadjoke.com/)
import React, {useEffect, useState} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const StyledJokeDiv = styled.div`
border:2px solid black;
`


const Bday = ()=>{

const [joke, setJoke] = useState() //use ste fx to set response to joke

//set variable for onclick to fire axios call
useEffect(()=>{
    axios
    .get('https://icanhazdadjoke.com/', {headers:{
        'Accept': 'application/json'}} //format response to json
    )
    .then (res=>{
        console.log(res.data)
        setJoke(res.data.joke)
        
    
    })
    .catch(error=>console.error(error))

}, []) //end of useFX. dependency array empty to only run once



return(
    <div className = "joke-div">
        <div className = "joke-head">
        <h1>Happy Birthday Bitchass!</h1>
        </div>

        <div className = "joke-cont">
            <h2>Here's a joke for ya</h2>
            <h4>  {joke}</h4>
</div>

    </div>
)

}


export default Bday;