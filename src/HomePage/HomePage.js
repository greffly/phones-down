import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext, { ContextState } from '../ContextProvider';
import './HomePage.css';

class HomePage extends Component {
  nameRef = React.createRef();
  joinRef = React.createRef();
  startRef = React.createRef();

  handleJoinSubmit = e => {
    e.preventDefault();
    console.log('join a challenge submitted!');
    const newMember = {
      participantName: this.nameRef.current.value,
      challengeName: this.joinRef.current.value
    };
    console.log(newMember);
    ContextState.participantName = newMember.participantName;
    ContextState.challengeName = newMember.challengeName;
    console.log(ContextState.participantName);
    this.props.history.push('/challenge');
  };

  handleStartSubmit = e => {
    e.preventDefault();
    console.log('start a challenge submitted!');
  };

  render() {
    return (
      <section className='homePage'>
        <form className='signUp' onSubmit={this.handleJoinSubmit}>
          <div className='participantNameSection'>
            <label htmlFor='participantName' className='homeLabel'>
              Your Name
            </label>
            <input
              type='text'
              className='nameInput'
              id='participantName'
              ref={this.nameRef}
            />
          </div>
          <div className='challengeNameSection'>
            <label htmlFor='challengeName' className='homeLabel'>
              Join a Challenge
            </label>
            <input
              type='text'
              className='nameInput'
              id='challengeName'
              ref={this.joinRef}
            />
            <button className='joinButton'>Join</button>
          </div>
          <div className='newChallengeSection'>
            <label htmlFor='newChallengeName' className='homeLabel'>
              Start a Challenge
            </label>
            <input type='text' className='nameInput' id='newChallengeName' />
            <Link to='/' onClick={this.handleStartSubmit}>
              <button type='submit' className='joinButton'>
                Start
              </button>
            </Link>
          </div>
        </form>
      </section>
    );
  }
}

export default HomePage;
