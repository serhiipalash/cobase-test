import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from "react-helmet";

import './style.scss';


class Home extends Component {
  render() {
    return (
      <div className="home">
        <Helmet title="Home | CoBase" />
        <h1>Home</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(Home);
