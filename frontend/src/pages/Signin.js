import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/home');
  };

  return(
    <div id = "Signin">
      <div id = "titleWrapper">
        <h1 id = "title">Enter your user name to see today's color</h1>
      </div>
      <div id = "inputWrapper">
        <TextField required label="Required" id="outlined-required"></TextField>
        <Button variant="outlined" onclick={handleButtonClick}>See today's ball</Button>
      </div>
    </div>
  )
}

export default Signin;