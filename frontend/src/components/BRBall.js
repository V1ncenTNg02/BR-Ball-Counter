import React from 'react';
import Redball from '../assets/Redball.png';
import Blueball from '../assets/Blueball.png';

const BRBall = (color) => {
  return(
    <div className = "imgWrapper">
      {
        color === "blue" 
      ? <img src = {Redball} alt = "Red Ball"></img>
      :<img src = {Blueball} alt = "Blue Ball"></img>
      } 
    </div>
  );
}

export default BRBall;
