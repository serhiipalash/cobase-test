import React, { PropTypes } from 'react';

import './style.scss';

const TaskBoardTag = ({ text }) =>
  <div className="task_board_tag">{text}</div>

TaskBoardTag.propTypes = {
  text: PropTypes.string,
};

export default TaskBoardTag;
