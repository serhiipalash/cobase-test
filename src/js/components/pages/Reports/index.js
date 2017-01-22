import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from "react-helmet";

import './style.scss';


class Reports extends Component {
  render() {
    return (
      <div className="reports">
        <Helmet title="Reports | CoBase" />
        <h1>Reports</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(Reports);
