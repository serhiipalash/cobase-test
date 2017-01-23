import React, { Component, PropTypes } from 'react';

import SvgLoader from '../../../utils/SvgLoader';

import './style.scss';


class ReassignButton extends Component {
  constructor(props) {
    super(props);
    this.svg = SvgLoader;
  }

  render() {
    const { onClick, xsHidden, xsVisible } = this.props;

    return (
      <span
        className={`reassign_button ${
          xsHidden ? 'reassign_button--xs-hidden' :
          xsVisible ? 'reassign_button--xs-visible' : ''}`}
        onClick={onClick}
      >
        {this.svg.reassign}
      </span>
    );
  }
}

ReassignButton.propTypes = {
  onClick: PropTypes.func,
  xsVisible: PropTypes.bool,
  xsHidden: PropTypes.bool,
};

export default ReassignButton;
