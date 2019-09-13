import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <section className='homePage'>
      <form action='signUp'>
        <label htmlFor='participantName'>Your Name</label>
        <input type='text' className='nameInput' id='participantName' />
        <label htmlFor='challengeName'>Join a Challenge</label>
        <input type='text' className='nameInput' id='challengeName' />
        <button type='submit' className='startButton'>
          Join
        </button>
        <label htmlFor='newChallengeName'>Start a Challenge</label>
        <input type='text' className='nameInput' id='newChallengeName' />
        <button type='submit' className='startButton'>
          Start
        </button>
      </form>
    </section>
  );
};

export default HomePage;
