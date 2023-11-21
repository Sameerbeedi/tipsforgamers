import React from 'react';
import './Main.css'; 


function Main() {
  return (
    <div>
      <body>

        <h1 className="h1">TFG : TIPS FOR GAMERS</h1>

        <h2 className="h2">Forging Professional Gamers</h2>

        <img src="wt_logo.png" className="Logo" alt="Logo" style={{
          position: 'absolute',
          right: '0%',
          bottom: '2%',
        }} />

        <div className="header-options">
          <input type="text" placeholder="Search" className="search-bar" />
          <ul className="menu-bar">
            <li><a href="./">Home</a></li>
            <li><a href="./">Games</a></li>
            <li><a href="./">Profile</a></li>
          </ul>
          <a href="./" className="logout">Logout</a>
        </div>

        <div className="container">
          <div className="rectangle_1"></div>
          <div className="rectangle_2"></div>
        </div>

        <footer className="footer">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Careers</p>
            <p>Privacy Policy</p>
            <p>Sponsors</p>
            <p>Terms of Service</p>
          </div>

          <div className="footer-section">
            <h3>Categories</h3>
            <p>Logo maker</p>
            <p>Business</p>
            <p>Music</p>
            <p>Photography</p>
          </div>

          <div className="footer-section">
            <h3>Support Us</h3>
            <p>Help & Support</p>
            <p>Donate</p>
            <p>Guides</p>
            <p>Buying & Selling</p>
          </div>

          <div className="footer-section">
            <h3>Community</h3>
            <p>Community Hub</p>
            <p>Blog</p>
            <p>Events</p>
            <p>Forum</p>
          </div>

          <div className="footer-section social-links">
            <h3>Social Links</h3>
            <ul>
              <li><a href="./">Facebook</a></li>
              <li><a href="./">Twitter</a></li>
              <li><a href="./">Instagram</a></li>
            </ul>
          </div>

          <div className="footer-section copyright">
            <label>&copy; 2023 TFG. All rights reserved.</label>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default Main;
