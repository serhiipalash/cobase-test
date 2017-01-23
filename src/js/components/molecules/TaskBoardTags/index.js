import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import PlusButton from '../../atoms/PlusButton';
import TaskBoardTag from '../../atoms/TaskBoardTag';

import './style.scss';


class TaskBoardTags extends Component {
  /* eslint-disable */
  addTag() {
    console.info('addTag PlusButton clicked');
  }
  /* eslint-enable */

  render() {
    const { tags=[] } = this.props;

    return (
      <div className="task_board_tags">
        <div className="task_board_tags__title">
          Tags
          <PlusButton onClick={this.addTag.bind(this)} />
        </div>
        {tags.map((tag, index) => <TaskBoardTag key={index} text={tag} />)}
      </div>
    );
  }
}

TaskBoardTags.propTypes = {
  tags: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(TaskBoardTags);
