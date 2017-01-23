import React, { Component } from 'react';
import { connect } from 'react-redux';

import SideBarOptionsItem from '../../atoms/SideBarOptionsItem';

import './style.scss';


class SideBarOptions extends Component {
  render() {
    return (
      <section className="sidebar_options">
        <div className="sidebar_options__title">MENU</div>
        <SideBarOptionsItem
          icon="overview"
          title="Overview"
          info="6 updates"
          pathname="/overview"
        />
        <SideBarOptionsItem
          icon="task_manager"
          title="Task manager"
          info="23 new tasks"
          pathname="/task-manager"
        />
        <SideBarOptionsItem
          icon="drawings"
          title="Drawings"
          info="123 pages"
          pathname="/drawings"
        />
        <SideBarOptionsItem
          icon="employees"
          title="Employees"
          info="2 new guys"
          pathname="/employees"
        />
        <SideBarOptionsItem
          icon="reports"
          title="Reports"
          info="4 new"
          pathname="/reports"
        />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(SideBarOptions);
