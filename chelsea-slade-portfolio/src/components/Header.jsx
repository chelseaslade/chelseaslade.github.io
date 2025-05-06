import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <>
        <div className="Header">
          <header className="Banner">
              <h1>Chelsea Slade</h1>
              <nav className="nav">
                <ul className="navList">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/social">Social</Link></li>
                </ul>
              </nav>
          </header>
        </div>
      </>
    );
  };
  
  export default Header;