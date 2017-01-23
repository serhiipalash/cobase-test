import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import PlusButton from '../../atoms/PlusButton';
import ChecklistItem from '../../atoms/ChecklistItem';

import { updateTask } from '../../../actions/taskManagerActions';

import './style.scss';


class TaskBoardChecklist extends Component {
  /* eslint-disable */
  addItem() {
    console.info('add checklist item PlusButton clicked');
  }
  /* eslint-enable */

  toggleChecklistItem(id) {
    const { task={ checklist: [] } } = this.props;

    let updatedChecklist = task.checklist.map(item => {
      if (item.id === id) {
        return Object.assign({}, item, { done: !item.done });
      }
      return item;
    });
    let updatedTask = Object.assign({}, task, { checklist: updatedChecklist })
    this.props.dispatch(updateTask(updatedTask))
  }

  render() {
    const { task: { checklist=[] } } = this.props;

    return (
      <div className="task_board_checklist">
        <div className="task_board_checklist__title">
          Checklist
          <PlusButton onClick={this.addItem.bind(this)} />
        </div>
        {checklist.map((checklistItem, index) =>
          <ChecklistItem
            key={index}
            text={checklistItem.name}
            done={checklistItem.done}
            onChange={this.toggleChecklistItem.bind(this, checklistItem.id)}
          />
        )}
      </div>
    );
  }
}

TaskBoardChecklist.propTypes = {
  dispatch: PropTypes.func,
  task: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(TaskBoardChecklist);
