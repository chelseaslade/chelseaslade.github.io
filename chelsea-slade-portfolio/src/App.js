import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";  
import About from "./pages/About";
import Social from "./pages/Social"; 

function App() {

  return (
    <div className="container">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/social" element={<Social />} /> 
    </Routes>
    <Footer />
  </div>
  );
}

export default App;
