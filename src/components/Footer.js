// src/components/Footer.js
function Footer() {
    return (
      <footer>
        <p>
          © {new Date().getFullYear()} Little Lemon. 
          All rights reserved.
        </p>
        <p>
          123 Citrus Lane, Chicago, IL<br />
          <a href="tel:+13125555555">(312) 555-5555</a>
        </p>
      </footer>
    );
  }
  
  export default Footer;