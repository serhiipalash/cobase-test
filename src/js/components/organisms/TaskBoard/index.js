import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TaskBoardTags from '../../molecules/TaskBoardTags';
import TaskBoardGallery from '../../molecules/TaskBoardGallery';
import TaskBoardChecklist from '../../molecules/TaskBoardChecklist';
import UserPicture from '../../atoms/UserPicture';

import './style.scss';


class TaskBoard extends Component {
  /* eslint-disable */
  employeePictureClicked(id) {
    console.info('Employee picture clicked', id);
  }
  /* eslint-enable */

  render() {
    const {
      task = { employees: [] },
      data: { users: { usersList: { users={} } } }
    } = this.props;

    if (task) {
      return (
        <div className="task_board">
          <h2 className="task_board__header">{task.name}</h2>
          <div className="task_board__description">{task.description}</div>
          <div className="task_board__employees">
            {task.employees ? task.employees.map(id =>
              users[id] ?
                <UserPicture
                  key={id}
                  image={users[id].image}
                  onClick={this.employeePictureClicked.bind(this, id)}
                /> : null
            ) : null}
          </div>
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
