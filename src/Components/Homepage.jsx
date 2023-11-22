// App.js
import React from 'react';
// eslint-disable-next-line
import AuthButtons from './ls';

function Home() {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#000000',
      margin: 0,
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
    app: {
      position: 'absolute',
      top: '5%',
      left: '10%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    logo: {
      width: '100px',
      marginRight: '5px',
    },
    catchyText: {
      fontSize: '48px',
      fontFamily: 'cursive',
      color: '#fff',
      fontWeight: 'bold',
    },

    btn: {
      display: 'inline-block',
      padding: '15px 25px',
      fontSize: '16px',
      textDecoration: 'none',
      color: '#fff',
      backgroundColor: '#3498db',
      borderRadius: '10px',
      margin: '30px',
      cursor: 'pointer',
    },
    btnLogin: {
      backgroundColor: '#2ecc71',
    },
    appHeader: {
      fontSize: '50px',
      animation: 'colorChange 6s infinite',
    },
    h2: {
      fontSize: '26px',
      margin: '10px',
      animation: 'glow 2s infinite',
      color: 'rgb(255, 0, 0)',
      textShadow: '0 0 10px rgba(255, 0, 0, 0.8)',
    },
    image: {
      position: 'absolute',
      right: '10%',
      top :'15%',
      height: '450px',
      width: '600px',
    },
    footerLabel: {
      position: 'absolute',
      bottom: '0',
      right: '5%',
      fontWeight: 'bold',
      fontSize: '10px',
      color: 'white',
    }
  };
  const handleLoginClick = () => {
    window.location.href = '/Login'; 
  };

  const handleSignupClick = () => {
    window.location.href = '/SignUp'; 
  };

  return (
    <div>
      <div style={styles.app} className="App">
        <style>
          {`
            @keyframes colorChange {
              0% { color: rgb(255, 0, 0); }
              33% { color: rgb(0, 255, 0); }
              66% { color: rgb(0, 0, 255); }
              100% { color: rgb(255, 0, 0); }
            }
          `}
        </style>
        <header style={styles.appHeader} className="App-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="wt_logo.png" alt="Logo" style={styles.logo} />
            <span style={styles.catchyText}>TFG</span>
          </div>
          <h1>Welcome to TFG : Tips For Gamers</h1>
          <h2 style={styles.h2}>Hone your skills to compete with the best in the world.</h2>
          <div className="button-container">
          <button onClick={handleLoginClick} style={{ ...styles.btn, ...styles.btnLogin }}>
              Login
            </button>
            <button onClick={handleSignupClick} style={styles.btn}>
              Sign Up
            </button>
          </div>
        </header>
      </div>
      <div>
          <img src="win2.jpg" alt="Win" style={styles.image} />
      </div>
      <div>
          <label style={styles.footerLabel}>&copy; 2023 TFG. All rights reserved.</label>
      </div>
     </div>
    
  );
}

export default Home;
