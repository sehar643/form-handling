import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const registerUser = async(e) =>{
      e.preventDefault()
      console.log({name, email, password, address})

      let result = await fetch("http://localhost:7000/register",{
        method: 'post',
        body: JSON.stringify({name, email, password, address}),
        headers:{
          "Content-Type": 'application/json'
        }
      })
      result = result.json()
      console.log(result)
      
  }
  


  return (
    <div>
      <div className="bdy">
        <div className="login-page">
          <div className="form">
            <div className="login">
              <div className="login-header">
                <h3>Create New Account</h3>
                <p>Already Register? login.</p>
              </div>
            </div>
            <form className="login-form">
              <label htmlFor="password"></label>
              <input
                className="input-radius"
                type="text"
                name="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="username"/>
              <input
                className="input-radius"
                type="text"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="user email"/>
              <input
                className="input-radius"
                type="text"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="user password"/>
              <input
                className="input-radius"
                type="text"
                name="address"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                placeholder="user address"/>

              <button className="input-radius" onClick={registerUser}>
                Sign Up
              </button>
              <p className="message">
                <Link to="/f-pass">Forget Password</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
