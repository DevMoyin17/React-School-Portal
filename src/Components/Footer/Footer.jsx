import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="footer-content ms-5">
        <div className="footer-section about">
          <h2 className='fw-bold fs-5 '>About Us</h2>
          <p className='footerText'>Welcome to our school portal. <br /> We are committed to providing quality <br /> education and fostering a supportive <br /> learning environment for students.</p>
        </div>
        <div className="footer-section links">
          <h2 className='fw-bold fs-5 ms-4'>Quick Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2 className='fw-bold fs-5'>Contact Us</h2>
          <p className='footerText'>123 School Lane<br />Education City, EC 12345</p>
          <p className='footerText'>Email: <a href="mailto:info@schoolportal.com">info@schoolportal.com</a></p>
          <p className='footerText'>Phone: 09045679841</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className='footerText mt-3'>&copy; 2024 School Portal. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
