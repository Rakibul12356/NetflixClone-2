import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
const Login = () => {

  const [singState, setSingState] = useState("Sing In")

  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{singState}</h1>
        <form >
          {singState === "Sign Up" ? <input type="text" name="text" id="" placeholder='Your name' /> : <></>}
          <input type="email" name="email" id="" placeholder='Your Email' />
          <input type="password" name="password" id="" placeholder='Password' />
          <button>{singState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {
            singState === "Sign In" ?
              <p>New to Netflix? <span onClick={()=>{setSingState("Sign Up")}}>Sign Up Now </span></p> :
              <p>All ready have an account <span onClick={()=>{setSingState("Sign In")}}>Sign IN </span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login
