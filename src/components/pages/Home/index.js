import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import './style.scss';


class Home extends Component {
  render() {
    return <div className="home">Home Page</div>;
  }
}

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(Home);
