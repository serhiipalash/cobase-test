import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from "react-helmet";

import './style.scss';


class Overview extends Component {
  render() {
    return (
      <div className="overview">
        <Helmet title="Overview | CoBase" />
        <h1>Overview</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(Overview);
