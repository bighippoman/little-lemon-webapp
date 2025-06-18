// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <div className="logo-section">
          <img src="/images/Little-Lemon-Logo.png" alt="Little Lemon" className="logo" />
          <h1 className="sr-only">Little Lemon</h1>
        </div>
        <div className="header-actions">
          <div className="header-contact">
            <span>📍 Chicago, IL</span>
            <a href="tel:+1-312-555-0199">📞 (312) 555-0199</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;