import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from "react-helmet";

import Layout from '../../molecules/Layout';
import PageHeader from '../../molecules/PageHeader';
import PageContent from '../../molecules/PageContent';
import TaskStateIndicator from '../../atoms/TaskStateIndicator';
import Timer from '../../atoms/Timer';
import TaskBoard from '../../organisms/TaskBoard';

import { loadAll, setActive } from '../../../actions/taskManagerActions';

import SvgLoader from '../../../utils/SvgLoader';

import './style.scss';


class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.svg = SvgLoader;
  }

  componentWillMount() {
    this.props.dispatch(loadAll());
  }

  showPrevTask() {
    const { activeTaskId, tasksList: { tasks } } = this.props.data.taskManager;

    let ids = Object.keys(tasks);

    if (ids.indexOf(activeTaskId) !== -1 && ids.indexOf(activeTaskId) !== 0) {
      let prevTaskId = ids[ids.indexOf(activeTaskId) - 1];
      this.props.dispatch(setActive(prevTaskId));
    }
  }

  showNextTask() {
    const { activeTaskId, tasksList: { tasks } } = this.props.data.taskManager;

    let ids = Object.keys(tasks);

    if (ids.indexOf(activeTaskId) !== -1 && ids.indexOf(activeTaskId) !== ids.length - 1) {
      let nextTaskId = ids[ids.indexOf(activeTaskId) + 1];
      this.props.dispatch(setActive(nextTaskId));
    }
  }

  render() {
    const { activeTaskId, tasksList: { tasks: { [activeTaskId]: activeTask={} } } } = this.props.data.taskManager;

    return (
      <Layout>
        <Helmet title="Task Manager | CoBase" />
        <PageHeader>
          <div className="task_manager__header_left">
            <div
              className="task_manager__prev_task_button"
              onClick={this.showPrevTask.bind(this)}
            >
              {this.svg.small_arrow_left}
            </div>
            <TaskStateIndicator
              inProcess={activeTask.inProcess}
              completed={activeTask.completed}
              paused={activeTask.paused}
            />
            <Timer startTime={activeTask.lastUpdate} />
          </div>
          <div className="task_manager__header_right">
            <div
              className="task_manager__prev_task_button"
              onClick={this.showPrevTask.bind(this)}
            >
              {this.svg.small_arrow_left}
            </div>
            <div
              className="task_manager__next_task_button"
              onClick={this.showNextTask.bind(this)}
            >
              Next issue
              <span className="task_manager__arrow_right">{this.svg.small_arrow_right}</span>
            </div>
          </div>
        </PageHeader>
        <PageContent>
          <TaskBoard task={activeTask} />
        </PageContent>
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
