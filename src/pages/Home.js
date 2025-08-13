import React from 'react';
import { Link } from 'react-router-dom';
import profilepic from '../pics/chelseaslade1.JPG';
import java from "../pics/javacute.svg";
import html from "../pics/htmlcute.svg";
import css from "../pics/csscute.svg"
import javascript from "../pics/jscute.svg";
import react from "../pics/reactcute.svg";

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
        <p>Hello! I'm Chelsea. <br/> I'm an endlessly curious lover of science and technology who loves finding solutions in creative ways. Welcome to my portfolio! </p> 
        </div>
        </div>
        <div className="aboutBanner">
          <div className="iconBanner">
            <img src={java} alt="Java Icon in Cute Style" class="icon"/>
            <img src={react} alt="React Icon in Cute Style" class="icon"/>
            <img src={javascript} alt="JavaScript Icon in Cute Style" class="icon"/>
            <img src={html} alt="HTML Icon in Cute Style" class="icon"/>
            <img src={css} alt="CSS Icon in Cute Style" class="icon"/>
          </div>
          <Link to="/about"><button className="genButton">About Me</button></Link>
        </div>
        </div>
        </div>
      </>
      );
    };

    export default Home;