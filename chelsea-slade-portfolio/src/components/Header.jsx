import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <>
        <div className="header">
          <header className="banner">
              <h1>Chelsea Slade</h1>
              <nav className="nav">
                <ul className="navList">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/projects">Projects</Link></li>
                  <li><Link to="/about">About Me</Link></li>
                </ul>
              </nav>
          </header>
        </div>
      </>
    );
  };
  
  export default Header;