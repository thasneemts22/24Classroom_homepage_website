import React from 'react';
import './KeralaSate.css';

function KeralaSate() {
  return (
    <div className="container">
      <h1 className="title"> Kerala State Syllabus</h1>
      <p className="subtitle">5 to 12 Standards</p>
      <div className="subjects">
        <div className="subject">
          <img src="src\assets\cb1.svg" alt="Physics" className="subject-icon" />
   
        </div>
        <div className="subject">
          <img src="src\assets\cb2.svg" alt="Maths" className="subject-icon" />

        </div>
        <div className="subject">
          <img src="src\assets\cb3.svg" alt="Chemistry" className="subject-icon" />

        </div>
        <div className="subject">
          <img src="src\assets\cb4.svg" alt="Biology" className="subject-icon" />

        </div>
      </div>
    </div>
  );
}

export default KeralaSate;