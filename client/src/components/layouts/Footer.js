import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-content section'>
          <h2>
            <span>Mane</span>Studios
          </h2>
          <p>777 Mane Boulevard, Suite 777, Washington, DC, 20008</p>
        </div>
        <div className='footer-content section'>Lorem, ipsum.</div>
        <div className='footer-content section'>Lorem, ipsum dolor.</div>
      </div>
      <div className='footer-bottom'>
        &copy; {new Date().getFullYear()} Wedding Networking App - All Rights
        Reserved
      </div>
    </div>
  );
};

export default Footer;
