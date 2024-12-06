import React from 'react';
import './TrackCard.css';
import trackImage from '../../assets/Rectangle 54.svg'; // Replace with actual image path

const TrackCard = ({ title, subject, duration, courses, sales, rating }) => {
    return (
      <div className="track-card">
        <img className="track-image" src={trackImage} alt={title} />
        <div className="track-info">
          <p className="track-subject">{subject}</p>
          <h3 className="track-title">{title}</h3>
          <div className="track-rating">
            {rating} ⭐
          </div>
          <div className="track-details">
            <span>{duration}</span>
            <span>{courses} Courses</span>
            <span>{sales} Sales</span>
          </div>
          <button className="join-button">JOIN WITH US</button>
        </div>

      </div>
    );
  };
  
  export default TrackCard;
  
