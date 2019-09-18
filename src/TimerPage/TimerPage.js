import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TimerPage.css';
import store from '../store';

class TimerPage extends Component {
  state = {
    index: 4
  };
  index = Math.floor(Math.random() * store.length);
  nextTopic = e => {
    let newIndex = Math.floor(Math.random() * store.length);
    const nextTopic = document.querySelector('.randomTopic');
    nextTopic.classList.toggle('next');
    setTimeout(() => {
      nextTopic.classList.remove('next');
      this.setState({ index: newIndex });
    }, 1000);
    console.log('next clicked, index:', this.state.index);
  };
  render() {
    return (
      <section className='timerPage'>
        <h2 className='timerTitle'>Challenge Accepted!</h2>
        <h1 className='timer'>00:00:00</h1>
        <div className='topicContainer'>
          <div className='randomTopic'>
            <p>{store[this.state.index]}</p>
            <button className='nextTopic' onClick={this.nextTopic}>
              >
            </button>
          </div>
        </div>
        <div className='stopLink'>
          <Link to='/start'>
            <button type='submit' className='timerStopButton'>
              Give me my phone back!
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

export default TimerPage;
