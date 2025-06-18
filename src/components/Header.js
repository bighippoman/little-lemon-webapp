// src/components/Header.js
import logo from '../assets/little-lemon-logo.svg';

function Header() {
  return (
    <header>
      <img
        src={logo}
        alt="Little Lemon restaurant logo"
        width="180"
        height="auto"
      />
    </header>
  );
}

export default Header;