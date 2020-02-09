//page with actual bday message on it.
//popup message upon click?
//gif/meme?
//API ENDPOINT ***(curl -H "User-Agent: My Library (https://github.com/username/repo)" https://icanhazdadjoke.com/)
import React, {useEffect, useState} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import droBall from '../images/droBall.JPG';
import droCup from '../images/droCup.PNG'
import droGis from '../images/droGis.jpg';
import dogMeme from '../images/dogMeme.JPG';


const StyledJokeDiv = styled.div`
border:2px solid black;
// display: grid;
// grid-teplate-columns:repeat(auto-fit,minimax(300px,1fr))
// place-items: center;
text-align: center;
background-color:gold;
height:33vh;
`
const StyledDogsDiv = styled.div`
border:2px solid red;
display:flex
`

const Bday = ()=>{

const [joke, setJoke] = useState() //use ste fx to set response to joke

//set variable for onclick to fire axios call
useEffect(()=>{
    axios
    .get('https://icanhazdadjoke.com/', {headers:{
        'Accept': 'application/json'}}
         //format response to json
    )
    .then (res=>{
        console.log(res.data)
        setJoke(res.data.joke)
        
    
    })
    .catch(error=>console.error(error))

}, []) //end of useFX. dependency array empty to only run once



return(
    <StyledJokeDiv>
        <div className = "joke-head">
        <h1>Happy Birthday kid!</h1>
        </div>

        <div className = "joke-cont">
            <div className = "joke-text">
            <h2>Here's a joke for ya</h2>
            <h4>  {joke}</h4>
            </div>

<StyledDogsDiv>
            <img src = {droCup} alt = "picture of drogo drinking from martini cup"/>
            </StyledDogsDiv>
</div>

    </StyledJokeDiv>
)

}


export default Bday;