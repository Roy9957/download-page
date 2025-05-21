import React, { useEffect } from 'react';
import { faTimes, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    // Create particles
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    if (particlesContainer) {
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 10 + 5;
        const posX = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.bottom = `-${size}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        particlesContainer.appendChild(particle);
      }
    }
  }, []);

  const handleImageClick = () => {
    const image = document.querySelector('.image-placeholder');
    const closeBtn = document.querySelector('.close-btn');
    if (image && closeBtn) {
      image.classList.add('zoomed');
      closeBtn.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
  };

  const handleCloseClick = () => {
    const image = document.querySelector('.image-placeholder');
    const closeBtn = document.querySelector('.close-btn');
    if (image && closeBtn) {
      image.classList.remove('zoomed');
      closeBtn.style.display = 'none';
      document.body.style.overflow = '';
    }
  };

  return (
    <div className="app">
      <div className="title">AD GAME</div>
      <div className="image-placeholder" onClick={handleImageClick}></div>
      <div className="close-btn" onClick={handleCloseClick}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <a href="download/MOBE.apk" className="download-btn">
        <FontAwesomeIcon icon={faDownload} className="download-icon" /> DOWNLOAD
      </a>
      <div className="footer">Apurobo's GAME</div>
      <div className="particles" id="particles"></div>
    </div>
  );
};

export default App;
