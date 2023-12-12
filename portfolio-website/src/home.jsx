
import React from 'react';
import './css/styles.css'; 
import './App.css'; 
import cloud1 from './images/cloud1.svg';
import cloud2 from './images/cloud2.svg';
import windowGif from './images/window.gif';
import chatGif from './images/text bubble.gif';
import healthBarGif from './images/healthbar.gif';
import coinSvg from './images/coin.svg';
import star from './images/star.svg';
import landingArt from './images/landingart.svg';

function MyWebsite( {theme} ) {
  const Star = ({ style }) => (
    <img className="star" src={star} alt="star" style={style} />
  );
  return (
    <>
      {/* <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">EXPERIENCE</a></li>
          <li><a href="#">PROJECTS</a></li>
          <li><a href="#">RESEARCH</a></li>
        </ul>
      </nav> */}
      <section id="landing-page">
        <div id="landing-text">
          <h2>hi, i'm</h2>
          <h1 id="title">Susanna Mathew</h1>
          <h2>nice to meet you!</h2>
        </div>
        {
          theme === 'light' ? (
            <div className="clouds-container">
              <div className="cloud1"><img src={cloud1} alt="cloud1" /></div>
              <div className="cloud2"><img src={cloud2} alt="cloud2" /></div>
            </div>
          ):(
            <div className="stars-container">
              <Star style={{left: '20px', top: '50px'}}/>
            </div>
          )
        }
        <section id="landing-art">
          <img id="window" src={windowGif} alt="window" />
          <img id="chat" src={chatGif} alt="chat" />
          <img id="health-bar" src={healthBarGif} alt="health bar" />
          <div id="coin-container">
            <img className="coin" id="coin1" src={coinSvg} alt="coin1" />
            <img className="coin" id="coin2" src={coinSvg} alt="coin2" />
            <img className="coin" id="coin3" src={coinSvg} alt="coin3" />
          </div>
          <img id="art" src={landingArt} alt="art" />
        </section>
      </section>
    </>
  );
}

export default MyWebsite;
