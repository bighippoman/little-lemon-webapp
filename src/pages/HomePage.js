import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on traditional recipes 
              served with a modern twist.
            </p>
            <div className="hero-actions">
              <Link to="/reservations" className="btn btn--primary btn--large">
                Reserve a Table
              </Link>
              <Link to="/menu" className="btn btn--secondary btn--large">
                View Menu
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/Delicious-Med-Food.webp" alt="Delicious Mediterranean dishes" />
          </div>
        </div>
      </section>

      {/* Featured Specials */}
      <section className="section section--cream">
        <div className="container">
          <div className="text-center mb-xl">
            <h2>This Week's Specials!</h2>
            <p>Check out our featured dishes crafted with love and tradition.</p>
          </div>
          <div className="grid grid--3">
            <article className="card">
              <div className="card-image">
                <img src="/images/Delicious-Med-Food.webp" alt="Greek Salad" />
              </div>
              <div className="card-content">
                <div className="card-header">
                  <h3>Greek Salad</h3>
                  <span className="price">$12.99</span>
                </div>
                <p>The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <div className="dietary-tags">
                  <span className="tag tag--vegetarian">Vegetarian</span>
                  <span className="tag tag--gluten-free">Gluten Free</span>
                </div>
              </div>
              <div className="card-footer">
                <Link to="/order-online" className="btn btn--primary">Order a delivery</Link>
              </div>
            </article>

            <article className="card">
              <div className="card-image">
                <img src="/images/lemon-herb-grilled-fish.jpg" alt="Lemon Herb Grilled Fish" />
              </div>
              <div className="card-content">
                <div className="card-header">
                  <h3>Lemon Herb Grilled Fish</h3>
                  <span className="price">$18.99</span>
                </div>
                <p>Fresh Mediterranean fish grilled to perfection with aromatic herbs and a bright lemon finish.</p>
                <div className="dietary-tags">
                  <span className="tag tag--gluten-free">Gluten Free</span>
                </div>
              </div>
              <div className="card-footer">
                <Link to="/order-online" className="btn btn--primary">Order a delivery</Link>
              </div>
            </article>

            <article className="card">
              <div className="card-image">
                <img src="/images/lemon cake.jpg" alt="Lemon Cake" />
              </div>
              <div className="card-content">
                <div className="card-header">
                  <h3>Lemon Cake</h3>
                  <span className="price">$8.50</span>
                </div>
                <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <div className="dietary-tags">
                  <span className="tag tag--vegetarian">Vegetarian</span>
                </div>
              </div>
              <div className="card-footer">
                <Link to="/order-online" className="btn btn--primary">Order a delivery</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section section--white">
        <div className="container">
          <div className="grid grid--2">
            <div className="about-text">
              <h2>About Little Lemon</h2>
              <p className="lead">
                Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, 
                focused on traditional recipes served with a modern twist.
              </p>
              <p>
                The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu 
                of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed 
                atmosphere with moderate prices, making it a popular place for a meal any time of the day.
              </p>
              <Link to="/about" className="btn btn--primary">Learn More About Us</Link>
            </div>
            <div className="about-images">
              <div className="image-stack">
                <img src="/images/mario-adrian.webp" alt="Mario and Adrian cooking" className="image-primary" />
                <img src="/images/restaurant-interior.jpg" alt="Restaurant interior" className="image-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section section--green">
        <div className="container">
          <div className="text-center mb-xl">
            <h2>Customer Says</h2>
            <p>What our guests are saying about their experience.</p>
          </div>
          <div className="grid grid--4">
            <div className="testimonial-card">
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <blockquote>
                "Really enjoyed the atmosphere. The Greek salad was absolutely amazing!"
              </blockquote>
              <div className="reviewer">
                <img src="/images/sarah m testimonial.avif" alt="Sarah M." />
                <div>
                  <cite>Sarah M.</cite>
                  <span>Regular Customer</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <blockquote>
                "The food, the atmosphere, the service... everything was perfect!"
              </blockquote>
              <div className="reviewer">
                <img src="/images/john D testimonial.jpg" alt="John D." />
                <div>
                  <cite>John D.</cite>
                  <span>Food Enthusiast</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <blockquote>
                "Authentic Mediterranean flavors. Highly recommend the fish!"
              </blockquote>
              <div className="reviewer">
                <img src="/images/Maria L testimonial.jpg" alt="Maria L." />
                <div>
                  <cite>Maria L.</cite>
                  <span>Local Foodie</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="rating">⭐⭐⭐⭐⭐</div>
              <blockquote>
                "Best Mediterranean restaurant in Chicago. The lemon cake is divine!"
              </blockquote>
              <div className="reviewer">
                <img src="/images/Alek K testimonial.avif" alt="Alek K." />
                <div>
                  <cite>Alek K.</cite>
                  <span>Food Critic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
