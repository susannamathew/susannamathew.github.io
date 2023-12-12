import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './home.jsx'; // Assuming home.jsx is correctly set up
import './App.css';
const Experience = () => <div>Experience Page</div>;
const Research = () => <div>Research Page</div>;



function App() {
  const [isToggled, setIsToggled] = React.useState(false);
  const toggleClass = () => {
    setIsToggled(!isToggled);
  };
  const [theme, setTheme] = useState('light'); // Default theme is light

  const toggleTheme = () => {
    // Toggle between 'light' and 'dark'
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Use effect to apply the theme to the data-theme attribute on the root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="logo">
          </div>
          <ul className="nav-links">
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">EXPERIENCE</a></li>
            <li><a href="#">RESEARCH</a></li>
            <li className="theme-switch-wrapper">
              <label className="switch">
                <input type="checkbox" id="checkbox" onChange={toggleTheme}/>
                <div className="slider round"></div>
              </label>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/research" element={<Research />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;