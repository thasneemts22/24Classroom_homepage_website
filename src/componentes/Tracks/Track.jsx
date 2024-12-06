import React from 'react';
import './Track.css';
import TrackCard from '../TrackCard/TrackCard';
import vector from '../../assets/vector1.svg'; // Replace with actual image path

function Track() {
  const tracks = [
    {
      title: 'Mathematics for Beginners',
      subject: 'Mathematics',
      duration: '22hr 30min',
      courses: 34,
      sales: 250,
      rating: '★★★★★',
    },
    {
      title: 'Physics for Beginners',
      subject: 'Physics',
      duration: '22hr 30min',
      courses: 34,
      sales: 250,
      rating: '★★★★★',
    },
    {
      title: 'Chemistry for Beginners',
      subject: 'Chemistry',
      duration: '22hr 30min',
      courses: 34,
      sales: 250,
      rating: '★★★★★',
    },
    {
      title: 'Biology for Beginners',
      subject: 'Biology',
      duration: '22hr 30min',
      courses: 34,
      sales: 250,
      rating: '★★★★★',
    },
  ];

  return (
    <div className="tracks-container">
      <h2 className="tracks-heading">Our Tracks</h2>
      <div className="tracks-grid">
        {tracks.map((track, index) => (
          <TrackCard key={index} {...track} />
        ))}
      </div>
      
      {/* Add the arrow image outside of the track cards */}
      <div className="arrow-container">
        <img className="vector" src={vector} alt="Vector Arrow" />
      </div>
    </div>
  );
}

export default Track;
