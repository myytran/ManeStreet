import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        &copy; {new Date().getFullYear()} Beauty Networking App - My Tran || All
        Rights Reserved
        <div className='footer-content-2'>
          <h6>Social</h6>
          <i class='fab fa-facebook-square'></i>
          <i class='fas fa-share-alt-square'></i>
          <i class='fas fa-envelope'></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
