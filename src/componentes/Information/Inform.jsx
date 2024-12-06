import React from 'react'
import './Inform.css'
import image1 from '../../assets/Frame 16.svg'
import image2 from '../../assets/Frame 20.svg'
import image3 from '../../assets/Frame 22.svg'
import image4 from '../../assets/Frame 23.svg'

function Info() {
  return (
    <div>
        <div className='info-container'>
            <div className='Why-container'>
            <div className='info-first-container'>
            <h2>Why</h2>
            <img className='info-heading2' src={image1} alt="illustration of why section"></img>
            <div className='info-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div className='info-second-container'>
            <img className='info-image2' src={image2}alt="illustration for the second section"></img>
            </div>
            </div>
            <div className='concept-container'>
              <div className='info-third-container'>
              <img className='info-image3' src={image3} alt="concept illustration"></img>
              </div>
              <div className='info-fourth-container'>
              <h2>Concept of</h2>
              <img className='info-heading3' src={image1} alt="illustration of concept section"></img>
              <div className='info-description2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              </div>
              </div>
            <div className='work-container'>
              <div className='info-fifth-container'>
                <h2>How it Works</h2>
               <img className='info-heading4' src={image1} alt="illustration of works "></img>
               <div className='info-description3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
               </div>
               <div className='info-sixth-container'>
                <img className='info-image4' src={image4} alt="illustration of work section"></img>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Info