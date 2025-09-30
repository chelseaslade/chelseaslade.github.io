import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";  
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {

  return (
    <div className="container">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </div>
  ); 
}

export default App;
