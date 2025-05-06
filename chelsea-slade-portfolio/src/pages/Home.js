import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <>
      <div className="container">
      <div className="Home">
        <h1>Chelsea Slade</h1>
        <h2>Software Developer</h2>
        <Link to="/about"><button>About Me</button></Link>
        </div>
        </div>
      </>
      );
    };

    export default Home;