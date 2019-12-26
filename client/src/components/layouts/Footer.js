import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      &copy; {new Date().getFullYear()} Beauty Networking App - My Tran || All
      Rights Reserved
      <Fragment>
        <ul>
          <li>
            <Link to='!#'>
              <i className='fab fa-facebook-square'></i>
            </Link>
          </li>
          <li>
            <Link to='!#'>
              <i className='fas fa-share-alt-square'></i>
            </Link>
          </li>
          <li>
            <Link to='!#'>
              <i className='fas fa-envelope'></i>
            </Link>
          </li>
        </ul>
      </Fragment>
    </div>
  );
};

export default Footer;
