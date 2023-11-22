import React from "react";
import "./Styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Heading() {
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:2000/api/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, password: password })
      });
     
      if (!response.ok) {
        if (response.status === 401) {
          alert("Invalid username or password. Please try again.");
          return;
        } else {
          console.log(response);
        }
      }

      let data = await response.json();   
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/MainPage");
     } catch (err) {
      console.log(err);
     }
  };
  return (
    <div>
      <img
        src="./wt_logo.png"
        alt="Logo"
        className=".image img:nth-of-type(2)"
        style={{ height: "225px", width: "525px" }}
      />
      <div className="login-container">
        <h1>LOGIN</h1>
        <form method="post">
          <br />
          <label htmlFor="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Type your username.."
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Type your password.."
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <label htmlFor="forgot">
            <b>Forgot Password?</b>
          </label>
          <br />
          <br />
          <br />
          <p>
            <button type="submit" value="Submit" onClick={handleLogin} >Submit</button>
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <p htmlFor="No account?"> Don't have an account? Register now! </p>
        </form>
      </div>
      <div>
          <img src="game.jpg" alt="Win" className="image" />
      </div>
      <div>
          <label className="footerLabel">&copy; 2023 TFG. All rights reserved.</label>
      </div>
    </div>
  );
}

export default Heading;
