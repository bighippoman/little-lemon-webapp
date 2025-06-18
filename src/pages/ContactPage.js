import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../styles/ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="contact-success-message">
        <div className="success-content">
          <h2><FaEnvelope style={{ marginRight: '10px', verticalAlign: 'middle' }} /> Message Sent!</h2>
          <p>Thank you for contacting us, {formData.name}!</p>
          <p>We'll get back to you within 24 hours at {formData.email}.</p>
          <button 
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
              });
            }}
            className="button button-secondary"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-page-container">
      <div className="contact-page-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Get in touch with any questions or feedback.</p>
      </div>

      <div className="contact-content-grid">
        <div className="contact-details-column">
          <div className="contact-section">
            <h3><FaMapMarkerAlt style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Visit Us</h3>
            <p>123 Citrus Lane<br />Chicago, IL 60601</p>
          </div>

          <div className="contact-section">
            <h3><FaPhoneAlt style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Call Us</h3>
            <p><a href="tel:+13125555555">(312) 555-5555</a></p>
            <div className="hours">
              <h3>Hours:</h3>
              <p><strong>Mon-Thu:</strong> 5:00 PM - 10:00 PM</p>
              <p><strong>Fri-Sat:</strong> 5:00 PM - 11:00 PM</p>
              <p><strong>Sunday:</strong> 4:00 PM - 9:00 PM</p>
            </div>
          </div>

          <div className="contact-section">
            <h3><FaEnvelope style={{ marginRight: '8px', verticalAlign: 'middle' }} /> Email Us</h3>
            <p><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
            <p><a href="mailto:reservations@littlelemon.com">reservations@littlelemon.com</a></p>
          </div>

          <div className="contact-section">
            <h3>Follow Us</h3>
            <div className="social-links-contact">
              <a href="https://facebook.com/littlelemon" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://instagram.com/littlelemon" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://twitter.com/littlelemon" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form-column">
          <h3>Send us a Message</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="reservation">Reservation Inquiry</option>
                <option value="catering">Catering Services</option>
                <option value="feedback">Feedback</option>
                <option value="complaint">Complaint</option>
                <option value="compliment">Compliment</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell us how we can help you..."
            />
          </div>

          <button type="submit" className="button button-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
