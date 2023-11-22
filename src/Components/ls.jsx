import React from 'react';

const AuthButtons = () => {
    const loginButtonRef = React.useRef(null);
    const signupButtonRef = React.useRef(null);
  
    const handleLoginClick = () => {
      window.location.href = '/login'; // Replace with your login page URL
    };
  
    const handleSignupClick = () => {
      window.location.href = '/signup'; // Replace with your signup page URL
    };
  
    return (
      <div>
        <button ref={loginButtonRef} onClick={handleLoginClick}>Login</button>
        <button ref={signupButtonRef} onClick={handleSignupClick}>Signup</button>
      </div>
    );
  };
  
  export default AuthButtons;