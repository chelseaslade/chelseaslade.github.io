import React from 'react';
import { Link } from 'react-router-dom';
import profilepic from '../pics/chelseaslade1.JPG';

const Home = () => {
    return (
      <>
      <div className="container">
      <div className="home">
        <h1>Chelsea J. Slade, BSc</h1>
        <h2>Junior Software Developer</h2>
        <div className="imageContainer">
        <img src={profilepic} alt="Chelsea Slade" id="introPic" />
        </div>
        <div className="buttonContainer">
        <button class="genButton">Download Resume</button>
        <Link to="/about"><button class="genButton">About Me</button></Link>
        </div>
        </div>
        </div>
      </>
      );
    };

    export default Home;