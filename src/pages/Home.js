import { Link } from 'react-router-dom';
import profilepic from '../pics/chelseaslade1.JPG';
import ImgScroll from '../components/ImgScroll';

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
        <div className="introLine">
        <p>Hello! I'm Chelsea. <br/><br /> I'm an endlessly curious lover of science and technology who loves using my creativity to find solutions to problems. Welcome to my portfolio! </p>
        </div> 
        </div>
        </div>
        <ImgScroll />
          <Link to="/about"><button className="genButton">About Me</button></Link>
        </div>
        </div>
      </>
      );
    };

    export default Home;