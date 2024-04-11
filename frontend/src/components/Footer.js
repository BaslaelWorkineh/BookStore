import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h2 className="footer-logo">My Website</h2>
          <p className="footer-description">A place for all things awesome!</p>
          <div className="footer-social-icons">
            <a href="#" className="footer-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="footer-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="footer-icon"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-nav">
          <ul className="footer-menu">
            <li className="footer-menu-item"><a href="#" className="footer-menu-link">Home</a></li>
            <li className="footer-menu-item"><a href="#" className="footer-menu-link">About</a></li>
            <li className="footer-menu-item"><a href="#" className="footer-menu-link">Services</a></li>
            <li className="footer-menu-item"><a href="#" className="footer-menu-link">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom-text">© 2024 My Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
