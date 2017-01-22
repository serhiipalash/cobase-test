import React, { Component, PropTypes } from 'react';

import SvgLoader from '../../../utils/SvgLoader';

import './style.scss';


class MoreButton extends Component {
  constructor(props) {
    super(props);
    this.svg = SvgLoader;
  }

  render() {
    return (
      <span className="more_button" onClick={this.props.onClick}>
        {this.svg.more_button}
      </span>
    );
  }
}

MoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MoreButton;
