// Main.js
import React from 'react';

const Main = () => {
  const styles = {
    body: {
      margin: 0,
      padding: 0,
      height: '100vh',
      background: 'linear-gradient(to bottom, black 15%, #ffffff 30% 85%, #BC7676 40%)',
      backgroundColor: 'white',
    },
    h1: {
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Verdana, sans-serif',
      position: 'absolute',
      top: '0%',
      left: '32%',
    },
    h2: {
      color: 'white',
      fontFamily: 'Times New Roman, serif',
      position: 'absolute',
      top: '7%',
      left: '37%',
    },
    
    logo: {
      position: 'absolute',
      left: '0%',
      top: '2%',
      height : 100,
      width : 200



    },
    footer: {
        backgroundColor: '#BC7676',
        padding: '20px 0',
        textAlign: 'center',
        position: 'absolute',
        bottom: '0',
        width: '100%',
        color: 'black',
        display: 'flex',
        justifyContent: 'space-between',
      },
      footerSection: {
        width: '30%',
        display: 'inline-block',
        padding: '0 10px',
      },
      footerSectionHeader: {
        fontSize: '14px',
        marginBottom: '8px',
        fontWeight: 'bold',
        position : 'absolute',
        bottom : '77%',
        
      },
      footerSectionText: {
        fontSize: '10px',
        fontWeight: 'bold',
        textAlign: 'left'
      },
      footerSectionList: {
        listStyle: 'none',
        padding: '0',
        margin: '0',
      },
      footerSectionListItem: {
        marginBottom: '5px',
        textAlign: 'left'
      },
      footerSectionListItemLink: {
        color: 'black',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '10px',
       
        
      },
      footerSectionRight: {
        textAlign: 'right',
      },
      footerLabel: {
        position: 'absolute',
        bottom: '0',
        right: '0',
        fontWeight: 'bold',
        fontSize: '10px',
      },
    
    
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
      position: 'absolute',
      top: '0%',
      left: '0%',
      height: '100px',
      width: '100px',
    },
    rectangle1: {
      position: 'absolute',
      top: '40%',
      left: '10%',
      width: '160px',
      height: '100px',
      backgroundColor: '#7a7979',
      margin: '10px',
    },
    rectangle2: {
      position: 'absolute',
      top: '40%',
      right: '10%',
      width: '160px',
      height: '100px',
      backgroundColor: '#7a7979',
      margin: '10px',
    },
    rectangle3: {
        position: 'absolute',
        top: '40%',
        right: '32%',
        width: '160px',
        height: '100px',
        backgroundColor: '#7a7979',
        margin: '10px',
      },
      rectangle4: {
        position: 'absolute',
        top: '40%',
        left: '32%',
        width: '160px',
        height: '100px',
        backgroundColor: '#7a7979',
        margin: '10px',
      },
    headerOptions: {
      display: 'flex',
      alignItems: 'center',
    },
    searchBar: {
      position: 'absolute',
      left: '30%',
      top: '20%',
      padding: '5px',
      borderRadius: '3px',
      width: '500px',
      backgroundColor:'black',
      border: '1px solid #ccc',
    },
    menuBar: {
      listStyleType: 'none',
      margin: '0',
      padding: '0',
      position :'absolute',
      top : '24%',
      left : '3%'
    },
    menuBarItem: {
      display: 'inline',
      marginRight: '10px',
      fontWeight: 'bold'
    },
    menuBarItemLink: {
      textDecoration: 'none',
      color: '#333',
    },
    logout: {
      textDecoration: 'none',
      padding: '5px 10px',
      border: '1px solid #ccc',
      borderRadius: '3px',
      color: 'white',
      position : 'absolute',
      top:'22%',
      left:'80%',
      backgroundColor:'black'
      
    },
  };

  return (
    <div style={styles.body}>
      <body>
        <h1 style={styles.h1}>TFG : TIPS FOR GAMERS</h1>
        <h2 style={styles.h2}>Forging Professional Gamers</h2>
        <img src="wt_logo.png" className="Logo" alt="Logo" style={styles.logo} />
        <div className="header-options" style={styles.headerOptions}>
          <input type="text" placeholder="Search" className="search-bar" style={styles.searchBar} />
          <div style={{ position: 'absolute', left: '27%', top: '21.7%', display: 'flex', alignItems: 'center' }}>
    <button style={{ padding: '5px', borderRadius: '3px', border: '1px solid #ccc' }}>
      <img src="search-icon-png-21.png" alt="Search" style={{ width: '20px', height: '20px' }} />
    </button>
  </div>
          <ul className="menu-bar" style={styles.menuBar}>
            <li style={styles.menuBarItem}><a href="./" style={styles.menuBarItemLink}>Help</a></li>
            <li style={styles.menuBarItem}><a href="./" style={styles.menuBarItemLink}>Games</a></li>
            <li style={styles.menuBarItem}><a href="./" style={styles.menuBarItemLink}>Profile</a></li>
          </ul>
          <a href="./" className="logout" style={styles.logout}>Logout</a>
        </div>

        <div className="container" style={styles.container}>
          <div className="rectangle_1" style={styles.rectangle1}>
          <h4 style={styles.footerSectionHeader}>Service 1</h4>
          </div>
          <div className="rectangle_2" style={styles.rectangle2}>
          <h4 style={styles.footerSectionHeader}>Service 4</h4>
          </div>
          <div className="rectangle_3" style={styles.rectangle3}>
          <h4 style={styles.footerSectionHeader}>Service 3</h4>
          </div>
          <div className="rectangle_4" style={styles.rectangle4}>
          <h4 style={styles.footerSectionHeader}>Service 2</h4>
          </div>

        </div>

        <footer className="footer" style={styles.footer}>
          <div className="footer-section" style={styles.footerSection}>
            <h3 style={styles.footerSectionHeader}>About Us</h3>
            <br/><p style={styles.footerSectionText}>Careers</p>
            <p style={styles.footerSectionText}>Privacy Policy</p>
            <p style={styles.footerSectionText}>Sponsors</p>
            <p style={styles.footerSectionText}>Terms of Service</p>
          </div>

          <div className="footer-section" style={styles.footerSection}>
            <h3 style={styles.footerSectionHeader}>Categories</h3>
            <br/><p style={styles.footerSectionText}>Logo maker</p>
            <p style={styles.footerSectionText}>Business</p>
            <p style={styles.footerSectionText}>Music</p>
            <p style={styles.footerSectionText}>Photography</p>
          </div>

          <div className="footer-section" style={styles.footerSection}>
            <h3 style={styles.footerSectionHeader}>Support Us</h3>
            <br/><p style={styles.footerSectionText}>Feedback</p>
            <p style={styles.footerSectionText}>Donate</p>
            <p style={styles.footerSectionText}>Guides</p>
            <p style={styles.footerSectionText}>Buying & Selling</p>
          </div>

          <div className="footer-section" style={{ ...styles.footerSection, ...styles.footerSectionRight }}>
            <h3 style={styles.footerSectionHeader}>Community</h3>
           <br/> <p style={styles.footerSectionText}>Community Hub</p>
            <p style={styles.footerSectionText}>Blog</p>
            <p style={styles.footerSectionText}>Events</p>
            <p style={styles.footerSectionText}>Forum</p>
          </div>

          <div className="footer-section social-links" style={styles.footerSection}>
            <h3 style={styles.footerSectionHeader}>Social Links</h3>
            <ul style={styles.footerSectionList}>
             <br/> <li style={styles.footerSectionListItem}><a href="./" style={styles.footerSectionListItemLink}>Facebook</a>
              </li>
              <li style={styles.footerSectionListItem}><a href="./" style={styles.footerSectionListItemLink}>Twitter</a>
              </li>
              <li style={styles.footerSectionListItem}><a href="./" style={styles.footerSectionListItemLink}>Instagram</a>
              </li>
            </ul>
          </div>

          <div className="footer-section copyright" style={styles.footerSection}>
            <label style={styles.footerLabel}>&copy; 2023 TFG. All rights reserved.</label>
          </div>
        </footer>
      </body>
    </div>
  );
};

export default Main;