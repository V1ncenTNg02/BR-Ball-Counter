import React, { useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {setCookie, checkCookie} from '../helper/cookieHelper';
import { createOrFetch } from '../service/userService';
import '../styles/global.css';



const Signin = () => {
  const [username, setUsername] = useState('');
  const [error,setError] = useState(false);
  const navigate = useNavigate();

//check if the user name is empty and create cookies
  const handleButtonClick = async () => {
    if(username.length === 0){
      setError(true);
    }
    else{
      setError(false);
      try{
        const newUser = await createOrFetch(username);
        if(newUser){
          setCookie('userName', username, 1);
          setCookie('ballColor', Math.random() < 0.5 ? 'redball' : 'blueball', 1);
          setCookie('visits', 0, 1);
          setCookie('redball',newUser["redball"], 1);
          setCookie('blueball',newUser["blueball"], 1);
          navigate('/home');
        }else{
          throw new Error("Error happened in signin");
        };
      }catch(e){
        throw new Error("Error: Failing to connect to backend");
      }
    }
  };

// if the userName cookie exists, redirect to the home page
  useEffect(() => {
    const userCookie = checkCookie('userName');
    if (userCookie) {
      navigate('/home');
    }
  }, [navigate]);

  return(
    <div className = 'page'>
      <div className='itemsWrapper'>
        <div id = "titleWrapper" className='title'>
          <h1 id = "title">Enter your user name to see today's color</h1>
        </div>
        {!error?
        <TextField required label="Required" id="outlined-required" value={username} onChange={(e)=>setUsername(e.target.value)}></TextField>
        :<TextField error label="Required" id="outlined-error-helper-text" value={username} onChange={(e)=>setUsername(e.target.value)} helperText="Cannot be empty name"></TextField>}
        <Button variant="outlined" onClick={handleButtonClick}>See today's ball</Button>
      </div>
    </div>
  )
}

export default Signin;