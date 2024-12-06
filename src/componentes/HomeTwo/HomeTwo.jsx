// Import necessary packages
import React from 'react';
import './Hometwo.css';
import image from '../../assets/female.svg'; // replace with your actual image path

const HomeTwo = () => {
  return (
    <div className="promo-card">
      <div className="promo-text">
        <h2>Start Your Exam Preparation With CLASS 24</h2>
        <button className="promo-button">Get a Free Trial</button>
      </div>
      <img className="promo-image" src={image} alt="Teacher holding books" />
    </div>
  );
};

export default HomeTwo;
