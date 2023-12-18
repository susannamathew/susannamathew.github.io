
import React from 'react';
import './css/home.css'; 
import './css/App.css'; 
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

  const starPositions = [
    { left: '10%', top: '20%' },
    { left: '30%', top: '0%' },
  ];

  return (
    <>
        <div id="landing-text">
          <h3>hi, i'm</h3>
          <h1 id="title">Susanna Mathew</h1>
          <h3>nice to meet you!</h3>
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
    </>
  );
}

export default MyWebsite;
