import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-content section'>
          <h3>Mane Studios</h3>
          <p>777 Mane Boulevard, Suite 777, Washington, DC, 20008</p>
          <p>
            <i className='fas fa-phone'></i> 202-222-2222
          </p>
          <span>
            <i className='fas fa-envelope'></i>&nbsp; mytranwebdesigns@gmail.com
          </span>
        </div>
      </div>
      <div className='footer-content section'>
        <h3>Mane Studios</h3>
        <p>777 Mane Boulevard, Suite 777, Washington, DC, 20008</p>
        <p>
          <i className='fas fa-phone'></i> 202-222-2222
        </p>
        <span>
          <i className='fas fa-envelope'></i>&nbsp; mytranwebdesigns@gmail.com
        </span>
      </div>
      <div className='footer-content section'>
        <h3>Mane Studios</h3>
        <p>777 Mane Boulevard, Suite 777, Washington, DC, 20008</p>
        <p>
          <i className='fas fa-phone'></i> 202-222-2222
        </p>
        <span>
          <i className='fas fa-envelope'></i>&nbsp; mytranwebdesigns@gmail.com
        </span>
      </div>
      <div className='footer-bottom'>
        <h3>My Tran</h3>
        &copy; {new Date().getFullYear()} Wedding Networking App - All Rights
        Reserved
      </div>
    </div>
  );
};

export default Footer;
