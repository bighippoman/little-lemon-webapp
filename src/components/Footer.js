// src/components/Footer.js
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Little Lemon</h3>
          <p>Authentic Mediterranean cuisine in the heart of Chicago. Family-owned restaurant serving traditional recipes with a modern twist.</p>
          <div className="social-links">
            <a href="https://facebook.com/littlelemon" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://instagram.com/littlelemon" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://twitter.com/littlelemon" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://youtube.com/littlelemon" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <a href="tel:+13125557890">(312) 555-7890</a>
          <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
          <p>123 Main Street<br />Chicago, IL 60601</p>
        </div>
        
        <div className="footer-section">
          <h3>Hours</h3>
          <p>Monday - Thursday: 11am - 10pm</p>
          <p>Friday - Saturday: 11am - 11pm</p>
          <p>Sunday: 12pm - 9pm</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="/menu">Menu</a>
          <a href="/reservations">Reservations</a>
          <a href="/order">Order Online</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="footer-copyright">&copy; 2025 Little Lemon Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;