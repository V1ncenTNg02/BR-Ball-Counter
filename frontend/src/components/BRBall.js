import React from 'react';
import Redball from '../../public/assets/Redball.png';
import Blueball from '../../public/assets/Bluevall.png';

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
