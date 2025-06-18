import React from 'react';
import '../styles/AboutPage.css';

function AboutPage() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>About Little Lemon</h1>
        <p>A family-owned Mediterranean restaurant serving Chicago since 1995</p>
      </div>

      <div className="about-content">
        <section className="story-section">
          <div className="story-grid">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Little Lemon was founded in 1995 by Mario and Adrian, two childhood friends who shared a passion for authentic Mediterranean cuisine. 
                What started as a small family restaurant has grown into Chicago's most beloved Mediterranean dining destination.
              </p>
              <p>
                We're committed to using fresh, locally sourced ingredients and traditional cooking methods passed down through generations. 
                Every dish tells a story of our heritage and dedication to culinary excellence.
              </p>
            </div>
            <div className="story-image">
              <img src="/images/mario-adrian.webp" alt="Mario and Adrian - Little Lemon founders" />
            </div>
          </div>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>🌿 Fresh & Local</h3>
              <p>We source our ingredients from local Chicago farmers and suppliers, ensuring the highest quality and supporting our community.</p>
            </div>
            <div className="value-card">
              <h3>👨‍👩‍👧‍👦 Family Tradition</h3>
              <p>Our recipes have been passed down through generations, preserving authentic Mediterranean flavors and cooking techniques.</p>
            </div>
            <div className="value-card">
              <h3>🤝 Community First</h3>
              <p>We believe in giving back to our community and creating a welcoming space where everyone feels like family.</p>
            </div>
          </div>
        </section>

        <section className="restaurant-section">
          <div className="restaurant-grid">
            <div className="restaurant-image">
              <img src="/images/restaurant-interior.jpg" alt="Little Lemon restaurant interior" />
            </div>
            <div className="restaurant-info">
              <h2>Visit Us</h2>
              <div className="location-info">
                <h3>📍 Location</h3>
                <p>123 Citrus Lane<br />Chicago, IL 60601</p>
              </div>
              <div className="hours-info">
                <h3>🕒 Hours</h3>
                <p>Monday - Thursday: 11:30 AM - 9:00 PM<br />
                Friday - Saturday: 11:30 AM - 10:00 PM<br />
                Sunday: 12:00 PM - 8:00 PM</p>
              </div>
              <div className="contact-info">
                <h3>📞 Contact</h3>
                <p>Phone: (773) 555-0505<br />
                Email: hello@littlelemon.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
