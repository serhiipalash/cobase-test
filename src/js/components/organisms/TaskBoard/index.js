import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TaskBoardTags from '../../molecules/TaskBoardTags';
import TaskBoardGallery from '../../molecules/TaskBoardGallery';
import TaskBoardChecklist from '../../molecules/TaskBoardChecklist';
import UserPicture from '../../atoms/UserPicture';
import CompleteButton from '../../atoms/CompleteButton';
import PauseButton from '../../atoms/PauseButton';
import EditGrayButton from '../../atoms/EditGrayButton';
import ReassignButton from '../../atoms/ReassignButton';

import editRound from '../../../../../static/img/edit_round.png';

import './style.scss';


class TaskBoard extends Component {
  /* eslint-disable */
  employeePictureClicked(id) {
    console.info('Employee picture clicked', id);
  }

  editRoundButtonClicked() {
    console.info('Edit Round Button clicked');
  }

  editGrayButtonClicked() {
    console.info('Edit Gray Button clicked');
  }

  completeButtonClicked(taskId) {
    console.info('Complete Button clicked', taskId);
  }

  pauseButtonClicked(taskId) {
    console.info('Pause Button clicked', taskId);
  }

  reassignButtonClicked(taskId) {
    console.info('Reassign Button clicked', taskId);
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
          <div className="task_board__top_buttons">
            <div className="task_board__top_buttons_left">
              <CompleteButton
                onClick={this.completeButtonClicked.bind(this, task.id)}
              />
              <span className="task_board__text_divider">or</span>
              <PauseButton
                onClick={this.pauseButtonClicked.bind(this, task.id)}
              />
            </div>
            <div className="task_board__top_buttons_right">
              <EditGrayButton
                onClick={this.editGrayButtonClicked.bind(this, task.id)}
              />
              <ReassignButton
                onClick={this.reassignButtonClicked.bind(this, task.id)}
              />
            </div>
          </div>
          <h2 className="task_board__header">
            {task.name}
            <img
              className="task_board__edit_round_button"
              src={editRound}
              onClick={this.editRoundButtonClicked.bind(this)}
            />
          </h2>
          <div className="task_board__description">{task.description}</div>
          <div className="task_board__employees">
            {task.employees ? task.employees.map((id, index) =>
              users[id] && index < 3 ?
                <UserPicture
                  key={id}
                  image={users[id].image}
                  onClick={this.employeePictureClicked.bind(this, id)}
                /> : null
            ) : null}
            {task.employees && task.employees.length > 3 ?
              <i className="task_board__employees_plus_button">+{task.employees.length - 3}</i> : null}
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
