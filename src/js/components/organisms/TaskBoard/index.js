import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TaskBoardTags from '../../molecules/TaskBoardTags';
import TaskBoardGallery from '../../molecules/TaskBoardGallery';
import TaskBoardChecklist from '../../molecules/TaskBoardChecklist';


class TaskBoard extends Component {
  render() {
    const { task } = this.props;

    if (task) {
      return (
        <div>
          <h2>{task.name}</h2>
          <TaskBoardTags tags={task.tags} />
          <TaskBoardGallery images={task.images} />
          <TaskBoardChecklist task={task} />
        </div>
      );
    } else {
      return null;
    }
  }
}

TaskBoard.propTypes = {
  dispatch: PropTypes.func,
  data: PropTypes.object,
  task: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(TaskBoard);
