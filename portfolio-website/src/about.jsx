

import React from 'react';
import './css/about.css'; 
import './css/App.css'; 
import cloud1 from './images/cloud1.svg';
import cloud2 from './images/cloud2.svg';
import star from './images/star.svg';
import art from './images/about art.svg';
import headshotLight from './images/headshot light.png';
import headshotDark from './images/headshot dark.png';

function MyWebsite( {theme} ) {
  const Star = ({ style }) => (
    <img className="star" src={star} alt="star" style={style} />
  );

  const starPositions = [
    { left: '10%', top: '20%' },
    { left: '30%', top: '0%' },
  ];

  let headshot = theme === "dark" ? headshotDark : headshotLight;

  return (
    <section id="landing-page">
        <div className="page-name">
          <h2>Get To Know Me!</h2>
        </div>
        <div id="headshot-container">
          <img id="headshot" src={headshot} alt="headshot" />
          <div id="resume-text">
            <h3>I'm currently looking for full time Software Engineering roles :)</h3>
            <a href="Resume.pdf" download="Susanna_Mathew_Resume.pdf">
              <div id="button"><h4 id="button-text">Download Resume</h4></div>
            </a>
          </div>
        </div>
        {
          theme === 'light' ? (
            <div className="clouds-container">
              <div className="cloud1"><img src={cloud1} alt="cloud1" /></div>
              <div className="cloud2"><img src={cloud2} alt="cloud2" /></div>
            </div>
          ):(
            <div className="stars-container">
              {starPositions.map((pos, index) => (
                <Star key={index} style={pos} />
              ))}
            </div>
          )
        }

        <section id="page-art">
          <img id="img" src={art} alt="art" />
        </section>
      </section>
  );
}

export default MyWebsite;