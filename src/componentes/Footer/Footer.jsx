import React from 'react';
import './Footer.css';
import logoImage from '../../assets/Frame 16.svg'; // Replace with the correct path to your logo
import payment1 from '../../assets/paytm.png'; // Replace with the correct path to payment icons
import payment2 from '../../assets/upi.png';
import payment3 from '../../assets/bhim.png';
import payment4 from '../../assets/rupay.png';
import payment5 from '../../assets/mastercard.png';
import payment6 from '../../assets/visa.png';
import payment7 from '../../assets/netbanking.png';
import payment8 from '../../assets/financepeer.png';
import payment9 from '../../assets/Walnut.jpg';
import payment10 from '../../assets/zest.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logoImage} alt="Class 24 Logo" className="footer-logo" />
          <p className="footer-tagline">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
        </div>
        
        <div className="footer-right">
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#classes">Classes</a>
          <a href="#demo">Demo Videos</a>
          <a href="#careers">Careers</a>
        </div>
      </div>
      
      <div className="footer-payment">
        <h4>Payment Option</h4>
        <div className="payment-options">
          <img src={payment1} alt="Paytm" />
          <img src={payment2} alt="UPI" />
          <img src={payment3} alt="BHIM" />
          <img src={payment4} alt="RuPay" />
          <img src={payment5} alt="MasterCard" />
          <img src={payment6} alt="Visa" />
          <img src={payment7} alt="Net Banking" />
          <img src={payment8} alt="Financepeer" />
          <img src={payment9} alt="Walnut" />
          <img src={payment10} alt="Zest" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
