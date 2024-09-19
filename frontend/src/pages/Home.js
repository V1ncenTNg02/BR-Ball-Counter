import React, {useEffect, useState} from 'react';
import BRBall from '../components/BRBall';
import { setCookie, getCookie } from '../helper/cookieHelper';
import { updateRow } from '../service/userService';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';

const Home = () => {
  const navigate = useNavigate();
  const [color, setColor] = useState(getCookie('ballColor'));
  const [redball, setRedball] = useState(parseInt(getCookie('redball') || 0, 10));
  const [blueball, setBlueball] = useState(parseInt(getCookie('blueball') || 0, 10));
  const username = getCookie('userName');

  //update data to backend
  const updateData = async () => {
    try{
      if(color === "redball"){
        setCookie('redball', (redball + 1), 1);
        await updateRow(username, 'redball', (redball + 1));
      }else{
        setCookie('blueball', (blueball + 1), 1);
        await updateRow(username, 'blueball', (blueball + 1));
      }
    }catch(e){
      console.error("Failed to update data before exit");
    }
  }

  const toReport = () => {
    navigate('/report');
  }
  
  useEffect(()=>{
    setColor(getCookie('ballColor'));
  },[]);

  //handle exiting page behaviour, once the user refresh, close, or leaves this page, data will be uploaded to server
  useEffect(() => {
    const handleBeforeUnload = () => {
      updateData();
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      updateData();
    };
  }, [color, redball, blueball, username]); 
  
  return(
    <div className = 'page'>
      <div className='itemsWrapper'>
        <h1 className='title'> Welcome back! You have seen {color} {(color === "redball")? (1+redball):(1+blueball)} times.</h1>
        <BRBall ballColor = {color} id='ball'></BRBall>
        <Button variant="contained" onClick={toReport}>Report</Button>
      </div>
    </div>
  );
}

export default Home;