import React from "react";
import "./Styles.css";


function Heading() {
  return (
    <div className="login-topmost">
       <img src="./wt_logo.png" alt ="Logo" className=".image img:nth-of-type(2)" style={{ height: '225px', width: '525px' }}/>
      <div className="login-container"> 
        <h1>LOGIN</h1>
        <form method="post">
          <br />
          <label htmlFor="username"><b>Username</b></label>
          <input type="text" name="username" placeholder="Type your username.." required />
          <br />
          <label htmlFor="password"><b>Password</b></label>
          <input type="password" name="password" placeholder="Type your password.." required />
          <br />
          <label htmlFor="forgot"><b>Forgot Password?</b></label>
          <br /><br /><br />
          <p><input type="submit" value="Submit" /></p><br />
          <br /><br />
          <br /><br />
          <p htmlFor="No account?"> Don't have an account? Register now! </p>
        </form>
      </div>
    </div>
  );
}

export default Heading;