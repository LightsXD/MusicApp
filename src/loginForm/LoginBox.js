import React, { useState } from "react";
import "./LoginBox.css";

export function LoginBox({ handleSubmit }){
    return(
    <div className="loginbox">

      <form onSubmit={handleSubmit} className="main">
      <img src="./spotifylogo.png" className="loginlogo"/>
        <label htmlFor="first" className="label">
          Username:
        </label>
        <input 
          className="LoginBoxinput" 
          type="text"
          id="first"
          name="uname"
          placeholder="Enter your Username"
          required
        />
  
        <label htmlFor="password" className="label">
          Password:
        </label>
        <input
        className="LoginBoxinput"
          type="password"
          id="password"
          name="pass"
          placeholder="Enter your Password"
          required
        />
  
        <div className="wrap">
          <button className='Submitbutton'>
            Submit
          </button>
        </div>
      </form>
      <p>
        Not registered?
        <a href="#" className="link">
          Create an account
        </a>
      </p>
    </div>
    );
}