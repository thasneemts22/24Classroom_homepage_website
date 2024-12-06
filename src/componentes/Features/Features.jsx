import React from 'react';
import './Features.css'; // Import the CSS file
import FeatureImage1 from '../../assets/Rectangle3.svg'; // Replace with actual path
import FeatureImage2 from '../../assets/Rectangle 4.svg';
import FeatureImage3 from '../../assets/Rectangle 5.svg' // Replace with actual path for "Live Doubt Clearing" image

// Reusable FeatureCard Component
const FeatureCard = ({ title, description, buttonText, imageSrc }) => (
  <div className="feature-card">
    <div className="feature-text">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{description}</p>
      <button className="join-button">{buttonText}</button>
    </div>
    <div className="feature-image">
      <img src={imageSrc} alt={title} />
    </div>
  </div>
);

function Features() {
  const featureDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  return (
    <div className="features-container">
      <h2 className="features-heading">Features of CLASS 24</h2>
      <FeatureCard
        title="Interactive Live Classes & Recorded Sessions"
        description={featureDescription}
        buttonText="JOIN WITH US"
        imageSrc={FeatureImage1}
      />
      <FeatureCard
        title="Live Doubt Clearing"
        description={featureDescription}
        buttonText="JOIN WITH US"
        imageSrc={FeatureImage2}
      />
      <FeatureCard
        title="Handwritten Notes"
        description={featureDescription}
        buttonText="JOIN WITH US"
        imageSrc={FeatureImage3}
      />
    </div>
  );
}

export default Features;
