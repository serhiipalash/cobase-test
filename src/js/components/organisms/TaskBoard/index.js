import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { playSound } from '../../../utils/AudioPlayer';
import trembling from '../../../../../static/audio/trembling.ogg';


class TaskBoard extends Component {
  componentDidMount() {
    setTimeout(() => playSound({ url: trembling }), 1000);
  }

  render() {
    const { task } = this.props;

    return (
      <div>
        {task.name}
      </div>
    );
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
