import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from "react-helmet";

import './style.scss';


class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <Helmet title="Projects | CoBase" />
        <h1>Projects</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(Projects);
