import React, { Component, PropTypes } from 'react';

import SvgLoader from '../../../utils/SvgLoader';

import './style.scss';


class GlobeButton extends Component {
  constructor(props) {
    super(props);
    this.svg = SvgLoader;
  }

  render() {
    return (
      <span className="globe_button" onClick={this.props.onClick}>
        {this.svg.globe_button}
        {this.props.active ?
          <i className="globe_button__red_marker" /> : null}
      </span>
    );
  }
}

GlobeButton.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

export default GlobeButton;
