import React, { useEffect } from 'react';
import { FaTimes, FaDownload } from 'react-icons/fa';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    // Create particles
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
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
      
      if (particlesContainer) {
        particlesContainer.appendChild(particle);
      }
    }
  }, []);

  const handleImageClick = () => {
    const image = document.querySelector('.image-placeholder');
    const closeBtn = document.querySelector('.close-btn');
    if (image && closeBtn) {
      image.classList.add('zoomed');
      closeBtn.classList.add('visible');
      document.body.style.overflow = 'hidden';
    }
  };

  const handleCloseClick = () => {
    const image = document.querySelector('.image-placeholder');
    const closeBtn = document.querySelector('.close-btn');
    if (image && closeBtn) {
      image.classList.remove('zoomed');
      closeBtn.classList.remove('visible');
      document.body.style.overflow = '';
    }
  };

  return (
    <div className="app-container">
      <div className="title">AD GAME</div>
      <div className="image-placeholder" onClick={handleImageClick}></div>
      <div className="close-btn" onClick={handleCloseClick}><FaTimes /></div>
      <a href="Download/MOBE.apk" className="download-btn"><FaDownload /> DOWNLOAD</a>
      <div className="sub">Download this game and enjoy</div>
  

      <div className="footer">Apurobo's GAME</div>

      <div className="particles" id="particles"></div>
    </div>
  );
};

export default App;
