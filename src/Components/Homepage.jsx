import React from 'react';
import './Homepage.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Welcome to TFG : Tips For Gamers</h1>
        <div className="button-container">
          <a href="./" className="btn btn-login">Login</a>
          <a href="./" className="btn btn-signup">Sign Up</a>
        </div>
      </header>
    </div>
  );
}

export default Home;
