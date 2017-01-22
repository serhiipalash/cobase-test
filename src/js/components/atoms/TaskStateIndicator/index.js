import React, { PropTypes } from 'react';

import './style.scss';

const TaskStateIndicator = ({ inProcess=true, completed, paused }) => {
  return (
    <div
      className={`task_state_indicator task_state_indicator--${
        completed ? 'completed' :
        paused ? 'paused' :
        'in_process'
      }`}
    >
      {
        completed ? 'Completed' :
        paused ? 'Paused' :
        'In process'
      }
    </div>
  );
};

TaskStateIndicator.propTypes = {
  inProcess: PropTypes.bool,
  completed: PropTypes.bool,
  paused: PropTypes.bool,
};

export default TaskStateIndicator;
