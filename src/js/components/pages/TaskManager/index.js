import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from "react-helmet";

import Layout from '../../molecules/Layout';
import PageHeader from '../../molecules/PageHeader';
import TaskStateIndicator from '../../atoms/TaskStateIndicator';
import Timer from '../../atoms/Timer';
import TaskBoard from '../../organisms/TaskBoard';

import { loadAll } from '../../../actions/taskManagerActions';

class TaskManager extends Component {
  componentWillMount() {
    this.props.dispatch(loadAll());
  }

  render() {
    const { activeTaskId, tasksList: { tasks: { [activeTaskId]: activeTask={} } } } = this.props.data.taskManager;

    return (
      <Layout>
        <Helmet title="Task Manager | CoBase" />
        <PageHeader>
          <TaskStateIndicator
            inProcess={activeTask.inProcess}
            completed={activeTask.completed}
            paused={activeTask.paused}
          />
          <Timer startTime={activeTask.lastUpdate} />
        </PageHeader>
        <TaskBoard task={activeTask} />
      </Layout>
    );
  }
}

TaskManager.propTypes = {
  dispatch: PropTypes.func,
  data: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(TaskManager);
