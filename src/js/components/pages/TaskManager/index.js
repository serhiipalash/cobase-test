import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import sound from '../../../../../static/audio/trembling.ogg';

import image from '../../../../../static/img/1@2x.png';

import './style.scss';


class TaskManager extends Component {
  componentDidMount() {
    setTimeout(() => {
      let audio = new Audio(sound);
      audio.volume = 1;
      audio.play();
    }, 1000);
  }

  render() {
    return (
      <div className="task_manager">
        <h1>Task Manager</h1>
        <img src={image} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(TaskManager);
