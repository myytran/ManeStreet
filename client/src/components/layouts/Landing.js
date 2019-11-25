import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

const styles = {
  fontFamily: 'Titillium Web',
  textAlign: 'center'
};
const insideStyles = {
  background: 'white',
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  opacity: 0.8
};

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing' style={styles}>
      <div className='dark-overlay'>
        <Parallax className='img1'>
          <div style={{ height: 700 }}>
            <div style={insideStyles}>
              <h1 className='x-large'>Mane Street</h1>
              <p className='lead'>
                Calling all stylists and artists! create a profile/portfolio,
                share posts and connect with other like minded artists near you!
              </p>
              <div className='buttons'>
                <Link to='/register' className='btn btn-primary'>
                  Sign Up
                </Link>
                <Link to='/login' className='btn btn-light'>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax className='img2'>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>
              <h1 className='large'>Make Up Artists</h1>
              <p className='lead'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo minima sit iusto deserunt, expedita odio veritatis,
                vitae tenetur accusantium qui maxime, necessitatibus nam?
              </p>
            </div>
          </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax className='img3'>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>
              <h1 className='large'>Photographers</h1>
              <p className='lead'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
                provident tempora distinctio a dolor tenetur, fugit illum porro
                atque eaque, non expedita voluptates nihil, sit corporis earum
                dolore obcaecati facilis? Eum quia modi dolorem.
              </p>
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
};

Landing.propTypes = state => ({
  isAuthenticated: PropTypes.bool
});

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
