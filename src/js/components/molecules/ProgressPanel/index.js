import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ProgressBar from '../../atoms/ProgressBar';

import reduce from 'lodash/reduce';

import './style.scss';


class ProgressPanel extends Component {
  render() {
    const { activeTaskId, tasksList: { tasks, tasks: { [activeTaskId]: activeTask={} } } } = this.props.data.taskManager;

    const projectProgress = reduce(tasks, (out, task) => out + task.progress, 0) / Object.keys(tasks).length;

    return (
      <div className="progress_panel">
        <div className="progress_panel__title">PROGRESS</div>
        <ProgressBar title="Task" progress={activeTask.progress} color="purple" />
        <ProgressBar title="Overal project" progress={projectProgress} color="marine" />
      </div>
    );
  }
}

ProgressPanel.propTypes = {
  data: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(ProgressPanel);
