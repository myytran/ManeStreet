import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <section className='landing'>
      <div className='footer'>
        <div className='footer-content'>
          <div className='footer-content section'>
            <h4>Mane Studios</h4>
            <p>777 Mane Boulevard, Suite 777, Washington, DC, 20008</p>
            <p>
              <i className='fas fa-phone'></i> 202-222-2222
            </p>
            <span>
              <i className='fas fa-envelope'></i>&nbsp;
              mytranwebdesigns@gmail.com
            </span>
          </div>
        </div>
        <div className='footer-content section'>
          <h4>Social Media</h4>
        </div>

        <div className='footer-bottom'>
          <h3>My Tran</h3>
          &copy; {new Date().getFullYear()} Beauty Networking App - All Rights
          Reserved
        </div>
      </div>
    </section>
  );
};

export default Footer;
