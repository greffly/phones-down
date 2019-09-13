import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <section className='titlePage'>
      <h1 className='title'>Phone Down Challenge</h1>
      <Link to='/start'>
        <button type='submit' className='startButton'>
          Let's Do It!
        </button>
      </Link>
    </section>
  );
};

export default LandingPage;
