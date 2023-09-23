import { useState, useEffect } from 'react';
import '../styles/HomeMain.css';

const HomeMain = () => {
    const matterportURL = "https://my.matterport.com/show/?m=NiUQg1pist6&play=1&tour=3&ts=3&hl=0&pin=0";
    
    const [currentText, setCurrentText] = useState('Virtual World');
    const [animate, setAnimate] = useState(false);
    const texts = ['Virtual World', 'Construction World', 'MetaVerse'];
    let index = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true); // Trigger animation
            setTimeout(() => {
                index = (index + 1) % texts.length;
                setCurrentText(texts[index]);
                setAnimate(false); // Reset animation state after changing text
            }, 3000); // This delay should match the CSS transition duration for smooth effect
        }, 6000);

        return () => clearInterval(interval);
    }, []); 

    return (
      <div className="home-main-container">
        <iframe 
          className="home-background-iframe" 
          src={matterportURL} 
          frameBorder="0" 
          title="3D Tour">
        </iframe>
        
        <div className="overlay-content">
          <p>Build Your <span className={`animated-text ${animate ? 'animate' : ''}`} style={{color:'#ffb703'}}>{currentText}</span></p>
          <button className="overlay-action-button">Book a tour</button>
        </div>
      </div>
    )
}

export default HomeMain;
