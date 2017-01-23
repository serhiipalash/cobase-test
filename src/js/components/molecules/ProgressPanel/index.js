import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ProgressBar from '../../atoms/ProgressBar';

import reduce from 'lodash/reduce';

import './style.scss';


class ProgressPanel extends Component {
  render() {
    const { activeTaskId, tasksList: { tasks, tasks: { [activeTaskId]: activeTask={ checklist: [] } } } } = this.props.data.taskManager;

    const activeTaskProgress = (activeTask.checklist.reduce((out, item) =>
      out + (item.done ? item.progressSegment : 0), 0)).toFixed(2)*1;

    const projectProgress = (reduce(tasks, (overal, task) =>
      overal + task.checklist.reduce((single, item) => single + (item.done ? item.progressSegment : 0), 0), 0) / Object.keys(tasks).length)
      .toFixed(2)*1;

    return (
      <div className="progress_panel">
        <div className="progress_panel__title">PROGRESS</div>
        <ProgressBar title="Task" progress={activeTaskProgress} color="purple" />
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
