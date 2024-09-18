import React, {useEffect, useState} from 'react';
import BRBall from '../components/BRBall';
import { setCookie, getCookie } from '../helper/cookieHelper';

const Home = () => {
  const [visits, setVisits] = useState(getCookie('visits'));
  const [color, setColor] = useState(getCookie('ballColor'));

  useEffect(()=>{

    const currentVisits = parseInt(visits, 10);
    const newVisits = currentVisits + 1;
    setColor(getCookie('ballColor'));
    setVisits(newVisits);
    setCookie('visits', newVisits, 1);
    console.log(visits);
  },[]);
  
  return(
    <div>
      <h1> Welcome back! You have visited this page {visits} times.</h1>
      <BRBall ballColor = {color}></BRBall>
    </div>
  );
}

export default Home;