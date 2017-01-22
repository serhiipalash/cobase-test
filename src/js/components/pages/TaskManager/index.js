import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from "react-helmet";

import { playSound } from '../../../utils/AudioPlayer.js';
import trembling from '../../../../../static/audio/trembling.ogg';

import './style.scss';


class TaskManager extends Component {
  componentDidMount() {
    setTimeout(() => playSound({ url: trembling }), 1000);
  }

  render() {
    return (
      <div className="task_manager">
        <Helmet title="Task Manager | CoBase" />
        <h1>Task Manager</h1>
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
