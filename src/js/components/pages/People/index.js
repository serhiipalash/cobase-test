import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from "react-helmet";

import './style.scss';


class People extends Component {
  render() {
    return (
      <div className="people">
        <Helmet title="People | CoBase" />
        <h1>People</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(People);
