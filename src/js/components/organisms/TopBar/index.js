import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import './style.scss';


class TopBar extends Component {
  render() {
    const { isSidebarVisible } = this.props;

    return (
      <div className={`topbar ${isSidebarVisible ? ' topbar--sidebar_visible' : ''}`}>TopBar</div>
    );
  }
}

TopBar.propTypes = {
  isSidebarVisible: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(TopBar);
