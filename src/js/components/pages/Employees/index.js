import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from "react-helmet";

import './style.scss';


class Employees extends Component {
  render() {
    return (
      <div className="employees">
        <Helmet title="Employees | CoBase" />
        <h1>Employees</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(Employees);
