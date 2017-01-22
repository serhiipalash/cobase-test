import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from "react-helmet";

import './style.scss';


class Drawings extends Component {
  render() {
    return (
      <div className="drawings">
        <Helmet title="Drawings | CoBase" />
        <h1>Drawings</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(Drawings);
