import React from 'react';
import './AppDownload.css';
import phoneImage from '../../assets/Frame 69.svg'; // Replace with actual path
import graduationImage from '../../assets/Graduation.svg'; // Replace with actual path
import logoImage from '../../assets/Frame 16.svg'; // Replace with actual path

function AppDownload() {
  return (
    <div className="app-download-container">
      <div className="phone-section">
        <img src={phoneImage} alt="Phone with App" className="phone-image" />
      </div>
      <div className="download-section">
        <img src={graduationImage} alt="Graduation icon" className="graduation-icon" />
        <div className="app-details">
          <img src={logoImage} alt="Class 24 Logo" className="app-logo" />
          <h3 className="download-heading">Download The App Now!</h3>
          <p className="app-description">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
          <button className="download-button">Get it on GooglePlay</button>
        </div>
      </div>
    </div>
  );
}

export default AppDownload;
