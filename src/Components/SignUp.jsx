import React from "react";
import "./Styles.css";

function Signup() {
    return (
        <div>
            <div className="welcome-text">
                <h2>Welcome to TFG</h2>
            </div>
            <img src="./wt_logo.png" alt="Logo" className=".image img:nth-of-type(2)" style={{ height: '250px', width: '450px' }} />
            {/*<img
                src="./amongus.gif"
                alt="Animated GIF""
                style={{ width: '200px', height: '200px' }}
            />*/}
            <div className="signup-container">
                <h1>Sign-up</h1>
                <form method="post">
                    <br />  
                    <label htmlFor="full name"><b>Full Name</b></label>
                    <input type="text" name="full name" placeholder="Type your full name.." required />
                    <br /><br />
                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text" name="username" placeholder="Type your username" required />
                    <br /><br />
                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" name="password" placeholder="Type your password.." required />
                    <br /><br />
                    <label htmlFor="password2"><b>Re-enter password</b></label>
                    <input type="password" name="password2" placeholder="Re-enter your password.." required />
                    <br /><br />
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="email" name="email" placeholder="Enter your email" required />
                    <br /><br />
                    <p><input type="submit" value="Submit" /></p>
                    <br /><br /><br /><br />
                </form>
            </div>
        </div>
    );
}

export default Signup;