import React from 'react';
import './Courses.css'; 
import { TbMathSymbols } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SlChemistry } from "react-icons/sl";
import BiotechIcon from '@mui/icons-material/Biotech';


// Reusable CourseCard Component
const CourseCard = ({ name, icon, color }) => {
  return (
    <div className="course-card" style={{ backgroundColor: color }}>
      <div className="course-icon">{icon}</div>
      <h3 className="course-name">{name}</h3>
    </div>
  );
};

// Courses Component
function Courses() {
  return (
    <div className="courses-container">
      <h1 className="courses-heading">Our Courses</h1>
      <p className="courses-subheading">For CBSE and State 5 to 12 Standards</p>
      <div className="courses-grid">
        <CourseCard
          name="Maths"
          icon={<TbMathSymbols size={50} />}
          color="#0b7db9"
        />
        <CourseCard
          name="Physics"
          icon={<FaReact size={50} />}
          color="#da0d81"
        />
        <CourseCard
          name="Chemistry"
          icon={<SlChemistry size={50} />}
          color="#0b7db9"
        />
        <CourseCard
          name="Biology"
          icon={<BiotechIcon style={{ fontSize: 50 }} />}
          color="#da0d81"
        />
      </div>
    </div>
  );
}

export default Courses;
