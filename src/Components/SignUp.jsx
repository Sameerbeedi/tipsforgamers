import React from "react";
import "./Styles.css";
import { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";

function Signup() {
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        let response = await fetch("http://localhost:2000/api/signup", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: name, password: password, email: email })
        });
       
        if (!response.ok) {
          console.log(response);
        }
       
        let data = await response.json();
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/Login");
       } catch (err) {
        console.log(err);
       }
  };
  return (
    <div>
      <div className="welcome-text">
        <h2>Welcome to TFG</h2>
      </div>
      <img
        src="./wt_logo.png"
        alt="Logo"
        className=".image img:nth-of-type(2)"
        style={{ height: "250px", width: "450px" }}
      />
      <div className="signup-container">
        <h1>Sign-up</h1>
        <form method="post">
          <br />
          <label htmlFor="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Type your username"
            required
            onChange={(e) => {setName(e.target.value);}}
          />
          <br />
          <br />
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Type your password.."
            required
            onChange={(e) => {setPassword(e.target.value);}}
          />
          <br />
          <br />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => {setEmail(e.target.value);}}
            required
          />
          <br />
          <br />
          <p>
          <button type="submit" value="Submit" onClick={handleSubmit} >Submit</button>
          </p>
          <p>
          
        <p>Already have an account? <Link to="/Login">Login!</Link></p>
      </p>
          <br />
          <br />
          <br />
          <br />
        </form>
      </div>
      <div>
          <img src="1.jpg" alt="Win" className="image1" style={{ height: "200px", width: "300px" }}/>
      </div>
     <div> 
          <img src="3.jpg" alt="Win" className="image2" style={{ height: "200px", width: "300px" }}/>
      </div>
      <div>
          <img src="2.jpg" alt="Win" className="image3" style={{ height: "200px", width: "300px" }}/>
      </div>
      <div>
          <img src="2.jpg" alt="Win" className="image4" style={{ height: "200px", width: "300px" }}/>
      </div>
      <div>
          <img src="1.jpg" alt="Win" className="image5" style={{ height: "200px", width: "300px" }}/>
      </div>
      <div>
          <img src="3.jpg" alt="Win" className="image6" style={{ height: "200px", width: "300px" }}/>
       </div>
       <div>
          <label className="footerLabel">&copy; 2023 TFG. All rights reserved.</label>
      </div> 
    </div>
  );
}

export default Signup;