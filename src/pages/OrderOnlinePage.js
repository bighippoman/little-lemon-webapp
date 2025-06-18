import React from 'react';

function OrderOnlinePage() {
  return (
    <div className="section section--cream">
      <div className="container">
        <div className="text-center mb-xl">
          <h1>Order Online</h1>
          <p>Enjoy our delicious Mediterranean cuisine from the comfort of your home.</p>
        </div>
        
        <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="card-content">
            <h2>Online Ordering Coming Soon!</h2>
            <p>
              We're working hard to bring you a seamless online ordering experience. 
              In the meantime, please call us directly to place your order.
            </p>
            <div className="text-center" style={{ marginTop: '2rem' }}>
              <a href="tel:+1-312-555-0199" className="btn btn--primary btn--large">
                📞 Call to Order: (312) 555-0199
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderOnlinePage;
