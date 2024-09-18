import React, { useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {setCookie, checkCookie} from '../helper/cookieHelper'



const Signin = () => {
  const [username, setUsername] = useState('');
  const [error,setError] = useState(false);
  const navigate = useNavigate();


  const handleButtonClick = () => {
    if(username.length === 0){
      setError(true);
    }
    else{
      setError(false);
      setCookie('userName', username, 1);
      setCookie('ballColor', Math.random() < 0.5 ? 'red' : 'blue', 1);
      setCookie('visits', 0, 1);
      navigate('/home');
    }
    
  };

  useEffect(() => {
    const userCookie = checkCookie('userName');
    if (userCookie) {
      navigate('/home');
    }
  }, [navigate]);

  return(
    <div id = "Signin">
      <div id = "titleWrapper">
        <h1 id = "title">Enter your user name to see today's color</h1>
      </div>
      <div id = "inputWrapper">
        {!error?
        <TextField required label="Required" id="outlined-required" value={username} onChange={(e)=>setUsername(e.target.value)}></TextField>
        :<TextField error label="Required" id="outlined-error-helper-text" value={username} onChange={(e)=>setUsername(e.target.value)} helperText="Cannot be empty name"></TextField>}
        <Button variant="outlined" onClick={handleButtonClick}>See today's ball</Button>
      </div>
    </div>
  )
}

export default Signin;