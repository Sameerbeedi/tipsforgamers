import React from 'react';
import {Link} from 'react-router-dom';
const Mini = () => {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor:'white'
    },
   
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#3498db',
      color: '#fff',
      padding: '10px 20px',
    },
    logoImg: {
      width: '100px',
      height: '100px',
    },
    tagline: {
      margin: 0,
    },
    profile: {
      display: 'flex',
      alignItems: 'center',
    },
   
    profileCircle: {
      width: '200px',
      height: '250px',
      borderRadius: '50%',
      marginRight: '10px',
    },
    profileDetails: {
      textAlign: 'right',
    },
    starIcon: {
      width: '20px',
      height: '20px',
      backgroundColor: '#f39c12',
      borderRadius: '50%',
      position:'absolute',
      right:'11.5%'
    },
    aboutSection: {
      padding: '20px',
      
    },
    aboutP:{
      position : 'absolute',
      left:'1%'
    },
    serviceFeedbackSection: {
      padding: '20px',
    },
    serviceFeedbackBox: {
      border: '1px solid #ccc',
      padding: '10px',
      marginBottom: '15px',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.header}>
        <div className="logo">
          <Link to="/MainPage">
          <img src="th.jpg" alt="Home Icon" style={styles.logoImg} />
          </Link>
        </div>
        <div className="tagline">
          <h1 style={styles.tagline}>I shall make you one of the mini-militia players in the world</h1>
        </div>
        <div className="profile">
          <div className="profile-circle">
            <img src="ss.jpg" alt="Profile Icon" style={styles.profileCircle} />
          </div>
          <div className="profile-details">
            <p className="profile-name">depresseti09</p>
            <div style={styles.starIcon}></div>
            <p className="rating">1.9 (100+)</p>
          </div>
        </div>
      </div>

      <div style={styles.aboutSection}>
        <h2>About Us</h2>
        <p style={styles.aboutP}>Helping gamers since day 1.</p>
      </div>

      <div style={styles.serviceFeedbackSection}>
        <h2>Our Services</h2>
        <div style={styles.serviceFeedbackBox}>
          <h3>Service-</h3>
          <p>I am going to help you finally beat the hackers in this game, all this for the measly price of 200 rupees. We will hold 30-minute sessions every day, and Sunday is a holiday.
           <br/>
           Contact : +91 9380464635
          </p>
        </div>
        {/* Add more service boxes as needed */}
      </div>

      <div style={styles.serviceFeedbackSection}>
        <h2>Feedback</h2>
        <div style={styles.serviceFeedbackBox}>
          <p>Customer feedback and testimonials go here.</p>
        </div>
        {/* Add more feedback boxes as needed */}
      </div>
    </div>
    
  );
};

export default Mini;
