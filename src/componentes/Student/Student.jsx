import React from 'react';
import './Student.css';

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

function Student() {

    return (
      <div className="container1 text-center py-5 bg-white">
        <h2 className="mb-4">What Student's Says</h2>
        <div className="testimonial-row">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p>{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Student;
