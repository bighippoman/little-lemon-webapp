import React from 'react';

function OrderPage() {
  return (
    <div className="order-page">
      <div className="page-header">
        <h1>Order Online</h1>
        <p>Coming Soon! Online ordering will be available soon.</p>
      </div>
      
      <div className="coming-soon">
        <div className="coming-soon-content">
          <h2>🚀 We're Working on Something Great!</h2>
          <p>
            Our online ordering system is currently under development. 
            In the meantime, please call us to place your order for pickup or delivery.
          </p>
          
          <div className="contact-options">
            <div className="contact-option">
              <h3>📞 Call Us</h3>
              <p><a href="tel:+13125555555">(312) 555-5555</a></p>
              <p>Open daily: 5:00 PM - 10:00 PM</p>
            </div>
            
            <div className="contact-option">
              <h3>🏪 Visit Us</h3>
              <p>123 Citrus Lane</p>
              <p>Chicago, IL 60601</p>
            </div>
          </div>
          
          <p className="notify-text">
            Want to be notified when online ordering is available? 
            <a href="/contact"> Contact us</a> to join our mailing list!
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
