import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProgressBar from '../../atoms/ProgressBar';

import './style.scss';


class ProgressPanel extends Component {
  render() {
    return (
      <div className="progress_panel">
        <div className="progress_panel__title">PROGRESS</div>
        <ProgressBar title="Task" progress={0.7} color="purple" />
        <ProgressBar title="Overal project" progress={0.2} color="marine" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(ProgressPanel);
