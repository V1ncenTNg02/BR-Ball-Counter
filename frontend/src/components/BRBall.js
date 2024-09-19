import React from 'react';
import Redball from '../assets/Redball.jpg';
import Blueball from '../assets/Blueball.jpg';

const BRBall = ({ballColor}) => {
  return(
    <div className = "imgWrapper">
      {
        ballColor === "redball" 
      ? (<img src = {Redball} alt = "Red Ball"></img>)
      :(<img src = {Blueball} alt = "Blue Ball"></img>)
      } 
    </div>
  );
}

export default BRBall;
