import React from 'react'

const Login = () => {
  return(
    <div id = "Login">
      <div id = "titleWrapper">
        <h1 id = "title">Enter your user name to see today's color</h1>
      </div>
      <div id = "inputWrapper">
        <input type="text" id="userName"></input>
        <button type = "button">See today's ball</button>
      </div>
    </div>
  )
}

export default Login;