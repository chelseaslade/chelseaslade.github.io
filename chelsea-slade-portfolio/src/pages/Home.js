import React from 'react';
import { Link } from 'react-router-dom';
import profilepic from '../pics/chelseaslade1.JPG';

const Home = () => {
    return (
      <>
      <div className="container">
      <div className="home">
        <div className="introBox">
        <div className="imageContainer">
        <img src={profilepic} alt="Chelsea Slade" id="introPic" />
        </div>
        <div className="textBox">
        <h1>Chelsea J. Slade, BSc</h1>
        <h2>Junior Software Developer</h2>
        <h4>Java - SQL Databases - Javascript - React</h4>
        <p>Hello! I'm Chelsea. Thanks for checking out my portfolio. </p> 
        <button class="genButton">View Resume</button>
        <Link to="/about"><button class="genButton">About Me</button></Link>
        </div>
        </div>
        </div>
        </div>
      </>
      );
    };

    export default Home;