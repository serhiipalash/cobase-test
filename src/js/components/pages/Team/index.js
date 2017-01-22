import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from "react-helmet";

import './style.scss';


class Team extends Component {
  render() {
    return (
      <div className="team">
        <Helmet title="Team | CoBase" />
        <h1>Team</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(Team);
