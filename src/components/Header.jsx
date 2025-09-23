import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="header">
      <nav className="nav">
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`navList ${isOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/contact" className="contactLink">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
  };
  
  export default Header;