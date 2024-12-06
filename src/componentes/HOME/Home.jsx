import React from 'react';
import './Home.css';
import image10 from '../../assets/Rectangle 87.svg';
import vector from '../../assets/vector.svg';

const Home = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-first-heading">The Textbook Oriented</h1>
        <div className="box">
          <img className="vector" alt="Vector" src={vector} />
        </div>
        <h1>Digital Tuition App</h1>
        <p>Offline and Online Tuition classes for</p>
        <h1>CBSE and State board students in India</h1>
        <button className="download-btn">Download Now!</button>
      </div>
      <img className="hero-image" src={image10} alt="illustration of background" />  
    </div>
  );
};

export default Home;
