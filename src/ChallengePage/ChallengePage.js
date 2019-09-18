import React, { Component } from 'react';
import MyContext from '../ContextProvider';
import './ChallengePage.css';

class ChallengePage extends Component {
  constructor(props) {
    super(props);
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
  }
  static contextType = MyContext;
  handleStartChallenge = e => {
    console.log('going to timer page!');
    this.props.history.push('/timer');
    setInterval(() => {
      this.add();
    }, 1000);
  };
  add() {
    this.seconds++;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes >= 60) {
        this.minutes = 0;
        this.hours++;
      }
    }
    console.log('timer working: ', this.minutes);
    let timerTag = document.querySelector('.timer');
    timerTag.innerHTML =
      (this.hours ? (this.hours > 9 ? this.hours : '0' + this.hours) : '00') +
      ':' +
      (this.minutes
        ? this.minutes > 9
          ? this.minutes
          : '0' + this.minutes
        : '00') +
      ':' +
      (this.seconds > 9 ? this.seconds : '0' + this.seconds);
    // this.timer();
  }
  timer() {
    setTimeout(this.add(), 1000);
  }
  handleRulesClick = e => {
    const rulesExpanded = document.querySelector('.rulesExpanded');
    const gameRules = document.querySelector('.gameRules');
    const rulesTitle = document.querySelector('.rulesTitle');
    rulesExpanded.classList.toggle('show');
    gameRules.classList.toggle('show');
    rulesTitle.classList.toggle('show');
  };
  handleIdeasClick = e => {
    const ideasExpanded = document.querySelector('.ideasExpanded');
    const ideasList = document.querySelector('.ideasList');
    const ideasTitle = document.querySelector('.ideasTitle');
    ideasExpanded.classList.toggle('show');
    ideasList.classList.toggle('show');
    ideasTitle.classList.toggle('show');
  };
  handleCloseIdeas = e => {
    const ideasExpanded = document.querySelector('.ideasExpanded');
    const ideasList = document.querySelector('.ideasList');
    const ideasTitle = document.querySelector('.ideasTitle');
    ideasExpanded.classList.remove('show');
    ideasList.classList.remove('show');
    ideasTitle.classList.remove('show');
  };
  handleCloseRules = e => {
    const rulesExpanded = document.querySelector('.rulesExpanded');
    const gameRules = document.querySelector('.gameRules');
    const rulesTitle = document.querySelector('.rulesTitle');
    rulesExpanded.classList.remove('show');
    gameRules.classList.remove('show');
    rulesTitle.classList.remove('show');
  };
  render() {
    let contextValue = this.context;
    return (
      <div className='welcomePageLanding'>
        <section className='welcomePage'>
          <h2 className='welcomeParticipant'>
            Welcome {contextValue.participantName}!
          </h2>
          <h3 className='yourChallenge'>
            Your Challenge:
            <br /> {contextValue.challengeName}
          </h3>
          <div className='buttonSection'>
            <button className='expandRules' onClick={this.handleRulesClick}>
              Rules
            </button>
            <button className='expandIdeas' onClick={this.handleIdeasClick}>
              Ideas
            </button>
          </div>
          <button
            className='startChallenge'
            onClick={this.handleStartChallenge}
          >
            Let's Do This!
          </button>
        </section>
        <section className='rulesExpanded'>
          <h2 className='rulesTitle'>Rules of the Game</h2>
          <p className='gameRules'>
            Don't pick up your phone.
            <br />
            Don't pick up your phone to text.
            <br />
            Don't pick up your phone to call someone.
            <br />
            Don't even think about tweeting.
            <br />
            Talk to the people around you.
            <br />
            They're probably good people.
            <br />
            If not, you can go vlogg about it later.
            <br />
            The longer you can go without giving in to that sweet blue light
            tempation, the more points your team gets.
            <br />
            Get a lot of points, win cool stuff.
            <br />
            Got it?
          </p>
          <button className='backToChallenge' onClick={this.handleCloseRules}>
            Got It!
          </button>
        </section>
        <section className='ideasExpanded'>
          <h2 className='ideasTitle'>Topics of Conversation</h2>
          <p className='ideasList'>
            Talk to each other.
            <br />
            Don't pick up your phone to text.
            <br />
            Don't pick up your phone to call someone.
            <br />
            Don't even think about tweeting.
            <br />
            Talk to the people around you.
            <br />
            They're probably good people.
            <br />
            If not, you can go vlogg about it later.
            <br />
            The longer you can go without giving in to that sweet blue light
            tempation, the more points your team gets.
            <br />
            Get a lot of points, win cool stuff.
            <br />
            Got it?
          </p>
          <button className='backToChallenge' onClick={this.handleCloseIdeas}>
            Got It!
          </button>
        </section>
      </div>
    );
  }
}

export default ChallengePage;
