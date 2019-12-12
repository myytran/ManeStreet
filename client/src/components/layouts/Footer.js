import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='copyright'>
          <h4>My Tran</h4>
          &copy; {new Date().getFullYear()} Beauty Networking App - My Tran ||
          All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
